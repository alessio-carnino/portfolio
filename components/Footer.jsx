import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="py-10">
      <div className="container_L flex flex-col">
        <div className="flex items-center justify-between gap-5">
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
        <div className="w-full h-[0.1rem] bg-slate-300 my-10"></div>
        <div className="text-center">
          Designed and built by{" "}
          <span className="font-medium gradient">Alessio Carnino</span> <br />
          <a
            className="gradient inline-block"
            href="mailto: alessiocarnino.web@gmail.com"
          >
            alessiocarnino.web@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
