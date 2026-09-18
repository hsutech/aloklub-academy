export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });
  eleventyConfig.addPassthroughCopy({ "src/sitemap.xml": "sitemap.xml" });

  eleventyConfig.addPassthroughCopy({ "src/_headers": "_headers" });

  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });

  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" });

  eleventyConfig.ignores.add("src/404.html");
  eleventyConfig.addPassthroughCopy({ "src/404.html": "404.html" });

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    htmlTemplateEngine: false,
    markdownTemplateEngine: "njk"
  };
}
