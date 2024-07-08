"use client";

import Main from "./_components/Main";
import NavBar from "./_components/NavBar";
import AboutMe from "./_components/About-me";
import Header from "./_components/Header";

export default function Home() {
    return (
        <div className="flex flex-col relative">
            <Header />
            <NavBar />
            <Main />
            <AboutMe />
        </div>
    );
}
