import React from "react";
import Link from "next/link";

const NavContent = () => {
  const links = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Item Shop",
      path: "/itemshop"
    },
    {
      name: "News",
      path: "/news"
    }
  ];

  return links.map((link, index) => {
    return (
      <Link key={index} href={link.path}>
        <button className="fnbutton is-vcentered">{link.name}</button>
      </Link>
    );
  });
};

export default NavContent;
