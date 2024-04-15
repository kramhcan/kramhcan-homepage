"use client";
import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: "React Portfolio",
        description: "This is my portfolio website built using Next.js React and Tailwind CSS",
        image: "/images/Placeholder.jpg",
        gitUrl: "https://github.com/kramhcan/kramhcan-homepage"
    },
    {
        id: 2,
        title: "Final Year Project",
        description: "This is my final year project for my Degree program at Asia Pacific University.",
        image: "/images/APU-001-01.jpg",
        gitUrl: "https://github.com/kramhcan/FYP"
    }
]

const ProjectComponent = () => {

    const ref = useRef(null);
    const inView = useInView(ref, {once: true});

    const cardVar = {
        initial: {opacity: 0, x: 50},
        animate: {opacity: 1, x: 0},
    }

    return (
        <section ref={ref} id='projects'>
            <h2 className='text-center text-white text-4xl mt-4 mb-4 font-bold'>My Projects</h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map((project, index) =>
                    <motion.li
                        key={project.id}
                        variants={cardVar}
                        initial='initial'
                        animate={inView ? 'animate' : 'initial'}
                        transition={{ duration: 0.3, delay: project.id * 0.4 }}
                        className='list-none'
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                        />
                    </motion.li>
                )}
            </div>
        </section>
    )
}

export default ProjectComponent
