import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import Link from "next/link";

const logos = [
  "/assets/images/html.svg",
  "/assets/images/css.svg",
  "/assets/images/js.svg",
  "/assets/images/react.svg",
  "/assets/images/node.svg",
  "/assets/images/next.svg",
  "/assets/images/vsc.svg",
  "/assets/images/sass.svg",
  "/assets/images/bootstrap.svg",
  "/assets/images/tailwind.svg",
  "/assets/images/git.svg",
  "/assets/images/mongo.svg",
  "/assets/images/vercel.svg",
  "/assets/images/figma.svg",
  "/assets/images/xd.svg",
  "/assets/images/webflow.svg",
];

const Home = () => {
  return (
    <div className="relative">
      <img
        src="/assets/images/hero_bg.webp"
        className="absolute z-[-1] w-[100vw] lg:w-[80vw] top-[-100px] right-[-10vw]"
      />

      <section className="py-10 md:py-15 lg:py-20 overflow-hidden ">
        <div className="container_L sm:grid sm:grid-cols-2 sm:gap-6 items-center md:grid-cols-5 md:gap-0 lg:grid-cols-2">
          <div className="mb-8 z-10 flex flex-col items-center text-center sm:items-start sm:text-left md:col-span-3 lg:col-span-1">
            <h1 className="title_L ">
              Hi 👋, <br /> My name is
              <br />
              <span className="font-bold gradient">Alessio Carnino</span>
              <br />
              Full-stack Developer
            </h1>
            <p className="paragrpah_L pt-4 pb-4 md:pb-8 max-w-xl">
              I'm a passionate web developer with a knack for crafting great web
              experiences. Starting my journey as a web designer and developer
              using Webflow and other no-code tools - check out my{" "}
              <a
                href="https://alessiocarnino.webflow.io/"
                target="_blank"
                className="font-semibold gradient"
              >
                Webflow portfolio
              </a>{" "}
              - , I quickly realized the limitless potential of crafting
              captivating online experiences. I've since delved into the world
              of coding, mastering HTML, CSS, SASS, Tailwind, Bootstrap,
              JavaScript, React, Node.js, Next.js, and more.
            </p>
            <Link href="/contact">
              <button className="button">GET IN TOUCH</button>
            </Link>
          </div>

          <div className="relative sm:w-2/3 h-full md:col-span-2 lg:col-span-1">
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
        </div>
      </section>
      <section className="section">
        <div className="container ">
          <h2 className="title_M text-center mb-4 md:mb-6">My Tech Stack</h2>
          <p className="text-center mb-14 md:mb-20">
            Technologies I've been working with recently.
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
          <p className="text-center mb-12 md:mb-20">
            The latest projects I have worked on.
          </p>

          <div className="flex flex-col gap-10 md:gap-14">
            <div className="drop-shadow-2xl">
              <ProjectCard
                title="iNSPiRED"
                desc="A simple but visually appealing layout, featuring vibrant colors and clear navigation elements. The website, inspired by dribbble.com, is a comprehensive platform showcasing a variety of projects created by graphics, designers and artists. Overall, the website exudes professionalism and creativity, inviting users to explore its content with ease and curiosity."
                img="/assets/images/inspired_cover.webp"
                stack="HTML, SASS, React, Express, Node.js, MongoDB, Mongoose, Vercel"
                page="/project1"
                website="https://final-project-front-omega.vercel.app/"
                github="https://github.com/alessio-carnino/final-project-front"
                github_back="https://github.com/paininoa/final-project-back"
              />
            </div>

            <div className="drop-shadow-2xl">
              <ProjectCard
                title="Promptopia"
                desc="Promptopia is an open-source AI propmting tool for modern world to discover, create and share creative prompts. Inspire and get inspired to feed AI content generators with the best ideas."
                img="/assets/images/promptopia_cover.webp"
                stack="HTML, JavaScript, Tailwind, Next.js, Google Auth, MongoDB, Vercel"
                page="/project2"
                website="https://alessio-promptopia.vercel.app/"
                github="https://github.com/alessio-carnino/promptopia"
              />
            </div>

            <div className="drop-shadow-2xl">
              <ProjectCard
                title="Quiz App"
                desc="Explore a world of trivia and brain-teasers at your fingertips. Engage in stimulating quizzes covering a wide range of topics."
                img="/assets/images/quizapp_cover.webp"
                stack="HTML, CSS, TypeScript, React, Vercel"
                page="/project3"
                website="https://quiz-app-alessio.vercel.app/"
                github="https://github.com/alessio-carnino/quiz-app"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
