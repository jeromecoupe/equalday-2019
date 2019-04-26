const moment = require("moment");

module.exports = function(eleventyConfig) {
  // limit filter
  eleventyConfig.addNunjucksFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

  // date filter (localized)
  eleventyConfig.addNunjucksFilter("date", function(date, format, locale) {
    locale = locale ? locale : "en";
    moment.locale(locale);
    return moment(date).format(format);
  });

  // collections
  eleventyConfig.addCollection("events_fr", function(collection) {
    return collection.getFilteredByGlob("./src/fr/events/*.md").sort((a, b) => {
      if (a.data.startDate > b.data.startDate) return -1;
      else if (a.data.startDate < b.data.startDate) return 1;
      else return 0;
    });
  });

  eleventyConfig.addCollection("events_en", function(collection) {
    return collection.getFilteredByGlob("./src/en/events/*.md").sort((a, b) => {
      if (a.data.startDate > b.data.startDate) return -1;
      else if (a.data.startDate < b.data.startDate) return 1;
      else return 0;
    });
  });

  eleventyConfig.addCollection("events_nl", function(collection) {
    return collection.getFilteredByGlob("./src/nl/events/*.md").sort((a, b) => {
      if (a.data.startDate > b.data.startDate) return -1;
      else if (a.data.startDate < b.data.startDate) return 1;
      else return 0;
    });
  });

  // pass through
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/apple-touch-icon.png");

  // Base config
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
