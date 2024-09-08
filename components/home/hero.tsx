import { EMAIL, MENULINKS, SOCIAL_LINKS, TYPED_STRINGS } from "../../constants";
import React, { MutableRefObject, useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import Button, { ButtonTypes } from "../common/button";
import HeroImage from "./hero-image";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const HERO_STYLES = {
  SECTION:
    "w-full flex md:items-center py-8 section-container min-h-screen relative mb-24",
  CONTENT: "font-medium flex flex-col pt-32 md:pt-0 select-none",
  SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
  BG_WRAPPER:
    "absolute hero-bg right-0 md:bottom-0 bottom-8 -z-1 md:w-3/4 w-full scale-125 sm:scale-100 flex items-end",
  TYPED_SPAN: "text-xl sm:text-2xl md:text-4xl seq",
};

const HeroSection = React.memo(() => {
  const typedSpanElement: MutableRefObject<HTMLSpanElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const [t, i18n] = useTranslation("global");

  const initTypeAnimation = (
    typedSpanElement: MutableRefObject<HTMLSpanElement>
  ): Typed => {
    return new Typed(typedSpanElement.current, {
      // strings: TYPED_STRINGS,
      strings: [
        t("TYPED_STRINGS.1"),
        t("TYPED_STRINGS.2"),
        t("TYPED_STRINGS.3"),
        t("TYPED_STRINGS.4"),
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 8000,
      loop: true,
    });
  };

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): GSAPTimeline => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .to(targetSection.current, { opacity: 1, duration: 2 })
      .from(
        targetSection.current.querySelectorAll(".seq"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );

    return revealTl;
  };

  // useEffect(() => {
  //   const typed = initTypeAnimation(typedSpanElement);
  //   initRevealAnimation(targetSection);

  //   return typed.destroy;
  // }, [typedSpanElement, targetSection, i18next.language]);
  useEffect(() => {
    // Initialize animations
    const typed = initTypeAnimation(typedSpanElement);
    initRevealAnimation(targetSection);

    // Cleanup function to run before the component unmounts or effect runs again
    return () => {
      if (typed && typeof typed.destroy === "function") {
        typed.destroy(); // Properly destroy the animation instance
      }
    };
  }, [typedSpanElement, targetSection, i18next.language]);

  const renderBackgroundImage = (): React.ReactNode => (
    <div className={HERO_STYLES.BG_WRAPPER} style={{ maxHeight: "650px" }}>
      {/* <HeroImage /> */}
      <Image
        src="/testengineer.svg"
        width={1021}
        height={650}
        // style={{ marginRight: "10px" }}
      />
    </div>
  );

  const renderSocialLinks = (): React.ReactNode =>
    Object.keys(SOCIAL_LINKS).map((el: keyof typeof SOCIAL_LINKS) => (
      <a
        href={SOCIAL_LINKS[el]}
        key={el}
        className={HERO_STYLES.SOCIAL_LINK}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          src={`/social/${el}.svg`}
          alt={el}
          width={40}
          height={40}
          // style={{ marginRight: "5px" }}
        />
      </a>
    ));

  const renderHeroContent = (): React.ReactNode => {
    // const [t, i18n] = useTranslation("global");
    // const changeLang = (lang: string) => {
    //   i18n.changeLanguage(lang);
    // };
    return (
      <div className={HERO_STYLES.CONTENT}>
        <div className="md:mb-4 mb-2">
          <h2 className="text-4xl seq">{t("hero.welcome")} 👋🏻</h2>
          {/* <button onClick={() => changeLang("en")}>en</button>
          <button onClick={() => changeLang("de")}>de</button> */}
          <h1 className="text-3xl seq">{t("hero.intro")}</h1>
        </div>
        <p className="mb-4">
          <span
            className={HERO_STYLES.TYPED_SPAN}
            ref={typedSpanElement}
          ></span>
        </p>
        <div className="flex seq mb-5">{renderSocialLinks()}</div>
        <div className="flex seq">
          <Button
            classes="mr-3"
            type={ButtonTypes.PRIMARY}
            name="CV"
            otherProps={{
              target: "_blank",
              rel: "noreferrer",
            }}
            href="/CV_kang.pdf"
          ></Button>
          {/* <Button
            classes="ml-3"
            type={ButtonTypes.PRIMARY}
            name="Let's Talk"
            href={SOCIAL_LINKS.linkedin}
            otherProps={{
              target: "_blank",
              rel: "noreferrer",
            }}
          ></Button> */}
        </div>
      </div>
    );
  };

  const { ref: heroSectionRef } = MENULINKS[0];

  return (
    <section
      className={HERO_STYLES.SECTION}
      id={heroSectionRef}
      ref={targetSection}
      style={{ opacity: 0 }}
    >
      {renderHeroContent()}
      {renderBackgroundImage()}
    </section>
  );
});

HeroSection.displayName = "LandingHero";

export default HeroSection;
