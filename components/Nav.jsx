import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="container_L flex items-center justify-between gap-3 py-3 sm:gap-5 sm:py-6">
        <Link href="/" className="brand">
          <Image
            src="/assets/images/logo.svg"
            alt="Alessio Carnino Logo"
            width={222}
            height={43}
            className=""
          />
        </Link>

        <div className="flex items-center gap-3 sm:gap-5 md:gap-10">
          <Link href="/#projects" className="navlink hidden sm:block">
            Projects
          </Link>
          <Link href="/contact" className="navlink hidden sm:block">
            Contact
          </Link>
          <div className="flex items-center gap-3 md:gap-5">
            <a
              href="https://github.com/alessio-carnino"
              target="_blank"
              className="navlink_icon"
            >
              <Image
                src="/assets/images/github.svg"
                alt="Github Logo"
                layout="fill"
                sizes="100%"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/alessio-carnino-bb1301201/"
              target="_blank"
              className="navlink_icon"
            >
              <Image
                src="/assets/images/linkedin.svg"
                alt="Linkedin Logo"
                width={30}
                height={30}
              />
            </a>
            <a
              href="mailto: alessiocarnino.web@gmail.com"
              target="_blank"
              className="navlink_icon"
            >
              <Image
                src="/assets/images/email.svg"
                alt="Email Logo"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
