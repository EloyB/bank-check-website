export const activeLocale = (locale) => {
  return locale === "en-US" ? enUS : nl;
};

export const toggleLocale = (locale, router) => {
  router.push(router.pathname, router.pathname, { locale });
};

const enUS = {
  heroSection: {
    title: "Fill in your <span class='text-secondary'>link</span>",
    subtitle: "And have it checked for phishing",
    inputPlaceholder: "Fill in your link here...",
    learnMore: "Learn more about phishing",
  },
  learnSection: {
    title: "Don't become a victim of <span class='text-secondary'>phishing</span>",
    subtitle: "Scam where someone is robbed of secret financial information via email or internet",
  },
  numberSection: {
    first: {
      title: "32 million",
      subtitle: "euros stolen by phishers",
    },
    second: {
      title: "3.200.000",
      subtitle: "suspicious messages sent",
    },
    third: {
      title: "3438",
      subtitle: "cases of phishing",
    },
  },
  infoSection: {
    first: {
      title: "A deep dive into phishing",
      description:
        "Phishing is a form of cybercrime. In this way a person tries to steal sensitive data from its victim. This can go from banking details to passwords or even a full identity. Once a phisher has access to this data he/she can inflict a big amount of damage to the victim.",
    },
    second: {
      title: "In all shapes and sizes",
      description:
        "It comes in different shapes and sizes. The most common ones are via email, text message and telephone but also on social media or even via QR-codes there are cases of phishing. The phisher will pretend to be someone else, like a bank or a supermarket, to gain your trust. They let you fill in a bunch of data and gain access to your sensitive data.",
    },
    third: {
      title: "And then there was <span class='text-secondary'>BankCheck</span>",
      description:
        "Proven by the numbers above, phising is on the rise. That's why we decided to develop BankCheck. Using BankCheck we want to raise awareness around phising and try to lower those numbers. The chances that there is no way back when you have been phished is big. Therefore, get your links checked and strive for a safer internet.",
    },
  },
};

const nl = {
  heroSection: {
    title: "Vul je <span class='text-secondary'>link</span> in",
    subtitle: "En laat hem controleren op phishing",
    inputPlaceholder: "Vul hier je link in...",
    learnMore: "Leer meer over phishing",
  },
  learnSection: {
    title: "Laat je niet vangen door <span class='text-secondary'>phishing</span>",
    subtitle:
      "oplichterij waarbij iemand via email of internet geheime financi??le gegevens afhandig worden gemaakt",
  },
  numberSection: {
    first: {
      title: "32 miljoen",
      subtitle: "euro gestolen door phishers",
    },
    second: {
      title: "3.200.000",
      subtitle: "verdachte berichten verstuurd",
    },
    third: {
      title: "3438",
      subtitle: "cases van phishing",
    },
  },
  infoSection: {
    first: {
      title: "Een diepere duik in phishing",
      description:
        "Phishing is een vorm van cybercriminaliteit. Hierbij probeert men aan gevoelige data van een persoon te geraken. Dit kan gaan van bank gegevens tot wachtwoorden of soms zelfs volledige identiteiten. Eens de phisher hier toegang toe heeft kan hij/zij grote schade aanrichten naar het slachtoffer toe.",
    },
    second: {
      title: "Verschillende vormen en maten",
      description:
        "Dit komt voor op verschillende manieren. De meest voorkomende zijn via email, sms en telefoon maar ook via sociale media of zelf QR-codes wordt er tegenwoordig al aan phishing gedaan. De phisher zal zich voordoen als iets of iemand anders, zoals een bank of een supermarkt, om zo je vertrouwen te winnen. Ze laten je allerlei gegevens invullen en krijgen zo toegang tot al je gevoelige data.",
    },
    third: {
      title: "En toen was er <span class='text-secondary'>BankCheck</span>",
      description:
        "Phishing is aan een stevige opmars bezig bewijzen de cijfers die hierboven staan vermeld. Daarom kwamen wij met het idee om BankCheck op te richten. Via BankCheck willen wij het bewustzijn rond phishing vergroten en zo ook de cijfers doen dalen. De kans dat, eens je gephished wordt, er geen weg meer terug is is groot. Daarom, laat jouw link checken en surf veiliger op het internet.",
    },
  },
};
