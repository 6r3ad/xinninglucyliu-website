import { useRef } from "react";
import Footer from "../assets/Components/Footer";
import Navbar from "../assets/Components/Navbar";
import Carousel from "../assets/Components/Carousel";

export default function Recipe() {
    const bgRef = useRef<HTMLDivElement | null>(null);
    const researchRef = useRef<HTMLDivElement | null>(null);
    const ideaRef = useRef<HTMLDivElement | null>(null);
    const testingRef = useRef<HTMLDivElement | null>(null);
    const resultsRef = useRef<HTMLDivElement | null>(null);

    const scrollToSection = (ref?: React.RefObject<HTMLDivElement | null>) => {
        const offset = 80;
        if (ref?.current) {
            window.scrollTo({
                top: ref.current.offsetTop - offset,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="bg-periwinkle">
            <Navbar />
            <div className="pt-5 font-serif text-navy">
                <img className="w-full" src="recipeapp/recipe-project-banner.png" />
                <div className="mx-10 lg:mx-25 my-5 lg:my-10 flex flex-row justify-between">
                    <div className="w-190 flex flex-col gap-1">
                        <h1 className="text-5xl lg:text-8xl">Rice of Passage</h1>
                        <p className="text-dark-grey text-lg lg:text-3xl italic">case study + mobile design</p>
                        <p className="text-lg lg:text-2xl mt-4">A mobile app that aims to reduce the friction of daily meal preparation for busy
                            students and families by reimagining the recipe discovery and organization experience.</p>
                    </div>
                    <div className="font-semibold text-lg lg:text-xl w-100 flex flex-col gap-9 ml-5">
                        <div>
                            <h2>Timeline</h2>
                            <p className="font-light">February 2025 - April 2025</p>
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

                <div className="hidden lg:flex flex-row sticky z-50 top-0 bg-[#A9C7DD] border-y-2 border-tag-dark w-full justify-center px-20 text-xl">
                    <div onClick={() => scrollToSection(bgRef)} className="py-3 px-15 hover:bg-navy hover:text-white">
                        Background
                    </div>
                    <div onClick={() => scrollToSection(researchRef)} className="py-3 px-15 hover:bg-navy hover:text-white">
                        Research
                    </div>
                    <div onClick={() => scrollToSection(ideaRef)} className="py-3 px-15 hover:bg-navy hover:text-white">
                        Ideation
                    </div>
                    <div onClick={() => scrollToSection(testingRef)} className="py-3 px-15 hover:bg-navy hover:text-white">
                        Testing
                    </div>
                    <div onClick={() => scrollToSection(resultsRef)} className="py-3 px-15 hover:bg-navy hover:text-white">
                        Results
                    </div>
                </div>

                <div className="mx-10 lg:mx-40 text-lg lg:text-xl flex flex-col">

                    <div ref={bgRef} className="my-10 lg:my-20">
                        <p className=" text-dark-grey font-condensed font-semibold">Background</p>
                        <p className="text-5xl lg:text-7xl py-5 mt-4">"What should I eat today?"</p>
                        <p>An age old question that we have all asked ourselves at one point,
                            staring into an empty fridge before settling on microwaving days old leftovers or just making instant
                            ramen. In today’s fast paced ways of life, it can be difficult to consistently plan and cook balanced
                            meals at home due to a variety of obstacles including decision fatigue, packed schedules, and inexperience.</p>
                        <div className="relative my-10">
                            <div className="absolute bg-tag-dark w-full h-full rounded-lg left-0.5 top-0.5"></div>
                            <div className="relative bg-lightest-blue rounded-lg px-20 py-10 flex flex-col gap-4 border-2 border-tag-dark">
                                <h1 className="text-center font-condensed text-dark-grey">Problem Statement</h1>
                                <p className="font-semibold lg:text-2xl text-center">How might we streamline the daily task of meal preparation to
                                    reduce mental stress and increase time efficiency?</p>
                            </div>
                        </div>
                        <p className="py-5">Rice of Passage is a recipe planner that alleviates the resistance towards home cooking caused by these obstacles.</p>
                        <div className="mt-10">
                            <div className=" bg-lightest-blue rounded-lg px-15 py-10 flex flex-row justify-between flex-wrap gap-4">
                                <div className="flex flex-col gap-4 w-160">
                                    <h2 className="text-2xl lg:text-3xl font-semibold">Initial Inspiration: Rice Cooker</h2>
                                    <p>As a staple food around the world, rice is used as a base in a variety of dishes. The rice cooker, a simple yet
                                        versatile household appliance, can be used for more than just cooking rice. It opens up a world of convenient
                                        one-pot meals.</p>
                                    <p>I wanted my final recipe planner to reflect the simplicity in the rice cooker recipes I’ve encountered. These
                                        recipes are not only <span className="font-semibold italic">easy to make with limited equipment</span>, but they
                                        also <span className="font-semibold italic">demonstrate how accessible home cooking can be, even on a student budget
                                            and schedule.</span></p>
                                </div>
                                <img className="w-90" src="recipeapp/rice-cooker.png"></img>
                            </div>
                        </div>
                    </div>

                    <div ref={researchRef} className="mt-20 lg:mt-40">
                        <p className=" text-dark-grey font-condensed font-semibold">Research</p>
                        <h1 className="mt-5 font-semibold text-2xl lg:text-3xl">Interview Goals</h1>
                        <p className="mt-2">Explore how user-friendly digital interfaces that showcase recipes in a <span className="font-semibold italic">concise, visually appealing
                            format</span> can enhance the everyday experience of planning and preparing meals.</p>
                        <div className="flex flex-row justify-between text-xl lg:text-2xl">
                            <div className="relative w-23/48 mt-5 mb-20">
                                <div className="absolute bg-tag-dark w-full h-full rounded-lg left-0.5 top-0.5"></div>
                                <div className="relative bg-lightest-blue rounded-lg p-12 flex flex-col gap-4 border-2 border-tag-dark">
                                    <h2 className="font-semibold">Focus #1</h2>
                                    <p>How the interviewee’s cultural background influences their food habits and preferences.</p>
                                    <p className="text-dark-grey italic">favorite dishes, important ingredients, food traditions</p>
                                </div>
                            </div>
                            <div className="relative w-23/48 mt-5 mb-20">
                                <div className="absolute bg-tag-dark w-full h-full rounded-lg left-0.5 top-0.5"></div>
                                <div className="relative h-full bg-lightest-blue rounded-lg p-12 flex flex-col gap-4 border-2 border-tag-dark">
                                    <h2 className="font-semibold">Focus #2</h2>
                                    <p>What the interviewee’s usual meal planning routine looks like.</p>
                                    <p className="text-dark-grey italic">deciding dishes, grocery shopping, cooking schedule</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-navy w-full italic text-lg lg:text-xl py-15">
                    <div className="text-periwinkle mx-10 lg:mx-40 w-190 flex flex-col gap-4">
                        <p>“I honestly think the hardest thing is just making enough food per day to be consistently full,
                            because it does take a while. It's also just hard to estimate, and you don't want to just resort to snacking all day.” </p>
                        <p>- 20 y.o. college student</p>
                    </div>
                    <div className="text-tag-dark mt-10 mx-10 lg:mx-40 text-end flex flex-col gap-4">
                        <p className="w-160 ml-auto">“[Both enjoy cooking and out of necessity]...because I love cooking and it’s also out of necessity to provide for family.”</p>
                        <p>- 50 y.o. stay at home mother</p>
                    </div>
                </div>
                <div className="mx-10 lg:mx-40 flex flex-col my-10 lg:my-20 text-lg lg:text-xl">
                    <div className="font-semibold text-2xl lg:text-3xl mb-5">Key Takeaways</div>
                    <div className="flex flex-row gap-5 text-md lg:text-lg">
                        <div className="bg-[#ECF7FF] p-4 rounded-lg flex flex-1 flex-col gap-4">
                            <div className="bg-navy text-white text-lg lg:text-xl text-center font-semibold m-2 p-2 rounded-lg">Insights</div>
                            <ul className="list-disc px-10 pb-5 list-outside space-y-6">
                                <li>Stopped measuring precisely as they grew more comfortable with cooking, but still measure when following recipes from new cuisines.</li>
                                <li>Found it easier to learn recipes by <span className="font-semibold">watching videos with more visuals.</span></li>
                                <li>Everyday meals are relatively simple and fast; not enough energy for fancy recipes.</li>
                            </ul>
                        </div>
                        <div className="bg-[#DFF1FF] p-4 rounded-lg flex flex-1 flex-col gap-4">
                            <div className="bg-navy text-white text-lg lg:text-xl text-center font-semibold m-2 p-2 rounded-lg">Pain Points</div>
                            <ul className="list-disc px-10 list-outside space-y-6">
                                <li>Recipe articles with <span className="font-semibold">long descriptions, lots of ad breaks and list ingredients at the bottom</span></li>
                                <li>Knowing how much food to make at once</li>
                                <li>Making time for cooking on a busy schedule</li>
                                <li><span className="font-semibold">Saving and organizing</span> recipes that were made in the past</li>
                            </ul>
                        </div>
                        <div className="bg-[#DFF1FF] p-4 rounded-lg flex flex-1 flex-col gap-4">
                            <div className="bg-navy text-white text-lg lg:text-xl text-center font-semibold m-2 p-2 rounded-lg">Bright Points</div>
                            <ul className="list-disc px-10 list-outside space-y-6">
                                <li><span className="font-semibold">Instagram Reels</span> are super short and straight to the point, easy to follow general ideas</li>
                                <li>Grocery list on <span className="font-semibold">Notes app</span>: barebones and simple but efficient</li>
                            </ul>
                        </div>
                    </div>

                    <h1 className="mt-30 pb-5 font-semibold text-2xl lg:text-3xl">Persona</h1>
                    <div className="bg-lightest-blue p-20 rounded-lg">
                        <div className="flex flex-row flex-wrap gap-10 items-end">
                            <img className="w-30 rounded-lg border-2 border-tag-dark" src="recipeapp/sam.png"></img>
                            <div>
                                <h2 className="font-semibold text-2xl lg:text-3xl">Sam</h2>
                                <p>Male, 20</p>
                                <p>Education: CS @ Northeastern</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row pt-10">
                            <div className="flex flex-col gap-5 w-100 lg:w-130">
                                <div>
                                    <h2 className="font-semibold">Lifestyle</h2>
                                    <ul className="list-disc px-5 py-3 list-outside space-y-2">
                                        <li>Lives in college apartment</li>
                                        <li>Eats out frequently</li>
                                        <li>Minimal cooking experience</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="font-semibold">Goals</h2>
                                    <ul className="list-disc px-5 py-3 list-outside space-y-2">
                                        <li>Eat affordable and healthier meals instead of fast food</li>
                                        <li>Save time on meal prepping while balancing school, work, and social life</li>
                                        <li>Gain confidence in cooking with easy, foolproof recipes</li>
                                    </ul>
                                </div>
                            </div>


                            <div className="flex flex-col gap-3 w-100 lg:w-155">
                                <h2 className="font-semibold">Dilemma</h2>
                                <p>An endless cycle of sacrificing his budget, diet and health goals for convenience. </p>
                                <img className="rounded-lg border-2 border-tag-dark" src="recipeapp/persona-diagram.png"></img>
                            </div>
                        </div>

                    </div>


                    <div ref={ideaRef} className="mt-40 lg:mt-60 mb-10 lg:mb-20">
                        <p className=" text-dark-grey font-condensed font-semibold">Ideation</p>
                        <h1 className="mt-5 font-semibold text-2xl lg:text-3xl">Brainstorm</h1>
                        <p className="mt-2">Brain-dumped potential problems to address and framed them into “how might we” problem statements using post-it notes,
                            which were then categorized into larger areas of focus.</p>
                        <div className="relative my-5">
                            <div className="absolute bg-tag-dark w-full h-full rounded-lg left-0.5 top-0.5"></div>
                            <img className="relative rounded-lg border-2 border-tag-dark" src="recipeapp/brainstorm.png"></img>
                        </div>
                        <h1 className="mt-30 font-semibold text-2xl lg:text-3xl">Sketches</h1>
                        <p className="mt-2">I made 6 solution sketches to address one problem from each area of focus from the brainstorming session.</p>
                        <div className="relative my-5">
                            <div className="absolute bg-tag-dark w-full h-full rounded-lg left-0.5 top-0.5"></div>
                            <img className="relative rounded-lg border-2 border-tag-dark" src="recipeapp/hunch-sketches.png"></img>
                        </div>
                        <h1 className="mt-30 font-semibold text-2xl lg:text-3xl">Paper Prototypes</h1>
                        <p className="mt-2">Rough paper drafts exploring different screen layouts and user flows to better understand  and refine the
                            solution concepts that started appearing in the hunch sketches:</p>
                        <div className="my-5">
                            <div className="rounded-lg bg-lightest-blue flex flex-row flex-wrap gap-10 justify-center p-10">
                                <img className="w-80 rounded-lg border-2 border-tag-dark" src="recipeapp/paper1.JPG"></img>
                                <img className="w-80 rounded-lg border-2 border-tag-dark" src="recipeapp/paper2.JPG"></img>
                                <img className="w-80 rounded-lg border-2 border-tag-dark" src="recipeapp/paper3.JPG"></img>
                            </div>
                        </div>
                        <h1 className="mt-30 font-semibold text-2xl lg:text-3xl">Site Map</h1>
                        <p className="mt-2">I created a sitemap to establish clear information hierarchy and provide an overview of the app. This was also
                            helpful in laying a strong foundation for defining user flows.</p>
                        <div className="relative my-5">
                            <div className="absolute bg-tag-dark w-full h-full rounded-lg left-0.5 top-0.5"></div>
                            <img className="relative rounded-lg border-2 border-tag-dark" src="recipeapp/sitemap.png"></img>
                        </div>
                        <h1 className="mt-30 font-semibold text-2xl lg:text-3xl">Task Flows</h1>
                        <p className="mt-2">With the sitemap as a guide, I focused on two key user flows to streamline the prototype and prioritize the
                            app’s core goals and functionalities.</p>
                        <div className="my-5">
                            <div className=" bg-lightest-blue rounded-lg font-semibold px-20 py-10 flex flex-col gap-5">
                                <p>Task 1: Find a new recipe through recipes page</p>
                                <img className="rounded-lg border-2 border-tag-dark" src="recipeapp/task1.png"></img>
                                <p className="pt-5">Task 2: Meal prep using recipe calendar</p>
                                <img className="rounded-lg border-2 border-tag-dark" src="recipeapp/task2.png"></img>
                            </div>
                        </div>
                        <h1 className="mt-30 font-semibold text-2xl lg:text-3xl">Low-Fidelity Wireframes</h1>
                        <img className="mt-5 rounded-lg" src="recipeapp/lowfi.png"></img>
                    </div>

                    <div ref={testingRef} className="my-30 lg:my-50">
                        <p className=" text-dark-grey font-condensed font-semibold">Testing</p>
                        <h1 className="mt-5 font-semibold text-2xl lg:text-3xl">A/B Testing: Recipe Page</h1>
                        <div className="mt-5 flex flex-row flex-wrap gap-5">
                            <div className="bg-navy rounded-xl border-5 border-tag-dark text-white w-145 p-10">
                                <h2 className="font-semibold">Option 1</h2>
                                <div className="flex flex-row gap-5 mt-5">
                                    <div className="font-light w-1/2">
                                        <p>Classic recipe format, with ingredients on the top and instructions on the bottom of the same page.</p>
                                        <p className="mt-5 font-medium">It’s easy for users to lose their place when scrolling back and forth between measurements and instructions.</p>
                                    </div>
                                    <img className="w-35 md:w-50" src="recipeapp/option1.png"></img>
                                </div>
                            </div>
                            <div className="relative bg-navy rounded-xl border-5 border-lime-200 w-145 text-white p-10">
                                <i className="absolute text-lime-200 bi bi-check text-6xl left-[85%] md:left-[88%] bottom-[85%] md:bottom-[88%]"></i>
                                <h2 className="font-semibold">Option 2</h2>
                                <div className="relative flex flex-row gap-5 mt-5">
                                    <div className="font-light w-1/2">
                                        <p>Ingredients and instructions are separated into tabs.</p>
                                        <p className="mt-5 font-medium text-lime-200">Users can instantly navigate between instructions and ingredients without losing their place on one
                                            section or the other.</p>
                                    </div>
                                    <img className="w-35 md:w-50" src="recipeapp/option2.png"></img>
                                </div>
                            </div>
                        </div>
                        <h1 className="mt-30 font-semibold text-2xl lg:text-3xl">Usability Testing</h1>
                        <p className="mt-2 mb-5">I conducted a round of usability testing on my lo-fi wireframes with a small group of target users. Participants were asked to
                            complete a task using the screens while thinking aloud, which helped reveal points of confusion or friction. I classified their feedback using
                            <span className="font-semibold italic"> Nielsen's 10 Usability Heuristics</span>, which allowed me to see the impact of certain design decisions and
                            identify solutions that address any faulty designs.</p>
                        <Carousel slides={["recipeapp/Insights.png", "recipeapp/Insights-1.png", "recipeapp/Insights-2.png", "recipeapp/Insights-3.png"]}></Carousel>
                    </div>

                    <div ref={resultsRef} className="my-10 lg:my-30">
                        <p className=" text-dark-grey font-condensed font-semibold">Results</p>
                        <h1 className="mt-5 font-semibold text-2xl lg:text-3xl mb-5">Final Prototype</h1>
                        <div className="bg-navy text-white rounded-lg flex flex-row flex-wrap gap-[3%] text-center justify-center">
                            <div className="p-10 flex flex-col gap-2 items-center ">
                                <img className="w-60 rounded-xl border-2 border-tag-dark mb-5" src="recipeapp/explore-and-save.gif"></img>
                                <h2 className="font-condensed font-semibold">Explore and Save</h2>
                                <p className="w-70 font-light text-md lg:text-lg">The user can navigate through the app to find a recipe, then save it to a board in the recipe 
                                    library for organization and later reference.</p>
                            </div>
                            <div className="p-10 flex flex-col gap-2 items-center">
                                <img className="w-60 rounded-xl border-2 border-tag-dark mb-5" src="recipeapp/reminder.gif"></img>
                                <h2 className="font-condensed font-semibold">Meal Prep Reminders</h2>
                                <p className="w-70 font-light text-md lg:text-lg">Each recipe has a section dedicated to suggestions for cooking part of the dish ahead of time. 
                                    Each suggestion can be added to a weekly task list on the recipe calendar.</p>
                                </div>
                            <div className="p-10 flex flex-col gap-2 items-center">
                                <img className="w-60 rounded-xl border-2 border-tag-dark mb-5" src="recipeapp/recipe-calendar.gif"></img>
                        <h2 className="font-condensed font-semibold">Recipe Calendar</h2>
                                <p className="w-70 font-light text-md lg:text-lg">Each day of the week can be populated with recipes from the recipe library. The task 
                                    list has an option to toggle notification reminders.</p>
                            </div>
                        </div>
                        <h1 className="mt-30 font-semibold text-2xl lg:text-3xl">Reflection</h1>
                        <div>
                            <h2 className="my-4 font-semibold">Features I would include to broaden the scope of this project:</h2>
                            <ul className="list-disc px-10 pb-5 list-outside space-y-2">
                                <li>Info pages for ingredients that would include background, nutrition and their recommended recipes</li>
                                <li>Fridge reminders, such as upcoming expiration dates for ingredients and ideas for how to use them </li>
                                <li>Different calendar views (ex. week, month) to add flexibility in viewing and scheduling recipes in advance</li>
                            </ul>
                            <h2 className=" my-4 font-semibold">Takeaways</h2>
                            <p className="mb-4 ">I learned to be comfortable with getting as many ideas down on paper as I could. It was really helpful in organizing 
                                my thoughts and working through solutions to the problem, especially because the initial blank page often tends to be the most difficult 
                                place for me to start. Instead, making a messy rough draft that I refined over and over helped bring into focus the vaguities that I could 
                                not sort out in my head alone.</p>
                            <p className="mb-4">This project also taught me more about the importance of documenting my process. I realized these are areas where I can improve, such as taking 
                                clearer photos and organizing my work more intentionally. Moving forward, I will be more mindful of how I capture and present my process in order to clearly 
                                communicate developments over time. </p>

                            <a className="font-bold underline" 
                            href="https://docs.google.com/presentation/d/131xlkpaaaykt_LVWkt38Pc4KBXqx97AACStsMBCt5ps/edit?slide=id.p#slide=id.p">Project Presentation</a>
                        </div>


                    </div>


                </div>
            </div>
            <Footer />
        </div>

    );
}