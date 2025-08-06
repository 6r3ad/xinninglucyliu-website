import Footer from "./assets/Components/Footer";
import GalleryImages from "./assets/Components/GalleryImages";
import Navbar from "./assets/Components/Navbar";

export default function Gallery() {
    return (
        <div className="bg-periwinkle text-navy font-serif">
            <Navbar />
            <div className="p-20">
                <h1 className="text-5xl md:text-7xl lg:text-8xl my-10 text-center">Art Gallery</h1>
                <GalleryImages />
            </div>
            <Footer />
        </div>

    );
}

