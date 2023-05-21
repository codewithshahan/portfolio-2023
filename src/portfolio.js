/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Md. Shahan Ahmed Chowhdhury's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shahan Chowhdhury's Portfolio",
    type: "website",
    url: "https://shahanportfolio.netlify.app",
  },
};

//Home Page
const greeting = {
  title: "Md. Shahan Ahmed Chowdhury",
  logo_name: "Shahan Chowdhury",
  nickname: "codewithshahan",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/codewithshahan",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/codewithshahan",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/codewithshahan/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/c/programmingwithshahan",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:codewithshahan@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/shahanmedic",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/codewithshahan",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/codewithshahan/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Content Creator & Writer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Making video content for programming and health related concepts",
        "⚡ Technical writer and collaborator in freecodecamp.org, dev.to and Medium",
        "⚡ Able to explain complex concept through animation videos using my own voiceover",
      ],
      softwareSkills: [
        {
          skillName: "Blog Writing",
          fontAwesomeClassname: "logos-pen",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Technical Writing",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Digital Marketing",
          fontAwesomeClassname: "logos-world",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SEO Marketing",
          fontAwesomeClassname: "ion-logo-high",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Professional Video Creator",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Web development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sylhet Government Model School & College",
      subtitle: "HSC, Science, GPA 5.00 (out of 5.00)",
      logo_path: "iiitk_logo.png",
      alt_name: "Sylhet Government Model School & College",
      duration: "2018-2020",
      descriptions: [
        "⚡ I have studied Higher Math, English, Biology, Chemistry, Physics and ICT",
        "⚡ Apart from this, I have done courses on content creation, HTML/CSS and Web Design.",
        "⚡ I was selected for 1st place on Math Quizzes and Trivia competition held on 12th February 2019 in this college. I have also received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.sgmsc.edu.bd/",
    },
    {
      title: "Israb Ali High School & College",
      subtitle: "SSC, Science, GPA 4.56 (out of 5.00)",
      logo_path: "iu_logo.png",
      alt_name: "Israb Ali High School & College",
      duration: "2016-2018",
      descriptions: [
        "⚡ I have studied Basic of Bangla, English, Physics, Math, Chemistry and ICT.",
        "⚡ Apart from this, I have also attended in debate club.",
        "⚡ During my time at this school, I was also associated with English speaking club where the students, teachers and guardians gathered together for school events and greetings.",
      ],
      website_link: "https://www.facebook.com/Official.Iac/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Code for Android Apps",
      subtitle: "- Mimo",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1VikEqg7TWPg1c5045ZxsgaQsPIFnhkn9/view",
      alt_name: "Mimo",
      color_code: "#8C151599",
    },
    {
      title: "White Hat Hacking Certification",
      subtitle: "- Mimo",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1AejHDfH4egZV1NMtSxQoCDOC1AvzwqX0/view",
      alt_name: "Mimo",
      color_code: "#4285F499",
    },
    {
      title: "Google Digital Marketing Certification",
      subtitle: "- Google",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1-wv661fuPLcJ47maneBXKE29-vTrwRSG/view?usp=sharing",
      alt_name: "Digital Marketing",
      color_code: "#00000099",
    },
    {
      title: "CSS Certification",
      subtitle: "- HackerRank",
      logo_path: "google_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/48f6158b560a",
      alt_name: "HackerRank",
      color_code: "#0C9D5899",
    },
    {
      title: "Typing Speed Certification (72 WPM)",
      subtitle: "- typing.com",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.typing.com/student/verify#249616118-143859356",
      alt_name: "typing.com",
      color_code: "#1F70C199",
    },
    {
      title: "Python Programming Certification",
      subtitle: "- Programming Hub",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://storage.googleapis.com/programminghub/certificate%2F1596444797020.pdf",
      alt_name: "Programmng Hub",
      color_code: "#D83B0199",
    },
    {
      title: "Programming in C++ Certification",
      subtitle: "- Programming Hub",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://storage.googleapis.com/programminghub/certificate%2F1596609056882.jpg",
      alt_name: "Programming Hub",
      color_code: "#1F70C199",
    },
    {
      title: "Best Performer on Math & Trivia Quizzes Certication",
      subtitle: "- Sylhet Govt. Model School & College",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/12zvIfahaYzaA14SpdtPIOS-kvMuBALW4/view?usp=share_link",
      alt_name: "Model College",
      color_code: "#0C9D5899",
    },
    {
      title: "JavaScript Algorithoms & Data Structures Certification",
      subtitle: "- Freecodecamp.org",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/fcc39eb77ef-b99b-4a09-962f-d4cf769eb195/javascript-algorithms-and-data-structures",
      alt_name: "freecodecamp.org",
      color_code: "#00000099",
    },
    {
      title: "Responsive Web Design Certification",
      subtitle: "- Freecodecamp.org",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/fcc39eb77ef-b99b-4a09-962f-d4cf769eb195/responsive-web-design",
      alt_name: "Freecodecamp.org",
      color_code: "#2A73CC",
    },
    {
      title: "Higher Secondary School Certificate (HSC)",
      subtitle: "- Sylhet Govt. Model School & College",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1FtzWRoA-OnXZhDY1Xovu-qowyQapHGUa/view?usp=share_link",
      color_code: "#2A73CC",
    },
    {
      title: "Secondary School Certificate (SSC)",
      subtitle: "- Israb Ali High School & College",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1uIDYY_Dxa0e1x4ZEJhrOfm-cG0AHq8Wy/view?usp=share_link",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups & Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Web Developer",
          company: "Learner's Hub",
          company_url: "https://learnershubsylhet.netlify.app/",
          logo_path: "legato_logo.png",
          duration: "Aug 2022 - Present",
          location: "Mousumi-1, Mirabazar, Sylhet, Bangladesh",
          description:
            "Learner's Hub is dedicated to helping international students navigate the complex world of education, from selecting the right course or program to developing the skills and knowledge they need to achieve their ambitions in the UK, USA, Australia & Canada. My responsibility is to build and maintain websites for this company with beautiful user interfaces.",
          color: "#0879bf",
        },
        {
          title: "Technical Writer on Software Development (Remote Work)",
          company: "Freecodecamp.org",
          company_url: "https://www.freecodecamp.org/news/author/shahan/",
          logo_path: "legato_logo.png",
          duration: "October 2021 - Present",
          location: "San Francisco, California, United States",
          description:
            "As a technical writer at freecodecamp.org, my primary role is to create clear, concise, and comprehensive documentation for software development topics. I work closely with the software development team to understand complex concepts and translate them into user-friendly language that is accessible to learners at all levels of expertise.",
          color: "#0879bf",
        },
        {
          title: "Coding Instructor",
          company: "YouTube (Programming with Shahan)",
          company_url: "https://www.youtube.com/c/programmingwithshahan",
          logo_path: "muffito_logo.png",
          duration: "Dec 2019 - Present",
          location: "Work From Home",
          description:
            "As a coding instructor on my YouTube channel, I provide comprehensive tutorials and guidance for full-stack development. Through my videos, I teach viewers how to build and deploy web applications using various programming languages, frameworks, and tools. I focus on breaking down complex concepts into digestible explanations, enabling learners to acquire practical coding skills and gain confidence in their abilities.",
          color: "#9b1578",
        },
        {
          title: "Article Writer",
          company: "Dev.to, Medium.com",
          company_url: "https://dev.to/codewithshahan",
          logo_path: "freecopy_logo.png",
          duration: "Sep 2021 - Present",
          location: "Work From Home",
          description:
            "As an article writer for both dev.to and medium.com, my focus is on frontend and backend development. I specialize in creating content that covers various aspects of coding, from the user interface to the server-side logic. In addition to writing, I incorporate beautiful whiteboard animations to enhance the visual experience and make complex concepts more easily understandable. I aim to provide informative and engaging articles that cater to developers of all levels, helping them enhance their skills and stay updated with the latest trends in the world of web development.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Author (CSS Text only Course - Remote Work)",
          company: "Educative Inc",
          company_url: "https://www.educative.io/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - July 2022",
          location: "Bellevue, Washington, USA",
          description:
            "As an author for Educative Inc, I contributed to the creation of a CSS text-only course. This involved writing content that focused specifically on the styling and formatting of text using CSS (Cascading Style Sheets). The course aimed to provide learners with comprehensive knowledge and practical examples of using CSS to manipulate text elements in web development. My contributions included designing and structuring the course content, providing clear explanations, and offering relevant exercises to reinforce the concepts taught. The goal was to empower learners to enhance their CSS skills and effectively style text for compelling web designs.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Open Source Developer",
          company: "Aviyel",
          company_url:
            "https://aviyel.com/post/3868/how-has-open-source-benefited-you-in-your-journey",
          logo_path: "github_logo.png",
          duration: "Oct 2020 - Nov 2020",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. ",
          color: "#181717",
        },
        {
          title: "Startup Voluteerships",
          company: "Save Sylhet",
          company_url: "https://savesylhet.org/",
          logo_path: "github_logo.png",
          duration: "April 2020 - Nov 2022",
          location: "811, West world shopping city, Sylhet 3100",
          description:
            "Save Sylhet is the largest social youth platform in Sylhet Division. There are 263 distinct projects included in it, such as Sylhet Blood Center, Sylhet Wonder Women, and Startup Sylhet, Sylhet Jobs, Shoraikhana, Mission Three Million Trees, Sylhet Cycling Club, Sylhet Runners Club, Sylhet Sports Center, Sylhet Olympiad, etc. ",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Amazing Dice Game Using JavaScript",
      createdAt: "2021-04-06T16:26:54Z",
      description:
        "The basic premise of the game is this: you roll six dice. You take out the dice that have scored points and then decide whether to keep that score or re-roll the remaining dice to try to score more points. But if you roll again and don't score points, you lose what you've earned so far.",
      url: "https://dice-game-shahan.netlify.app/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Fullstack Mobile App using React Native (E-commerce App)",
      createdAt: "2021-02-06T16:26:54Z",
      description:
        "Download the ExpoGo app and scan the QR code to run this app on your phone. This app user interface (Frontend) has built using JavaScript Framework Reac Native and I used Node.js, express & MongoDB for Backend",
      url: "https://expo.dev/@codewithshahan/bikroy",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name:
        "RESTful APIs with Node, Express and MongoDB for Movie Service (Backend)",
      createdAt: "2021-05-06T16:26:54Z",
      description:
        "Get the genres, movies, users, golden users, and more using this API endpoint.",
      url: "http://shahan-vidly.herokuapp.com/api/genres",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Professional Banking website using plain JavaScript (frontend)",
      createdAt: "2021-09-06T16:26:54Z",
      description: "This website was written using plain javascript",
      url: "https://bankist-shahan.netlify.app/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Cloud Hosting Website using Plain HTML CSS (Frontend)",
      createdAt: "2020-12-06T16:26:54Z",
      description:
        "A beautiful cloud hosting website using pure HTML CSS & JavaScript ",
      url: "https://shahanify.netlify.app/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile-image.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 12 hours. I can help you with Frontend and Backend Development using HTML, CSS, JavaScript, Node.js, React.js, React Native, Express, MongoDB and Python",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to make them a better developer over time.",
    link: "https://dev.to/codewithshahan",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Monsorpur, Bade Dewrail-3190, Zokinganj, Sylhet",
    avatar_image_path: "address_image.svg",
    location_map_link: "24.939087703897794, 92.38771791641445",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
