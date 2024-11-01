import React from 'react';
import { Navbar, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TRootState } from "../../../Store/BigPie";
import { userActions } from "../../../Store/UserSlice";
import { CiSearch } from "react-icons/ci";
import { useTheme } from '../../../styles/ThemeContext/ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { searchActions } from "../../../Store/SearchSlice";

const Header = () => {
  const user = useSelector((state: TRootState) => state.UserSlice.user);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();


  const logout = () => {
    dispatch(userActions.logout());
    nav("/");
  };

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(searchActions.searchWord(value));
  };

  return (
    <Navbar
      fluid
      rounded
      className="bg-slate-800"
    >
      <Navbar.Brand
        as={Link}
        to={"/"}
        href="/"
      >
        <span
          className="self-center text-xl font-semibold text-white whitespace-nowrap"
        >
          CardSolution
        </span>
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse>

        <Navbar.Link
          as={Link}
          to={"/"}
          href="/"
          className="text-white"
        >
          Home
        </Navbar.Link>

        <Navbar.Link
          as={Link}
          to={"/About"}
          href="/About"
          className="text-white"
        >
          About
        </Navbar.Link>

        <button
          onClick={toggleTheme}
          className="flex items-center"
        >
          {isDarkMode ? (
            <SunIcon
              className="w-6 h-6 text-white"
            />
          ) : (
            <MoonIcon
              className="w-6 h-6 text-white"
            />
          )}
        </button>



        {!user && (
          <><Navbar.Link
            as={Link}
            to={"/signin"}
            href="/signin"
            className="text-white"
          >
            Sign In
          </Navbar.Link>

            <Navbar.Link
              as={Link}
              to={"/signup"}
              href="/signup"
              className="text-white"
            >
              Sign Up
            </Navbar.Link></>
        )}

        {user && (
          <Navbar.Link
            className="text-white cursor-pointer"
            onClick={logout}
          >
            Sign Out
          </Navbar.Link>

        )}

        {user && (
          <>
            <Navbar.Link
              as={Link}
              to={"/profile"}
              href="/profile"
              className="text-white"
            >
              Profile
            </Navbar.Link>

            <Navbar.Link
              as={Link}
              to={"/favorites"}
              href="/favorites"
              className="text-white"
            >
              Favorites
            </Navbar.Link>

            {user.isBusiness && (
              <Navbar.Link
                as={Link}
                to={"/my-cards"}
                href="/my-cards"
                className="text-white"
              >
                My Cards
              </Navbar.Link>
            )}
          </>
        )}

      </Navbar.Collapse>
      <TextInput
        rightIcon={CiSearch}
        onChange={search} />

    </Navbar>
  );
};

export default Header;
