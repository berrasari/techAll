import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image"
import { useRouter } from 'next/router';
import Navbar from "../../components/Navbar"

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
export const getServerSideProps = async () => {
    const request = await fetch(
        `http://localhost:2000/api/Contents/`
    );
    const posts = await request.json();
    const request2 = await fetch(
        `http://localhost:2000/api/Categories/`
    );
    const categories = await request2.json();
    const request3= await fetch(
        `http://localhost:2000/api/Categories/`
    );
    const author = await request3.json();
    return {
        props: {
            posts,
            categories,
            author,
        },
    };
}
const Home = ({ posts ,categories,author}) => {
    const [render, setRender] = useState(false);

    const [CategoryID, setCategoryID] = useState("");
    useEffect(() => {
        setRender(true);
    }, []);
   
   
    

    return (
        <> < Navbar className="fixed z-100" />
        <div className="px-4 mx-auto bg-gray-800 bg-opacity-25 max-w-7xl sm:px-6 lg:px-8 ">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="">{
                <div key={categories.CategoryName}className="relative px-4 pt-16 pb-20 bg-gray-800 bg-opacity-25 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                    <div className="absolute inset-0">
                        <div className="bg-transparent h-1/3 sm:h-2/3" />
                    </div>
                    <div className="relative mx-auto max-w-7xl">

                        <div className="text-center transform -translate-y-24 bg-gray-800 bg-opacity-25 border-orange-500 border-radius-3 border-orange">
                           
                        <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    Kategoriler
                    <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                    {categories.data.map((post) => (
                                            <a href={"../contents/" + post.CategoryName}>
                    
                      <Menu.Item>
                        {({ active }) => (
                            
                          <button  href="#" 
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block w-full px-4 py-2 text-left text-sm'
                            )}
                          >
                           
                             <li className="w-full px-6 py-2 border border-gray-200 rounded-lg text-bold hover:bg-stone-400 hover:text-white">{post.CategoryName}</li>
                                           
                                       
                          </button>
                        )}
                      </Menu.Item>
                      </a> ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
                            <h2 className="pt-24 text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                                  techAll
                            </h2>
                            <h3 className="max-w-2xl p-3 pb-24 mx-auto text-xl text-orange-700 sm:mt-4">
                                İÇERİKLERİ 
                              
                       </h3>    
                            
                        </div>
                       
                        <div className="grid gap-5 mt-0 mt-12 transform w-lg mx-18 -translate-y-44 lg:grid-cols-3 lg:max-w-none">
                            {posts.data.map((post) => (
                                <div
                                    key={post.ContentID}
                                    className="flex flex-col items-center overflow-hidden bg-gray-400 rounded-lg shadow-lg bg-opacity-10"
                                >
                                    <a href={"/contents/" + post.ContentID} as={"/contents/14"}>


                                        <div className="w-full px-4 py-6 transition-all duration-150 ">
                                            <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-transparent bg-gray-200 rounded-lg shadow-lg bg-opacity-10 hover:shadow-2xl">
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
                                                    {post.count} Beğeni  
                                                </div>
                                                <div className="border-gray-300" />
                                                <div className="px-4 py-2 mt-2">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center flex-1">
                                                            <div className="flex flex-col mx-2">
                                                                <div
                                                                    href=""
                                                                    className="font-semibold text-gray-800 hover:underline"
                                                                >
                                                                    Yazar : {post.username}
                                                                </div>
                                                                <div className="text-xs text-gray-600 text-title">
                                                                    Anahtar Kelimeler = {post.Keywords}
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