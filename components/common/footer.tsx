import { EMAIL, MENULINKS, SOCIAL_LINKS } from "../../constants";
import Image from "next/image";
import Button, { ButtonTypes } from "./button";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  const renderSocialIcons = (): React.ReactNode => {
    return Object.keys(SOCIAL_LINKS).map((el: keyof typeof SOCIAL_LINKS) => (
      <a
        href={SOCIAL_LINKS[el]}
        key={el}
        className="link hover:opacity-80 duration-300 md:px-2 px-1"
        rel="noreferrer"
        target="_blank"
      >
        <Image src={`/social/${el}.svg`} alt={el} width={40} height={40} />
      </a>
    ));
  };

  const renderFooterContent = (): React.ReactNode => (
    <>
      <h1 className="font-medium text-3xl md:text-4xl text-center">
        {t("footer.cv")}
      </h1>
      <div className="flex mt-8">{renderSocialIcons()}</div>
      <div className="flex mt-8">
        <Button
          classes="mr-3"
          type={ButtonTypes.OUTLINE}
          name="CV"
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
          href="/CV_kang.pdf"
        ></Button>
        {/* <Button
          classes="ml-3"
          type={ButtonTypes.WHITE}
          name="Let's Talk"
          href={SOCIAL_LINKS.topmate}
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
        ></Button> */}
      </div>
      <h2 className="text-center text-sm sm:text-base mt-8">
        {t("footer.developed")}
      </h2>
    </>
  );

  const { ref: footerRef } = MENULINKS[4];

  return (
    <footer
      className="w-full relative select-none bg-cover flex flex-col items-stretch"
      id={footerRef}
    >
      <img
        src="/footer-curve.svg"
        alt="Footer"
        className="w-full"
        loading="lazy"
        height={290}
        role="presentation"
        width={1440}
      />
      <div className="h-full w-full">
        <div className="section-container flex-col flex h-full justify-end z-10 items-center py-12">
          {renderFooterContent()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
