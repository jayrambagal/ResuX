"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSetDefaultScale } from "components/Resume/hooks";
import { HexColorPicker } from "react-colorful";
import {
  MagnifyingGlassIcon,
  ArrowDownOnSquareStackIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { usePDF } from "@react-pdf/renderer";
import dynamic from "next/dynamic";
import { GeneralSetting, changeSettings } from "@/lib/redux/settingsSlice";
import { useAppDispatch } from "@/lib/redux/hooks";

const ResumeControlBar = ({
  scale,
  setScale,
  documentSize,
  document,
  fileName,
}: {
  scale: number;
  setScale: (scale: number) => void;
  documentSize: string;
  document: JSX.Element;
  fileName: string;
}) => {
  const [color, setColor] = useState<string>("#A66EFC");
  const dispatch = useAppDispatch();
  const { scaleOnResize, setScaleOnResize } = useSetDefaultScale({
    setScale,
    documentSize,
  });
  const [isOpenColorPicker, setIsOpenColorPicker] = useState(false);
  const colorPickerRef = useRef<HTMLDivElement>(null);
  const addThemeBtnRef = useRef<HTMLAnchorElement>(null);
  const [instance, update] = usePDF({ document });

  // Hook to update pdf when document changes
  useEffect(() => {
    // @ts-ignore
    update();
  }, [update, document]);

  const handleSettingsChange = (field: GeneralSetting, value: string) => {
    dispatch(changeSettings({ field, value }));
  };

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      !colorPickerRef?.current?.contains(e.target as Node) &&
      !addThemeBtnRef?.current?.contains(e.target as Node)
    ) {
      setIsOpenColorPicker(false);
    }
  }, []);

  useEffect(() => {
    // We wrap it inside setTimeout to prevent the eventListener from being attached before the modal is open.
    const timer = setTimeout(() => {
      window.addEventListener("click", handleClickOutside);
    }, 0);

    // Cleanup function to remove the event listener when the component is unmounted or modal is closed
    return () => {
      window.removeEventListener("click", handleClickOutside);
      clearTimeout(timer);
    };
  }, [handleClickOutside]);

  return (
    <div className="w-[50px] h-full flex flex-col items-center gap-4 pt-2 text-gray-600 ">
      {/* <div className="flex items-center gap-2">
        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
        <input
          type="range"
          min={0.5}
          max={1.5}
          step={0.01}
          value={scale}
          onChange={(e) => {
            setScaleOnResize(false);
            setScale(Number(e.target.value));
          }}
        />
        <div className="w-10">{`${Math.round(scale * 100)}%`}</div>
        <label className="hidden items-center gap-1 lg:flex">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4"
            checked={scaleOnResize}
            onChange={() => setScaleOnResize((prev) => !prev)}
          />
          <span className="select-none">Autoscale</span>
        </label>
      </div> */}
      <a
        className="flex flex-col items-center bg-white gap-1 rounded-sm border border-gray-300 hover:bg-gray-100 cursor-pointer"
        href={instance.url!}
        download={fileName}
      >
        <ArrowDownOnSquareStackIcon className="h-6 w-10" />
        <span className="text-[8px] font-bold">PDF</span>
      </a>

      <div className="relative">
        <a
          ref={addThemeBtnRef}
          className="flex flex-col items-center bg-white gap-1 rounded-sm border border-gray-300 hover:bg-gray-100 cursor-pointer py-[2px]"
          onClick={() => setIsOpenColorPicker(!isOpenColorPicker)}
        >
          <PlusCircleIcon className="h-5 w-10" />
          <span className="text-[8px] font-bold">Theme</span>
          {/* <span className="text-[8px] font-bold">Colours</span> */}
        </a>
        {isOpenColorPicker && (
          <div
            ref={colorPickerRef}
            className="absolute w-[270px] flex flex-col items-center overflow-hidden  gap-3 bg-white rounded-xl left-[52px] top-0 pb-3 shadow-xl "
          >
            <HexColorPicker color={color} onChange={setColor} />
            <div className="px-2 flex items-center gap-2">
              <div
                style={{
                  background: color,
                  width: "67px",
                  height: "30px",
                  border: "1px solid gray",
                  borderRadius: "0.375rem",
                }}
              ></div>
              <input
                value={color}
                className="border-none p-0 outline-none w-[43%]"
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
              <button

                className=" flex items-center justify-center h-[30px] rounded-md border px-3 pb-[1px] shadow-sm border-gray-400 hover:bg-gray-100"
                onClick={() => handleSettingsChange("themeColor", color)}
                onKeyDown={(e) => {
                  if (["Enter", " "].includes(e.key))
                    handleSettingsChange("themeColor", color);
                }}
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Load ResumeControlBar client side since it uses usePDF, which is a web specific API
 */
export const ResumeControlBarCSR = dynamic(
  () => Promise.resolve(ResumeControlBar),
  {
    ssr: false,
  }
);

export const ResumeControlBarBorder = () => (
  <div className="absolute bottom-[var(--resume-control-bar-height)] w-full border-t-2 bg-gray-50" />
);
