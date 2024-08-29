"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/../i18nConfig";
import Image from "next/image";
import { useState } from "react";

const languages = [
  {
    value: "en",
    src: "/assets/images/flags/unitedstates_flags_flag_8833.png",
    alt: "English",
  },
  {
    value: "es",
    src: "/assets/images/flags/Spain_flags_flag_8858.png",
    alt: "Español",
  },
];
export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleSelection = (language) => {
    setSelectedLanguage(language);
    // Aquí puedes añadir lógica para cambiar el idioma de la aplicación
  };
  return (
    <>
      <div className="header-language-item header-language">
        <div className="select-wrapper">
          <div
            className="select-display"
            onClick={() =>
              document.querySelector(".select-options").classList.toggle("show")
            }
            onChange={handleChange}
          >
            <Image
              src={selectedLanguage.src}
              alt={selectedLanguage.alt}
              width={30}
              height={20}
            />
          </div>
          <div className="select-options">
            {languages.map((language) => (
              <div
                key={language.value}
                onClick={() => handleSelection(language)}
              >
                <Image
                  src={language.src}
                  alt={language.alt}
                  width={30}
                  height={20}
                />
              </div>
            ))}
          </div>

          <style jsx>{`
            .select-wrapper {
              position: relative;
              display: inline-block;
              width: 100px;
            }

            .select-display {
              background-color: #f1f1f1;
              border: 1px solid #ccc;
              padding: 5px;
              cursor: pointer;
              text-align: center;
            }

            .select-options {
              display: none;
              position: absolute;
              background-color: #f1f1f1;
              border: 1px solid #ccc;
              width: 100px;
              z-index: 1;
            }

            .select-options.show {
              display: block;
            }

            .select-options div {
              padding: 5px;
              cursor: pointer;
              text-align: center;
            }

            .select-options img {
              width: 30px;
              height: 20px;
            }

            .select-options div:hover {
              background-color: #ddd;
            }
          `}</style>
        </div>
      </div>
    </>
  );
}
