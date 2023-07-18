import React, { useState } from "react";
import Moon from "../images/assets/icon-moon.svg";
import Search from "../images/assets/icon-search.svg";
import Website from "../images/assets/icon-website.svg";
import Location from "../images/assets/icon-location.svg";
import Twitter from "../images/assets/icon-twitter.svg";
import Company from "../images/assets/icon-company.svg";
const IndexPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="devSection ">
        <div className="group-10">
          <p className="devfinder">devfinder</p>
          <div className="group-5">
            <button className="dark" onClick={toggleMode}>
              DARK
            </button>
            <img src={Moon} className="moon" alt="moon" />
          </div>
        </div>

        <div className="group-9 my-10">
          <img src={Search} className="search" alt="search" />
          <input className="input" placeholder="Search GitHub username" />
          <button className="button text-white">Search</button>
        </div>

        <div className="dev-card container mx-auto p-10 flex flex-col justify-around">
          <div className="group-6">
            <div className="oval"></div>
            <div className="group-4">
              <p className="username">The Octocat</p>
              <p className="handle">@octocat</p>
              <p className="date-joined">Joined 25 Jan 2011</p>
            </div>
          </div>
          <p className="bio pt-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>

          <div className="group-3 flex flex-row justify-around">
            <div className="group-3-1">
              <p className="repos top-column">Repos</p>
              <p className="repo-num bottom-column">8</p>
            </div>

            <div className="group-3-2">
              <p className="followers top-column">Followers</p>
              <p className="follower-num bottom-column">3938</p>
            </div>

            <div className="group-3-3">
              <p className="following top-column">Following</p>
              <p className="following-num bottom-column">9</p>
            </div>
          </div>

          <div className="group-7 grid grid-cols-2">
            <div className="group-15">
              <img src={Location} className="location" alt="location" />
              <p className="location bottom-links">San Francisco</p>
            </div>

            <div className="group-16">
              <img src={Twitter} className="twitter" alt="twitter" />
              <p className="twitter bottom-links">Not Available</p>
            </div>

            <div className="group-17">
              <img src={Website} className="website" alt="website" />
              <p className="website bottom-links">https://github.blog</p>
            </div>

            <div className="group-17">
              <img src={Company} className="company" alt="company" />
              <p className="company bottom-links">@github</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
