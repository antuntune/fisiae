import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Image from "next/image";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image src="/computer.png" alt="Hello" width={40} height={40} />
      <span style={{ paddingLeft: "0.6rem" }}>FISIAE</span>
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
        <iframe
          width="460"
          height="260"
          src="https://www.youtube.com/embed/oN6doVEr1XM?si=b8lAK1rA3TxaOjsg&amp;start=17"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
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
