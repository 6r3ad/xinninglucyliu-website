import Footer from "../assets/Components/Footer";
import Navbar from "../assets/Components/Navbar";

export default function ScavengerHunt() {
    return (
        <div className="bg-periwinkle">
            <Navbar />
            <div className="pt-5 font-serif text-navy">
                <img className="w-full" src="maps/maps-project-banner.png" />
                <div className="mx-10 lg:mx-25 my-5 lg:my-10 flex flex-row justify-between">
                    <div className="w-210 flex flex-col gap-2">
                        <h1 className="text-5xl lg:text-8xl">Scavenger Hunt</h1>
                        <p className="text-dark-grey text-lg lg:text-3xl italic">mobile app feature</p>
                        <p className="text-lg lg:text-2xl mt-2">A feature in Apple Maps that encourages exploration of a local
                            area by letting users contribute their own photos under a prompt while showing where similar images have 
                            been captured. </p>
                    </div>
                    <div className="font-semibold text-lg lg:text-xl w-100 flex flex-col gap-9 ml-5">
                        <div>
                            <h2>Timeline</h2>
                            <p className="font-light">April 2025</p>
                        </div>
                        <div>
                            <h2>Role</h2>
                            <p className="font-light">UX Research, Wireframes, High-Fidelity Prototype, Usability Testing</p>
                        </div>
                        <div>
                            <h2>Tools</h2>
                            <p className="font-light">Figma</p>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}