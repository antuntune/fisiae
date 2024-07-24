import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image src="/computer.png" alt="Hello" width={40} height={40} />
      <span style={{ paddingLeft: "0.6rem" }}>FISIAE</span>
    </>
  ),
  // project: {
  //   link: "https://github.com/shuding/nextra-docs-template",
  // },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: (
      <span>
        <p>&copy; 2024 antuntune 🏴‍☠️</p>
      </span>
    ),
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  search: {
    placeholder: "Notizen durchsuchen...",
  },
  primaryHue: 34,
};

export default config;
