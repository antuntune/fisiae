import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>💻FISIAE</span>,
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
};

export default config;
