import { Link } from "react-router-dom";

type CardProps = {
    image: string;
    title: string;
    tag1: string;
    tag2: string;
    description: string;
    link: string;
};

export default function Card({ image, title, tag1, tag2, description, link }: CardProps) {
    return (
        <div className="relative w-90 md:w-116">
            <Link to={link}>
                <div className="absolute bg-tag-dark w-full h-full rounded-lg left-0.5 top-0.5"></div>
                <div className="relative bg-white p-4 justify-start rounded-lg border border-tag-dark">
                    <img className="mb-2 rounded-lg" src={image} />
                    <div className="flex flex-col text-navy">
                        <h2 className="font-serif text-xl lg:text-2xl mb-1">{title}</h2>
                        <div className="flex gap-2 text-xs md:sm font-serif mb-3">
                            <div className="bg-tag-light rounded-md px-2">{tag1}</div>
                            <div className="bg-tag-dark text-white rounded-md px-2">{tag2}</div>
                        </div>
                        <p className="font-serif text-lg mb-2">{description}</p>
                    </div>
                </div>
            </Link>
        </div>

    );
}