import React from "react";
import { motion } from "framer-motion"
import transition from "../transition";

const Karpportal = () => {
    return (<div>
        <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            className="bg-[#fc9c58] h-[150px]  p-10">
            {/* <h1 className="text-8xl font-bold text-center p-10">Karpportal</h1> */}
            <div className="items-center flex">


                <div className="flex space-x-5 p-4 bg-white mx-auto items-center rounded-3xl text-gray-900 ">
                    <h1 className="text-5xl font-bold ">Karp<span className="bg-amber-500 text-transparent bg-clip-text">p</span>ortal</h1>
                    <img src="kpplogo.png" className=" h-30 object-cover object-bottom " />
                </div>

            </div>
            <div className="py-10 text-2xl font-bold relative">
                <p>Karpportal is a social-media platform I developed in Flutter / dart with firebase for the backend. The project aims to provide an app where people can post about their favourite stuff and communicate with each other. Some notable features of the app are, end to end encryption, group chats and highly customizable themes.</p>
                <p>Creating this app gave me some valueable experiance with making big projects and structuring them accordingly. </p>
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
            <div className="relative p-0 m-0 h-[350px]">

                <div className="flex justify-around gap-2 karp-images items-end">
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
                </div>
                {/* <div className="flex justify-around gap-2 karp-images kp2 items-start">
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
                {/* <div className="grid grid-cols-10 gap-2 k-img">
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
            </div>  */}
            </div>
        </motion.div>
    </div>)
}

export default transition(Karpportal);