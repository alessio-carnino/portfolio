import Image from "next/image";

const ProjectInfo = ({
  title,
  subtitle,
  shortDesc,
  desc,
  git1,
  git2,
  website,
  img,
}) => {
  return (
    <div>
      <section className="section lg:min-h-screen relative">
        <img
          src="/assets/images/bg.webp"
          alt="Decorative image"
          className="absolute scale-150 sm:scale-100 right-0 bottom-0 sm:bottom-[-4rem] lg:bottom-[-2rem] z-[-1] "
        />
        <div className="container ">
          <div className="w-full md:w-2/3">
            <p className="paragraph_L font-semibold mb-1 md:mb-2">{subtitle}</p>
            <h1 className="title_L font-semibold mb-4 md:mb-6">{title}</h1>

            <p className="paragraph-L">{shortDesc}</p>
            <div className="flex flex-col items-start gap-4 md:gap-5 mt-8">
              <a href={website} target="_blank" className="button">
                <Image
                  src="/assets/images/link_white.svg"
                  alt="Github logo"
                  width={20}
                  height={20}
                />
                Live Website
              </a>
              <div className="flex gap-4 md:gap-5">
                <a href={git1} target="_blank" className="button secondary">
                  <Image
                    src="/assets/images/git_white.svg"
                    alt="Github logo"
                    width={20}
                    height={20}
                  />
                  Code
                </a>
                {git2 ? (
                  <a href={git2} target="_blank" className="button secondary">
                    <Image
                      src="/assets/images/git_white.svg"
                      alt="Github logo"
                      width={20}
                      height={20}
                    />
                    Backend Code
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-[12rem]">
        <div className="container_S">
          <div className="relative m-auto w-full sm:w-[80%] lg:w-full drop-shadow-2xl mt-[-0.5rem] lg:mt-[-10rem]">
            <Image
              src={img}
              alt="Project image"
              className="drop-shadow-2xl"
              width={900}
              height={3000}
            />
          </div>

          <p className="my-12 md:my-20">{desc}</p>

          <div className="flex flex-col items-center gap-4 md:gap-5">
            <a href={website} target="_blank" className="button">
              <Image
                src="/assets/images/link_white.svg"
                alt="Github logo"
                width={20}
                height={20}
              />
              Live Website
            </a>
            <div className="flex gap-4 md:gap-5">
              <a href={git1} target="_blank" className="button secondary">
                <Image
                  src="/assets/images/git_white.svg"
                  alt="Github logo"
                  width={20}
                  height={20}
                />
                Code
              </a>
              {git2 ? (
                <a href={git2} target="_blank" className="button secondary">
                  <Image
                    src="/assets/images/git_white.svg"
                    alt="Github logo"
                    width={20}
                    height={20}
                  />
                  Backend Code
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectInfo;
