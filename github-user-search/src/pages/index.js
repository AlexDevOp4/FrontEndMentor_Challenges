import React, { useState } from "react";
import { Octokit } from "octokit";
import Moon from "../images/assets/icon-moon.svg";
import Search from "../images/assets/icon-search.svg";
import Website from "../images/assets/icon-website.svg";
import Location from "../images/assets/icon-location.svg";
import Twitter from "../images/assets/icon-twitter.svg";
import Company from "../images/assets/icon-company.svg";

const IndexPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState([]);

  const apiKey = process.env.GATSBY_API_KEY;

  const octokit = new Octokit({
    auth: apiKey,
  });

  const convertDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      setSearch(event.target.value);

      const { data } = await octokit.request("GET /users/{username}", {
        username: search,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      setUser(data);
    }
  };

  const handleChanges = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await octokit.request("GET /users/{username}", {
      username: search,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    setUser(data);
  };

  return (
    <main className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="devSection ">
        <div className="group-10">
          <p className="devfinder">devfinder</p>
          <div className="group-5 md:flex md:flex-row md:gap-2 md:align-middle">
            <button className="dark" onClick={toggleMode}>
              DARK
            </button>
            <img src={Moon} className="moon" alt="moon" />
          </div>
        </div>

        <div className="group-9 my-10 md:px-5">
          <img src={Search} className="search md:pr-5" alt="search" />
          <input
            onChange={handleChanges}
            onKeyDown={handleKeyDown}
            className="input md:flex-1 placeholder:italic block md:py-2 focus:outline-none focus:border-transparent sm:text-sm"
            placeholder="Search GitHub username"
          />
          <button onClick={handleSubmit} className="button text-white">
            Search
          </button>
        </div>

        <div className="dev-card container md:px-32 p-10 md:mx-auto md:p-10 md:flex md:flex-col md:justify-around md:align-middle">
          <div className="group-6">
            <div className="oval">
              <img src={user.avatar_url} className=" avatar" alt="avatar" />
            </div>
            <div className="group-4">
              <p className="username">{user.login}</p>
              <p className="handle">@{user.login}</p>
              <p className="date-joined">{convertDate(user.created_at)}</p>
            </div>
          </div>
          <p className="bio pt-5">{user.bio}</p>

          <div className="group-3 flex flex-row justify-around">
            <div className="group-3-1">
              <p className="repos top-column">Repos</p>
              <p className="repo-num bottom-column">{user.public_repos}</p>
            </div>

            <div className="group-3-2">
              <p className="followers top-column">Followers</p>
              <p className="follower-num bottom-column">{user.followers}</p>
            </div>

            <div className="group-3-3">
              <p className="following top-column">Following</p>
              <p className="following-num bottom-column">{user.following}</p>
            </div>
          </div>

          <div className="group-7 grid grid-cols-2">
            <div className="group-15">
              <img src={Location} className="location" alt="location" />
              <p className="location bottom-links">
                {user.location ? user.location : "Not Available"}
              </p>
            </div>

            <div className="group-16">
              <img src={Twitter} className="twitter" alt="twitter" />
              <p className="twitter bottom-links">
                {user.twitter_username
                  ? user.twitter_username
                  : "Not Available"}
              </p>
            </div>

            <div className="group-17">
              <img src={Website} className="website" alt="website" />
              <a
                href={`https://github.com/${user.login}`}
                target="_blank"
                className="website bottom-links"
              >
                Github
              </a>
            </div>

            <div className="group-17">
              <img src={Company} className="company" alt="company" />
              <p className="company bottom-links">
                {user.company ? user.company : "Not Available"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
