import { Motion } from "@/components/framer-motion";
import { FaGithub, FaShareAlt, FaMoneyBillAlt, FaBinoculars, FaSnowman, FaUser, FaSearch } from "react-icons/fa";

import { SlGlobe } from "react-icons/sl";

const features = [
  {
    name: "Show that you're the perfect match",
    description: "Create a resume that stands out and emphasizes your best qualities.",
    icon: FaUser,
  },
  {
    name: "Beat the bots",
    description: "Make sure your resume gets noticed by the automated systems employers use.",
    icon: FaSnowman,
  },
  {
    name: "See your missing skills ",
    description: "Find out what skills you're missing and need to improve on.",
    icon: FaBinoculars,
  },
  {
    name: "Free ATS Resume Builder",
    description:
      "Build your resume for free, making sure it gets through online job systems easily. ",
    icon: FaSearch,
  },
];

export default function Banner() {
  return (
    <div className="bg-inherit py-24 sm:py-32 select-none">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <Motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 110 }}
            className="mt-2 sm:mt-0 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Why should you use ResuX?
          </Motion.p>
          <Motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 110 }}
            className="text-base font-semibold leading-7 text-primary"
          >
            Key Resume Parameters
          </Motion.h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-15 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, i) => (
              <Motion.div
                // initial={{ opacity: 0, x: -640 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // viewport={{ once: true }}
                // transition={{ duration: 0.5, type: "spring", stiffness: 110, delay: i * 0.2 }}
                key={feature.name}
                className=" p-5 hover:outline outline-1 outline-gray-600 rounded"
              >
                <div className="relative pl-16">
                  <div className="text-base font-semibold leading-7 text-white">
                    <Motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 110,
                        delay: i * 0.2,
                      }}
                      className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary"
                    >
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </Motion.div>
                    <Motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 110,
                        delay: i * 0.2 + 0.1,
                      }}
                    >
                      {feature.name}
                    </Motion.div>
                  </div>
                  <Motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 110,
                      delay: i * 0.2 + 0.2,
                    }}
                    className="mt-2 text-base leading-7 text-gray-400"
                  >
                    {feature.description}
                  </Motion.div>
                </div>
              </Motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
