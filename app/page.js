import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import Link from "next/link";

const logos = [
  "/assets/images/html.svg",
  "/assets/images/css.svg",
  "/assets/images/js.svg",
  "/assets/images/react.svg",
  "/assets/images/gitt.svg",
  "/assets/images/bootstrap.svg",
  "/assets/images/tailwind.svg",
  "/assets/images/sass.svg",
  "/assets/images/git.svg",
  "/assets/images/vsc.svg",
  "/assets/images/node.svg",
  "/assets/images/mongo.svg",
];

const Home = () => {
  return (
    <>
      <section className="section py-14">
        <div className="container_L sm:grid sm:grid-cols-2 items-center">
          <div className="mb-8 text-center sm:text-left">
            <h1 className="title_L">
              Hi 👋, <br /> My name is
              <br />
              <span className="font-semibold gradient">
                Alessio Carnino
              </span>{" "}
              <br />
              build things for web
            </h1>
          </div>

          <div className="hero_img_wrapper">
            <Image
              src="/assets/images/hero-img-min.png"
              alt="Alessio Carnino profile image"
              layout="fill"
              sizes="100%"
              objectFit="contain"
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container ">
          <h2 className="title_M text-center mb-4 md:mb-6">My Tech Stack</h2>
          <p className="text-center mb-14 md:mb-20">
            Technologies I've been working with recently
          </p>

          <div className="grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-6 md:gap-x-10 md:gap-y-14 lg:gap-x-20 ">
            {logos.map((logo, index) => (
              <img key={`logo-${index}`} src={logo} alt="logo" />
            ))}
          </div>
        </div>
      </section>

      <section className="section relative" id="projects">
        <Image
          className="blob_img_1"
          src="/assets/images/blob-1.png"
          alt="logo"
          width={457}
          height={447}
        />
        <Image
          className="blob_img_2"
          src="/assets/images/blob-2.png"
          alt="logo"
          width={494.73}
          height={464.79}
        />

        <div className="container">
          <h2 className="title_M text-center mb-4 md:mb-6">Projects</h2>
          <p className="text-center mb-12 md:mb-20">Things I've built so far</p>

          <div className="flex flex-col gap-10 md:gap-14">
            <ProjectCard
              title="iNSPiRED"
              desc="descergerjon"
              img="/assets/images/img1.jpg"
              stack="HTML, JavaScript, SASS, React"
              page="/project1"
              website="https://alessiocarnino.webflow.io/"
              github="https://github.com/paininoa"
            />

            <ProjectCard
              title="Promptopia"
              desc="descergerjon"
              img="/assets/images/img2.jpg"
              stack="HTML, JavaScript, SASS, React"
              page="/project2"
              website="https://alessiocarnino.webflow.io/"
              github="https://github.com/paininoa"
            />

            <ProjectCard
              title="Title3"
              desc="descergerjon"
              img="/assets/images/img3.jpg"
              stack="HTML, JavaScript, SASS, React"
              page="/project3"
              website="https://alessiocarnino.webflow.io/"
              github="https://github.com/paininoa"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
