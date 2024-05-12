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
  golang,
  salesforce,
  nodejs,
  mongodb,
  git,
  aws,
  nextjs,
  php,
  spring,
  snooper,
  unimelb,
  bjut,
  huijin,
  jr,
  shopify,
  only4u,
  socialflare,
  jobradar,
  movielist,
  realtyhive,
  tax,
  easygrade,
  aurin,
  talkgenius,
  eshopping,
  threejs,
  icon1,
  icon2,
  icon3,
  celloLogo,
  colorLogo,
} from '../assets';

const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'project',
    title: 'Projects',
  },
  {
    id: 'hobby',
    title: 'Life',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Mobile Developer',
    icon: mobile,
  },
  {
    title: 'Cello Teacher',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'Vue JS',
    icon: vue,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Kotlin',
    icon: kotlin,
  },
  {
    name: 'Spring Boot',
    icon: spring,
  },

  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'Golang',
    icon: golang,
  },
  {
    name: 'Salesforce',
    icon: salesforce,
  },
];

const experiences = [
  {
    title: 'Freelance Full Stack Developer',
    company_name: 'Only 4 U',
    icon: only4u,
    iconBg: '#383E56',
    date: 'Jan 2023 - Present',
    points: [
      'Designed and developed an online booking and retail e-commerce website using Next.js and shopify for the client, integrated Stripe for seamless payment processing.',
      'Leveraged social media platforms such as Instagram to create a strong brand presence and engage with customers, resulting in a 15% increase in social media followers and improved brand awareness.',
      'Modularized complex functions into smaller, reusable components, promoted code reuse and simplified future development efforts.',
      'Established a streamlined CI/CD pipeline by using Git, Render and Vercel, increased deployment frequency by 20% and enabled frequent releases twice a week.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Snooper',
    icon: snooper,
    iconBg: '#E6DEDD',
    date: 'Jan 2022 - Apr 2022',
    points: [
      'Developed essential features such as searching and roster for admin pages and maintained the user phone app using React, Redux-Saga, and React-admin.',
      'Designed and implemented RestfulAPI using Java/Kotlin (SpringBoot) and Kafka for event-driven architecture.',
      'Conducted unit tests for React components with Enzyme and backend controllers with Mockito, improved system stability.',
      'Conducted regular code reviews and provided constructive feedback to team members, enhanced overall code quality and collaboration.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'JR Academy',
    icon: jr,
    iconBg: '#383E56',
    date: 'Jan 2021 - May 2021',
    points: [
      'Spearheaded the development of a comprehensive EasyGrade student management system using Figma, React, and Node.js (MERN stack), ensuring responsiveness and efficient data handling.',
      'Refactored and optimized legacy code related to image loading functionalities in the backend core codebase, decreased the loading time by 20%.',
      'Automated the deployment process by creating Docker scripts to deploy the web app to AWS EC2 and AWS S3 buckets.',
      'Successfully troubleshooted production incidents, released patches and executed hotfixes promptly.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Unimelb',
    icon: unimelb,
    iconBg: '#E6DEDD',
    date: 'Aug 2019 - Jun 2020',
    points: [
      'Implemented a web crawler using Tweepy api to extract real-time tweets and processed over 3 million tweets for sentiment analysis using Spark, enabling real-time insights.',
      'Adopted more efficient algorithms and data structures, improved the efficiency of key operations such as data retrieval and manipulation.',
      'Conceptualized and developed a prototype product, leveraged highly reusable Vue components and ensured responsiveness across the system.',
      'Established an efficient CI/CD pipeline using Ansible (YAML) and Docker scripts, simplified the deployment process.',
    ],
  },
  {
    title: 'Full Stack Developer & UI Designer',
    company_name: 'Beijing Huijin Technology Co., Ltd.',
    icon: huijin,
    iconBg: '#383E56',
    date: 'Feb 2016 - Feb 2017',
    points: [
      'Collaborated closely with the product team to implement the Shanxi Provincial Transportation Administration Page, gathered user requirements on meetings and assessed technical feasibility for the traffic management system.',
      'Customized company websites for diverse clients using Drupal plugins and designed website prototypes using Axure8.',
      'Translated customer requirements into technical documentation and implemented solutions using PHP, while also refactored and removed duplicate code segments to streamline execution paths and reduce redundancy.',
      'Conducted usability testing and gathered feedback from stakeholders to iterate and improve prototype designs, ensured user-centric solutions.',
    ],
  },
];

const testimonials = [
  {
    testimonial: 'Stay hungry.<br /> Stay foolish.',
    name: 'Steve Jobs',
    designation: 'Co-founder, CEO of',
    company: 'Apple',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/1920px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg',
  },
  {
    testimonial:
      'I am a human being first,<br /> a musician second,<br /> a cellist third.',
    name: 'Yo Yo Ma',
    designation: 'World Famous ',
    company: 'Cellist',
    image:
      'https://yt3.googleusercontent.com/ytc/AL5GRJX_x5sSBD4OiBOZrkGBZlKgbJzMfGN29rE5_u2A=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    testimonial: 'Run, Forrest! <br /> Run!',
    name: 'Forrest Gump',
    designation: 'Movie released ',
    company: 'in 1994',
    image:
      'http://cdn.shopify.com/s/files/1/1210/0178/products/41tc4K5iy9L_600x.jpg?v=1578027714',
  },
];

const projects = [
  {
    name: 'Social Flare',
    description: 'Introducing Social Flare - a dynamic and engaging social media platform designed to seamlessly connect users in a refreshing way. Boasting a user-friendly interface, Social Flare enables users to register and log in securely through JWT authentication, ensuring optimal privacy and security. Our platform supports diverse content sharing capabilities, allowing users to post photos or texts, curating their unique narrative. A robust friend system is in place to foster connections, making the journey on Social Flare a communal experience. Moreover, the platform facilitates personal profile customization, giving users the freedom to represent themselves authentically. Powered by MongoDB, React, and Redux-Toolkit, Social Flare harnesses the potency of these technologies to deliver a smooth and responsive user experience. The platform is flexible to user preferences with a switchable light and dark mode feature, accommodating varying viewing comforts. Join Social Flare today and experience the future of social networking, characterized by exceptional user experience, unrivaled security, and the freedom to express and connect.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node',
        color: 'pink-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'orange-text-gradient',
      },
    ],
    image: socialflare,
    source_link: 'https://github.com/ASCII-768977/Social-Flare',
    website_link: 'https://social-flare.netlify.app/',
    icon: 'github',
  },
  {
    name: 'Talk Genius',
    description:
      "Introducing TalkGenius, the ultimate chat experience powered by React, React Chat Engine, Node.js, Redux Toolkit, and ChatGPT 3.5. This innovative app allows users to log in and engage in seamless conversations with multiple participants, fostering lively interactions and enriching discussions. What sets TalkGenius apart is its built-in ChatGPT functionality, enabling users to ask questions and receive instant, AI-generated responses. Furthermore, ChatGPT will automatically complete users' sentences, ensuring smooth and coherent conversations. Discover the future of intelligent, interactive communication with TalkGenius, where technology and human connection harmoniously intertwine.",
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node',
        color: 'pink-text-gradient',
      },
      {
        name: 'ChatGPT',
        color: 'green-text-gradient',
      },
    ],
    image: talkgenius,
    source_link: 'https://github.com/ASCII-768977/Talk-Genius',
    website_link: 'https://talk-genius.netlify.app/',
    icon: 'github',
  },
  {
    name: 'Realty Hive',
    description:
      'Introducing the ultimate Real Estate Dashboard, a powerful and intuitive platform designed to revolutionize the way agents manage properties. Built using an impressive tech stack, including React, Node, Refine, Material UI, Google Cloud, Cloudinary, and TypeScript, this dashboard streamlines the entire property management process. Agents can effortlessly check data, post new listings, edit existing properties, and search for properties with ease. The visually appealing Material UI design, combined with the robust capabilities of Refine and Google Cloud, ensures a seamless and efficient experience. Unleash the potential of your real estate business with our cutting-edge Real Estate Dashboard, where innovation meets property management.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node',
        color: 'pink-text-gradient',
      },
      {
        name: 'Refine',
        color: 'orange-text-gradient',
      },
    ],
    image: realtyhive,
    source_link: 'https://github.com/ASCII-768977/Realty-Hive',
    website_link: 'https://realty-hive.netlify.app/',
    icon: 'github',
  },
  {
    name: 'Only 4 U',
    description:
      "Introducing Only 4 U, an exceptional online shopping experience for handmade, customized phone cases. Crafted with Next.js, Sanity, and Stripe, our eCommerce platform delivers a user-friendly and seamless journey, tailored to your unique style. Each one-of-a-kind phone case is lovingly crafted by skilled artisans to meet your exact specifications, ensuring a personalized touch that sets your device apart. Payment is a breeze with Stripe's secure processing, providing you with a worry-free shopping experience. Explore the creative world of Only 4 U, and elevate your phone's aesthetic with our exclusive, made-to-order cases that truly capture your individuality.",
    tags: [
      {
        name: 'Next',
        color: 'blue-text-gradient',
      },
      {
        name: 'Sanity',
        color: 'green-text-gradient',
      },
      {
        name: 'Stripe',
        color: 'orange-text-gradient',
      },
    ],
    image: eshopping,
    source_link: 'https://github.com/ASCII-768977/Eshopping',
    website_link: 'https://only4u.vercel.app/',
    icon: 'github',
  },
  {
    name: 'Job Radar',
    description: 'Presenting Job Radar, an innovative job search application crafted to simplify your professional journey. Built using React Native, Expo, and the robust RapidAPI, Job Radar is a testament to the power of cutting-edge technologies in delivering a seamless and intuitive job hunting experience. Job Radar takes pride in its effective search functionality, allowing users to explore various job opportunities from a vast database. Our application provides comprehensive job details, ensuring users have all the information they need at their fingertips. Every job posting is meticulously detailed, offering essential insights into the role, company, and application process. One standout feature is our streamlined application process - a simple click on the Apply button instantly redirects users to the application page, eliminating unnecessary steps and hassle. This direct application feature optimizes the user journey, making it as straightforward as possible. Dive into Job Radar today and experience the future of job searching. Our application is dedicated to creating a user-focused platform, simplifying the job hunt process with efficiency and precision. With Job Radar, your ideal job is just a click away.',
    tags: [
      {
        name: 'React Native',
        color: 'blue-text-gradient',
      },
      {
        name: 'Rapid API',
        color: 'orange-text-gradient',
      },
    ],
    image: jobradar,
    source_link: 'https://github.com/ASCII-768977/Job-Radar',
    website_link:
      'https://expo.dev/@forrestlin/Job-Search?serviceType=classic&distribution=expo-go',
    icon: 'github',
  },
  {
    name: 'Movie List',
    description: 'Introducing our movie list website, a vibrant platform dedicated to film enthusiasts worldwide. Developed using React and the useContext hook, our site is designed to provide an intuitive and interactive movie browsing experience. Our website retrieves data from a local JSON database, showcasing a wide range of films to cater to diverse tastes. Users can peruse through existing playlists, and enjoy the flexibility of adding or deleting playlists as per their preference. In addition, users have the liberty to add movies to these playlists, enabling personalized curation. To enhance usability, our site comes equipped with a comprehensive search bar and pagination, aiding users in effortlessly locating their desired films. This user-centric approach allows for a seamless browsing experience, letting users navigate through large movie databases with ease. Moreover, our site houses a practical sorting function that arranges movies alphabetically or by release date. This feature adds another layer of convenience for users, making the exploration of films more organized and enjoyable. Join us at our movie list website today and experience an exciting new way to discover and curate films. With our user-focused design and powerful features, your cinematic journey is just a click away.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Context Api',
        color: 'orange-text-gradient',
      },
    ],
    image: movielist,
    source_link: 'https://github.com/ASCII-768977/ClickViewInterview',
    website_link: 'https://clickview-demo.netlify.app/home',
    icon: 'github',
  },
  {
    name: 'Tax Calculator',
    description:
      "The online tax calculator is a user-friendly tool that simplifies the process of calculating estimated taxable income. Built with React and Redux, users can input their country of residence, income year, and total taxable income to obtain an accurate estimate. The calculator offers a hassle-free experience, and users can easily access it from any device with an internet connection. Moreover, the online tax calculator is designed with the user's privacy and security in mind. It employs advanced encryption and data protection measures to ensure that all user information remains confidential and secure. The tool also provides helpful tips and explanations to guide users through the tax calculation process, making it a useful resource for individuals and businesses alike. With its intuitive interface and reliable functionality, the online tax calculator is an ideal solution for those seeking a quick and easy way to determine their estimated taxable income while ensuring the privacy and security of their personal information.",
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Redux-toolkit',
        color: 'green-text-gradient',
      },
    ],
    image: tax,
    source_link: 'https://github.com/ASCII-768977/React-Tax-Calculator',
    website_link: 'https://react-tax-calculator-demo.netlify.app/',
    icon: 'github',
  },
  {
    name: 'Easy Grade',
    description:
      'Easy-Grade is an efficient teaching management system that allows students to submit assignments, teachers to grade them, and students to register for courses. This system utilizes key technologies such as React.js, TypeScript, TSLint, Sass, JavaScript ES6, Ant Design, Responsive Web Design, Redux, Redux-saga, Docker, MongoDB, Koa.js, Koa middleware, RESTful APIs, Postman, Tests, React-hooks, Sprint planning, Agile, and Figma. The system includes a MongoDB database to store data, and RESTful APIs for front-end and back-end interaction. Axios is used for sending requests and the system employs reusable components built with functional components and React hooks. A global Sass style with unified naming conventions is used to avoid global variable pollution. Additionally, the team followed Test-Driven Development methodology and conducted daily stand-up meetings during Agile/Scrum project management.The system is deployed on AWS S3 and EC2 and offers an easy-to-use interface for both teachers and students to manage assignments and courses. Overall, Easy-Grade is an effective teaching management system that offers comprehensive functionality and is supported by a strong technology stack.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Redux-Saga',
        color: 'pink-text-gradient',
      },
    ],
    image: easygrade,
    source_link: 'https://www.youtube.com/watch?v=yTDXZiF4SWc&t=354s',
    website_link: '',
    icon: 'youtube',
  },
  {
    name: 'Sentiment Analysis',
    description:
      "We've created a web platform for data analysis on Twitter, which is a popular platform for people to communicate and express opinions. Our platform focuses on analyzing Australia's sentiment and attitudes towards China, Covid-19, and happiness. To achieve this, we use Ansible for automated deployment, the Stream and Search API to collect English tweets, and the Vader_Lexicon for sentiment analysis. We also incorporate data on population age, number, and income from Aurin to generate sentiment analysis charts that help to explore different views and attitudes on the specified topics. Additionally, we've created a simple linear regression model to further explore the emotions of Australians based on the collected data. Finally, we've analyzed areas for platform improvement and future expansion plans. Our platform provides valuable insights for understanding public opinion and sentiments on important topics.",
    tags: [
      {
        name: 'Vue',
        color: 'blue-text-gradient',
      },
      {
        name: 'Flask',
        color: 'green-text-gradient',
      },
      {
        name: 'Spark',
        color: 'pink-text-gradient',
      },
    ],
    image: aurin,
    source_link: 'https://www.youtube.com/watch?v=UeD7XCTFyeg&t=204s',
    website_link: '',
    icon: 'youtube',
  },
];

const footerIcons = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/forrest-lin',
    icon: icon1,
  },
  {
    name: 'github',
    link: 'https://github.com/ASCII-768977',
    icon: icon2,
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/forrest_lin_/',
    icon: icon3,
  },
];

const panelsData = [
  {
    name: 'Unimelb',
    imageUrl:
      'https://images.unsplash.com/photo-1514395462725-fb4566210144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
  },
  {
    name: 'Hugo',
    imageUrl:
      'https://images.unsplash.com/photo-1629624467541-f73ef8f12df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80',
  },
  {
    name: 'Sydney',
    imageUrl:
      'https://images.unsplash.com/photo-1611927264378-faced7a32de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    name: 'Cello',
    imageUrl:
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80',
  },
  {
    name: 'Adelaide',
    imageUrl:
      'https://images.unsplash.com/photo-1548565494-3621affe632f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
];

const toRotateText = [
  'Stay Enthusiastic',
  'Solution Focused',
  'High Efficiency',
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
