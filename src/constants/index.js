import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend API Development",
    icon: web,
  },
  {
    title: "Full Stack Development",
    icon: mobile,
  },
  {
    title: "Front End Development",
    icon: backend,
  },
  {
    title: "AWS Cloud Integrations",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Assemble Inc.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2021 - March 2023",
    points: [
      "Scaled CSV parsing and uploading of promotional codes with load volumes ranging into the millions. Additionally scaled for client report downloading as well using AWS services.",
      "Designed and implemented e-commerce database models and API backend integration for React frontend consumption both with SQL/NoSQL implementations.",
      "Authored API wrapper to accommodate legacy V1 functionality and new V2 application with third party client applications.",
      "Created and implemented rails engines modules to refactor API code functionality across applications.",
      "Wrote both frontend React UI and backend Rails REST API routes for client product development.",
      "Created Single Sign On role and permission dashboard for in house applications."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "SSL.com",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2019 - Jan 2021",
    points: [
      "Wrote SSL certificate status scanning features utilizing OpenSSL coupled with AWS SQS & AWS Lambda",
      "Implemented domain prevalidation features for http, https, and cname procedures.",
      "Automated developer onboarding utilizing Vagrant to package fully prepared developer environments eliminating uptime to a few hours maximum.",
      "Introduced and implemented CircleCI & CodeClimate for faster and automated development testing and integration.",
      "Created new Amazon Ec2 instances for staging, development, and qa environments.",
      "Replaced Capistrano with AWS Codedeploy to facilitate deployments among various target environments.",
      "Fixed and resurrected rest api functionality for domain issuance and billing api endpoints."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Synopsis",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2014 - Jan 2018",
    points: [
      "Transferred email notifications and events to utilize AWS SES, SNS, and SQS fanout architecture.",
      "Rewrote core application components from Rails 2.3 to 4.1 using test driven development",
      "Created cron job pipeline script to reduce and eliminate spam email accounts.",
      "Implemented data visualization features using Javascript & Highcharts API.",
      "Managed, upgraded, configured, and secured PostgreSQL from 9.2, 9.3, 9.4, & 9.5.",
      "Installed, configured, and automated new developer environments with Vagrant & Puppet.",
      "Served as a mentor to summer interns regarding the application tech web architecture, functionality, and workflow."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };