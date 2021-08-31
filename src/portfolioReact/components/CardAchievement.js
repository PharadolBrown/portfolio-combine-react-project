import { NavLink } from "react-router-dom";

export default function CardAchievement(props) {
  const { InfoEachCard } = props;

  return (
    <div className="flex flex-col w-full shadow-lg rounded-md border-2 hover:border-gray-500 hover:shadow-xl transition duration-300 cursor-pointer bg-white">
      <NavLink
        to={{
          pathname: `${InfoEachCard.toWeb}`,
        }}
        target="_blank"
        className="flex flex-col"
      >
        <div className="flex justify-around h-48">
          <img
            className="object-cover object-center rounded-t-md "
            src={InfoEachCard.url}
            alt=""
          />
        </div>
        <div className="p-3">
          <h3 className="text-xl mb-1">{InfoEachCard.title}</h3>
          <p className="text-sm pb-5">{InfoEachCard.description}</p>
          <div className="flex font-bold text-white ">
            <NavLink
              to={{
                pathname: `${InfoEachCard.toWeb}`,
              }}
              // to={InfoEachCard.toWeb}
              target="_blank"
              className="px-2 py-1 rounded-md border-2 text-sm mr-2 bg-yellow-500 hover:bg-yellow-600 transition duration-300"
            >
              website
            </NavLink>
            <NavLink
              to={{
                pathname: `${InfoEachCard.toCode}`,
              }}
              target="_blank"
              className="flex px-2 py-1 rounded-md border-2 text-sm text-white bg-purple-600 hover:bg-purple-800 transition duration-300"
            >
              <h5 className="mr-2">Code</h5>
              <img src="images/toolIcons/git-icon.png" width="20px" alt="" />
            </NavLink>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
