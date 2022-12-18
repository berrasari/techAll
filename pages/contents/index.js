import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image"



export const getServerSideProps = async () => {
    const request = await fetch(
        `http://localhost:2000/api/Contents/`
    );
    const posts = await request.json();
    
    return {
        props: {
            posts,
        },
    };
}
const Home = ({ posts }) => {
    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(true);
    }, []);

    return (
        <><div className="px-4 mx-auto bg-gray-800 bg-opacity-25 max-w-7xl sm:px-6 lg:px-8 ">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="">{
                <div className="relative px-4 pt-16 pb-20 bg-gray-800 bg-opacity-25 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                    <div className="absolute inset-0">
                        <div className="bg-transparent h-1/3 sm:h-2/3" />
                    </div>
                    <div className="relative mx-auto max-w-7xl">

                        <div className="text-center transform -translate-y-24 bg-gray-800 bg-opacity-25 border-orange-500 border-radius-3 border-orange">
                            <h2 className="pt-24 text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                                İçeriklerimiz
                            </h2>
                            <h3 className="max-w-2xl p-3 pb-24 mx-auto text-xl text-orange-700 sm:mt-4">
                                techAll
                            </h3>
                        </div>
                        <div className="grid w-lg gap-5  mx-18 mt-0 mt-12 transform -translate-y-44 lg:grid-cols-3 lg:max-w-none">
                            {posts.data.map((post) => (
                                <div
                                    key={post.ContentID}
                                    className="flex flex-col bg-gray-400 bg-opacity-10  items-center overflow-hidden rounded-lg shadow-lg"
                                >
                                    <a href={"/contents/detay/" + post.ContentID}>


                                        <div className="w-full px-4 py-6 transition-all duration-150 ">
                                            <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 bg-gray-200 bg-opacity-10  transition-all duration-150 bg-transparent rounded-lg shadow-lg hover:shadow-2xl">
                                                <div className="md:flex-shrink-0">
                                                    <Image
                                                        src={post.imageurl}
                                                       width='75'
                                                        height='25'

                                                        alt="Blog Cover"
                                                        className="object-fill w-full rounded-lg rounded-b-none md:h-56"
                                                    />
                                                </div>
                                                <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
                                                    <div className="flex flex-row items-center">
                                                        <div className="flex flex-row items-center mr-2 text-xs font-medium text-gray-500"></div>

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
                                                    {post.description}
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
                                                                    {post.author}
                                                                </div>
                                                                <div className="text-xs text-gray-600">
                                                                    {post.createdAt}
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
                        </div>
                    </div>
                </div>}</div>
        </div>
        </>
    );
}

export default Home;