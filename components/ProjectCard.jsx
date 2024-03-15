import Image from "next/image";

const ProjectCard = ({
  title,
  desc,
  img,
  stack,
  page,
  website,
  github,
  github_back,
}) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-2xl md:rounded-3xl overflow-hidden hover:opacity-90 transition-opacity">
      <a className="w-full h-[42vw] sm:w-6/12 sm:h-[auto] relative" href={page}>
        <Image
          className="inline-block"
          src={img}
          alt="logo"
          layout="fill"
          objectFit="cover top"
        />
      </a>
      <div className="w-full sm:w-6/12 p-6 md:p-10">
        <a href={page}>
          <h3 className="title_S mb-3 md:mb-4">{title}</h3>
        </a>
        <p className="mb-6">{desc}</p>
        <p className="paragraph_S font-semibold mb-4">
          Tech stack: <span className="paragraph_XS font-medium">{stack}</span>
        </p>

        <div className="flex gap-5 flex-wrap">
          <a
            className="paragraph_S flex gap-2 items-center underline font-medium"
            href={website}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              className="inline-block"
              src="/assets/images/link.svg"
              alt="logo"
              width={20}
              height={20}
            />
            Live Preview
          </a>

          <a
            className="paragraph_S flex gap-2 items-center underline font-medium"
            href={github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              className="inline-block"
              src="/assets/images/git-link.svg"
              alt="logo"
              width={20}
              height={20}
            />
            View Code
          </a>

          {github_back && (
            <a
              className="paragraph_S flex gap-2 items-center underline font-medium"
              href={github_back}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                className="inline-block"
                src="/assets/images/git-link.svg"
                alt="logo"
                width={20}
                height={20}
              />
              Backend Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
