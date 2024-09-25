/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../language";
import { LanguageContext } from "../context/LanguageContext";

function About() {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
  return (
    <div className="pt-[150px] bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Wrapper>
        <div className="max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-mainBlue dark:text-white md:text-4xl xl:text-5xl mb-6">
            {getText("aboutTitle")}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg xl:text-xl leading-relaxed">
            {getText("aboutParagraph")}
          </p>
        </div>
      </Wrapper>
    </div>
  );
}

export default About;
