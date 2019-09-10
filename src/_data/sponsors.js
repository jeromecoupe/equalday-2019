const sponsors = [
  {
    company: "Collectiv-a",
    url: "https://collectiv-a.be",
    logo: "collectiv-a_logo.jpg"
  },
  {
    company: "EQUAL Partners",
    url: "https://www.equal-partners.eu",
    logo: "equal_logo.jpg"
  },
  {
    company: "Flagey",
    url: "https://www.flagey.be",
    logo: "flagey_logo.jpg"
  },
  {
    company: "Major Tom Company",
    url: "http://major-tom-company.eu",
    logo: "major_tom_logo.jpg"
  },
  {
    company: "Equal Academy",
    url: "https://equal-academy.eu",
    logo: "equal_academy_logo.jpg"
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
