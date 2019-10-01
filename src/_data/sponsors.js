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
    company: "Pop Pot",
    url: "http://www.pop-pot.com/",
    logo: "pop_pot_logo.jpg"
  },
  {
    company: "Equal Academy",
    url: "https://equal-academy.eu",
    logo: "equal_academy_logo.jpg"
  },
  {
    company: "Brussels Airlines Stop Deportations",
    url: "https://www.facebook.com/pages/category/Cause/Brussels-Airlines-Stop-Deportations-2341425242795496/",
    logo: "brussels_airlines_stop_deportations_logo.jpg"
  },
  {
    company: "Extinction Rebellion",
    url: "https://www.extinctionrebellion.be",
    logo: "extinction_rebellion_logo.jpg"
  },
  {
    company: "Greenpeace",
    url: "https://www.greenpeace.org/",
    logo: "greenpeace_logo.jpg"
  },
  {
    company: "Groupe Anathème",
    url: "https://www.facebook.com/pg/Groupe-Anath%C3%A8me-147551349173740/about/?ref=page_internal",
    logo: "groupe_anatheme_logo.jpg"
  },
  {
    company: "Quinoa",
    url: "http://www.quinoa.be/",
    logo: "quinoa_logo.jpg"
  },
  {
    company: "Roya Citoyenne",
    url: "https://www.roya-citoyenne.fr/",
    logo: "roya_citoyenne_logo.jpg"
  },
  {
    company: "The Valley",
    url: "https://www.facebook.com/THEVALLEY.ROYA/",
    logo: "thevalley_logo.jpg"
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
