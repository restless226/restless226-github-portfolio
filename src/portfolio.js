/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rohit Pendse",
  title: "Hi all, I'm Rohit",
  subTitle: emoji(
    "🚀 A passionate Full Stack Developer having 2 years of experience in building web applications with React.js, Node.js, Redux, JavaScript, TypeScript, MicroServices and some other cool libraries and frameworks. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1abYzjjDV5cC3oi54aaN1RkkNnp0N0N3b/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/rohit-pendse-13465019b/",
  gmail: "rapendse2002@gmail.com",
  github: "https://github.com/restless226",
  leetcode: "https://leetcode.com/restless226/",
  medium: "https://medium.com/@rapendse2002",
  stackoverflow: "https://stackoverflow.com/users/15107307/rohit-pendse",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Full Stack Developer",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Experience in driving cross-functional initiatives and navigating dynamic product lifecycles with agility and precision."
    ),
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    // {
    //   skillName: "TypeScript",
    //   fontAwesomeClassname: ""
    // },
    // {
    //   skillName: "MicroServices",
    //   fontAwesomeClassname: "fab fa-skill"
    // },
    {
      skillName: "Elastic Search",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "ci/cd",
    //   fontAwesomeClassname: "fab fa-ci-cd"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    // {
    //   skillName: "kubernetes",
    //   fontAwesomeClassname: "fab fa-kubernetes"
    // },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    }
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // }
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pune Institute of Computer Technology",
      logo: require("./assets/images/PICT.png"),
      subHeader: "Bachelor of Engineering - Information Technology",
      duration: "2019 - 2023",
      desc: "CGPA: 9.40"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Ashok Vidyalaya & Junior College",
      logo: require("./assets/images/ashok_vidyalaya.png"),
      subHeader: "HSC - Computer Science",
      duration: "2017 - 2019",
      desc: "Percentage: 82.46%"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming Languages",
      progressPercentage: "80%"
    },
    {
      Stack: "Developer Tools",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Berkadia",
      companylogo: require("./assets/images/berkadia.png"),
      date: "July 2023 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developed 630D (Cash Management Software) to empower analysts for validation of over 1 lakh financial statements records enabling seamless data transfer with enhanced performance metrics and ensured flawless transactions.",
        "Spearheaded feature for sending Email Notifications via Amazon SES and integrated email templates from AWS S3, currently deployed in 25+ email use cases.",
        "Utilized Microservices to create CQRS based workflows and implemented schema migrations for various indexes using Elastic Search, while designing, developing, and maintaining REST APIs using Node.js and TypeScript.",
        "Developed interactive dashboards using React.js to showcase eforms featuring advanced filters, search, and sorting capabilities while utilizing Redux.js for effective state management.",
        "Implemented CI/CD Pipelines and deployments using Azure DevOps and unit test cases using Jest to achieve code coverage above 85%."
      ],
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1myNsCN-TotV8poTk-N_JfSz5Gb5iPmRI/view"
        }
      ]
    },
    {
      role: "Junior Software Developer Intern",
      company: "SAMBUQ",
      companylogo: require("./assets/images/sambuq.png"),
      date: "Nov 2022 – Feb 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Implemented Flutter Web Plugins and state management techniques to develop frontend of health-tech web application.",
        "Integrated REST APIs and fixed application bugs in demo and production environment."
      ],
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/15xFTGDF0jKgoSkzsfc57G5fUCz67OFXj/view"
        },
        {
          name: "Video",
          url: "https://drive.google.com/file/d/1ioM_IZ_XMycakFgItz4ju_okmoBdMNhj/view"
        },
        {
          name: "Live",
          url: "https://carefirst360-demo.web.app/"
        }
      ]
    },
    {
      role: "Intern Associate Technology",
      company: "FlexiEle Consulting Services Pvt. Ltd.",
      companylogo: require("./assets/images/flexiele.png"),
      date: "Feb 2022 - May 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Implemented queries and mutations in GraphQL to integrate the backend for Social Media Android App.",
        "Built live screens for Feed, News, Reels using Flutter and Stateful Widgets / Providers."
      ],
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/17evJ1SYUDugHUfArgHMknlaTTxSDHeYM/viewg"
        },
        {
          name: "Video",
          url: "https://drive.google.com/file/d/1SnoRmSS8G9GYp-91bJ5ws3q2r86gmiTF/view"
        },
        {
          name: "APK",
          url: "https://drive.google.com/file/d/1Fdor0QvS-HC3q57BNWblbikkkASLBm2_/view"
        }
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/algoanalytics.png"),
      projectName: "Defect Detection in Manufacturing (aQuality)",
      projectDesc: [
        "Contributed in building live analytical dashboards for Operator and Admin logins using Chart.js for the project titled as Defect Detection in Manufacturing.",
        "Implemented REST APIs for user and part operations using Node.js and managed reports with MongoDB by integrating YOLOv7 for defect detection."
      ],
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/19oHQurAg5DXyUmXNhTCUPrYUX7Oa_XsW/view"
        },
        {
          name: "Live",
          url: "https://drive.google.com/drive/folders/197aaLxK3MGIh5v0ThxCUk-k1AnWf9t7K"
        },
        {
          name: "Publication",
          url: "https://drive.google.com/file/d/1JD9Nkznl_4Yo0TJzLEJMs3a4eODJD8J4/view"
        }
        //  you can add extra buttons here.
      ]
    }
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Berkadia iCON Hackathon 2024 Finalist",
      subtitle: "Achieved Runner-Up Award at the Berkadia iCON Hackathon 2024.",
      image: require("./assets/images/berkadia.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: []
    },
    {
      title: "Frontend Developer (React) Certificate",
      subtitle:
        "Signifies that an individual has demonstrated proficiency in building interactive and responsive user interfaces using the React JavaScript library.",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.hackerrank.com/certificates/1d7bd20f02cd"
        }
      ]
    },
    {
      title: "4* Coder at Codechef (Max Rating - 1854)",
      subtitle:
        "Secured Global Rank 658 among 4674 participants in Div. 2 CodeChef January CookOff 2022.",
      image: require("./assets/images/codechef.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "CodeChef Profile",
          url: "https://www.codechef.com/users/rapendse_123/"
        }
      ]
    },
    {
      title: "Flipkart GRiD 4.0 - Software Development Challenge",
      subtitle:
        "Team Runtime Terror has participated in the Level 1: E-Commerce & Tech Quiz of the Flipkart GRiD 4.0 - Software Development Challenge organised by the Flipkart .",
      image: require("./assets/images/flipkartgrid.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1NT1Qj3BV70fE5i1o13iI_VRWBZmnamCu/view?usp=sharing"
        }
      ]
    },
    {
      title: "Google Hash Code 2022 Qualification Round",
      subtitle:
        "Google Hash Code 2022 was a team-based programming competition organized by Google for students and professionals.",
      image: require("./assets/images/googlehashcode.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1AgxRuntPMpp33rSq_2vyqoV4Bzvg2Dsu/view"
        }
      ]
    },
    {
      title: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
      subtitle:
        "The Ultimate MySQL Bootcamp introduces you to a solid foundation in databases in a way that’s both informative and engaging.",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-25b69d08-e5fe-4ba8-92f5-5aea93a76219/"
        }
      ]
    },
    {
      title: "Global Rank 2026 in CSGCC-2021",
      subtitle:
        "Secured Global Rank 2026 among 20k+ participants in Credit Suisse Global Coding Challenge (CSGCC-2021).",
      image: require("./assets/images/creditsuisse.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: []
    },
    {
      title: "Algorithmic Toolbox",
      subtitle:
        "This online course covers basic algorithmic techniques and ideas for computational problems arising frequently in practical applications.",
      image: require("./assets/images/coursera.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.coursera.org/account/accomplishments/verify/XRCUMXM35WLZ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  // subtitle:
  //   "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8766925932",
  email_address: "rapendse2002@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
