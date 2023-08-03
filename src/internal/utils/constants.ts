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
  education: "UAEMex, M.Sc. Materials Science",
  phone: "+520447225126091",
  languages: "Spanish (native), English",
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
  },
  {
    techName: "VBA",
    orgUrl: "https://learn.microsoft.com/en-us/office/vba/library-reference/concepts/getting-started-with-vba-in-office",
    iconUrl: "https://wyday.com/images/lm/langs/vba.1.svg",
  }
];

export const emailVerifyKey: string = "ca1bcca51e124d2a9c5b2ebbe41856e8";

export const workJobs: {
  duration: string;
  name: string;
  place: string;
  activities: string[];
}[] = [
  {
    duration: "2018 - present",
    name: "Certified personal trainer",
    place: "Self employment",
    activities: ["Muscle gain.", "Fat loss."]
  },
  {
    duration: "2018 - present",
    name: "Data analysts",
    place: "Freelance",
    activities: ["Microsoft Excel tutoring.", "Data visualization."]
  },
  {
    duration: "2015 - 2017",
    name: "Master's research student",
    place: "Conjunto Centro de Investigación Química Sustentable",
    activities: ["Data curation.", "Research writing."]
  },
  {
    duration: "2012 - 2013",
    name: "Project and product engineer",
    place: "ElringKlinger Mexico",
    activities: ["Project managment.", "Quality test."]
  }
];

export const projects: {
  imageurl: string;
  descriptionurl: string;
  title: string;
  summary: string;
  projecturl: string;
  iconclass: string;
}[] = [
  {
    imageurl: "https://cdn.pixabay.com/photo/2021/05/11/17/21/charts-6246450_1280.png",
    descriptionurl: "#",
    title: "D3 js library for common data visualization charts",
    summary: "Forget to rewrite the code of the sames graphs in D3 js.",
    projecturl: `${urls.github}/common-charts-js`,
    iconclass: "fab fa-github"
  },
  {
    imageurl: "https://cdn.pixabay.com/photo/2020/06/25/14/21/server-icons-5339848_1280.png",
    descriptionurl: "#",
    title: "Go web server",
    summary: "Your personal basic robust web server.",
    projecturl: `${urls.github}/vanilla-go-webserver`,
    iconclass: "fab fa-github"
  },
  {
    imageurl: "https://ars.els-cdn.com/content/image/X02540584.jpg",
    descriptionurl: "#",
    title: "Master degree research publication",
    summary: "Meet some semiconductor nanoparticles.",
    projecturl: "https://www.sciencedirect.com/science/article/abs/pii/S0254058421005265",
    iconclass: "fa-brands fa-researchgate"
  }
]