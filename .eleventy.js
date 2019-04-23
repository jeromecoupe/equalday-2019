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
  eleventyConfig.addCollection("eventsFR", function(collection) {
    return collection.getFilteredByGlob("./src/fr/events/*.md").sort((a, b) => {
      if (a.data.startDate > b.data.startDate) return -1;
      else if (a.data.startDate < b.data.startDate) return 1;
      else return 0;
    });
  });

  eleventyConfig.addCollection("eventsEN", function(collection) {
    return collection.getFilteredByGlob("./src/en/events/*.md").sort((a, b) => {
      if (a.data.startDate > b.data.startDate) return -1;
      else if (a.data.startDate < b.data.startDate) return 1;
      else return 0;
    });
  });

  eleventyConfig.addCollection("eventsNL", function(collection) {
    return collection.getFilteredByGlob("./src/fr/events/*.md").sort((a, b) => {
      if (a.data.startDate > b.data.startDate) return -1;
      else if (a.data.startDate < b.data.startDate) return 1;
      else return 0;
    });
  });

  eleventyConfig.addCollection("speakersFR", function(collection) {
    return collection
      .getFilteredByGlob("./src/fr/speakers/*.md")
      .sort((a, b) => {
        if (a.data.surname > b.data.surname) return -1;
        else if (a.data.surname < b.data.surname) return 1;
        else return 0;
      });
  });

  eleventyConfig.addCollection("speakersEN", function(collection) {
    return collection
      .getFilteredByGlob("./src/en/speakers/*.md")
      .sort((a, b) => {
        if (a.data.surname > b.data.surname) return -1;
        else if (a.data.surname < b.data.surname) return 1;
        else return 0;
      });
  });

  eleventyConfig.addCollection("speakersNL", function(collection) {
    return collection
      .getFilteredByGlob("./src/nl/speakers/*.md")
      .sort((a, b) => {
        if (a.data.surname > b.data.surname) return -1;
        else if (a.data.surname < b.data.surname) return 1;
        else return 0;
      });
  });

  // Base config
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
