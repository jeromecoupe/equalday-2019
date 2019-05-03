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

  // events collections
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

  // speakers collections
  eleventyConfig.addCollection("speakers_fr", function(collection) {
    return collection
      .getFilteredByGlob("./src/fr/speakers/*.md")
      .sort((a, b) => {
        let nameA = a.data.surname.toUpperCase();
        let nameB = b.data.surname.toUpperCase();
        if (nameA > b.nameB) return -1;
        else if (nameA < nameB) return 1;
        else return 0;
      });
  });

  eleventyConfig.addCollection("speakers_en", function(collection) {
    return collection
      .getFilteredByGlob("./src/en/speakers/*.md")
      .sort((a, b) => {
        let nameA = a.data.surname.toUpperCase();
        let nameB = b.data.surname.toUpperCase();
        if (nameA > b.nameB) return -1;
        else if (nameA < nameB) return 1;
        else return 0;
      });
  });

  eleventyConfig.addCollection("speakers_nl", function(collection) {
    return collection
      .getFilteredByGlob("./src/nl/speakers/*.md")
      .sort((a, b) => {
        let nameA = a.data.surname.toUpperCase();
        let nameB = b.data.surname.toUpperCase();
        if (nameA > b.nameB) return -1;
        else if (nameA < nameB) return 1;
        else return 0;
      });
  });

  // alerts collections
  eleventyConfig.addCollection("alerts_fr", function(collection) {
    return collection.getFilteredByGlob("./src/fr/alerts/*.md").filter(item => {
      let today = moment().format("YYYYMMDD");
      let expiry;
      if (!item.data.expiryDate || item.data.expiryDate == "") {
        expiry = today;
      } else {
        expiry = moment(item.data.expiryDate).format("YYYYMMDD");
      }
      return expiry >= today;
    });
  });

  eleventyConfig.addCollection("alerts_en", function(collection) {
    return collection.getFilteredByGlob("./src/en/alerts/*.md").filter(item => {
      let today = moment().format("YYYYMMDD");
      let expiry;
      if (!item.data.expiryDate || item.data.expiryDate == "") {
        expiry = today;
      } else {
        expiry = moment(item.data.expiryDate).format("YYYYMMDD");
      }
      return expiry >= today;
    });
  });

  eleventyConfig.addCollection("alerts_nl", function(collection) {
    return collection.getFilteredByGlob("./src/nl/alerts/*.md").filter(item => {
      let today = moment().format("YYYYMMDD");
      let expiry;
      if (!item.data.expiryDate || item.data.expiryDate == "") {
        expiry = today;
      } else {
        expiry = moment(item.data.expiryDate).format("YYYYMMDD");
      }
      return expiry >= today;
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
