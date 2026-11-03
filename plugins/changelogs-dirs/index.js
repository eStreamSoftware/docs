import fs from "fs";
import path from "path";

module.exports = function (context, options) {
  const directory = path.resolve(context.siteDir, "changelogs");

  const changelogsDirs = fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((dir) => dir.name);

  const dirs = changelogsDirs.map((dir) => {
    const categoryFile = path.resolve(directory, dir, "_category_.json");
    if (fs.existsSync(categoryFile)) {
      try {
        const categoryData = JSON.parse(fs.readFileSync(categoryFile, "utf-8"));
        return {
          name: dir,
          label: categoryData.label,
        };
      } catch (error) {
        throw new Error(`Failed to parse category file for directory: ${dir}`);
      }
    } else {
      throw new Error(`Category file not found for directory: ${dir}`);
    }
  });

  return {
    name: "changelogs-dirs",

    async contentLoaded({ content, actions }) {
      actions.setGlobalData({ dirs });
    },
  };
};
