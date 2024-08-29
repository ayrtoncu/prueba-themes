"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/../i18nConfig";
import Image from "next/image";
import { useState } from "react";

const languageOptions = [
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

export default function LanguageChangerD() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [showOptions, setShowOptions] = useState(false);

  const handleChange = (e) => {
    const newLocale = e.target.value;

    // Set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // Redirect to the new locale path
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

  return (
    <div className="language-changer">
      <div
        className="selected-language"
        onClick={() => setShowOptions(!showOptions)}
      >
        <Image
          src={
            languageOptions.find((option) => option.value === currentLocale)
              ?.src || "/flags/flag-en.png"
          }
          alt={currentLocale}
          width={30}
          height={20}
        />
      </div>
      {showOptions && (
        <div className="options-list">
          {languageOptions
            .filter((option) => option.value !== currentLocale)
            .map((option) => (
              <div
                key={option.value}
                onClick={() =>
                  handleChange({ target: { value: option.value } })
                }
                className="option-item"
              >
                <Image
                  src={option.src}
                  alt={option.alt}
                  width={30}
                  height={20}
                />
              </div>
            ))}
        </div>
      )}

      <style jsx>{`
        .language-changer {
          position: relative;
          display: inline-block;
          width: 30px;
        }

        .selected-language {
          cursor: pointer;
        }

        .options-list {
          display: ${showOptions ? "block" : "none"};
          position: absolute;
          background-color: #f1f1f1;
          border: 1px solid #ccc;
          width: 100%;
          z-index: 1;
        }

        .option-item {
          padding: 5px;
          cursor: pointer;
          text-align: center;
        }

        .option-item:hover {
          background-color: #ddd;
        }
      `}</style>
    </div>
  );
}
