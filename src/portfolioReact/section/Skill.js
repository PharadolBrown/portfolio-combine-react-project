import { v4 as uuidv4 } from "uuid";
import style from "./Animation.css";

export default function Skill() {
  const skills = [
    {
      url: "images/skillIcons/screen-icon.png",
      text: "Develop web application Interaction to users.",
      id: uuidv4(),
    },
    {
      url: "images/skillIcons/mobile-icon.png",
      text: "Responsive design layout for all devices is a top priority.",
      id: uuidv4(),
    },
    {
      url: "images/skillIcons/learning-icon.png",
      text: "Constantly continues to learn new technologies.",
      id: uuidv4(),
    },
  ];

  const toolIcons = [
    {
      url: "images/toolIcons/html-icon.png",
      id: uuidv4(),
    },
    {
      url: "images/toolIcons/css-icon.png",
      id: uuidv4(),
    },
    {
      url: "images/toolIcons/js-icon.png",
      id: uuidv4(),
    },
    {
      url: "images/toolIcons/git-icon.png",
      id: uuidv4(),
    },
    {
      url: "images/toolIcons/react-icon.jpg",
      id: uuidv4(),
    },
    {
      url: "images/toolIcons/tailwind-icon.png",
      id: uuidv4(),
    },
    {
      url: "images/toolIcons/typeScript-icon.png",
      id: uuidv4(),
    },
    {
      url: "images/toolIcons/jQuery-icon.png",
      id: uuidv4(),
    },
  ];

  const skillsElements = skills.map((eachSkill) => {
    return (
      <div className="flex flex-col items-center" key={eachSkill.id}>
        <img src={eachSkill.url} alt="" className="w-24 mb-5 iconShake" />
        <p className="text-xs md:text-sm">{eachSkill.text}</p>
      </div>
    );
  });
  const skillToolElements = toolIcons.map((eachTool) => {
    return (
      <div
        key={eachTool.id}
        className="mx-auto w-12/12 md:9/12 lg:w-6/12 flex justify-center items-center"
      >
        <img
          src={eachTool.url}
          alt=""
          className="w-full md:w-9/12 lg:w-full iconShake"
        />
      </div>
    );
  });
  return (
    <div
      className="w-11/12 pb-20 md:w-9/12 h-full mx-auto text-center py-5 md:py-20 text-3xl md:text-5xl flex flex-col justify-center items-center border-b-2 border-gray-300 "
      id="skill"
    >
      <h1 className="my-5 md:my-10">SKILLS</h1>
      <div className="mx-auto grid grid-cols-3 md:grid-cols-3 gap-5 w-12/12 md:9/12 lg:w-9/12">
        {skillsElements}
      </div>
      <div className="mx-auto grid grid-cols-3 gap-3 w-10/12 md:w-full md:grid-cols-4 justify-center lg:px-20 mt-16 md:mt-20">
        {skillToolElements}
      </div>
    </div>
  );
}
