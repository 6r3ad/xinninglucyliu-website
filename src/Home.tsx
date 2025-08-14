import { useEffect, useRef } from "react";
import Navbar from "./assets/Components/Navbar";
import Footer from "./assets/Components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import type { Location as RouterLocation } from "react-router-dom";
import Card from "./assets/Components/Card";

interface LocationState {
    scrollTo?: "projectsRef";
}

function Home() {
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation() as RouterLocation & { state: LocationState };
    const navigate = useNavigate();
    const initialRender = useRef(true);


    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }

        if (location.state?.scrollTo === "projectsRef" && projectsRef.current) {
            setTimeout(() => {
                window.scrollTo({
                    top: projectsRef.current!.offsetTop,
                    behavior: "smooth",
                });
                navigate(location.pathname, { replace: true, state: {} });
            }, 0);
        }
    }, [location, navigate]);

    return (
        <div className=" bg-periwinkle font-serif">
            <Navbar projectsRef={projectsRef} />
            <div className="container mx-auto min-w-screen h-full flex flex-wrap items-center px-5 lg:px-10">
                <div className="w-full md:w-9/15 inline-flex flex-col justify-start items-start gap-3 mt-20 md:mt-0 lg:mb-20">
                    <div className="flex-auto h-1/3 justify-start text-navy text-6xl lg:text-8xl">Hello! I’m Lucy.</div>
                    <div className="flex-auto h-1/6 justify-start text-dark-grey text-2xl lg:text-3xl italic">cs + design @ northeastern university</div>
                    <div className="flex-auto h-1/3 justify-start text-navy text-2xl lg:text-3xl">I'm passionate about delivering humanistic user experiences through the intersection of technology and design.</div>
                </div>
                <img className="w-full md:w-6/15 float-right mt-10 md:mb-10" src="flower-vase.png" />
            </div>
            <div ref={projectsRef} className="relative bg-white h-full">
                <img className="absolute bottom-full w-screen z-10" src="folder-bg.svg" />
                <div className="container mx-auto min-w-screen flex flex-wrap gap-5 items-top p-5 lg:px-10">

                    <div>
                        <Card
                            image="recipeapp/recipe-project-thumbnail.png"
                            title="Rice of Passage"
                            tag1="case study" tag2="UI/UX Design"
                            description="A mobile app that aims to reduce the friction of daily meal preparation by reimagining the recipe discovery and organization experience."
                            link="/projects/riceofpassage" />
                    </div>
                    <div>
                        <Card
                            image="maps/maps-thumbnail.png"
                            title="Apple Maps Scavenger Hunt"
                            tag1="mobile feature" tag2="UI/UX Design"
                            description="A feature that inspires local exploration by letting users contribute their own photos under a prompt and shows where similar images have been captured."
                            link="/projects/scavengerhunt" />
                    </div>
                    <div>
                        <Card
                            image="HSK-thumbnail.png"
                            title="HSK Flashcard Maker"
                            tag1="case study" tag2="UI/UX Design"
                            description="A Chinese flashcard tool that scans a large body of text and sorts vocabulary into different difficulty flashcard decks."
                            link="/projects/hskflashcardmaker" />
                    </div>
                </div>
                <img className="absolute top-full w-screen z-10" src="folder-bg-bottom.svg" />
            </div>

            <Footer />
        </div>

    );
}

export default Home;