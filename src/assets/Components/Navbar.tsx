import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

type NavbarProps = {
    projectsRef?: React.RefObject<HTMLDivElement | null>;
};

export default function Navbar({ projectsRef }: NavbarProps) {
    const location = useLocation();
    const isHome: Boolean = location.pathname === "/";
    const [expanded, setExpanded] = useState(false);

    const scrollToProjects = (projectsRef?: React.RefObject<HTMLDivElement | null>) => {
        if (projectsRef?.current) {
            window.scrollTo({
                top: projectsRef.current.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <div>
            <div className="container mx-auto min-w-screen flex flex-col md:flex-row items-center justify-between pt-5 px-10 font-serif font-light text-navy text-2xl">
                <div className="w-full items-center flex flex-row justify-between">
                <Link to="/"><img className="h-10" src="flower-icon.png" /></Link>
                <button className="md:hidden" onClick={() => setExpanded(!expanded)}>
                <i className="bi bi-list"></i>
            </button>
            </div>
                <div className={`w-full justify-end flex-col items-end ${expanded ? "flex" : "hidden"} md:flex md:flex-row`}>
                    {isHome ? (<p onClick={() => scrollToProjects(projectsRef)} className="ms-10">Projects</p>) :
                        (<Link to="/" state={{ scrollTo: "projectsRef" }}> <p className="ms-10 cursor-pointer">Projects</p></Link>)}
                    <Link to="/gallery"><p className="ms-10">Gallery</p></Link>
                    <Link to="/about"><p className="ms-10">About</p></Link>
                </div>
            </div>
        </div>
    );
}

