/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../language";
import { LanguageContext } from "../context/LanguageContext";

function Services() {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  return (
    <div
      className="pt-[150px] bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      style={{ minHeight: "calc(100vh - 22.8rem)" }}
    >
      <Wrapper>
        <div className="space-y-10 px-4 md:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-mainBlue dark:text-white md:text-3xl xl:text-4xl">
              {getText("servicesTitle1")}
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg xl:text-xl leading-relaxed">
              {getText("servicesParagraph1")}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-mainBlue dark:text-white md:text-3xl xl:text-4xl">
              {getText("servicesTitle2")}
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg xl:text-xl leading-relaxed">
              {getText("servicesParagraph2")}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-mainBlue dark:text-white md:text-3xl xl:text-4xl">
              {getText("servicesTitle3")}
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg xl:text-xl leading-relaxed">
              {getText("servicesParagraph3")}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-mainBlue dark:text-white md:text-3xl xl:text-4xl">
              {getText("servicesTitle4")}
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg xl:text-xl leading-relaxed">
              {getText("servicesParagraph4")}
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Services;
