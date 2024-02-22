import React from "react";
import Link from "next/link";

import InputSearch from "./inputSearch";
import UserActionButton from "./userActionButton";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="p-4 text-color-primary md:flex-row flex-col flex justify-between ">
        <Link href="/" className="font-bold text-2xl">
          My Anime List
        </Link>
        {/* min-w-20 grid grid-cols-4 col-span-1 gap-2 */}
        <InputSearch />
        <UserActionButton/>
       

        {/* <Button variant="contained" href="#contained-buttons"  >
            Login
          </Button>
          <Button variant="contained" href="#contained-buttons" >
            Sign Up
          </Button> */}
      </div>
    </header>
  );
};

export default Navbar;
