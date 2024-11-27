import world from "../assets/world.png";
import {
    FaArrowRightFromBracket,
    FaArrowRightToBracket,
    FaBookOpen,
    FaInfo,
    FaLayerGroup,
} from "react-icons/fa6";
import { FaHome, FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FiDollarSign } from "react-icons/fi";
import { BsCloudPlusFill, BsStars, BsThreeDotsVertical } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";
import { CiUser } from "react-icons/ci";

function NavBar() {
    const [menu, setMenu] = useState("menu");
    const [dropMenu, setDropMenu] = useState("menu");
    const [mainMenuOpened, setMainMenuOpened] = useState(false);
    const [moreMenuOpened, setMoreMenuOpened] = useState(false);
    const { logout, isAutenticated, user } = useAuth();

    function SwitchMenuIcon(): JSX.Element {
        let element = <></>;
        switch (menu) {
            case "menu":
                element = (
                    <>
                        <TiThMenu className="w-5 h-5" />
                    </>
                );
                break;
            case "close":
                element = (
                    <>
                        <IoClose className="w-5 h-5" />
                    </>
                );
                break;
        }
        return element;
    }
    function SwitchDropDownIcon(): JSX.Element {
        let element = <></>;
        switch (dropMenu) {
            case "menu":
                element = (
                    <>
                        <BsThreeDotsVertical className="w-5 h-5" />
                    </>
                );
                break;
            case "close":
                element = (
                    <>
                        <IoClose className="w-5 h-5" />
                    </>
                );
                break;
        }
        return element;
    }
    return (
        <>
            <div className="navbar bg-base-100 fixed top-0 z-10 shadow-sm">
                <div className="navbar-start">
                    <details
                        id="main-dropdown"
                        className={`dropdown dropdown-bottom duration-1000 lg:hidden`}
                    >
                        <summary
                            className="btn btn-circle btn-ghost"
                            onClick={() => {
                                if (menu === "close") setMenu("menu");
                                else setMenu("close");

                                const more =
                                    document.getElementById("more-dropdown");

                                if (
                                    more?.getAttributeNames().includes("open")
                                ) {
                                    more?.removeAttribute("open");
                                    if (dropMenu === "close")
                                        setDropMenu("menu");
                                    else setDropMenu("close");
                                    setMoreMenuOpened(!moreMenuOpened);
                                }
                            }}
                        >
                            <SwitchMenuIcon />
                        </summary>
                        <ul
                            className={`menu dropdown-content bg-base-100 rounded-box z-[1] w-32 p-2 shadow font-bold`}
                        >
                            <li
                                onClick={() => {
                                    setMainMenuOpened(!mainMenuOpened);
                                    if (menu === "close") setMenu("menu");
                                    else setMenu("close");
                                    const main =
                                        document.getElementById(
                                            "main-dropdown"
                                        );
                                    main?.removeAttribute("open");
                                }}
                            >
                                <NavLink to="/pricings/plans">
                                    <FiDollarSign className="w-5 h-5" />
                                    Pricing
                                </NavLink>
                            </li>
                            <li
                                onClick={() => {
                                    setMainMenuOpened(!mainMenuOpened);
                                    if (menu === "close") setMenu("menu");
                                    else setMenu("close");
                                    const main =
                                        document.getElementById(
                                            "main-dropdown"
                                        );
                                    main?.removeAttribute("open");
                                }}
                            >
                                <NavLink to="/about" id="about-button">
                                    <FaInfo className="w-5 h-5" />
                                    About
                                </NavLink>
                            </li>
                            <li
                                onClick={() => {
                                    setMainMenuOpened(!mainMenuOpened);
                                    if (menu === "close") setMenu("menu");
                                    else setMenu("close");
                                    const main =
                                        document.getElementById(
                                            "main-dropdown"
                                        );
                                    main?.removeAttribute("open");
                                }}
                            >
                                <NavLink to="/vx/docs" id="docs-button">
                                    <FaBookOpen className="w-5 h-5" />
                                    Docs
                                </NavLink>
                            </li>
                        </ul>
                    </details>

                    {isAutenticated ? (
                        <>
                            <CiUser className="w-7 h-7 text-emerald-500 ms-5" />
                            <h1 className="font-bold m-3">{user?.username}</h1>
                            <div>
                                <NavLink
                                    to="/auth/login"
                                    onClick={() => {
                                        logout();
                                    }}
                                    className="btn btn-ghost bg-red-500 rounded-full font-bold text-white"
                                >
                                    <FaArrowRightFromBracket className="w-5 h-5" />
                                    Logout
                                </NavLink>
                            </div>
                        </>
                    ) : (
                        <>
                            <a
                                className="btn btn-ghost text-xl font-bold"
                                href="/"
                            >
                                <img
                                    src={world}
                                    alt="icon"
                                    className="w-10 h-10"
                                />
                                Walojo
                            </a>
                        </>
                    )}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {isAutenticated ? (
                            <>
                                <li className="">
                                    <NavLink to="/" className="btn font-bold">
                                        <FaHome className="w-5 h-5" />
                                        Home
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <></>
                        )}
                        <li className="ms-5">
                            <NavLink to="/pricings/plans" className="btn font-bold">
                                <FiDollarSign className="w-5 h-5" />
                                Pricing
                            </NavLink>
                        </li>
                        <li className="ms-5">
                            <NavLink to="/about" className="btn font-bold">
                                <FaInfo className="w-5 h-5" />
                                About
                            </NavLink>
                        </li>
                        <li className="ms-5">
                            <NavLink to="/vx/docs" className="btn font-bold">
                                <FaBookOpen className="w-5 h-5" />
                                Docs
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    {isAutenticated ? (
                        <>
                            <NavLink
                                to="/servers"
                                className="btn rounded-full font-bold"
                            >
                                <FaLayerGroup className="w-5 h-5" />
                                Your Servers
                            </NavLink>
                            <NavLink
                                to="/servers/add"
                                className="btn btn-success rounded-full font-bold text-white ms-2"
                            >
                                <BsCloudPlusFill className="w-5 h-5" />
                                New Server
                            </NavLink>

                            <NavLink
                                to="/pricings/plans"
                                className="btn bg-gradient-to-r from-pink-500 to-orange-500 rounded-full font-bold ms-2 text-white"
                            >
                                <BsStars className="w-5 h-5 text-white" />
                                Upgrade to Premium
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink
                                to="/auth/login"
                                className="btn rounded-full font-bold"
                            >
                                <FaArrowRightToBracket className="w-5 h-5" />
                                Log in
                            </NavLink>

                            <NavLink
                                to="/auth/signup"
                                className="btn btn-success rounded-full font-bold ms-2 text-white"
                            >
                                <FaUserPlus className="w-5 h-5 text-white" />
                                Sign Up
                            </NavLink>
                        </>
                    )}
                </div>
                <div className="navbar-end lg:hidden">
                    <details
                        id="more-dropdown"
                        className="dropdown dropdown-end transition-opacity duration-1000"
                    >
                        <summary
                            className="btn btn-circle btn-ghost"
                            onClick={() => {
                                if (dropMenu === "close") setDropMenu("menu");
                                else setDropMenu("close");

                                const main =
                                    document.getElementById("main-dropdown");

                                if (
                                    main?.getAttributeNames().includes("open")
                                ) {
                                    main?.removeAttribute("open");
                                    if (menu === "close") setMenu("menu");
                                    else setMenu("close");
                                    setMainMenuOpened(!mainMenuOpened);
                                }
                            }}
                        >
                            <SwitchDropDownIcon />
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-40 p-2 shadow font-bold">
                            <li
                                onClick={() => {
                                    setMoreMenuOpened(!moreMenuOpened);
                                    if (dropMenu === "close")
                                        setDropMenu("menu");
                                    else setDropMenu("close");
                                    const more =
                                        document.getElementById(
                                            "more-dropdown"
                                        );
                                    more?.removeAttribute("open");
                                }}
                            >
                                <NavLink
                                    to="/auth/login"
                                    className="rounded-box"
                                >
                                    <FaArrowRightToBracket className="w-5 h-5" />
                                    Log in
                                </NavLink>
                            </li>
                            <li
                                onClick={() => {
                                    setMoreMenuOpened(!moreMenuOpened);
                                    if (dropMenu === "close")
                                        setDropMenu("menu");
                                    else setDropMenu("close");
                                    const more =
                                        document.getElementById(
                                            "more-dropdown"
                                        );
                                    more?.removeAttribute("open");
                                }}
                            >
                                <NavLink
                                    to="/auth/signin"
                                    className="bg-success text-white rounded-box"
                                >
                                    <FaUserPlus className="w-5 h-5" />
                                    Sign Up
                                </NavLink>
                            </li>
                        </ul>
                    </details>
                </div>
            </div>
        </>
    );
}

export default NavBar;
