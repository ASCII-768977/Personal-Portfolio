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
  jr,
  shopify,
  tax,
  easygrade,
  aurin,
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
    title: "Co-Founder",
    company_name: "Only 4 U",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using Shopify and other related technologies.",
      "Leveraged social media platforms such as Instagram to create a strong brand presence and engage with customers, resulting in a 15% increase in social media followers and improved brand awareness.",
      "Created a user-friendly and intuitive product customization process that improved customer satisfaction and increased repeat business by 25%.",
      "Built and maintained strong relationships with suppliers and manufacturers to ensure high-quality and timely delivery of custom products.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Snooper",
    icon: snooper,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Apr 2022",
    points: [
      "Developing and maintaining web applications using React.js, Redux-Saga, React-Admin, SpringBoot and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Writing unit tests and integration tests for all feature and participating in code reviews and providing constructive feedback to other developer.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "JR Academy",
    icon: jr,
    iconBg: "#383E56",
    date: "Jan 2021 - May 2021",
    points: [
      "Led the development of an efficient student management system utilizing key technologies such as React.js, TypeScript, TSLint, Sass, and Ant Design, ensuring a responsive and user-friendly interface.",
      "Implemented Redux and Redux-saga to manage data flow, ensuring optimal performance and data consistency throughout the application.",
      "Designed and developed a robust RESTful API utilizing Koa.js and middleware such as koa-router and koa-bodyparser, ensuring seamless front-end and back-end communication.",
      "Followed Test-Driven Development (TDD) approach, conducting unit tests, and utilizing tools such as Postman to ensure functionality, quality, and reliability of the application.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Unimelb",
    icon: unimelb,
    iconBg: "#E6DEDD",
    date: "Feb 2018 - Dec 2020",
    points: [
      "Developed and deployed two websites for sentiment analysis of historical and real-time Twitter data using key technologies such as Vue.js, Flask, JQuery, CouchDB, and Nginx, ensuring efficient data collection, storage, and visualization.",
      "Utilized Ansible and Nectar cloud service for fully automated deployment, streamlining the process of generating instances, configuring virtual environments, and building network servers.",
      "Designed and developed intuitive UI using HTML5, CSS3, Vanilla JavaScript, and Bootstrap, ensuring seamless user experience and engagement.",
      "Conducted sentiment analysis using Python, Spark, and Chart.js, providing insightful data visualization and meaningful analysis for specified attributes such as COVID-19.",
      "Possess a Master of Information Technology from the University of Melbourne, providing a solid foundation in information technologies, design patterns, and programming languages such as JavaScript, Sql, and PHP.",
    ],
  },
  {
    title: "Web Designer",
    company_name: "BJUT",
    icon: bjut,
    iconBg: "#383E56",
    date: "Sep 2013 - Jun 2017",
    points: [
      "Working as a Web Prototype Designer at Beijing Huijin Technology Co., Ltd.",
      "Designed and completed the prototype of a website using Axure8, ensuring clear and concise representation of the website's functionality and design.",
      "Collaborated with the development team and provided active feedback to improve the product's design and functionality.",
      "Participated in database design and utilized Agile development methodologies, ensuring timely delivery of the product while maintaining high quality standards.",
      "Possess a Bachelor of Computer Science from Beijing University of Technology, providing a solid foundation in computer science, software development, and programming languages such as Java, C, and Python.",
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
    name: "Tax Calculator",
    description:
      "The online tax calculator is a user-friendly tool that simplifies the process of calculating estimated taxable income. Built with React and Redux, users can input their country of residence, income year, and total taxable income to obtain an accurate estimate. The calculator offers a hassle-free experience, and users can easily access it from any device with an internet connection. Moreover, the online tax calculator is designed with the user's privacy and security in mind. It employs advanced encryption and data protection measures to ensure that all user information remains confidential and secure. The tool also provides helpful tips and explanations to guide users through the tax calculation process, making it a useful resource for individuals and businesses alike. With its intuitive interface and reliable functionality, the online tax calculator is an ideal solution for those seeking a quick and easy way to determine their estimated taxable income while ensuring the privacy and security of their personal information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
    ],
    image: tax,
    source_link: "https://github.com/ASCII-768977/React-Tax-Calculator",
    icon: "github",
  },
  {
    name: "Easy Grade",
    description:
      "Easy-Grade is an efficient teaching management system that allows students to submit assignments, teachers to grade them, and students to register for courses. This system utilizes key technologies such as React.js, TypeScript, TSLint, Sass, JavaScript ES6, Ant Design, Responsive Web Design, Redux, Redux-saga, Docker, MongoDB, Koa.js, Koa middleware, RESTful APIs, Postman, Tests, React-hooks, Sprint planning, Agile, and Figma. The system includes a MongoDB database to store data, a Koa.js and Node.js server, and RESTful APIs for front-end and back-end interaction. Axios is used for sending requests and the system employs reusable components built with functional components and React hooks. A global Sass style with unified naming conventions is used to avoid global variable pollution. Additionally, the team followed Test-Driven Development methodology and conducted daily stand-up meetings during Agile/Scrum project management.The system is deployed on AWS S3 and EC2 and offers an easy-to-use interface for both teachers and students to manage assignments and courses. Overall, Easy-Grade is an effective teaching management system that offers comprehensive functionality and is supported by a strong technology stack.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-saga",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: easygrade,
    source_link: "https://www.youtube.com/watch?v=yTDXZiF4SWc&t=354s",
    icon: "youtube",
  },
  {
    name: "Sentiment Analysis",
    description:
      "We've created a web platform for data analysis on Twitter, which is a popular platform for people to communicate and express opinions. Our platform focuses on analyzing Australia's sentiment and attitudes towards China, Covid-19, and happiness. To achieve this, we use Ansible for automated deployment, the Stream and Search API to collect English tweets, and the Vader_Lexicon for sentiment analysis. We also incorporate data on population age, number, and income from Aurin to generate sentiment analysis charts that help to explore different views and attitudes on the specified topics. Additionally, we've created a simple linear regression model to further explore the emotions of Australians based on the collected data. Finally, we've analyzed areas for platform improvement and future expansion plans. Our platform provides valuable insights for understanding public opinion and sentiments on important topics.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "spark",
        color: "pink-text-gradient",
      },
    ],
    image: aurin,
    source_link: "https://www.youtube.com/watch?v=UeD7XCTFyeg&t=204s",
    icon: "youtube",
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
