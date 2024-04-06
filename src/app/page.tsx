import Head from 'next/head';
import Navbar from './components/Navbar';
import Title from './components/Title';
import AboutMe from './components/AboutMe';
import ProjectComponent from './components/ProjectComponent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#101010]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Title />
        <AboutMe />
        <ProjectComponent />
      </div>
    </main>
  );
}
