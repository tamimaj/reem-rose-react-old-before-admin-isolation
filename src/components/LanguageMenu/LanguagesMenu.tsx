import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { useTranslation } from "react-i18next";
import siteSettings from "../../settings/siteSettings";
import { translationMenu } from "../../helpers/TranslationMenu/TranslationMenu";

type langType = {
  name: string;
  flag: string;
  dir?: string;
  code: string;
};

const LanguagesMenu = () => {
  const [selected, setSelected] = useState<langType | undefined>(
    translationMenu[0]
  );
  const { i18n } = useTranslation();

  useEffect(() => {
    let langObj: langType | undefined = {
      name: "",
      flag: "",
      dir: "",
      code: "",
    };
    langObj = translationMenu.length
      ? translationMenu.find((obj) => obj.code === i18n.language)
      : langObj;
    // set state for the dropdown.
    setSelected(langObj && langObj);

    // change html attrs
    document.documentElement.lang = langObj ? langObj?.code : "";
    document.documentElement.dir = langObj?.dir ? langObj?.dir : "ltr";
  }, [i18n.language]);

  // change i18n language and the useEFfect listner will handle the UI changes.
  const handleOnClick = (langObj: langType) => {
    i18n.changeLanguage(langObj.code);
  };

  return (
    <div className=" ml-4 lg:ml-8">
      <Listbox value={selected} onChange={handleOnClick}>
        <div className="relative mt-0">
          <Listbox.Button className="sm:text-sm relative   cursor-pointer text-start  focus:outline-none">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-primaryLight cursor-pointer rounded-lg">
              <img
                src={siteSettings.translateIcon}
                alt="translate"
                className="w-[24px] h-[24px]"
              />
            </div>

            {/* <span className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-2">
              <SelectorIcon
                className="h-5 w-5 /text-gray-400 text-primary"
                aria-hidden="true"
              />
            </span> */}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-50	 mt-1 max-h-60 w-[90px] overflow-auto rounded-md bg-white py-1 text-base shadow-xl focus:outline-none sm:text-sm">
              {translationMenu.map((translation) => (
                <Listbox.Option
                  key={translation.code}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 ps-2 pe-2 ${
                      active ? "bg-primary text-white" : "text-primary"
                    }`
                  }
                  value={translation}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`flex truncate text-sm items-center ${
                          selected ? "font-semibold" : "font-normal"
                        }`}
                      >
                        <img
                          alt={translation.code}
                          src={translation.flag}
                          className="w-6 h-6 me-2 rounded-md"
                        />
                        {translation.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
export default LanguagesMenu;
