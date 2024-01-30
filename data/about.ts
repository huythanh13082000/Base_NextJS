export const Language: Array<{ name: string; icon: string }> = [
  {
    name: "Java",
    icon: "/images/Java.png",
  },
  {
    name: "Golang",
    icon: "/images/Go.png",
  },
  {
    name: "C++",
    icon: "/images/CPlusPlus.png",
  },
  {
    name: "C#",
    icon: "/images/CSharp.png",
  },
  {
    name: "Python",
    icon: "/images/Python.png",
  },
  {
    name: "HTML 5",
    icon: "/images/html.png",
  },
  {
    name: "CSS 3",
    icon: "/images/css.png",
  },
  {
    name: "Javascript",
    icon: "/images/JavaScript.png",
  },
  {
    name: "PHP",
    icon: "/images/Php.png",
  },
  {
    name: "Ruby",
    icon: "/images/Ruby.png",
  },
  {
    name: "Objective-c",
    icon: "/images/Object_C.png",
  },
  {
    name: "TypeScript",
    icon: "/images/Typescript.png",
  },
];

export const Framework: Array<{ name: string; icon: string }> = [
  {
    name: "React JS",
    icon: "/images/React.png",
  },
  {
    name: "Node JS",
    icon: "/images/NodeJs.png",
  },
  {
    name: "Sass",
    icon: "/images/Sass.png",
  },
  {
    name: "Flutter",
    icon: "/images/Flutter.png",
  },
  {
    name: "Unity3D",
    icon: "/images/Unity.png",
  },
  {
    name: "Angular",
    icon: "/images/Angular.png",
  },
  {
    name: "Spring",
    icon: "/images/Spring.png",
  },
  {
    name: "Laravel",
    icon: "/images/Laravel.png",
  },
  {
    name: "Lumen",
    icon: "/images/Lumen.png",
  },
  {
    name: "Wordpress",
    icon: "/images/Wordpress.png",
  },
  {
    name: "Vue",
    icon: "/images/Vue.png",
  },
];

export const Database: Array<{ name: string; icon: string }> = [
  {
    name: "MySQL",
    icon: "/images/Mysql.png",
  },
  {
    name: "PostgreSQL",
    icon: "/images/PostgreSQL.png",
  },
  {
    name: "MariaDB",
    icon: "/images/MariaDB.png",
  },
  {
    name: "MicrosoftSQL",
    icon: "/images/SqlServer.png",
  },
  {
    name: "DynamoDB",
    icon: "/images/DynamoDB.png",
  },
  {
    name: "Oracle",
    icon: "/images/OracleDB.png",
  },
  {
    name: "MongoDB",
    icon: "/images/MongoDB.png",
  },
];

export const OS: Array<{ name: string; icon: string }> = [
  {
    name: "Linux",
    icon: "/images/Linux.png",
  },
  {
    name: "MacOS",
    icon: "/images/Apple.png",
  },
  {
    name: "Ubuntu",
    icon: "/images/Ubuntu.png",
  },
];

export const Manager: Array<{ name: string; icon: string }> = [
  {
    name: "Click Up",
    icon: "/images/ClickUp.png",
  },
  {
    name: "Slack",
    icon: "/images/Slack.png",
  },
  {
    name: "Trello",
    icon: "/images/Trello.png",
  },
];

export const Docs: Array<{ name: string; icon: string }> = [
  {
    name: "Figma",
    icon: "/images/Figma.png",
  },
  {
    name: "MS Office",
    icon: "/images/Office.png",
  },
  {
    name: "Docs",
    icon: "/images/GoogleDocs.png",
  },
  {
    name: "Acrobat",
    icon: "/images/Acrobat.png",
  },
];

export const DesignTool: Array<{ name: string; icon: string }> = [
  {
    name: "Figma",
    icon: "/images/Figma.png",
  },
  {
    name: "Photoshop",
    icon: "/images/Photoshop.png",
  },
  {
    name: "Illustrator",
    icon: "/images/Illustrator.png",
  },
  {
    name: "Blender",
    icon: "/images/Blender.png",
  },
];

export const AboutCategory: Array<{
  title: string;
  listItem: Array<{ name: string; icon: string }>;
}> = [
  {
    title: "개발언어",
    listItem: Language,
  },
  {
    title: "프레임워크",
    listItem: Framework,
  },
  {
    title: "데이터베이스",
    listItem: Database,
  },
  {
    title: "운영 시스템",
    listItem: OS,
  },
  {
    title: "프로젝트 매니저",
    listItem: Manager,
  },
  {
    title: "기획",
    listItem: Docs,
  },
  {
    title: "디자인",
    listItem: DesignTool,
  },
];
