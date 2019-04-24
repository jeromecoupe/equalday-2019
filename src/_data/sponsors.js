const sponsors = [
  {
    company: "EQUAL Partners",
    url: "https://www.equal-partners.eu",
    logo: "equal_logo.png"
  },
  {
    company: "Major Tom Company",
    url: "http://major-tom-company.eu/",
    logo: "major_tom_logo.png"
  }
];

module.exports = sponsors.sort((a, b) => {
  let companyA = a.company.toUpperCase();
  let companyB = b.company.toUpperCase();

  if (companyA < companyB) {
    return -1;
  }
  if (companyA > companyB) {
    return 1;
  }

  return 0;
});
