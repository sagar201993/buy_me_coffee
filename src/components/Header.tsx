"use client";
import { faMugHot, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ session }: { session: Session | null }) => {
  const name = session?.user?.name || "";
  const firstname = name.split(" ")[0];

  return (
    <header className="mb-8">
      <div className="flex justify-between  max-w-2xl mx-auto px-4 py-4">
        <Link href="/" className="inline-flex gap-1 items-center">
          <FontAwesomeIcon className="h-8 text-yellow-300" icon={faMugHot} />
          <span className="mt-2">buy me a coffee</span>
        </Link>
        <nav className="mt-2 flex gap-6 items-center">
          <Link href="/about">About</Link>
          <Link href="/about">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <div className="flex gap-2">
            {session && (
              <div className="">
                <Link
                  href={"/profile"}
                  className="flex items-center gap-2 bg-yellow-300 rounded-full p-1 pr-4"
                >
                  <Image
                    src={session.user?.image as string}
                    alt="avatar"
                    width="36"
                    height="36"
                    className="rounded-full"
                  />
                  {firstname}
                </Link>
              </div>
            )}
          </div>

          {!session && (
            <>
              <button
                className="border-2 rounded-full px-4 py-2 ml-4"
                onClick={() => signIn("google")}
              >
                Login
              </button>
              <button className="bg-yellow-300 rounded-full px-4 py-2">
                Sign Up
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
