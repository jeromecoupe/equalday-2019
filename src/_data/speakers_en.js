const speakers = [
  {
    name: "Eric",
    surname: "Gillet",
    function: "Partner at EQUAL",
    url: "https://equal-partners.eu/equipe/eric-gillet",
    picture: "eric_gillet_600.jpg"
  },
  {
    name: "Thomas",
    surname: "Deridder",
    function: "Lawyer at EQUAL",
    url: "https://equal-partners.eu/equipe/thomas-deridder",
    picture: "thomas_deridder_600.jpg"
  },
  {
    name: "Linli Pan",
    surname: "Van de Meulebroeke",
    function: "Lawyer at EQUAL",
    url: "https://equal-partners.eu/equipe/linli-pan-van-de-meulebroeke",
    picture: "linli_pan_van_de_meulebroeke_600.jpg"
  },
  {
    name: "Ikram",
    surname: "Eabdellatin",
    function: "Lawyer at EQUAL",
    url: "https://equal-partners.eu/equipe/eabdellatin-ikram",
    picture: "ikram_eabdellatin_600.jpg"
  },
  {
    name: "Luc",
    surname: "Depré",
    function: "Partner at EQUAL",
    url: "https://equal-partners.eu/equipe/luc-depre",
    picture: "luc_depre_600.jpg"
  },
  {
    name: "Sophie",
    surname: "Jacques",
    function: "Partner at EQUAL",
    url: "https://equal-partners.eu/equipe/sophie-jacques",
    picture: "sophie_jacques_600.jpg"
  }
];

module.exports = speakers.sort((a, b) => {
  let nameA = a.surname.toUpperCase();
  let nameB = b.surname.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
});
