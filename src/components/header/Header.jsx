"use client";

import Container from "../container/Container";
import ThemeController from "../ui/theme/themeController/page";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
// import { Link, useNavigate } from "react-router-dom";

export default function Header() {

    // const navigate = useNavigate()

    // const handleLogout = () => {
    //     navigate("/login")
    // }
    return (
        <header className="w-full shadow-md sticky top-0 z-50 bg-base-300 border-b-2 border-info rounded-b-xl">
            <Container>
                <div className="navbar flex justify-between items-center">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <img
                            src="/alifshop.svg"
                            alt="Sardor Shop"
                            className="w-10 h-auto"
                        />
                             
                     <p>Sardor shop</p>
                    </div>

                    <div className="hidden md:flex">
                        <NavDesktop />
                    </div>
                    <div className="flex items-center gap-2">

                        <div className="flex items-center p-1 flex-1 ">
                            <ThemeController className=" flex" />
                        </div>


                        <div className="dropdown dropdown-end hidden md:block">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="User avatar"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-content rounded-box mt-3 w-52 p-2 shadow"
                            >
                                <li>
                                    <a className="justify-between text-base-300">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a className="text-base-300">Settings</a></li>
                                <li><a className="text-error font-bold">Logout</a></li>
                            </ul>
                        </div>
                        <div className="block md:hidden">
                            <NavMobile />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}
