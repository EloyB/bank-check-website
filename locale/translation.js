export const activeLocale = (locale) => {
  return locale === "en-US" ? enUS : locale === "nl" ? nl : fr;
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
  errorPage: {
    description: {
      title: "What now?",
      paragraph:
        "Above all, do NOT visit the link!!! The chance that it is already too late from the moment you visit the link is high. Next you can use the form to report the phishing. You can indicate which bank the phisher pretended to be and you can briefly describe what they tried to make you do. This way we can report the data to the correct bank and take the necessary steps against this phisher.",
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
      "oplichterij waarbij iemand via email of internet geheime financiële gegevens afhandig worden gemaakt",
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
  errorPage: {
    description: {
      title: "Wat nu?",
      paragraph:
        "Bezoek de link vooral NIET!!! De kans dat het al te laat is vanaf dat je de link bezoekt is groot. Als volgende kan je via onderstaand formulier de phishing aangeven. Je kan aangeven als welke bank de phisher zich voordeed en je kan kort omschrijven wat ze jou probeerden te laten doen. Op deze manier kunnen wij de gegevens naar de juiste bank rapporteren en zo de nodige stappen ondernemen tegen deze phisher.",
    },
  },
};

const fr = {
  heroSection: {
    title: "Entrez votre <span class='text-secondary'>lien</span>",
    subtitle: "Et faites-le vérifier pour le phishing",
    inputPlaceholder: "Entrez votre lien ici...",
    learnMore: "En savoir plus sur le phishing",
  },
  learnSection: {
    title: "Ne vous laissez pas piéger par le <span class='text-secondary'>phishing</span>",
    subtitle:
      "Les escroqueries impliquant le vol d'informations financières confidentielles par courrier électronique ou par Internet",
  },
  numberSection: {
    first: {
      title: "32 millions",
      subtitle: "d'euros volés par des hameçonneurs",
    },
    second: {
      title: "3.200.000",
      subtitle: "de messages suspects envoyés",
    },
    third: {
      title: "3438",
      subtitle: "cas de phishing",
    },
  },
  infoSection: {
    first: {
      title: "Une plongée plus profonde dans le phishing",
      description:
        "Le phishing est une forme de cybercriminalité. Il s'agit d'essayer de mettre la main sur les données sensibles d'une personne. Il peut s'agir de coordonnées bancaires, de mots de passe ou même d'identités complètes. Une fois que le phisher a accès à ces données, il peut causer beaucoup de dommages à la victime.",
    },
    second: {
      title: "Différentes formes et tailles",
      description:
        "Cela se produit de différentes manières. Les plus courants sont le courrier électronique, les SMS et le téléphone, mais le phishing se fait aussi via les médias sociaux ou même les codes QR. Le phisher se fait passer pour quelque chose ou quelqu'un d'autre, comme une banque ou un supermarché, afin de gagner votre confiance. Ils vous demanderont de remplir toutes sortes de détails et auront accès à toutes vos données sensibles.",
    },
    third: {
      title: "Et puis il y a eu <span class='text-secondary'>BankCheck</span>",
      description:
        "Le phishing est en hausse, selon les chiffres ci-dessus. C'est pourquoi nous avons eu l'idée de créer BankCheck. Avec BankCheck, nous voulons sensibiliser les gens au phishing et en réduire le nombre. Le risque est grand qu'une fois que vous avez été victime d'un hameçonnage, vous ne puissiez plus revenir en arrière. Par conséquent, faites vérifier votre lien et surfez sur le web en toute sécurité.",
    },
  },
  errorPage: {
    description: {
      title: "Et maintenant?",
      paragraph:
        "Surtout, ne visitez PAS le lien ! !! Il y a de fortes chances qu'il soit déjà trop tard à partir du moment où vous visitez le lien. Ensuite, vous pouvez utiliser le formulaire pour signaler le phishing. Vous pouvez indiquer quelle banque le phisher a prétendu être et vous pouvez décrire brièvement ce qu'il a essayé de vous faire faire. De cette façon, nous pouvons signaler les données à la bonne banque et prendre les mesures nécessaires contre ce phisher.",
    },
  },
};
