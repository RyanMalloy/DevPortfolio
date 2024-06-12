import ReactLogo from "../../assets/images/logos/ReactLogo.js";
import CSSLogo from "../../assets/images/logos/CSSLogo.js";
import HTMLLogo from "../../assets/images/logos/HTMLLogo.js";
import NodeLogo from "../../assets/images/logos/NodeLogo.js";
import FigmaLogo from "../../assets/images/logos/FigmaLogo.js";
import IllustratorLogo from "../../assets/images/logos/IllustratorLogo.js";
import JavaScriptLogo from "../../assets/images/logos/JavascriptLogo.js";
import ExpoLogo from "../../assets/images/logos/ExpoLogo.js";
import PythonLogo from "../../assets/images/logos/PythonLogo.js";
import SQLLogo from "../../assets/images/logos/SQLLogo.js";
import CSharpLogo from "../../assets/images/logos/CSharpLogo.js";
import JavaLogo from "../../assets/images/logos/JavaLogo.js";
import FirebaseLogo from "../../assets/images/logos/FirebaseLogo.js";
import AzureLogo from "../../assets/images/logos/AzureLogo.js";

const SkillData = {
  skillWebDev: {
    title: "Web Development",
    subTitle: "HTML/CSS & JavaScript",
    logos: [HTMLLogo, CSSLogo, JavaScriptLogo],
    content: "Advanced in designing responsive web layouts with HTML5 and CSS3, and proficient in crafting interactive web interfaces using JavaScript, especially React.",
  },
  skillDesign: {
    title: "Design & UI/UX",
    subTitle: "Figma / Adobe Illustrator",
    logos: [FigmaLogo, IllustratorLogo],
    content: "Extensively utilized Figma and Adobe Illustrator for prototyping, wireframing, and designing front-end projects, emphasizing user experience and interface design.",
  },
  skillFullStack: {
    title: "Full Stack Development",
    subTitle: "React / Node.js",
    logos: [ReactLogo, NodeLogo],
    content: "Skilled in full stack development using React for frontend and Node.js for backend, ensuring efficient and scalable web applications.",
  },
  skillMobileDev: {
    title: "Mobile Development",
    subTitle: "React Native & Expo",
    logos: [ReactLogo, ExpoLogo],
    content: "Proficient in developing cross-platform mobile applications using React Native and Expo. Skilled in leveraging Expo's tools to improve app performance and accessibility on both Android and iOS platforms.",
  },
  skillBackend: {
    title: "Backend Development",
    subTitle: ".NET Core / Node.js",
    logos: [CSharpLogo, NodeLogo],
    content: "Experienced in developing backend solutions using .NET Core and Node.js, ensuring robust and scalable application architectures.",
  },
  skillDatabase: {
    title: "Database Management",
    subTitle: "SQL / NoSQL",
    logos: [SQLLogo, FirebaseLogo],
    content: "Proficient in writing efficient SQL queries and managing NoSQL databases. Experienced in using tools like Azure Data Studio and Firebase for data storage and retrieval.",
  },
  skillCloud: {
    title: "Cloud Services",
    subTitle: "Azure / CI/CD",
    logos: [AzureLogo],
    content: "Skilled in managing CI/CD pipelines and deploying applications using Azure, ensuring efficient and reliable deployment processes.",
  },
  skillProgrammingLanguages: {
    title: "Programming Languages",
    subTitle: "Python / C# / Java",
    logos: [PythonLogo, CSharpLogo, JavaLogo],
    content: "Proficient in multiple programming languages including Python, C#, and Java, allowing for flexibility and versatility in software development.",
  },
};

export default SkillData;
