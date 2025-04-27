import React from "react";
import { motion } from "framer-motion"
import transition from "../transition";
import { Link } from "react-router-dom";

const Karpportal = () => {
    return (<div>
        <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            className="bg-[#fc9c58] h-[150px]  p-10">
            {/* <h1 className="text-8xl font-bold text-center p-10">Karpportal</h1> */}
            <div className="flex items-center  gap-20 ">
                {/* <p>le fish au chocolate</p> */}
                <p className="font-bold">karpportal</p>
                <p className="font-bold">karpportal</p>


                <div className="flex space-x-5 p-4 bg-white  items-center rounded-3xl text-gray-900 ">
                    <h1 className="text-5xl font-bold ">Karp<span className="bg-amber-500 text-transparent bg-clip-text">p</span>ortal</h1>
                    <img src="kpplogo.png" className=" h-30 object-cover object-bottom " />
                </div>
                {/* <p className="font-bold">karpportal</p> */}
                <Link to={"/personal-website/"}><p className="text-2xl font-bold">Back</p></Link>
                <a href="https://github.com/greenslimestudios/karpportal" target="_blank"><p className="text-2xl font-bold">github</p></a>

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
            <motion.div className="relative p-0 m-0 h-[350px]"
                        // exit={ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }
            >

                {/* <div className="flex justify-around gap-2 karp-images items-end">
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
                {/* <div className="flex justify-around gap-2 karp-images kp2 items-start">
                    <img src="https://user-images.githubusercontent.com/86601983/179498862-32548f7d-2fb7-4f8e-ab4c-24cfa61652fc.png" />
                    <img src="https://user-images.githubusercontent.com/86601983/179498885-d3e27ddf-2e3c-4bed-a516-affefc215f3a.png" />
                    <img src="https://user-images.githubusercontent.com/86601983/179498898-18e5b57b-45af-4fc1-b5ac-b32455544758.png" />
                    <img src="https://user-images.githubusercontent.com/86601983/179498927-825bb5ee-03dc-4625-ae16-cdec71a8afad.png" />
                    <img src="https://user-images.githubusercontent.com/86601983/179498934-309dfdb1-fccf-45fa-994a-e08d0c520c06.png" />
                    <img src="https://user-images.githubusercontent.com/86601983/179498964-a16480e4-02b9-455c-87db-0f5c2095e6d1.png" />
                    <img src="https://user-images.githubusercontent.com/86601983/179498992-afcddf5e-93bb-477c-a90e-9c1329b85a62.png" />
                    <img src="https://user-images.githubusercontent.com/86601983/179499766-74dca176-c8c5-43c4-ac3d-3b1a27cc28f5.png" />
                    <img src="https://user-images.githubusercontent.com/86601983/179499799-3155a6cd-337b-4685-83f0-f7188616b3e0.png" />
                    <img src="https://user-images.githubusercontent.com/86601983/179500115-b5919657-f178-4042-adfa-8742c6a6ecf3.png" />
                </div> */}
                <div className="grid grid-cols-10 gap-2 k-img">
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499154-27552f06-5aa7-49c5-8a59-81932c4dde56.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499279-c510e9d8-bd86-4630-abf2-b1202bb547ea.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499295-22bf7e29-518e-43ce-b885-3cc29cf86225.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499317-23cf671e-3be6-413f-8c04-9132ec08f366.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499327-42b7c214-7a68-4bfd-84dc-a74beda7ab5f.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499340-0f88044b-5be0-4649-8564-99119de1488a.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499348-9c7f75c2-b022-4513-ac48-205fe7382dd2.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499897-ecf9c9fd-8e5a-4a0a-ade4-d42c067058fa.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499909-56f6e020-db57-4f77-bb82-e03b33e7ad69.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179500207-a0eacfce-9822-4e4b-a12f-29b86f9032a8.png" /></div>
                </div>
   <div className="grid grid-cols-10 gap-2 k-img">
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179498862-32548f7d-2fb7-4f8e-ab4c-24cfa61652fc.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179498885-d3e27ddf-2e3c-4bed-a516-affefc215f3a.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179498898-18e5b57b-45af-4fc1-b5ac-b32455544758.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179498927-825bb5ee-03dc-4625-ae16-cdec71a8afad.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179498934-309dfdb1-fccf-45fa-994a-e08d0c520c06.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179498964-a16480e4-02b9-455c-87db-0f5c2095e6d1.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179498992-afcddf5e-93bb-477c-a90e-9c1329b85a62.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499766-74dca176-c8c5-43c4-ac3d-3b1a27cc28f5.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499799-3155a6cd-337b-4685-83f0-f7188616b3e0.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179500115-b5919657-f178-4042-adfa-8742c6a6ecf3.png" /></div>
                </div>
 <div className="grid grid-cols-10 gap-2 k-img">
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499540-1334faeb-37ac-4f23-9c75-b35d36753f44.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499554-75e75bb4-326d-424d-b64e-d92459f8afbf.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499562-55a6b165-d99e-4fc8-a05a-be3e531cc6d6.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499579-9712d45d-4c45-458e-b6a2-88fd767dcffb.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499588-888965f6-f98f-4d6d-9676-d902e18d3796.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499592-cb9960d7-8c35-451b-bb30-2bb0ce10c854.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499603-6b38700e-32c0-4ae4-908f-50253b6ac322.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499683-026c0401-9514-4d39-97f3-74beb9699b49.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179499977-77d8ac08-1ee1-4057-a1e5-e8168a4e3b87.png" /></div>
                    <div className="container"><img className="big-image" src="https://user-images.githubusercontent.com/86601983/179500358-f14acd70-074e-45ae-8b7a-ab3505eb60c5.png" /></div>
                </div>
            </motion.div>
            <div className="h-200"></div>
        </motion.div>
    </div>)
}

export default transition(Karpportal);