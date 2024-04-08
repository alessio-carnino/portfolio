import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="py-10">
      <div className="container_L flex flex-col">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <Link href="/" className="brand">
            <Image
              src="/assets/images/logo.svg"
              alt="Alessio Carnino Logo"
              width={222}
              height={43}
            />
          </Link>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 md:gap-10">
            <Link href="/#projects" className="navlink">
              Projects
            </Link>
            <Link
              href="https://alessiocarnino.webflow.io/"
              target="_blank"
              className="navlink tracking-tight"
            >
              Webflow Portfolio
            </Link>
            <Link href="/contact" className="navlink">
              Contact
            </Link>
            <Link
              href="https://uploads-ssl.webflow.com/6389024564c0eaae543c5b10/6613b0fd56d47921c8b1c08b_Alessio%20Carnino%20CV.pdf"
              target="_blank"
              className="navlink hidden sm:block"
            >
              CV
            </Link>
            <div className="flex items-center gap-3 md:gap-5 mt-2 sm:mt-0">
              <a
                href="https://github.com/alessio-carnino"
                target="_blank"
                className="navlink_icon"
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
        <div className="w-full h-[0.1rem] bg-slate-300 my-10"></div>
        <div className="text-center">
          Designed and built by{" "}
          <span className="font-medium gradient">Alessio Carnino</span> <br />
          <a
            className="gradient inline-block"
            href="mailto: alessiocarnino.web@gmail.com"
            target="_blank"
          >
            alessiocarnino.web@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
