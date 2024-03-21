import ProjectInfo from "@/components/ProjectInfo";

const Project2 = () => {
  return (
    <>
      <ProjectInfo
        title="Promptopia"
        subtitle="Discover & Share AI-Powered Prompts"
        shortDesc="A project on which I worked to deepen my skills on Next.js. I reached the final result by following video tutorials and conducting online research to learn more about the new app router system of Next 14. In this app, the user is able to sign up using the Google Authorization system. It is then possible to create, modify, delete, or simply copy the content of the prop cards to use them on tools like ChatGPT. User and prop information are collected in a MongoDB database. The deployment was done on Vercel."
        desc="Promptopia is an open-source AI propmting tool for modern world to discover, create and share creative prompts. Inspire and get inspired to feed AI content generators with the best ideas."
        git1="https://github.com/alessio-carnino/promptopia"
        website="https://alessio-promptopia.vercel.app/"
        img="/assets/images/promptopia.webp"
      />
    </>
  );
};

export default Project2;
