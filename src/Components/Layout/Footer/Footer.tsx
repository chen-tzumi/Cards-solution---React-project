import { Footer as FbFooter } from "flowbite-react";
import { FaBriefcase, FaExclamation, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TRootState } from "../../../Store/BigPie";



const Footer = () => {
  const nav = useNavigate();
  const user = useSelector((state: TRootState) => state.UserSlice.user);

  return (
    <FbFooter
      container
      className="bg-slate-800"
    >

      <div
        className="flex justify-around w-full "
      >
        {user &&
          (<div
            className="flex flex-col text-white"
          >
            <FaHeart
              size={15}
              className="m-auto cursor-pointer"
              color="white"
              onClick={() => nav("/favorites")}
            />
            <p>Favorites</p>
          </div>)
        }

        <div className="flex flex-col text-white">
          <FaExclamation
            size={15}
            className="m-auto cursor-pointer"
            color="white"
            onClick={() => nav("/about")}
          />
          <p>About</p>
        </div>

        {user?.isBusiness &&
          (<div className="flex flex-col text-white">

            <FaBriefcase
              size={15}
              className="m-auto cursor-pointer"
              color="white"
              onClick={() => nav("/my-cards")}
            />
            <p>My Cards</p>
          </div>)
        }
      </div>
    </FbFooter>
  );
};

export default Footer;
