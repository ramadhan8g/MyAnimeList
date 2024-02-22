import React from "react";
import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div>
      <div className="flex justify-between items-center px-4">
        <h1 className="text-xl font-bold p-4">{title}</h1>
        {linkHref && linkTitle ? (
          <Link href={linkHref} className="text-center justify-center">
            {linkTitle}
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
