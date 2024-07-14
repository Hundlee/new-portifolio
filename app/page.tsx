"use client";

import Main from "./_components/Main";
import NavBar from "./_components/NavBar";
import AboutMe from "./_components/About-me";
import Header from "./_components/Header";
import Projects from "./_components/Projects";
import Contato from "./_components/Contact";

export default function Home() {
    return (
        <div className="flex flex-col relative overflow-hidden">
            <Header />
            <NavBar />
            <Main />
            <AboutMe />
            <Projects />
            <Contato />
        </div>
    );
}
