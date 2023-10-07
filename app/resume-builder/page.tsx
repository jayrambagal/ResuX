"use client";
import { Provider } from "react-redux";
import { store } from "lib/redux/store";
import { ResumeForm } from "components/ResumeForm";
import { Resume } from "components/Resume";

export default function Create() {
  return (
    <Provider store={store}>
      <main style={{ height: 'calc(100vh - 60px)' }} className="absolute w-full overflow-hidden bg-[#000000]">
        <div className="grid grid-cols-3 md:grid-cols-6 ">
          <div className="col-span-3 h-[100vh] overflow-y-scroll">
            <ResumeForm />
          </div>
          <div className="col-span-3 h-[100vh]  overflow-y-scroll">
            <Resume />
          </div>
        </div>
      </main>
    </Provider>
  );
}
