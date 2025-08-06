import Footer from "../assets/Components/Footer";
import Navbar from "../assets/Components/Navbar";

export default function HSKFlashcards() {

    return (
        <div className="bg-periwinkle">
            <Navbar />
            <div className="pt-5 font-serif text-navy">
                <img className="w-full" src="hsk-project-banner.png" />
                <div className="mx-10 lg:mx-25 my-5 lg:my-10 flex flex-row justify-between">
                    <div className="w-210 flex flex-col gap-1">
                        <h1 className="text-5xl lg:text-7xl">HSK Flashcard Maker</h1>
                        <p className="text-dark-grey text-lg lg:text-3xl italic">case study + design</p>
                        <p className="text-lg lg:text-2xl mt-4">A Chinese flashcard app that scans a large body of text and sorts every 
                            unique vocabulary that appears in the text into different HSK difficulty flashcard decks, which can then be 
                            saved, and viewed. The user just needs to import their reading material.</p>
                    </div>
                    <div className="font-semibold text-2xl w-fit flex flex-col gap-9">
                        <div>
                            <h2>Timeline</h2>
                            <p className="font-light">August 2024 - November 2024</p>
                        </div>
                        <div>
                            <h2>Role</h2>
                            <p className="font-light">Designer</p>
                        </div>
                        <div>
                            <h2>Tools</h2>
                            <p className="font-light">Figma</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#A9C7DD] border-y-2 border-tag-dark w-full py-5 flex flex-row justify-center gap-30 text-3xl">
                    <h1>Research</h1>
                    <h1>Ideation</h1>
                    <h1>Iteration</h1>
                    <h1>Testing</h1>
                    <h1>Conclusion</h1>

                </div>
            </div>
            <Footer />
        </div>

    );
}