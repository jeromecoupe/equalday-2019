const sponsors = [
  {
    name: "Collectiv-a",
    url: "https://collectiv-a.be",
    logo: "collectiv-a_logo.jpg"
  },
  {
    name: "EQUAL Partners",
    url: "https://www.equal-partners.eu",
    logo: "equal_logo.jpg"
  },
  {
    name: "Flagey",
    url: "https://www.flagey.be",
    logo: "flagey_logo.jpg"
  },
  {
    name: "Major Tom Company",
    url: "http://major-tom-company.eu",
    logo: "major_tom_logo.jpg"
  },
  {
    name: "Pop Pot",
    url: "http://www.pop-pot.com/",
    logo: "pop_pot_logo.jpg"
  },
  {
    name: "Equal Academy",
    url: "https://equal-academy.eu",
    logo: "equal_academy_logo.jpg"
  },
  {
    name: "Brussels Airlines Stop Deportations",
    url: "https://www.facebook.com/pages/category/Cause/Brussels-Airlines-Stop-Deportations-2341425242795496/",
    logo: "brussels_airlines_stop_deportations_logo.jpg"
  },
  {
    name: "Extinction Rebellion",
    url: "https://www.extinctionrebellion.be",
    logo: "extinction_rebellion_logo.jpg"
  },
  {
    name: "Greenpeace",
    url: "https://www.greenpeace.org/",
    logo: "greenpeace_logo.jpg"
  },
  {
    name: "Groupe Anathème",
    url: "https://www.facebook.com/pg/Groupe-Anath%C3%A8me-147551349173740/about/?ref=page_internal",
    logo: "groupe_anatheme_logo.jpg"
  },
  {
    name: "Quinoa",
    url: "http://www.quinoa.be/",
    logo: "quinoa_logo.jpg"
  },
  {
    name: "Roya Citoyenne",
    url: "https://www.roya-citoyenne.fr/",
    logo: "roya_citoyenne_logo.jpg"
  },
  {
    name: "The Valley",
    url: "https://www.facebook.com/THEVALLEY.ROYA/",
    logo: "thevalley_logo.jpg"
  },
  {
    name: "Action non-violente COP21",
    url: "https://www.facebook.com/anvcop21/",
    logo: "anv_cop21_logo.jpg"
  },
  {
    name: "Atelier Genre",
    url: "http://www.quinoa.be/blog/atelier-genre/",
    logo: "atelier_genre_logo.jpg"
  },
  {
    name: "Génération Climat",
    url: "https://www.facebook.com/generationclimat/",
    logo: "generation_climat_logo.jpg"
  },
  {
    name: "Maison Blanche LLN",
    url: "https://www.facebook.com/MaisonBlancheLLn/",
    logo: "maison_blanche_lln_logo.jpg"
  },
  {
    name: "Flashmob Fiscal Justice",
    url: "https://www.facebook.com/flashmobfiscaljustice/",
    logo: "flashmob_fiscal_justice_logo.jpg"
  },
  {
    name: "Dezobeyi",
    url: "http://www.quinoa.be/je-minforme-3/outils-pedagogiques/desobeir-un-acte-citoyen/",
    logo: "dezobeyi_logo.jpg"
  },
  {
    name: "Génération Climat",
    url: "http://www.generation-climat.org/",
    logo: "generation_climat_int_logo.jpg"
  },
  {
    name: "Youth for Climate",
    url: "https://youth4climate.be/fr-BE/",
    logo: "youth_for_climate_logo.jpg"
  },
  {
    name: "BXL Refugees",
    url: "http://www.bxlrefugees.be/",
    logo: "bxl_refugees_logo.jpg"
  }
];

module.exports = sponsors.sort((a, b) => {
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
});
