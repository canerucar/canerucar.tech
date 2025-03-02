import GiderimLogo from "@/components/blocks/giderim-logo";
import IconGithub from "@/components/icons/github";
import { IconSmashing } from "@/components/icons/smashing";
import { IconWorld } from "@tabler/icons-react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formattedDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
export const formattedDateTimeline = (
  date: string,
  formatOpts?: Intl.DateTimeFormatOptions | undefined
) =>
  new Date(date).toLocaleDateString(
    "en-US",
    formatOpts
      ? formatOpts
      : {
          year: "numeric",
        }
  );

export const navItems = [
  { href: "/", label: "Readme" },
  { href: "/changelog", label: "Changelog" },
  // { href: "/notes", label: "Notes" }, // disabled for now
  { href: "/projects", label: "Projects" },
  { href: "/stack", label: "Stack" },
];

export const careerItems = [
  /* 
  {
    from: 2021,
    to: null,
    title: "Software Manager & Lead Developer",
    company: { name: "Defter", url: "https://birdefter.com" },
    location: "Istanbul, Turkey",
    description:
      "I am currently working at Defter as a Software Manager & Lead Developer.",
    subRoles: [
      {
        from: 2019,
        to: 2021,
        title: "Full Stack Developer",
        company: { name: "Defter", url: "https://birdefter.com" },
        location: "Podgorica, Montenegro",
        description:
          "I was responsible for the development of the company's CRM products.",
      },
    ],
  },
  */
  
  {
    from: '2025 Şubat',
    to: 'Present',
    title: "Senior Frontend Developer",
    company: { name: "Linkera", url: "" },
    location: "Istanbul, Turkey",
    description: [
    ].join("\n"),
  },
  {
    from: '2024 Ağustos',
    to: '2025 Ocak',
    title: "Senior Software Engineer",
    company: { name: "carvak.com", url: "" },
    location: "Istanbul, Turkey",
    description: [
      "We are the Turkish brand of Kavak, one of the world's largest second-hand car buying and selling platforms.",
      "",
      "We are developing araba.com, carvak.com and in-house backoffice projects. We manage them in pairs with frontend and backend teams in 2-week sprints. During these processes, I had the chance to be more involved in the architectural side of the projects.",
      "",
      "HTML, CSS, SASS, JavaScript, React, Vue, Angular, TypeScript, Nextjs, Tailwidcss, Docker, Jira, Gitlab, Github, Git, Figma, ArgoCD",
    ].join("\n"),
  },
  {
    from: '2022 Kasım',
    to: '2024 Ağustos',
    title: "Frontend Developer",
    company: { name: "n11.com", url: "" },
    location: "Istanbul, Turkey",
    description: [
      "n11.com is an open market e-commerce platform operating in Turkey and providing business-to-consumer sales services via the Internet.",
      "",
      "worked project",
      "n11.com, m.n11.com, so.n11.com, magazadestek.n11.com",
      "",
      "HTML, CSS, SASS, JavaScript, jQuery, AJAX, React JS, Vue JS, Jira, Bitbucket, Figma, Git",
    ].join("\n"),
  },
  {
    from: '2022 Temmuz',
    to: '2022 Kasım',
    title: "Frontend Developer",
    company: { name: "Etstur", url: "" },
    location: "Istanbul, Turkey",
    description: [
      "I took part in the HotelAgent and Operation teams within Etstur. I took part in the development of hotels' websites, reservation systems, and the admin panels they use. I had the opportunity to work on the bug fix and features development side of the projects.",
      "",
      "HTML, CSS, SASS, Bootstrap, JavaScript, jQuery, AJAX, Jira, Bitbucket, Figma, Git",
    ].join("\n"),
  },
  {
    from: '2022 Ocak',
    to: '2022 Temmuz',
    title: "Frontend Developer",
    company: { name: "Appcent", url: null },
    location: "Istanbul, Turkey",
    description: [
      "Appcent is a company bringing together developers, designers, trainers, curious minds, and team players who aim to transform businesses digitally with the help of the latest technology and our expertise.",
      "",
      "worked project : pinaronline.com",
      "",
      "React, Redux Toolkit, Nextjs, Git, Figma, Trello, Jira, Bitbucket",
    ].join("\n"),
  },
  {
    from: '2020 Ekim',
    to: '2022 Ocak',
    title: "Frontend Developer",
    company: { name: "Akinon", url: null },
    location: "Istanbul, Turkey",
    description: [
      "Akinon is a global software development company that provides state-of-the-art omnichannel solutions for the top retail brands worldwide.",
      "Some worked projects : Samsung, Tefal, Converse, Koton, Flo, LCW, U.S. POLO, Damat, Under Armour; for more: https://www.akinon.com/customer",
      "",
      "HTML (Jinja (template engine)), CSS (SASS, Bootstrap, Tailwind CSS), JavaScript (jQuery, Web Components), Git, Bitbucket, Jira, Zeplin",
    ].join('\n'),
  },
  {
    from: '2020 Şubat',
    to: '2020 Ekim',
    title: "Frontend Developer & MW Administrator",
    company: { name: "PrimeIT Bilişim A.Ş", url: null },
    location: "Istanbul, Turkey",
    description: [
      "I made developments on the frontend side of the database analysis project to be used in the MW admin management processes of various banks and within the banks themselves.",
      "",

      "- Html, CSS, JavaScript, Node.js, Github, Bitbucket, MySQL"
    ].join("\n"),
  },
  {
    from: '2019 Kasım',
    to: '2020 Ocak',
    title: "Intern - Software Developer",
    company: { name: "Skyland A.Ş", url: "" },
    location: "Istanbul, Turkey",
    description: [
      "It's my university professor's company. Here we carry out frontend and backend mobile transformations for large retail companies.",
      "",
    
      "- iOS (Swift), Java (Spring Boot), Git, Bitbucket",
    ].join('\n'),
  },
  {
    from: '2017 Ağustos',
    to: '2017 Eylül',
    title: "Intern - Network System Technician",
    company: { name: "Seri Bilgi Teknolojileri", url: "" },
    location: "Istanbul, Turkey",
    description:
      "During my short-term university internship, I worked in the company's network system unit.",
  },
  {
    from: '2014 Eylül',
    to: '2015 Haziran',
    title: "Intern - Network System Technician",
    company: { name: "Aras Kargo", url: null },
    location: "Istanbul, Turkey",
    description:
      "I did my internship in the system and network unit of the headquarters for about 1 year.",
  },
];

const dateFormat = {
  day: {
    year: "numeric" as const,
    month: "long" as const,
    day: "numeric" as const,
  },
  month: {
    year: "numeric" as const,
    month: "long" as const,
  },
  year: {
    year: "numeric" as const,
  },
};

const changelogItems: Array<{
  date: string;
  event: string;
  title: string;
  description?: string;
  icon?: string;
  dateFormatOptions?: (typeof dateFormat)[keyof typeof dateFormat];
  photos?: Array<{ src: string; variant: "1x1" | "4x3" | "4x5" }>;
}> = [
  {
    date: "2023-08-05",
    event: "First car",
    title: "Fiat Egea Hatchback red (2019 model)",
    icon: "🚗",
    dateFormatOptions: dateFormat.month,
    photos: [
      {
        src: "/changelog/first-car-1.jpg",
        variant: "4x5",
      },
      {
        src: "/changelog/first-car-2.jpg",
        variant: "4x5",
      },
    ],
  },
  {
    date: "2024-05-06",
    event: "New website",
    title: "canerucar.tech",
    description: "Finally, I have published own personal website.",
    icon: "🚀",
    dateFormatOptions: dateFormat.day,
  },
  {
    date: "2022-09-15",
    event: "Military Service",
    title: "Short term military service",
    description:
      "I served in the Turkish Armed Forces for 26 days as a short-term military service.",
    icon: "🎖️",
    dateFormatOptions: dateFormat.month,
    photos: [
      {
        src: "/changelog/asker-1.jpg",
        variant: "1x1",
      },
      {
        src: "/changelog/asker-2.jpg",
        variant: "1x1",
      },
    ],
  },
  {
    date: "2016-09-01",
    event: "Education",
    title: "I started my university education at Medipol University",
    description: "",
    icon: "🎓",
  },
  {
    date: "2012-10-15",
    event: "Introduction to software",
    title: "First encounter with software during high school",
    description:
      "I wrote my first for loop in programming class",
    icon: "🧑‍💻",
    },
  {
    date: "2011-05-10",
    event: "Firs Computer",
    title: "A Vestel brand laptop.",
    description:
      "The first day my father and I bought the computer, my brother and our neighbor's kid spilled fruit juice on the computer. 😑",
    icon: "🧑‍💻",
  },
  {
    date: "1997-05-16",
    event: "Born",
    title: "I was born in 🇹🇷 Kadıköy, İstanbul.",
    description: "I am the first child of the family and I have a younger brother.",
    icon: "👶🏻",
    dateFormatOptions: dateFormat.day,
    photos: [
      {
        src: "/changelog/caner.jpg",
        variant: "4x3",
      },
      {
        src: "/changelog/caner-2.jpg",
        variant: "1x1",
      },
      {
        src: "/changelog/caner-3.jpg",
        variant: "4x3",
      },
    ],
  },
] as const;

export const changelog = changelogItems.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

//homepage opensource hover projects
export const projects = [
  /* 
  {
    name: "gider.im (Website)",
    githubSlug: "needim/gider.im-website",
    released: "2024-05-26",
    description: "Privacy focused income & expense tracking app.",
    logo: <GiderimLogo className="size-10" />,
    links: [
      {
        href: "https://gider.im",
        label: "Website",
        icon: IconWorld,
      },
      {
        href: "https://github.com/needim/gider.im-website",
        label: "GitHub",
        icon: IconGithub,
      },
    ],
    metrics: [],
    featured: true,
  },*/
  {
    name: "canerucar.tech",
    githubSlug: "canerucar/caner.ucar",
    released: "2025-01-01",
    logo: <></>,
    deprecated: true,
    description: "You're currently browsing my personal website.",
    links: [{ href: "/", label: "Website", icon: IconWorld }],
    featured: false,
    metrics: [],
  },
];
