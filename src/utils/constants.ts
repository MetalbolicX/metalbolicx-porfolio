export const sections: string[] = ["home", "about", "portfolio", "contact"];

export const navIcons: string[] = [
  "home",
  "user",
  "briefcase",
  "envelope-open",
];

export const urls: {
  resume: string;
  github: string;
  linkedin: string;
} = {
  resume:
    "https://drive.google.com/file/d/1KJUYhwVzopvN4IQnaRUfr1YGqlBCfeQ6/view?usp=sharing",
  github: "https://github.com/MetalbolicX",
  linkedin:
    "https://www.linkedin.com/in/jos%C3%A9-mart%C3%ADnez-santana-340bab216/",
};

export const personalInfoContact: {
  location: string;
  email: string;
  education: string;
  phone: string;
  languages: string;
} = {
  location: "State of Mexico, Mexico",
  email: "jose.martinez.santana@gmail.com",
  education: "UAEMex, MSc. Materials science",
  phone: "+527225126091",
  languages: "Spanish (native), English",
};

export const projectsUrls: {
  d3jslibrary: string;
  gowebserver: string;
  materialsscience: string;
} = {
  d3jslibrary: `${urls.github}/common-charts-js`,
  gowebserver: `${urls.github}/vanilla-go-webserver`,
  materialsscience:
    "https://www.sciencedirect.com/science/article/abs/pii/S0254058421005265",
};


const devIconUrl: string = [
  "https://cdn.jsdelivr.net",
  "gh",
  "devicons",
  "devicon",
  "icons",
].join("/");

export const technologiesKnown: {
  techName: string;
  orgUrl: string;
  iconUrl: string;
}[] = [
  {
    techName: "html5",
    orgUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    iconUrl: `${devIconUrl}/html5/html5-original.svg`,
  },
  {
    techName: "css3",
    orgUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    iconUrl: `${devIconUrl}/css3/css3-original.svg`,
  },
  {
    techName: "javascript",
    orgUrl: "https://developer.mozilla.org/en-US/docs/Web/javascript",
    iconUrl: `${devIconUrl}/javascript/javascript-original.svg`,
  },
  {
    techName: "d3js",
    orgUrl: "https://d3js.org",
    iconUrl: `${devIconUrl}/d3js/d3js-original.svg`,
  },
  {
    techName: "typescript",
    orgUrl: "https://www.typescriptlang.org/",
    iconUrl: `${devIconUrl}/typescript/typescript-original.svg`,
  },
  {
    techName: "golang",
    orgUrl: "https://go.dev",
    iconUrl: `${devIconUrl}/go/go-original.svg`,
  },
  {
    techName: "python",
    orgUrl: "https://wwww.python.org",
    iconUrl: `${devIconUrl}/python/python-original.svg`,
  },
  {
    techName: "git",
    orgUrl: "https://github.com",
    iconUrl: `${devIconUrl}/git/git-original.svg`,
  },
  {
    techName: "Microsoft Excel",
    orgUrl: "https://www.microsoft.com/en-us/microsoft-365/excel",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
  },
  {
    techName: "SQL",
    orgUrl: "https://en.wikipedia.org/wiki/SQL",
    iconUrl: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",

  }
];

export const emailVerifyKey: string = "ca1bcca51e124d2a9c5b2ebbe41856e8";