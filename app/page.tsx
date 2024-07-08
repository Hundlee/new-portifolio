"use client";

import Main from "./_components/Main";
import NavBar from "./_components/NavBar";
import Skills from "./_components/Skills";

export default function Home() {
    return (
        <div className="flex flex-col relative">
            <NavBar />
            <Main />
            <Skills />
        </div>
    );
}
