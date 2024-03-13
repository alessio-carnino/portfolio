import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="container_L flex items-center justify-between gap-5 py-6">
        <Link href="/" className="brand">
          <Image
            src="/assets/images/logo.svg"
            alt="Alessio Carnino Logo"
            width={222}
            height={43}
          />
        </Link>

        <div className="flex gap-10">
          <Link href="/#projects" className="">
            Projects
          </Link>
          <Link href="/contact" className="">
            Contact
          </Link>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/paininoa"
              target="_blank"
              className="flex gap-2 flex-center"
            >
              <Image
                src="/assets/images/github.svg"
                alt="Github Logo"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/alessio-carnino-bb1301201/"
              target="_blank"
              className="flex gap-2 flex-center"
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
              className="flex gap-2 flex-center"
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
