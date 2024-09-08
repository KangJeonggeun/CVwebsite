import { Dispatch, SetStateAction } from "react";
import { MENULINKS } from "../../constants";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect } from "react";

const Menu = ({
  setmenuVisible,
}: {
  setmenuVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const [t, i18n] = useTranslation("global");
  useEffect(() => {
    // Side effect code
    returnValue();
    return () => {
      returnValue();
      // Cleanup code (optional)
    };
  }, [i18next.language]);
  function returnValue() {
    return (
      <section
        className="menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center"
        style={{ visibility: "hidden" }}
      >
        <div className="flex-none overflow-hidden flex items-center justify-center">
          <div className="text-center opacity-0 overflow-y-auto flex flex-none justify-center items-center max-h-screen">
            <ul
              className="list-none py-4 px-0 m-0 block max-h-screen"
              role="menu"
            >
              {MENULINKS.filter((item) => item.name !== "").map((el) => (
                <li
                  className="p-0 m-6 text-2xl block"
                  key={t(el.name)}
                  role="menuitem"
                >
                  <a
                    className="link relative inline font-bold text-5xl duration-300 hover:no-underline"
                    href={`#${el.ref}`}
                    onClick={setmenuVisible.bind(null, false)}
                  >
                    {t("menu." + el.name)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
  return returnValue();
};

export default Menu;
