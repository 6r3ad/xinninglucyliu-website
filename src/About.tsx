import Footer from "./assets/Components/Footer";
import Navbar from "./assets/Components/Navbar";

function About() {
    return (
        <div className="bg-periwinkle">
            <Navbar />
            <div className="relative container mx-auto min-w-screen h-full flex items-top py-10 ps-5 lg:ps-10">
                <img className="absolute p-10 top-0 left-0 w-full" src="about-folder.svg"/>
                <div className="relative w-7/12 flex flex-col gap-10 px-10 pt-8 font-serif text-navy">
                    <h1 className="text-6xl lg:text-8xl">About Me</h1>
                    <div className="text-md lg:text-xl flex flex-col gap-4">
                        <p>Hello! I'm Lucy, a junior currently studying Computer Science and Design at Northeastern University.</p>
                        <p>For as long as I can remember, I've loved breathing life to my ideas through art. Growing up, I've experimented with several
                            avenues of creative expression including markers, colored pencils, paint, ink, scrapbooking, and eventually, digital tools. Trusting
                            the creative process and watching a project gradually come together is incredibly rewarding for me. I aim to channel the same energy 
                            into my work in experience and interaction design, creating products that enrich users' everyday lives and encourage community growth.</p>
                        <p>In my free time, you can find me going on picnics and nature walks, tackling giant jigsaw puzzles, and trying new recipes! </p>
                    </div>
                </div>
                <img className="relative w-5/12 object-contain top-10" src="about.png" />
            </div>
            <Footer />
        </div>

    );
}

export default About;