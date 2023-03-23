import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  kotlin,
  vue,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  aws,
  nextjs,
  spring,
  snooper,
  unimelb,
  bjut,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  icon1,
  icon2,
  icon3,
  celloLogo,
  colorLogo,
} from "../assets";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Cello Teacher",
    icon: creator,
  },
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Startup Founder",
    company_name: "Only 4 U",
    icon: shopify,
    iconBg: "#383E56",
    date: "January 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Snooper",
    icon: snooper,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Apr 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Unimelb",
    icon: unimelb,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Designer",
    company_name: "BJUT",
    icon: bjut,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Stay hungry.<br /> Stay foolish.",
    name: "Steve Jobs",
    designation: "Co-founder, CEO of",
    company: "Apple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/1920px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
  },
  {
    testimonial:
      "I am a human being first,<br /> a musician second,<br /> a cellist third.",
    name: "Yo Yo Ma",
    designation: "World Famous ",
    company: "Cellist",
    image:
      "https://yt3.googleusercontent.com/ytc/AL5GRJX_x5sSBD4OiBOZrkGBZlKgbJzMfGN29rE5_u2A=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    testimonial: "Run, Forrest! <br /> Run!",
    name: "Forrest Gump",
    designation: "Movie released ",
    company: "in 1994",
    image:
      "http://cdn.shopify.com/s/files/1/1210/0178/products/41tc4K5iy9L_600x.jpg?v=1578027714",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.locate available jobs based on their current location. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.locate available jobs based on their current location. lorem ipsum dolor sit amet, consectetur adipiscing elit,",
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

const footerIcons = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/forrest-lin",
    icon: icon1,
  },
  {
    name: "github",
    link: "https://github.com/ASCII-768977",
    icon: icon2,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/forrest_lin_/",
    icon: icon3,
  },
];

const panelsData = [
  {
    name: "Unimelb",
    imageUrl:
      "https://images.unsplash.com/photo-1514395462725-fb4566210144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
  },
  {
    name: "Hugo",
    imageUrl:
      "https://images.unsplash.com/photo-1629624467541-f73ef8f12df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80",
  },
  {
    name: "Sydney",
    imageUrl:
      "https://images.unsplash.com/photo-1611927264378-faced7a32de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    name: "Cello",
    imageUrl:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80",
  },
  {
    name: "Adelaide",
    imageUrl:
      "https://images.unsplash.com/photo-1548565494-3621affe632f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

const toRotateText = [
  "Stay Enthusiastic",
  "Solution Focused",
  "High Efficiency",
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  toRotateText,
  footerIcons,
  panelsData,
};
