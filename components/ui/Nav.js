import Link from "next/link";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const setNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <nav className="bg-slate-200 tracking-wider md:px-5 px-2 py-5  relative">
      <div className="container mx-auto flex items-center">
        <div>
          <h1 className="text-green-600 text-4xl">BizLagos</h1>
        </div>
        <div className="ml-auto">
          <div onClick={setNav} className="md:hidden">
            {" "}
            <BiMenu className="text-3xl" />{" "}
          </div>
          <ul className="md:flex space-x-10 text-lg font-semibold hidden  uppercase">
            <li>
              <Link className="block py-3 px-6 rounded-md   " href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="block py-3 px-6 rounded-md   " href={"/"}>
                Post a Listing
              </Link>
            </li>
            <li>
              <Link className="block py-3 px-6 rounded-md" href={"/"}>
                About
              </Link>
            </li>
            <li>
              <Link
                className="block py-3 px-6 rounded-md bg-green-500 text-white  "
                href={"/signin"}
              >
                Sign in
              </Link>
            </li>
          </ul>
          <ul
            className={`text-lg font-semibold uppercase  md:hidden h-screen left-0 flex flex-col bg-blue-200 z-40 space-y-5  absolute w-full top-20 scrollbar-none overflow-y-auto bottom-0 ${
              openNav ? "left-0" : "left-[-100%]"
            } py-14 pl-4
            duration-500`}
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>Post a Listing</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/signin"}>Sign in</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
