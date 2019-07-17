import React from "react";
import Link from "next/link";

const NavContent = () => {
  const links = [
    {
      name: "Search Player",
      path: "/"
    },
    {
      name: "Item Shop",
      path: "/itemshop"
    },
    {
      name: "Challenges",
      path: "/challenges"
    },
    {
      name: "News",
      path: "/news"
    }
  ];

  return links.map((link, index) => {
    return (
      <Link key={index} href={link.path}>
        <button className="fortnite-button is-vcentered">{link.name}</button>
      </Link>
    );
  });
};

export default NavContent;
