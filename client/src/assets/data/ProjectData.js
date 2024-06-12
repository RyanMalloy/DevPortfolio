import ReactLogo from "../../assets/images/logos/ReactLogo.js";
import NodeLogo from "../../assets/images/logos/NodeLogo.js";
import CSharpLogo from "../../assets/images/logos/CSharpLogo.js";
import FirebaseLogo from "../../assets/images/logos/FirebaseLogo.js";
import AzureLogo from "../../assets/images/logos/AzureLogo.js";
import Neo4jLogo from "../../assets/images/logos/Neo4jLogo.js";
import TypeScriptLogo from "../../assets/images/logos/TypeScriptLogo.js";
import MUILogo from "../../assets/images/logos/MUILogo.js";
import visualBanner from "../../assets/images/banners/VisualLite.png";
import cryptoBanner from "../../assets/images/banners/CryptoOrderBook.png";
import reachBanner from "../../assets/images/banners/Reach.png";
import portfolioBanner from "../../assets/images/banners/Portfolio.png";

const ProjectData = {
  visualLite: {
    banner: visualBanner,
    title: "VisualLite",
    subTitle: "Database Visualization Web App",
    logos: [ReactLogo, NodeLogo, FirebaseLogo, Neo4jLogo, CSharpLogo],
    content: "Led the development of a beer recommendation web app using React for the frontend, C# for backend logic, and Firebase for real-time data storage and retrieval.",
    link: "https://github.com/RyanMalloy/VisualLite",
  },
  crypto: {
    banner: cryptoBanner,
    title: "Crypto Order Book",
    subTitle: "Cryptocurrency Tracker",
    logos: [TypeScriptLogo, ReactLogo, NodeLogo],
    content: "Built a cryptocurrency tracker using React for the frontend, Node.js for backend logic, and Firebase for real-time data storage and retrieval.",
    link: "https://github.com/RyanMalloy/crypto-order-book",
  },
  reach: {
    banner: reachBanner,
    title: "Reach",
    subTitle: "Social Media Web App",
    logos: [ReactLogo, NodeLogo, FirebaseLogo, AzureLogo],
    content: "Developed a social media web app using React for the frontend, Node.js for backend logic, and Firebase for real-time data storage and retrieval.",
    link: "https://www.reachsocial.app/",
  },
  portfolio: {
    banner: portfolioBanner,
    title: "Portfolio",
    subTitle: "My Portfolio Website",
    logos: [ReactLogo, MUILogo, AzureLogo],
    content: "Designed and developed my portfolio website using React for the frontend, Material-UI for styling, and Azure for deployment.",
    link: "https://www.ryan-malloy.com/",
  },
};

export default ProjectData;
