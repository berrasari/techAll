import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";


xport const getStaticProps = async () => {
    const request = await fetch(
        `http://localhost:1337/api/videos/`
    );
    const posts = await request.json();
    return {
        props: {
            posts,
        },
    };
}
const Home = ({ operations, incidents }) => {
    const [render, setRender] = useState(false);
   

    useEffect(() => {
        setRender(true);
    }, []);

    return (
        <><div className="px-4 mx-auto bg-gray-400 bg-opacity-25 max-w-7xl sm:px-6 lg:px-8 ">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="">{
                <div className="relative px-4 pt-16 pb-20 bg-gray-600 bg-opacity-25 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                    <div className="absolute inset-0">
                        <div className="bg-white bg-opacity-50 h-1/3 sm:h-2/3" />
                    </div>
                    <div className="relative mx-auto max-w-7xl">


                        <div className="grid gap-5 mt-0 mt-12 transform -translate-y-12 bg-white bg-opacity-20 w-lg mx-18 lg:grid-cols-3 lg:max-w-none">
                    
                            {incidents.result.map((post) => (
                                <div
                                    key={post.title}
                                    className="flex flex-col items-center max-w-md overflow-hidden bg-gray-200 rounded-lg shadow-lg bg-opacity-10"
                                >
                                    <a href={post.url}>


                                        <div className="w-full px-4 py-6 transition-all duration-150 ">
                                            <div className="flex flex-col min-h-full pb-4 mb-6 transition-all duration-150 bg-transparent bg-gray-100 bg-opacity-50 rounded-lg shadow-lg hover:shadow-2xl">
                                                <div className="md:flex-shrink-0">
                                                    <Image
                                                        src={post.image}
                                                        width='75'
                                                        height='25'
                                                        alt="Blog Cover"
                                                        className="object-fill w-full rounded-lg rounded-b-none md:h-56"
                                                    />

                                                    <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
                                                        <div className="flex flex-row items-center">
                                                            <div className="flex flex-row items-center mr-2 text-xs font-medium text-gray-500">
                                                                {post.category}
                                                            </div>

                                                            <div className="flex flex-row items-center mr-2 text-xs font-medium text-gray-500"></div>

                                                            <div className="flex flex-row items-center text-xs font-medium text-gray-500"></div>
                                                        </div>
                                                    </div>
                                                    <div className="border-gray-300" />
                                                    <div className="flex flex-wrap items-center flex-1 px-4 py-1 mx-auto text-center">
                                                        <div href="#" className="hover:underline">
                                                            <h2 className="text-2xl font-bold tracking-normal text-orange-700">
                                                                {post.title}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div className="border-white-300" />
                                                    <div className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
                                                        {post.title}
                                                    </div>
                                                    <div className="border-gray-300" />
                                                    <div className="px-4 py-2 mt-2">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center flex-1">
                                                                <div className="flex flex-col mx-2">
                                                                    <div
                                                                        href=""
                                                                        className="font-semibold text-gray-700 hover:underline"
                                                                    >
                                                                        {post.yazar}
                                                                    </div>
                                                                    <div className="text-xs text-gray-600">
                                                                        date
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </a>
                                </div>
                            ))}
                       
                            {operations.result.map((post) => (
                                <div
                                    key={post.title}
                                    className="flex flex-col items-center max-w-md overflow-hidden bg-gray-400 rounded-lg shadow-lg bg-opacity-10"
                                >
                                    <a href={post.url}>


                                        <div className="w-full px-4 py-6 transition-all duration-150 ">
                                            <div className="flex flex-col min-h-full pb-4 mb-6 transition-all duration-150 bg-transparent bg-gray-100 rounded-lg shadow-lg bg-opacity-10 hover:shadow-2xl">
                                                <div className="md:flex-shrink-0">
                                                    <Image
                                                        src={post.image}
                                                        width='75'
                                                        height='25'
                                                        alt="Blog Cover"
                                                        className="object-fill w-full rounded-lg rounded-b-none md:h-56"
                                                    />

                                                    <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
                                                        <div className="flex flex-row items-center">
                                                            <div className="flex flex-row items-center mr-2 text-xs font-medium text-gray-500">
                                                                {post.category}
                                                            </div>

                                                            <div className="flex flex-row items-center mr-2 text-xs font-medium text-gray-500"></div>

                                                            <div className="flex flex-row items-center text-xs font-medium text-gray-500"></div>
                                                        </div>
                                                    </div>
                                                    <div className="border-gray-300" />
                                                    <div className="flex flex-wrap items-center flex-1 px-4 py-1 mx-auto text-center">
                                                        <div href="#" className="hover:underline">
                                                            <h2 className="text-2xl font-bold tracking-normal text-orange-700">
                                                                {post.title}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <div className="border-white-300" />
                                                    <div className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
                                                        {post.title}
                                                    </div>
                                                    <div className="border-gray-300" />
                                                    <div className="px-4 py-2 mt-2">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center flex-1">
                                                                <div className="flex flex-col mx-2">
                                                                    <div
                                                                        href=""
                                                                        className="font-semibold text-gray-700 hover:underline"
                                                                    >
                                                                        {post.yazar}
                                                                    </div>
                                                                    <div className="text-xs text-gray-600">
                                                                        date
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </a>
                                </div>
                            ))} </div>
                       
                    </div>
                </div>}</div>
        </div>
        </>
        
    );
}

export default Home;