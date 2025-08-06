export default function Gallery() {

    const images = [
        "/gallery/2019 colored pencil 11x14.jpg",
        "/gallery/2021 colored pencil 18x24.jpg",
        "/gallery/Haru_Yo_Koi.png",
        "/gallery/magazinecover.png",
        "/gallery/2019 pencil 18x24.jpg",
        "/gallery/Color and Composition Project Part 2.JPG",
        "/gallery/2023 ink.jpg",
        "/gallery/2019 colored pencil 9x12.jpg",
        "/gallery/2023 mixed media.jpeg",
        "/gallery/magazine2.png",
        "/gallery/2021 charcoal 18x24(1).jpg",   
        "/gallery/2023 gouache.jpg",
        "/gallery/colored pencil.jpeg",
        "/gallery/2020 colored pencil 11x14.jpg",
        "/gallery/magazine3.png",
        "/gallery/2021 pencil 18x24.jpg",
        "/gallery/2020 charcoal 18x24.jpg",
        
    ]

    return (
        <div className="columns-1 md:columns-2 lg:columns-3 ">
            {images.map((image: string, index: number) => (
                <div key={index} className="mb-4 break-inside-avoid">
                    <img src={image} className="w-full object-cover rounded-lg"></img>
                </div>
            ))}
        </div>
    )
};
