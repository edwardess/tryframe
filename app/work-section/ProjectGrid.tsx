// components/ProjectGrid.tsx

import ProjectCard from "./ProjectCard";
import { devProjects, ProjectProps } from "./projectDetails";
import SongCarousel from "./SongCarousel";
import AnimatedBody from "../animations/AnimatedBody";

const ProjectGrid: React.FC = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#F8F4E1] bg-cover bg-center py-16 md:py-20 lg:py-20"
      id="work"
    >
      <h2 className="mb-10 hidden text-[36px] text-[#74512D] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        Featured Work
      </h2>

      <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
        {devProjects.map((project: ProjectProps) => (
          <div key={project.id} className="flex flex-col items-center justify-center space-y-6">
            {/* Render the ProjectCard */}
            <ProjectCard
              id={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
              logo={project.logo}
              available={project.available}
            />

            {/* Render the SongCarousel after each ProjectCard */}
            {project.available && <SongCarousel projectId={project.id} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
