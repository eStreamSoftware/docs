// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import path from "path";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SQL Documentation",
  tagline: "SQL Documentation",
  favicon: "https://cdn.sql.com.my/wp-content/uploads/2024/05/sql-logo-256.png",
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
          routeBasePath: "sqlacc",
          sidebarPath: "./sidebars.js",
        },
      }),
    ],
  ],
  plugins: [
    "plugin-image-zoom",
    [
      path.resolve(__dirname, 'plugins/generate-help-json'),
      {
        docsPath: 'docs-sqlacc/docs',
        outputPath: 'sqlacc'
      },
    ],
    function aliasPlugin(context, options) {
      return {
        name: "alias-plugin",
        configureWebpack() {
          return {
            resolve: {
              alias: {
                "@src": path.resolve(__dirname, "docs-sqlacc/src"),
              },
            },
          };
        },
      };
    },
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "sqlpay",
        path: "docs-sqlpay/docs",
        routeBasePath: "sqlpay",
        sidebarPath: "./sidebars.js",
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        createRedirects(existingPath) {
          if (existingPath.includes("/sqlacc")) {
            //   // Redirect from /X to /sqlacc/X
            return existingPath.replace("/sqlacc", "");
          }
          return undefined; // Return a falsy value: no redirect created
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
            to: "/sqlacc",
            label: "SQL Account",
            // activeBaseRegex: "^(?!/sqlpay).*",
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
      imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        selector: ".markdown img",
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          margin: 24,
          // background: "#BADA55",
          // scrollOffset: 0,
          // container: "#zoom-container",
          // template: "#zoom-template",
        },
      },
      metadata: [
        {
          name: "keywords",
          content:
            "SQL, SQL Account, SQL Payroll, Documentation, Account, Payroll, Accounting Software, Payroll Software",
        },
        {
          name: "og:title",
          content: "SQL Documentation",
        },
        {
          name: "og:description",
          content: "SQL Documentation is a library consisting of all SQL software documentation.",
        },
        {
          name: "og:image",
          content: "https://cdn.sql.com.my/wp-content/uploads/2024/05/sql-logo-256.png",
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
        docsRouteBasePath: ["/sqlacc", "/sqlpay"],
      },
    ],
  ],
};

export default config;
