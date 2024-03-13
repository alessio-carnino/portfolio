import Image from "next/image";

const ProjectCard = ({ title, desc, img, stack, page, website, github }) => {
  return (
    <div className="flex bg-white drop-shadow-2xl border-r rounded-3xl overflow-hidden">
      <a className="w-6/12 relative" href={page}>
        <Image
          className="inline-block"
          src={img}
          alt="logo"
          layout="fill"
          objectFit="cover"
        />
      </a>
      <div className="w-6/12 p-10">
        <a href={page}>
          <h3 className="title_XS mb-4">{title}</h3>
        </a>
        <p className="mb-2">{desc}</p>
        <p className="paragraph_S mb-3">
          Tech stack: <span className="paragraph_XS">{stack}</span>
        </p>

        <div className="flex gap-5">
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
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
