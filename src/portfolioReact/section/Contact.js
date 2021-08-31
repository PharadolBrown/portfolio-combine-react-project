import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import style from "./Animation.css";

export default function Contact() {
  const contactIcons = [
    {
      urlImg: "images/contactIcon/facebook-icon-orange.png",
      urlContact: "https://www.facebook.com/profile.php?id=100007375695301",
      id: uuidv4(),
    },
    {
      urlImg: "images/contactIcon/ig-icon-orange.png",
      urlContact: "https://www.instagram.com/brown.pharadol/",
      id: uuidv4(),
    },
    {
      urlImg: "images/contactIcon/twitter-icon-orange.png",
      urlContact: "https://twitter.com/damon01945",
      id: uuidv4(),
    },
  ];
  const iconContactElements = contactIcons.map((contactIcon) => {
    return (
      <NavLink
        to={{
          pathname: `${contactIcon.urlContact}`,
        }}
        target="_blank"
        key={contactIcon.id}
        className="iconShake"
      >
        <img
          src={contactIcon.urlImg}
          alt=""
          className=" w-7 md:w-8 lg:w-10 mx-2 rounded-md"
        />
      </NavLink>
    );
  });
  return (
    <div id="contact" className="py-10 md:py-14 lg:py-16 bg-gray-800 mt-44">
      <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto text-white text-center text-xs lg:text-sm">
        <p className="font-bold">PortfolioBrown</p>
        <div className="flex justify-center my-2">{iconContactElements}</div>
        <p>Pharadol Nuanphin | Front end developer</p>
        <p>Gmail : brown01945@gmail.com | Phone : 0956143323</p>
        <hr className="my-1" />
        <p>Website developed for Apply for an internship at Dek-D company</p>
        <p className="text-gray-400">© copyright PortfolioBrown 2021 All Rights Reserved</p>
      </div>
    </div>
  );
}
