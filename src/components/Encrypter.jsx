import React from "react";
import { motion } from "framer-motion"
import transition from "../transition";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const EncrypterPage = () => {
    return (<div>
        <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            className="bg-[#5866fc] h-[152px]  p-10">
            {/* <h1 className="text-8xl font-bold text-center p-10">Karpportal</h1> */}
            <div className="flex items-center  gap-15 ">
                {/* <p>le fish au chocolate</p> */}

                <Link to={"/personal-website/"} className=" bg-white p-4 rounded-t-2xl flex items-center gap-4"><p className="text-2xl font-bold text-black">Back</p>
                    <IoArrowBack className="text-black h-10" size={30} />
                </Link>
               

                <div className="flex space-x-5 p-8  bg-white items-center rounded-3xl text-gray-900 ">
                    {/* <h1 className="text-5xl font-bold ">Karp<span className="bg-amber-500 text-transparent bg-clip-text">p</span>ortal</h1>
                    <img src="kpplogo.png" className=" h-30 object-cover object-bottom " /> */}
<div className="px-5  flex  gap-x-5 items-end p-4 pb-6">
                        <h1 className="text-5xl font-bold ">Encrypter <span className="fancy-blue">Deluxe</span></h1>
                        <p className="text-center text-[20px] text-blue-500 font-bold">DART / C# / C++</p>
                    </div>
                </div>
                {/* <p className="font-bold">karpportal</p> */}
                {/* <p className="font-bold">karpportal</p>
                <p className="font-bold">karpportal</p> */}
                <button onClick={() => { alert("maxdev.gdynia@gmail.com") }} className="p-4 bg-white rounded-t-2xl flex items-center gap-4">
                    <p className="text-2xl font-bold text-black">Contact</p>
                    <CiMail size={30} className="h-10 text-black" />
                </button>
            </div>
            <div className="py-10 text-2xl font-medium  relative paracontent">
                <p >
                    <span className="high-blue">Encrypter</span><span className="fancy-blue"> deluxe</span> is an application for creating and managing passwords. The unique thing that seperates this app from other password managing apps is that it works on a completely different principal.
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
            {/* <div className="grid grid-cols-10 gap-2 karp-images hidden">

                <img src="https://user-images.githubusercontent.com/86601983/179499154-27552f06-5aa7-49c5-8a59-81932c4dde56.png" />
                <img src="https://user-images.githubusercontent.com/86601983/179499279-c510e9d8-bd86-4630-abf2-b1202bb547ea.png" />
                <img src="https://user-images.githubusercontent.com/86601983/179499295-22bf7e29-518e-43ce-b885-3cc29cf86225.png" />
                <img src="https://user-images.githubusercontent.com/86601983/179499317-23cf671e-3be6-413f-8c04-9132ec08f366.png" />
                <img src="https://user-images.githubusercontent.com/86601983/179499327-42b7c214-7a68-4bfd-84dc-a74beda7ab5f.png" />
                <img src="https://user-images.githubusercontent.com/86601983/179499340-0f88044b-5be0-4649-8564-99119de1488a.png" />
                <img src="https://user-images.githubusercontent.com/86601983/179499348-9c7f75c2-b022-4513-ac48-205fe7382dd2.png" />
                <img src="https://user-images.githubusercontent.com/86601983/179499897-ecf9c9fd-8e5a-4a0a-ade4-d42c067058fa.png" />
                <img src="https://user-images.githubusercontent.com/86601983/179499909-56f6e020-db57-4f77-bb82-e03b33e7ad69.png" />
                <img src="https://user-images.githubusercontent.com/86601983/179500207-a0eacfce-9822-4e4b-a12f-29b86f9032a8.png" />

            </div> */}
            <motion.div className="relative p-0 m-0 h-[350px]"
            // exit={ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }
            >

                
                <div className="grid grid-cols-7 gap-2 k-img">
                    <div/>
                    <div className="container"><img className="big-image" src="https://cdn.discordapp.com/attachments/1079383472952586310/1366465732556099594/Screenshot_20250428_192358.jpg?ex=68110be2&is=680fba62&hm=b5df2dc6e963e3844c5154ebabc1e09b7e5dd4ba4ef72319c44a7e64409a86fb&" /></div>
                    <div className="container"><img className="big-image" src="https://cdn.discordapp.com/attachments/1079383472952586310/1366465732879187968/Screenshot_20250428_192419.jpg?ex=68110be2&is=680fba62&hm=f5faa2e77ec73280cbde63abced5481a5ec14a8e824f9e2ca564978a7c61d7d4&" /></div>
                    <div className="container"><img className="big-image" src="https://cdn.discordapp.com/attachments/1079383472952586310/1366465733206474802/Screenshot_20250428_192426.jpg?ex=68110be2&is=680fba62&hm=e35ab9d578536eb86de017c10e8041e720f1a43b9bf361126562c54440f2f883&" /></div>
                    <div className="container"><img className="big-image" src="https://cdn.discordapp.com/attachments/1079383472952586310/1366465733483303023/Screenshot_20250428_192516.jpg?ex=68110be2&is=680fba62&hm=7760e3eabd999e0fe6d5e57804b494d2bfe6f564189b411510ca390df5e2ad81&" /></div>
                    <div className="container"><img className="big-image" src="https://cdn.discordapp.com/attachments/1079383472952586310/1366465734116376710/Screenshot_20250428_192552.jpg?ex=68110be2&is=680fba62&hm=8d0f09290331364662c1a9d334e593e70b34f3a50a3747e6a42b1c7d11b4c6c8&" /></div>
                </div>
    
            </motion.div>
            <div className="h-200"></div>
        </motion.div>
    </div>)
}

export default transition(EncrypterPage);