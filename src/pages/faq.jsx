/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../language";
import { LanguageContext } from "../context/LanguageContext";

function Faq() {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
  return (
    <div className="pt-[150px] bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Wrapper>
        <div className="px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-mainBlue dark:text-white md:text-3xl xl:text-4xl">
            {getText("faqTitle")}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg xl:text-xl leading-relaxed mt-4">
            {getText("faqParagraph")}
          </p>
        </div>
      </Wrapper>
    </div>
  );
}

export default Faq;
