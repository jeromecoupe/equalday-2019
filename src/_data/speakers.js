const speakers = [
  {
    name: "Eric",
    surname: "Gillet",
    picture: "eric_gillet_600.jpg",
    en: {
      function: "Partner EQUAL",
      url: "https://equal-partners.eu/en/team/eric-gillet"
    },
    fr: {
      function: "Partner EQUAL",
      url: "https://equal-partners.eu/equipe/eric-gillet"
    },
    nl: {
      function: "Advocaat-partner EQUAL",
      url: "https://equal-partners.eu/nl/team/eric-gillet"
    }
  },
  {
    name: "Thomas",
    surname: "Deridder",
    picture: "thomas_deridder_600.jpg",
    en: {
      function: "Lawyer EQUAL",
      url: "https://equal-partners.eu/en/team/thomas-deridder"
    },
    fr: {
      function: "Avocat EQUAL",
      url: "https://equal-partners.eu/equipe/thomas-deridder"
    },
    nl: {
      function: "Advocaat EQUAL",
      url: "https://equal-partners.eu/nl/team/thomas-deridder"
    }
  },
  {
    name: "Linli Pan",
    surname: "Van de Meulebroeke",
    picture: "linli_pan_van_de_meulebroeke_600.jpg",
    en: {
      function: "Lawyer EQUAL",
      url: "https://equal-partners.eu/en/team/linli-pan-van-de-meulebroeke"
    },
    fr: {
      function: "Avocat EQUAL",
      url: "https://equal-partners.eu/equipe/linli-pan-van-de-meulebroeke"
    },
    nl: {
      function: "Advocaat EQUAL",
      url: "https://equal-partners.eu/nl/team/linli-pan-van-de-meulebroeke"
    }
  },
  {
    name: "Ikram",
    surname: "Eabdellatin",
    picture: "ikram_eabdellatin_600.jpg",
    en: {
      function: "Lawyer EQUAL",
      url: "https://equal-partners.eu/en/eabdellatin-ikram"
    },
    fr: {
      function: "Avocat EQUAL",
      url: "https://equal-partners.eu/equipe/eabdellatin-ikram"
    },
    nl: {
      function: "Advocaat EQUAL",
      url: "https://equal-partners.eu/nl/team/eabdellatin-ikram"
    }
  },
  {
    name: "Luc",
    surname: "Depré",
    picture: "luc_depre_600.jpg",
    en: {
      function: "Partner EQUAL",
      url: "https://equal-partners.eu/en/luc-depre"
    },
    fr: {
      function: "Partner EQUAL",
      url: "https://equal-partners.eu/equipe/luc-depre"
    },
    nl: {
      function: "Advocaat-partner EQUAL",
      url: "https://equal-partners.eu/nl/team/luc-depre"
    }
  },
  {
    name: "Sophie",
    surname: "Jacques",
    picture: "sophie_jacques_600.jpg",
    en: {
      function: "Partner EQUAL",
      url: "https://equal-partners.eu/en/sophie-jacques"
    },
    fr: {
      function: "Partner EQUAL",
      url: "https://equal-partners.eu/equipe/sophie-jacques"
    },
    nl: {
      function: "Advocaat-partner EQUAL",
      url: "https://equal-partners.eu/nl/team/sophie-jacques"
    }
  },
  {
    name: "Camille",
    surname: "de Bueger",
    picture: "camille_de_bueger_600.jpg",
    en: {
      function: "Lawyer EQUAL",
      url: "https://equal-partners.eu/en/team/de-bueger-camille"
    },
    fr: {
      function: "Avocate EQUAL",
      url: "https://equal-partners.eu/equipe/de-bueger-camille"
    },
    nl: {
      function: "Advocaat EQUAL",
      url: "https://equal-partners.eu/nl/team/de-bueger-camille"
    }
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
