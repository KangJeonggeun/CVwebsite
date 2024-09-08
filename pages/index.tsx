import { METADATA } from "../constants";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Layout from "@/components/common/layout";
import Header from "@/components/common/header";
import ProgressIndicator from "@/components/common/progress-indicator";
import Cursor from "@/components/common/cursor";
import HeroSection from "@/components/home/hero";
import ProjectsSection from "@/components/home/projects";
import QuoteSection from "@/components/home/quote";
import SkillsSection from "@/components/home/skills";
import CollaborationSection from "@/components/home/collaboration";
import Footer from "@/components/common/footer";
import TimelineSection from "@/components/home/timeline";
import Scripts from "@/components/common/scripts";
import AboutSection from "@/components/home/about";

import global_en from "../components/common/translations/en/global.json";
import global_de from "../components/common/translations/de/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { LanguageProvider } from "../components/common/langcontext";
import LanguageSwitcher from "@/components/home/langswitcher";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    de: {
      global: global_de,
    },
  },
});

const DEBOUNCE_TIME = 100;

export const isSmallScreen = (): boolean => document.body.clientWidth < 767;
export const NO_MOTION_PREFERENCE_QUERY =
  "(prefers-reduced-motion: no-preference)";

export interface IDesktop {
  isDesktop: boolean;
}

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setisDesktop] = useState(true);

  let timer: NodeJS.Timeout = null;

  const debouncedDimensionCalculator = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const isDesktopResult =
        typeof window.orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1;

      window.history.scrollRestoration = "manual";

      setisDesktop(isDesktopResult);
    }, DEBOUNCE_TIME);
  };

  useEffect(() => {
    debouncedDimensionCalculator();

    window.addEventListener("resize", debouncedDimensionCalculator);
    return () =>
      window.removeEventListener("resize", debouncedDimensionCalculator);
  }, [timer]);

  const renderBackdrop = (): React.ReactNode => (
    <div className="fixed top-0 left-0 h-screen w-screen bg-gray-900 -z-1"></div>
  );

  return (
    <>
      <LanguageProvider>
        <I18nextProvider i18n={i18next}>
          <Head>
            <title>{METADATA.title}</title>
          </Head>
          <Layout>
            <Header />
            <ProgressIndicator />
            <Cursor isDesktop={isDesktop} />
            <main className="flex-col flex">
              {renderBackdrop()}
              <HeroSection />
              {/* <LanguageSwitcher /> */}
              <AboutSection />
              {/* <ProjectsSection isDesktop={isDesktop} /> */}
              <QuoteSection />
              <SkillsSection />
              <TimelineSection isDesktop={isDesktop} />
              <CollaborationSection />
              <Footer />
            </main>
            {/* <Scripts /> */}
          </Layout>
        </I18nextProvider>
      </LanguageProvider>
    </>
  );
}
