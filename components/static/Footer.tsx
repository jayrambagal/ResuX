import React from "react";
import { SiX, SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";
function Footer() {
  const getCurrentYear = () => new Date().getFullYear();

  const footerLinks = [
    {
      name: "Twitter",
      // link: "/",
      icon: (
        <SiX
          aria-label="Follow us on Twitter"
          title="Follow us on Twitter"
        />
      ),
      hover: " text-xl  text-gray-200 cursor-pointer hover:text-purple-500 ",
    },
    {
      name: "GitHub",
      // link: "/",
      icon: (
        <SiGithub
          aria-label="Follow us on GitHub"
          title="Follow us on GitHub"
        />
      ),
      hover: " text-xl  text-gray-200 cursor-pointer hover:text-purple-500 ",
    },
    {
      name: "Linkedin",
      // link: "/",
      icon: (
        <SiLinkedin
          aria-label="Follow us on LinkedIn"
          title="Follow us on LinkedIn"
        />
      ),
      hover: " text-xl  text-gray-200 cursor-pointer hover:text-purple-700 ",
    },
  ];


  const footerServiceLinks = [
    {
      title: "License",
      child: [
        {
          name: "MIT License",
          // link: "/",
        },
      ],
    },
  ];

  return (
    <footer className="border-t border-gray-800">
      <div className="mx-auto max-w-screen-xl pt-8 pb-12 sm:pt-16 px-4 sm:px-6 lg:px-8 lg:pb-4 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-4">
          <div className="text-center lg:text-left">
            <div className="flex h-10 items-center justify-center lg:justify-start text-white rounded-lg font-extrabold text-2xl">
              Resu<span className="text-primary">X</span>
            </div>
            <p className="mt-4 text-center text-gray-200 dark:text-gray-400 lg:text-left lg:text-lg">
              ResuX is platform for expert tips and tricks to enhance your resume.
            </p>

            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              {footerLinks.map((footerLink, ind) => (
                <li key={ind}>
                  <p
                    // href={''}
                    // target="_blank"
                    className={footerLink.hover}
                    aria-label={`follow on ${footerLink.name}`}
                  >
                    {footerLink.icon}
                  </p>
                </li>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto">
            <ul className="font-medium text-gray-200 text-center lg:text-left">
              {footerServiceLinks.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-extrabold mt-5 mb-4 text-gray-200">
                    {section.title}
                  </h3>
                  <ul>
                    {section.child.map((link, linkIndex) => (
                      <li key={linkIndex} className="pt-2">
                        <p
                          // href={''}
                          className="hover:text-primary  "
                          rel="noopener noreferrer"
                          // target="_blank"

                          aria-label="footer service link"
                        >
                          {link.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>

          </div>
        </div>
        <div className="mt-16 pt-8 dark:border-gray-800 text-center lg:text-center lg:text-left">
          <p className="text-gray-200 mx-auto lg:mx-0">
            ©ResuX {getCurrentYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer >
  );
}

export default Footer;
