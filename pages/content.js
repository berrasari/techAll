
import React, { useState,useEffect } from "react";
import { useRouter } from 'next/router'; 
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

export const getServerSideProps=async()=>{
    const request=await fetch('http://localhost:2000/api/Contents');
   
    const content=await request.json();


    return{
        props:{
            content,
     
        },
    };
}







function Validate({content}){
    const router = useRouter();
    const [userid,setuserid]=useState("");
    const[title,setTitle]=useState("");
    const[imageurl,setImageURL]=useState("");
    const[keyword,setKeyword]=useState("");
    const[Content,setContent]=useState("");
    const[Category,setCategory]=useState("");
    const contentArray = Array.from(content.data);
    const [isLoading, setIsLoading] = useState(false);
    const hasMatch = contentArray.some(
        (Content) => Content.title === title
    );


    async function Register() {

        if (hasMatch) {


            setError('Bu başlık kullanımda');
            
        }
        else{
            let item = { userid, title, imageurl,Content,Category }
            
            console.warn(item)
            

            let result = await fetch("http://localhost:2000/api/Contents", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Access-Control-Allow-Origin": "no-cors",
                    "Content-Type": 'application/json',
                    "Accept": "application/json"
                }

            })

            setIsLoading(true);
            result = await result.json();
            
        }

       
    }


    return(
           <div>
              <div className=" min-h-screen py-20">
              <div className="container mx-auto my-2">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-gray rounded-xl mx-auto shadow-lg overflow-hidden">
                   <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-l bg-orange-400 py-16 px-12" >
                       <div action="#">
                        <div >
                            <label htmlFor="Title" className="text-gray">Başlık</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)}type="text" placeholder="Başlık" className="border border-gray-400 py-1 px-2 w-full "/>
                            <label htmlFor="Url" className="text-gray">Resim url'i giriniz.</label>
                            <input value={imageurl} onChange={(e) => setImageURL(e.target.value)}type="url" placeholder="http://" className="border border-gray-400 py-1 px-2 w-full"/>
                            <label htmlFor="Keyword" className="text-gray">Anahtar kelimeler</label>
                            <input value={keyword} onChange={(e) => setKeyword(e.target.value)}type="text" placeholder="örn.:bilim,teknik vs" className="border border-gray-400 py-1 px-2 w-full"/>
                            <label htmlFor="Content" className="text-gray">İçerik</label>
                            <textarea value={Content} onChange={(e) => setContent(e.target.value)} placeholder="İçerik bilgisi." rows={10} className=" resize-y border border-gray-400 py-1 px-2 w-full" />
                        </div>
                       </div>
                   </div>
                   <div className="w-full lg:w-1/2 py-16 px-12">
                   <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          Kategoriler
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          
          
              <Menu.Item>
                {({ active }) => (
                  <button
                   value={Category} onClick={setCategory(1)}
                    
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Bilgisayar
                  </button>
                )}
              </Menu.Item>
           
              <Menu.Item>
                {({ active }) => (
                  <button
                   value={Category} onClick={setCategory(2)}
                    
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Elektronik
                  </button>
                )}
              </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
                      
                       <div >
                  <button onClick={Register} className=" px-32 py-2 mt-5 bg-orange-600  w-full rounded-xl text-center text-gray"> Kaydet</button>
                       </div>
                   </div>
                </div>
               
                </div> 
              </div>
           </div>
           
    );
}
export default Validate
