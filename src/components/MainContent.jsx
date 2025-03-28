import React from "react";

const MainContent = () => {
    const womp = "bold";
    return (
        <main className="mx-5 mt-5 mb-10 flex-row space-y-20">
            <div className="mb-8 flex gap-x-5 items-end">
                <h1 className="text-5xl font-bold ">Karp<span className="bg-amber-500 text-transparent bg-clip-text">p</span>ortal</h1>
                {/* <div className="p-1 bg-white rounded-lg"> */}
                <img src="kpplogo.png" className="h-10 float-left" />
                {/* </div> */}
                <p className="text-center text-[20px] text-amber-500 font-bold">DART</p>
            </div>

            <div className="text-2xl border-amber-500 border-2 rounded-2xl p-4 space-y-5">
                {/* <div className="p-1 bg-white float-left mr-4 rounded-2xl"> */}
                {/* <img src="kpplogo.png" className="h-20 float-left mr-5"/> */}
                {/* </div> */}
                <p>Karpportal is a social-media platform I developed in Flutter and dart with firebase for the backend. The project aims to provide an app where people can post about their favourite stuff and communicate with each other. Some notable features of the app are, end to end encryption, group chats and highly customizable themes.</p>
                <p>For complete list of features and more screenshots head to the <a className="text-amber-300 underline" target="blank_" href="https://github.com/GreenSlimeStudios/karpportal">github repo</a>.</p>
            </div>
            {/* <p className="bg-amber-400 text-transparent bg-clip-text"> womp womp</p> */}

            <div className="mb-8 flex gap-x-5 items-end">
                <h1 className="text-5xl font-bold ">Encrypter <span className="fancy-blue">Deluxe</span></h1>
                <p className="text-center text-[20px] text-blue-500 font-bold">DART / C# / C++</p>
            </div>

            <div className="text-2xl border-blue-500  border-2 rounded-2xl p-4 space-y-5">
                <p >
                    <span className="high-blue">Encrypter</span><span className="fancy-blue"> deluxe</span> is an application for creating and managing passwords the unique thing that seperates this app from other password managing apps is that it works on a completely different princepal.
                </p>
                <p>
                    In short you have to remember a <span className="high-blue">main password</span> that you don't use anywhere. Then you assign a <span className="high-blue">seed</span> number to a service and generate the password from your main password and the seed and a set password length. The app allows you to store the seeds with notes that are guarded by the systems <span className="high-blue">biometric lock</span>. Additionally you have several algorythms to choose from in case a service doesn't allow a certain type of characters so you can choose to generate the password from diffrent character type combinations.
                </p>
                <p>
                    I wanted to make this app in dart / flutter for cross platform compatibility. It is my 3rd and final attempt at perfecting the app. Previous versions were written in <span className="high-blue">C++</span> and then in <span className="high-blue">C# Xamarin</span> however I was not satified with C++ mobile compatibility and Xamarin was a bit outdated and did not fit my coding style. However by being curious and experimental I found out why Xamarin did not fit my needs. I constantly try new technologies and explore the vast programming world.
                </p>
                <p>
                    That way I can access my passwords anywhere I want. The build supports linux windows and android. The important thing is that the app doesn't store the passwords only your saved seeds so when one of your passwords gets leaked. There is no correlation between that password and the passwords the app generates for other services. Thats why it is very important <span className="high-blue">not to use</span> your main password anywhere except for generating passwords.
                </p>
            </div>
            
            <div className="mb-8 flex gap-x-5 items-end">
                <h1 className="text-5xl font-bold ">Midi-<span className="text-indigo-500">b</span></h1>
                <p className="text-center text-[20px] text-indigo-500 font-bold">RUST</p>
            </div>

            <div className="text-2xl border-indigo-500  border-2 rounded-2xl p-4 space-y-5">
                <p >
                    <span className="high-indigo">Midi-b</span> is a program that aims to visualise the notes played on a midi device like a piano in a nice visual way that is very customizable. it is the successor of my older version midi-recorder that is built from the ground up to have better performance and more functionality.
                </p>
                <p>
                    The program written in Rust in the Bevy game engine, the predecessor was built also in rust but using the Nannou crate. Midi-b can visualize the notes live via a midi cable connection or replay a prerecorded midi file.
                </p>
                <p>
                    I built this program because I do play the piano and I wanted to create something cool that would put my hobbies together.
                </p>
                <p>For a complete list of features and more video examples and screenshots head to the <a className="text-indigo-300 underline" target="blank_" href="https://github.com/GreenSlimeStudios/midi-b">github repo</a>.</p>
            </div>

            {/* <div className="h-0.5 mt-10 w-full bg-blue-500 rounded-full" /> */}
        </main>);
}
export default MainContent;
