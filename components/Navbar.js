/* This example requires Tailwind CSS v2.0+ */

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'



export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-transparent bg-cover  shadow-lg bg-[url('https://c4.wallpaperflare.com/wallpaper/718/756/55/gray-dark-gradation-blur-wallpaper-preview.jpg')]">
      {({ open }) => (
        <>
          <div className="items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-16">
              <div className="flex items-center justify-center">
                <div className="flex items-center flex-shrink-0">
                <a href="/">
                   </a>
                </div>
                <div className="hidden px-5 sm:flex sm:space-x-8" >
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-orange-700 hover:text-gray-300" */}
                  <div className="inline-flex items-center px-1 pt-1 text-sm font-bold text-gray-300 border-b-2 border-transparent hover:border-orange-700 hover:text-gray-900"
                    ><a 
                    href="/"
                  >
                    Anasayfa
                  </a></div>
                  <div
                    className="inline-flex items-center px-1 pt-1 text-sm font-bold text-gray-300 border-b-2 border-transparent hover:border-orange-700 hover:text-gray-900"
                    > <a
                    href="/posts"
                  >
                    Teknoloji Aktüel
                  </a></div>
                 <div
                    className="inline-flex items-center px-1 pt-1 text-sm font-bold text-gray-300 border-b-2 border-transparent hover:border-orange-700 hover:text-gray-900"
                    ><a
                    href="/about"
                  >
                    İçerikler
                  </a></div>
                  <div
                    className="inline-flex items-center px-1 py-1 text-sm font-bold text-gray-900 border-2 border-orange-700 rounded-md hover:border-gray-700 hover:text-gray-300"
                    ><a
                    href="/login"
                  >
                    Hesap
                  </a></div>
                 
                </div>
              </div>
              
            </div>
          </div>

         
        </>
      )}
    </Disclosure>
  )
}
