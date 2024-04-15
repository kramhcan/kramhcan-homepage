import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface ProjectCardProps {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl: string;
}

const ProjectCard = ({ imgUrl, title, description, gitUrl }: ProjectCardProps) => {
    return (
        <div>
            <div
                className="h-52 md:h-72 rounded-t-xl relative group"
                style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover' }}>
                <div className='overlay absolute top-0 left-0 w-full h-full bg-[#1f1f1f] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center'>
                    <Link href={gitUrl} className='h-14 w-14 border-2 relative rounded-full border-[#adadad] hover:border-white group/link'>
                        <CodeBracketIcon className='h-10 w-10 text-[#adadad] group-hover/link:text-white cursor-pointer hover:white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></CodeBracketIcon>
                    </Link>
                </div>
            </div>
            <div className='text-white rounded-b-xl bg-[#1f1f1f] py-6 px-4'>
                <h3 className='font-xl font-semibold mb-2'>{title}</h3>
                <p className='text-[#adadad]'>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard
