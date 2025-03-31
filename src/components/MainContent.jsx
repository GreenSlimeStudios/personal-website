import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import transition from "../transition";
import { useState } from "react";

const MainContent = () => {
    const womp = "bold";
    // const [hovered, setHovered] = useState(false);

    const [hoverStates, setHoverStates] = useState({});

    const handleHoverStart = (id) => {
        setHoverStates(prev => ({ ...prev, [id]: true }));
    };

    const handleHoverEnd = (id) => {
        setHoverStates(prev => ({ ...prev, [id]: false }));
    };

    return (
        <div>

            <div className='rounded-b-4xl titlebox p-20 sm:p-40 lg:p-60 2xl:p-100 shadow-2xl shadow-black'>
                {/* <img src='cat1.jpg' /> */}
                <div className='flex-row items-start'>
                    <h1 className='font-bold text-5xl lg:text-6xl 2xl:text-7xl drop-shadow-lg'>Max Berliński</h1>
                    <p className='text-lg drop-shadow-lg'>Passion is what matters</p>
                </div>
            </div>
            {/* <div className='mb-50' /> */}
            <div className="w-full my-30 mx-10">
                <h1 className="text-left font-bold text-6xl">My Projects</h1>
            </div>



            <main className="sm:px-5 mt-5 mb-100 flex-row space-y-10 2xl:grid-cols-2 grid">

                <section data-bgcolor="#fc9c58" data-textcolor="#111111" >
                    <div className="sm:flex hidden 2xl:hidden mb-8 px-5 gap-x-5 items-end ">
                        <h1 className="text-5xl font-bold ">Karp<span className="bg-amber-500 text-transparent bg-clip-text">p</span>ortal</h1>
                        {/* <img src="kpplogo.png" className="h-10 float-left" /> */}
                        <p className="text-center text-[20px] text-amber-500 font-bold">DART</p>
                    </div>

                    <motion.div
                        key={0}
                        exit={hoverStates[0] ? { opacity: 0, transition: { duration: 0.5, delay: 0.5 } } : {}}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        onHoverStart={() => handleHoverStart(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                    >
                        <Link to={"/personal-website/karpportal"}>
                            <div className="bg-[#fc9c58] project-card text-black">

                                <div className="project-grid">
                                    {/* <div className="flex items-center"> */}
                                    <div className="flex items-center h-120">
                                        <div className=" pl-5 flex-row items-center w-full">
                                            <div className=" px-5  flex-row space-y-2 items-center text-center">

                                                <div className="p-4 bg-white mx-auto items-center rounded-3xl w-38">

                                                    <img src="kpplogo.png" className=" h-30 object-cover object-bottom " />
                                                </div>
                                                <h1 className="text-5xl font-bold ">Karp<span className="bg-white text-transparent bg-clip-text">p</span>ortal</h1>
                                                {/* <img src="kpplogo.png" className="h-10 float-left" /> */}
                                                <p className="text-center text-[20px] text-amber-50 font-extrabold">DART</p>
                                                {/* <p className="text-2xl p-10 text-center hidden sm:block"> */}
                                                {/* <span className="high-indigo">Midi-b</span> is a program that aims to visualise the notes played on a midi device like a piano in a nice visual way that is very customizable. */}
                                                {/* </p> */}
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className=" w-full items-center "> */}
                                    {/* <img src="kpplogo.png" className="my-10 h-100 object-cover object-bottom  rounded-r-4xl " /> */}
                                    {/* </div> */}

                                    {/* <div className="flex items-center text-center p-5 bg-[#132237] rounded-4xl text-white">
                            <p>Karpportal is a social-media platform I developed in Flutter / dart with firebase for the backend. The project aims to provide an app where people can post about their favourite stuff and communicate with each other. Some notable features of the app are, end to end encryption, group chats and highly customizable themes.</p>

                        </div> */}

                                    <div className="grid grid-cols-2 lg:grid-cols-3">

                                        <img className=" h-120 object-cover object-left  rounded-l-4xl " src={"https://user-images.githubusercontent.com/86601983/179499279-c510e9d8-bd86-4630-abf2-b1202bb547ea.png"} />
                                        <img className=" hidden lg:block h-120 object-cover object-bottom shadow-2xl shadow-black " src={"https://user-images.githubusercontent.com/86601983/179499317-23cf671e-3be6-413f-8c04-9132ec08f366.png"} />
                                        <img className=" h-120 object-cover object-right  rounded-r-4xl " src={"https://user-images.githubusercontent.com/86601983/179499154-27552f06-5aa7-49c5-8a59-81932c4dde56.png"} />
                                    </div>

                                </div>
                            </div>


                        </Link>
                    </motion.div>



                    {/* <div className="rounded-2xl mx-5 text-2xl bg-[#fc9c58] text-black   p-4 space-y-5 ">
                  
                    <p>Karpportal is a social-media platform I developed in Flutter and dart with firebase for the backend. The project aims to provide an app where people can post about their favourite stuff and communicate with each other. Some notable features of the app are, end to end encryption, group chats and highly customizable themes.</p>
                    <p>For complete list of features and more screenshots head to the <a className="text-indigo-800 underline" target="blank_" href="https://github.com/GreenSlimeStudios/karpportal">github repo</a>.</p>
                </div> */}
                    {/* <p className="bg-amber-400 text-transparent bg-clip-text"> womp womp</p> */}

                </section>
                {/* <div className="bg-gradient-to-b from-[#fc9c58] to-[#1b1c4e] h-10"></div> */}


                <section data-bgcolor="#1b1c4e" data-textcolor="#FFFFFF" >

                    <div className="px-5 pb-8 sm:flex hidden 2xl:hidden gap-x-5 items-end ">
                        <h1 className="text-5xl font-bold ">Encrypter <span className="fancy-blue">Deluxe</span></h1>
                        <p className="text-center text-[20px] text-blue-500 font-bold">DART / C# / C++</p>
                    </div>
                    <motion.div
                        key={1}
                        exit={hoverStates[1] ? { opacity: 0, transition: { duration: 0.5, delay: 0.5 } } : {}}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        onHoverStart={() => handleHoverStart(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                    >
                        <Link to={"/personal-website/karpportal"}>
                            <div className="bg-[#1b304e] project-card">

                                <div className="project-grid">
                                    <div className="flex items-center h-120">
                                        <div className="w-full  pl-5 flex-row gap-x-5 text-center ">
                                            <div className="px-5 pb-8 flex-row space-y-2 items-end ">
                                                <h1 className="text-5xl font-bold ">Encrypter <span className="fancy-blue">Deluxe</span></h1>
                                                <p className="text-center text-[20px] text-blue-500 font-bold">DART / C# / C++</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-center p-5 bg-[#132237] rounded-4xl">
                                        <p >
                                            <span className="high-blue">Encrypter</span><span className="fancy-blue"> deluxe</span> is an application for creating and managing passwords. The unique thing that seperates this app from other password managing apps is that it works on a completely different principal.
                                        </p>
                                        {/* <p>
                                In short you have to remember a <span className="high-blue">main password</span> that you don't use anywhere. Then you assign a <span className="high-blue">seed</span> number to a service and generate the password from your main password and the seed and a set password length. The app allows you to store the seeds with notes that are guarded by the systems <span className="high-blue">biometric lock</span>. Additionally you have several algorythms to choose from in case a service doesn't allow a certain type of characters so you can choose to generate the password from diffrent character type combinations.
                            </p>
                            <p>
                                I wanted to make this app in dart / flutter for cross platform compatibility. It is my 3rd and final attempt at perfecting the app. Previous versions were written in <span className="high-blue">C++</span> and then in <span className="high-blue">C# Xamarin</span> however I was not satified with C++ mobile compatibility and Xamarin was a bit outdated and did not fit my coding style. However by being curious and experimental I found out why Xamarin did not fit my needs. I constantly try new technologies and explore the vast programming world.
                            </p>
                            <p>
                                That way I can access my passwords anywhere I want. The build supports linux windows and android. The important thing is that the app doesn't store the passwords only your saved seeds so when one of your passwords gets leaked. There is no correlation between that password and the passwords the app generates for other services. Thats why it is very important <span className="high-blue">not to use</span> your main password anywhere except for generating passwords.
                            </p> */}


                                    </div>
                                    {/* <img src="encrypter.jpg" className=" h-120  object-cover object-bottom  rounded-r-4xl " /> */}
                                </div>
                            </div>
                        </Link></motion.div>
                </section>
                <section data-bgcolor="#fc9c58" data-textcolor="#111111" >

                    <div className="mb-8 pl-5 sm:flex hidden 2xl:hidden gap-x-5 items-end">
                        <h1 className="text-5xl font-bold drop-shadow-2xl">Midi-<span className="text-indigo-500">b</span></h1>
                        <p className="text-center text-[20px] text-indigo-500 font-bold">RUST</p>
                    </div>

                    <motion.div
                        key={2}
                        exit={hoverStates[2] ? { opacity: 0, transition: { duration: 0.5, delay: 0.5 } } : {}}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        onHoverStart={() => handleHoverStart(2)}
                        onHoverEnd={() => handleHoverEnd(2)}
                    >
                        <Link to={"/personal-website/"}>
                            <div className="bg-indigo-900 project-card">
                                <div className="project-grid">
                                    {/* <div className="flex items-center"> */}
                                    <div className="flex items-center h-120">
                                        <div className="w-full  pl-5 flex-row text-center ">
                                            <h1 className="text-5xl font-bold ">Midi-<span className="text-indigo-500">b</span></h1>
                                            <p className="mt-2 text-center text-[20px] text-indigo-400 font-bold">RUST</p>
                                            <p className="text-2xl p-8 text-center">
                                                <span className="high-indigo">Midi-b</span> is a program that aims to visualise the notes played on a midi device like a piano in a nice visual way that is very customizable.
                                            </p>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                    {/* <div className="p-4 h-115  text-clip">

                            <p >
                                <span className="high-indigo">Midi-b</span> is a program that aims to visualise the notes played on a midi device like a piano in a nice visual way that is very customizable. it is the successor of my older version midi-recorder that is built from the ground up to have better performance and more functionality.
                            </p>
                            <p>
                                The program written in Rust in the <span className="high-indigo">Bevy</span> game engine, the predecessor was built also in rust but using the <span className="high-indigo">Nannou</span> crate. Midi-b can visualize the notes live via a midi cable connection or replay a prerecorded midi file.
                            </p>
                            <p>
                                I built this program because I do play the piano and I wanted to create something cool that would put my hobbies together.
                            </p>
                            <p>For a complete list of features and more video examples and screenshots head to the <a className="text-indigo-300 underline" target="blank_" href="https://github.com/GreenSlimeStudios/midi-b">github repo</a>.</p>
                        </div> */}
                                    <img src="midi-1.png" className=" h-120 object-cover object-bottom  rounded-4xl " />
                                </div>
                            </div></Link></motion.div>

                </section>

                <section data-bgcolor="#fc9c58" data-textcolor="#111111" >

                    <div className="mb-8 pl-5 sm:flex hidden 2xl:hidden gap-x-5 items-end">
                        <h1 className="text-5xl font-bold drop-shadow-2xl">Rusty<span className="text-red-500">-</span>driver</h1>
                        <p className="text-center text-[20px] text-red-500 font-bold">RUST</p>
                    </div>

                    <motion.div
                        key={3}
                        exit={hoverStates[3] ? { opacity: 0, transition: { duration: 0.5, delay: 0.5 } } : {}}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        onHoverStart={() => handleHoverStart(3)}
                        onHoverEnd={() => handleHoverEnd(3)}
                    >
                        <Link to={"/personal-website/"}>
                            <div className="bg-[#111111] project-card">
                                <div className="project-grid">
                                    {/* <div className="flex items-center"> */}
                                    <div className="flex items-center h-120">
                                        <div className="w-full  pl-5 flex-row text-center space-y-2">
                                            <h1 className="text-5xl font-bold ">Rusty<span className="text-red-500">-</span>driver</h1>
                                            <p className="text-center text-[20px] text-red-400 font-bold">RUST</p>
                                            <p className="text-2xl p-8 text-center">
                                                <span className="high-red">Rusy-driver</span> is a simulation of a car riding and overtaking other cars on a highway. For steering it uses a neural network made by me and trains itself over time.
                                            </p>
                                        </div>
                                    </div>

                                    <img src="driver.png" className=" h-120 object-cover object-bottom  rounded-4xl " />
                                </div>
                            </div></Link></motion.div>

                </section>
                {/* <div className="h-1 mt-10 w-full bg-blue-500 rounded-full" /> */}
                <section data-bgcolor="#fc9c58" data-textcolor="#111111" >

                    <div className="mb-8 pl-5 sm:flex hidden 2xl:hidden gap-x-5 items-end">
                        <h1 className="text-5xl font-bold drop-shadow-2xl"><span className="text-cyan-500">RPN</span> calculator</h1>
                        <p className="text-center text-[20px] text-cyan-500 font-bold">C++</p>
                    </div>

                    <motion.div
                        key={4}
                        exit={hoverStates[4] ? { opacity: 0, transition: { duration: 0.5, delay: 0.5 } } : {}}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        onHoverStart={() => handleHoverStart(4)}
                        onHoverEnd={() => handleHoverEnd(4)}
                    >
                        <Link to={"/personal-website/"}>
                            <div className="bg-[#1f394f] project-card">
                                <div className="project-grid">
                                    {/* <div className="flex items-center"> */}
                                    <div className="flex items-center h-120">
                                        <div className="w-full  pl-5 flex-row text-center space-y-2">
                                            <h1 className="text-5xl font-bold drop-shadow-2xl"><span className="text-cyan-500">RPN</span> calculator</h1>
                                            <p className="text-center text-[20px] text-cyan-400 font-bold">C++</p>
                                            <p className="text-2xl p-8 text-center">
                                                <span className="high-cyan">RPN calculator</span> is a calculator in the RPN (reverse polish notation system) working on a device I created based on the ESP32 microcontroller.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2">

                                        <img src="rpn2.jpg" className=" h-120 object-cover object-bottom  rounded-l-4xl " />
                                        <img src="rpn1.jpg" className=" h-120 object-cover object-bottom  rounded-r-4xl " />
                                    </div>
                                </div>
                            </div></Link></motion.div>

                </section>

                <section data-bgcolor="#fc9c58" data-textcolor="#111111" >

                    <div className="mb-8 pl-5 sm:flex hidden 2xl:hidden gap-x-5 items-end">
                        <h1 className="text-5xl font-bold drop-shadow-2xl">The <span className="text-green-500">Slime</span> Army</h1>
                        <p className="text-center text-[20px] text-green-500 font-bold">C#</p>
                    </div>
                    <motion.div
                        key={5}
                        exit={hoverStates[5] ? { opacity: 0, transition: { duration: 0.5, delay: 0.5 } } : {}}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        onHoverStart={() => handleHoverStart(5)}
                        onHoverEnd={() => handleHoverEnd(5)}
                    >
                        <Link to={"/personal-website/"}>
                            <div className="bg-[#3d5924] project-card">
                                <div className="project-grid">
                                    {/* <div className="flex items-center"> */}
                                    <div className="flex items-center h-120">
                                        <div className="w-full  pl-5 flex-row text-center space-y-2">
                                            <h1 className="text-5xl font-bold drop-shadow-2xl">The <span className="text-green-500">Slime</span> Army</h1>
                                            <p className="text-center text-[20px] text-green-400 font-bold">C#</p>
                                            <p className="text-2xl p-8 text-center">
                                                <span className="high-teal">The Slime Army</span> is a game about creating and commanding an army of slimes created in the Unity Engine with C#</p>
                                        </div>
                                    </div>


                                    <img src="army1.png" className=" h-120 object-cover  rounded-4xl " />
                                </div>
                            </div></Link></motion.div>

                </section>
                <section data-bgcolor="#fc9c58" data-textcolor="#111111" >

                    <div className="mb-8 pl-5 sm:flex hidden 2xl:hidden gap-x-5 items-end">
                        <h1 className="text-5xl font-bold drop-shadow-2xl">Fox In <span className="text-violet-500">Space</span></h1>
                        <p className="text-center text-[20px] text-violet-500 font-bold">C#</p>
                    </div>
                    <motion.div
                        key={7}
                        exit={hoverStates[7] ? { opacity: 0, transition: { duration: 0.5, delay: 0.5 } } : {}}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        onHoverStart={() => handleHoverStart(7)}
                        onHoverEnd={() => handleHoverEnd(7)}
                    >
                        <Link to={"/personal-website/"}>
                            <div className="bg-[#281448] project-card">
                                <div className="project-grid">
                                    {/* <div className="flex items-center"> */}
                                    <div className="flex items-center h-120">
                                        <div className="w-full  pl-5 flex-row text-center space-y-2">
                                            <h1 className="text-5xl font-bold drop-shadow-2xl">Fox in <span className="text-violet-500">Space</span></h1>
                                            <p className="text-center text-[20px] text-violet-400 font-bold">C#</p>
                                            <p className="text-2xl p-8 text-center">
                                                <span className="high-teal">Fox In Space</span> is a game made in the Unity game engine in which you play as a fox navigating a space station. It is a 2D platformer game made for speedruns.
                                            </p></div>
                                    </div>


                                    <img src="fox.png" className=" h-120 object-cover  rounded-4xl " />
                                </div>
                            </div></Link></motion.div>

                </section>
                <section data-bgcolor="#fc9c58" data-textcolor="#111111" >

                    <div className="mb-8 pl-5 sm:flex hidden 2xl:hidden gap-x-5 items-end">
                        <h1 className="text-5xl font-bold drop-shadow-2xl">Evo-<span className="text-cyan-500">r</span></h1>
                        <p className="text-center text-[20px] text-cyan-500 font-bold">RUST</p>
                    </div>
                    <motion.div
                        key={8}
                        exit={hoverStates[8] ? { opacity: 0, transition: { duration: 0.5, delay: 0.5 } } : {}}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        onHoverStart={() => handleHoverStart(8)}
                        onHoverEnd={() => handleHoverEnd(8)}
                    >
                        <Link to={"/personal-website/"}>
                            <div className="bg-[#143a48] project-card">
                                <div className="project-grid">
                                    {/* <div className="flex items-center"> */}
                                    <div className="flex items-center h-120">
                                        <div className="w-full  pl-5 flex-row text-center space-y-2">
                                            <h1 className="text-5xl font-bold drop-shadow-2xl">Evo-<span className="text-cyan-500">r</span></h1>
                                            <p className="text-center text-[20px] text-cyan-400 font-bold">RUST</p>
                                            <p className="text-2xl p-8 text-center">
                                                <span className="high-teal">Evo-r</span> is a creature creator written in rust with Bevy, where you put joints with restrictions together creating a creature that then learns how to walk and run.
                                            </p></div>
                                    </div>


                                    <img src="evor.png" className=" h-120 object-cover  rounded-4xl " />
                                </div>
                            </div></Link></motion.div>
                </section>

                <section data-bgcolor="#fc9c58" data-textcolor="#111111" >

                    <div className="mb-8 pl-5 sm:flex hidden 2xl:hidden gap-x-5 items-end">
                        <h1 className="text-5xl font-bold drop-shadow-2xl">Karp Bots</h1>
                        <p className="text-center text-[20px] text-cyan-500 font-bold">RUST / PYTHON / C#</p>
                    </div>
                    <motion.div
                        key={9}
                        exit={hoverStates[9] ? { opacity: 0, transition: { duration: 0.5, delay: 0.5 } } : {}}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        onHoverStart={() => handleHoverStart(9)}
                        onHoverEnd={() => handleHoverEnd(9)}
                    >
                        <Link to={"/personal-website/"}>
                            <div className="bg-[#0c1a43] project-card">
                                <div className="project-grid">
                                    {/* <div className="flex items-center"> */}
                                    <div className="flex items-center h-120">
                                        <div className="w-full  pl-5 flex-row text-center space-y-2">
                                            <h1 className="text-5xl font-bold drop-shadow-2xl">Karp Bots</h1>
                                            <p className="text-center text-[20px] text-cyan-400 font-bold">RUST / PYTHON / C#</p>
                                            <p className="text-2xl p-8 text-center">
                                                <span className="high-teal">Karp Bots</span> are a series of discord bots i created in python, C# and Rust for various purposes.
                                            </p></div>
                                    </div>


                                    <img src="karp3.0.jpeg" className=" h-120 object-cover  rounded-4xl " />
                                </div>
                            </div></Link></motion.div>

                </section>
            </main >
        </div >
    );

}
export default transition(MainContent);


