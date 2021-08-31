import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderBg = styled.div`
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5),
      rgb(0, 0, 0, 0.6)
    ),
    url("https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_1280.jpg");
  background-repeat: no-repeat;
`;

export default function Header() {
  return (
    <HeaderBg
      id="header"
      className="bg-fixed py-32 md:py-40 lg:py-0 bg-center md:bg-center bg-cover md:h-auto lg:h-screen "
    >
      <div className="w-11/12 md:w-9/12 h-full mx-auto flex flex-col justify-center items-start md:items-start text-white text-3xl md:text-5xl lg:text-7xl">
        <h1>Hey there!</h1>
        <h2 className="my-3 md:my-7">I'm Brown Pharadol</h2>
        <h2>Novice website developer</h2>
        <div className="flex mt-5">
          <a
            href="#about"
            className="rounded-md px-4 py-1 border-2 flex items-center justify-center text-sm md:text-2xl mt-3 md:mt-7 lg:mt-10 hover:bg-white hover:border-white hover:border-opacity-10 hover:bg-opacity-30 hover:-translate-y-3 transition duration-300"
          >
            Get to know me
          </a>
          <NavLink
            to={{
              pathname: "https://github.com/PharadolBrown/portfolio_react",
            }}
            target="_blank"
            className="flex rounded-md px-4 ml-5 lg:ml-10 py-1 border-2 border-purple-500 border-opacity-60 items-center justify-center text-sm md:text-2xl mt-3 md:mt-7 lg:mt-10 bg-purple-600 bg-opacity-60 hover:bg-purple-800 hover:border-white hover:border-opacity-10 hover:bg-opacity-60 hover:-translate-y-3 transition duration-300"
          >
            <h5 className="mr-2">Code This Web</h5>
            <img
              src="images/toolIcons/git-icon.png"
              alt=""
              className="w-4 md:w-8 ml-1"
            />
          </NavLink>
        </div>
      </div>
    </HeaderBg>
  );
}
