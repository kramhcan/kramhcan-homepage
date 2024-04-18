"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButtons from './TabButtons';
import ReactMarkdown from 'react-markdown';
import CodeSnippet from './CodeSnippet';
import FunJokeComponent from './FunJokeComponent';

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <div className='bg-[#1f1f1f] rounded-lg max-h-[350px] overflow-y-scroll'>
                <ul className='list-inside list-disc pl-2 md:columns-2'>
                    <li>Python</li>
                    <li>R</li>
                    <li>SQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Git</li>
                    <li>Power BI</li>
                    <li>Tableau</li>
                    <li>Excel</li>
                </ul>
            </div>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <div className='bg-[#1f1f1f] rounded-lg max-h-[250px] overflow-y-scroll no-scrollbar'>
                <ul className='list-inside list-disc pl-2'>
                    <li>Diploma in Information and Communication Technology specialisation in Data Informatics</li>
                    <li>Bachelor of Science (Honours) in Computer Science</li>
                </ul>
            </div>
        )
    }
]

const AboutMe = () => {
    const [tab, setTab] = useState('Skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const markdownContent = `Here's a JavaScript code snippet:
    \`\`\`javascript
    const greeting = 'Hello, world!';
    console.log(greeting);
    \`\`\`
    `;
    const renderers = {
        code: (props: any) => (
            <CodeSnippet language={props.node.language} code={props.node.value} />
        ),
    };

    return (
        <section className='text-white' id='about'>
            <div className='text-lg md:grid grid-cols-2 gap-8 items-centered px-4 py-8 xl:gap-16 sm:py-16 xl:px-16'>
                <div className='items-centered'>
                    <CodeSnippet
                        code={`import React, { useState } from 'react';

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call a fish wearing a bowtie? Sofishticated!",
    "Why did the bicycle fall over? Because it was two-tired!",
];

const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
};

const FunJokeComponent = () => {
    const [joke, setJoke] = useState('');

    const generateJoke = () => {
    const randomJoke = getRandomJoke();
    setJoke(randomJoke);
    };

    return (
    <div>
        <button onClick={generateJoke}>Generate Joke</button>
        <p>{joke}</p>
    </div>
    );
};

export default FunJokeComponent;`}
                        language="javascript"
                        fontSize='12px'
                    />
                    <FunJokeComponent />
                </div>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl mb-4 font-bold'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I am a solution-oriented computer science graduate with an eye for detail and a passion for web development. Growing up exposed to computers, I am confident in my current programming abilities and my ability to adapt to and learn about new technologies.
                        I am currently aiming to expand my skillset as an upcoming software engineer or data analyst.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButtons selectTab={() => handleTabChange("skills")} active={tab == "skills"}>Skills</TabButtons>
                        <TabButtons selectTab={() => handleTabChange("education")} active={tab == "education"}>Education</TabButtons>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
