import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Image from "next/image";
import { useRouter } from "next/router";
import VideoPlayer from "./components/videoPlayer.jsx";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image
        src="/computer.png"
        alt="Hello"
        width={40}
        height={40}
        style={{ borderRadius: "0" }}
      />
      <span
        style={{ paddingLeft: "0.6rem", fontFamily: "Teko", fontSize: "25px" }}
      >
        FISIAE
      </span>
    </>
  ),
  project: {
    link: "https://github.com/antuntune/fisiae",
  },
  chat: {
    link: "https://discord.com/channels/1259787636198084718",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: (
      <span style={{ margin: "auto", textAlign: "center" }}>
        <p>&copy; 2024 antuntune 🏴‍☠️</p>
        <br></br>
        <VideoPlayer />
      </span>
    ),
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  gitTimestamp: null,
  search: {
    placeholder: "Notizen durchsuchen...",
  },
  primaryHue: 34,
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://my-app.com" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "FISIAE"} />
        <meta
          property="og:description"
          content={frontMatter.description || "The next site builder"}
        />
      </>
    );
  },
};

export default config;
