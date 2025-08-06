import { useEffect, useState } from "react";

export default function Carousel({ slides }: { slides: string[] }) {

    let [current, setCurrent] = useState(1);
    const [transition, setTransition] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];


    const next = () => {
        if(!isAnimating) {
        setIsAnimating(true);
        setCurrent((prev) => prev + 1);
        }
        else {
            console.log("disabled")
        }
    }

    const previous = () => {
        if(!isAnimating) {
        setIsAnimating(true);
            setCurrent((prev) => prev - 1);
        }
         else {
            console.log("disabled")
        }
    }

    useEffect(() => {
        let timeoutId: number;

        if (current === extendedSlides.length - 1) {
            timeoutId = setTimeout(() => {
                console.log('Jumping back to start');
                setTransition(false);
                setCurrent(1); 
                setTimeout(() => {
                    console.log('Re-enabling transition');
                    setTransition(true);
                    setIsAnimating(false);
                }, 50);
            }, 900);
        } else if (current === 0) {
            timeoutId = setTimeout(() => {
                console.log('Jumping to the end');
                setTransition(false);
                setCurrent(slides.length); 
                setTimeout(() => {
                    console.log('Re-enabling transition');
                    setTransition(true);
                    setIsAnimating(false);
                }, 50);
            }, 900);
        } else { 
            timeoutId = setTimeout(() => {
                setIsAnimating(false);
            }, 700);
        }
        return () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    }
    }, [current, slides.length, extendedSlides.length]);

    return (
        <div className="relative w-full">
            <div className="absolute z-10 w-full h-full flex justify-between top-0  text-2xl lg:text-3xl">
                <button onClick={previous}><i className="bi bi-arrow-left-circle-fill"></i></button>
                <button onClick={next}><i className="bi bi-arrow-right-circle-fill"></i></button>
            </div>
            <div className="absolute z-10 w-full flex justify-center top-[105%] gap-2">
                <i className={`bi bi-circle-fill ${current === 1 ? "": "text-tag-dark"}`}></i>
                <i className={`bi bi-circle-fill ${current === 2 ? "": "text-tag-dark"}`}></i>
                <i className={`bi bi-circle-fill ${current === 3 ? "": "text-tag-dark"}`}></i>
                <i className={`bi bi-circle-fill ${current === 4 ? "": "text-tag-dark"}`}></i>
            </div>
        <div className="relative rounded-lg border-2 border-tag-dark mx-10 lg:mx-20 overflow-hidden">
            <div className={`flex transition ease-out ${transition ? "duration-700 " : "duration-0"}`} 
            style={{ transform: `translateX(-${current * 100}%)` }}>
                {extendedSlides.map((s: string, i) => {
                    return <img key={i} src={s}></img>
                })}
            </div>

        </div>
        </div>
    )
};

