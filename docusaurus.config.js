// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SQL Documentation",
  tagline: "SQL Documentation",
  favicon: "img/logo.png",
  staticDirectories: ["static", "docs-sqlacc/static", "docs-sqlpay/static"],

  // Set the production url of your site here
  url: "https://docs.sql.com.my",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: ["./src/css/custom.css"],
        },
        docs: {
          path: "docs-sqlacc/docs",
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          editUrl: ({ versionDocsDirPath, docPath }) => {
            return `https://github.com/eStreamSoftware/docs-sqlacc/edit/master/docs/${docPath}`;
          },
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "sqlpay",
        path: "docs-sqlpay/docs",
        routeBasePath: "sqlpay",
        sidebarPath: "./sidebars.js",
        editUrl: ({ versionDocsDirPath, docPath }) => {
          return `https://github.com/eStreamSoftware/docs-sqlpay/edit/master/docs/${docPath}`;
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo.png",
      navbar: {
        hideOnScroll: true,
        title: "",
        logo: {
          alt: "Documentation",
          src: "img/logo.png",
        },
        items: [
          {
            position: "left",
            to: "/",
            label: "SQL Account",
            activeBaseRegex: "^(?!/sqlpay).*",
          },
          {
            position: "left",
            to: "/sqlpay",
            label: "SQL Payroll",
          },
          {
            position: "right",
            href: "https://github.com/eStreamSoftware/docs",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Home",
                href: "https://sql.com.my",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/SQLEstream/",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UCqgEE2ak1HLaVJf3g_sYgMQ",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} eStream Software`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        {
          name: "keywords",
          content:
            "SQL, SQL Account, SQL Payroll, Documentation, Account, Payroll, Accounting Software, Payroll Software",
        },
        {
          name: "og:title",
          content:
            "SQL Documentation",
        },
        {
          name: "og:description",
          content:
            "SQL Documentation is a library consisting of all SQL software documentation.",
        },
      ],
    }),
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: ["/", "/sqlpay"],
      },
    ],
  ],
};

export default config;
