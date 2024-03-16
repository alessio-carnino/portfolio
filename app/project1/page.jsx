import ProjectInfo from "@/components/ProjectInfo";

const Project1 = () => {
  return (
    <>
      <ProjectInfo
        title="iNSPiREd"
        subtitle="Elevate Your Creativity"
        shortDesc="
        I worked on this project for the final test of the coding bootcamp, concluded last February. The outcome is a website where users can authenticate to access the main content and create, edit, and delete the projects in their own galleries.
        
        To create this app, I used all the technologies learned during the course. Firstly, I worked on the backend using Node.js and Mongoose with MongoDB to establish collections and gather user information with an authentication system. Secondly, I focused on the frontend with React and Express to develop an interface that reflected the design I had previously crafted with Figma using Sass and integrating Bootstrap components. I then connected frontend and backend to ensure seamless interaction with the collections. Finally, I deployed the project using Vercel to make it accessible to all users."
        desc="A simple but visually appealing layout, featuring vibrant colors and clear navigation elements. The website, inspired by dribbble.com, is a comprehensive platform showcasing a variety of projects created by graphics, designers and artists. Overall, the website exudes professionalism and creativity, inviting users to explore its content with ease and curiosity."
        git1="https://github.com/alessio-carnino/final-project-front"
        git2="https://github.com/alessio-carnino/final-project-back"
        website="https://final-project-front-omega.vercel.app/"
        img="/assets/images/inspired.jpg"
      />
    </>
  );
};

export default Project1;
