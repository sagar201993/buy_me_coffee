import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <Link href="/" className="inline-flex gap-1">
        <FontAwesomeIcon className="h-8" icon={faMugHot} />
        <span className="mt-2">buy me a coffee</span>
      </Link>
    </header>
  );
};

export default Header;
