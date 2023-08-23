import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  reactjs,
  rails,
  ruby,
  creator,
  aws,
  tailwind,
  nodejs,
  mongodb,
  psql,
  git,
  docker,
  ssl,
  synopsys,
  assemble,
  carrent,
  jobit,
  tripguide,
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
    id: "testimonials",
    title: "Testimonials",
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
    icon: creator,
  },
  {
    title: "AWS Cloud Integrations",
    icon: backend,
  }
];

const technologies = [
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: 'Ruby',
    icon: ruby,
  },
  {
    name: "Ruby On Rails",
    icon: rails,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: psql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws
  }
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Assemble Inc.",
    icon: assemble,
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
    icon: ssl,
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
    company_name: "Synopsys",
    icon: synopsys,
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
      "Daniel Rubio has consistently demonstrated a remarkable ability to deliver both features and project work punctually. His strong time management skills, coupled with his technical expertise, have ensured that our team meets its deadlines effectively. Daniel's dedication to timely delivery has significantly contributed to the overall success of our projects.",
    name: "Dave Hayes",
    designation: "Technical Project Manager",
    company: "Assemble Inc.",
    image: "src/assets/testimonials/dave_hayes.png",
  },
  {
    testimonial:
      "Daniel's exceptional work ethic as a software engineer has significantly eased our QA process. His meticulous attention to detail and collaborative approach have streamlined testing efforts, leading to quicker bug identification and smoother releases. His commitment to quality highlights his profound understanding of QA's importance, and his contributions are truly commendable.",
    name: "Maida Asic",
    designation: "Lead Software Development Engineer in Test",
    company: "Assemble Inc.",
    image: "src/assets/testimonials/maida_asic.png",
  },
  {
    testimonial:
      "Daniel Rubio is an invaluable asset to our team as his work consistently reflects reliability and thoroughness. His meticulous approach to coding and problem-solving ensures that our projects are not only delivered on time but also with a high degree of quality. Daniel's commitment to producing dependable and comprehensive solutions greatly enhances our software development process.",
    name: "Zack Walkingstick",
    designation: "Software Developer",
    company: "Assemble Inc.",
    image: "src/assets/testimonials/zack_walkingstick.png",
  },
  {
    testimonial:
      "Working alongside Daniel Rubio has been a privilege, as his ability to swiftly adapt and contribute to diverse coding projects is truly impressive. His quick ramp-up time and versatility in collaborating with clients from various industries have consistently led to successful outcomes. Daniel's adeptness at navigating different technical landscapes underscores his prowess as a software engineer.",
    name: "Jayml Mistry",
    designation: "Software Engineer",
    company: "Assemble Inc.",
    image: "src/assets/testimonials/jayml_mistry.png",
  },
  {
    testimonial:
      "While ramping up at SSL.com, Daniel's exceptional proficiency in tackling intricate technical challenges is further highlighted by his adeptness in managing substantial tech debt and mission-critical code with sensitivity. His ability to navigate complex problems while ensuring the stability and reliability of critical systems underscores his prowess as a software engineer. Daniel's contributions in addressing multifaceted issues demonstrate his invaluable expertise and dedication to our team's success.",
    name: "Dustin Ward",
    designation: "Director of Software Engineering",
    company: "SSL.com",
    image: "src/assets/testimonials/dustin_ward.png",
  },
  {
    testimonial:
      "Daniel was a great asset when I first started at Blackduck with the OpenHub team. He helped me smoothly set up my environment, set me on my way, and even taught me some new tools along the way! My transition starting at Blackduck was made the more easier by Daniel.",
    name: "Matthew Krasnick",
    designation: "Principal Software Engineer.",
    company: "Synopsis Inc.",
    image: "src/assets/testimonials/matthew.jpeg",
  },
  {
    testimonial:
      "Working with Daniel has been a pleasure for our team. During the years we've been fortunate to have him with the OpenHub team, he has proven himself to be a quick learner, an effective developer, and a great friend.",
    name: "Peter Degen Portnoy",
    designation: "Software Engineer",
    company: "Synopsis Inc.",
    image: "src/assets/testimonials/peter.jpeg",
  }
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