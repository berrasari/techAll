import Navbar from "../components/Navbar"
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export const getStaticProps = async () => {
  const request = await fetch(
    `http://localhost:2000/api/users`
  );
  const users = await request.json();

  return {
    props: {
      users,
    },
  };
}







function Validate({ users }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [userid, setuserid] = useState("");
  const [title, setTitle] = useState("");
  const [imageurl, setImageURL] = useState("");
  const [Keywords, setKeywords] = useState("");
  const [Content, setContent] = useState("");
  const [CategoryID, setCategoryID] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const usersArray = Array.from(users.data);

  const user = usersArray.find(
    (user) => user.username === username && user.password === password
  );




  async function Register() {


    if (user.UserType_ID == 2) {
      let item = { userid, title, imageurl, Content, CategoryID, Keywords }
      item.userid = user.userid;
      item.userid = user.userid;
      item.Keywords = Keywords;
      item.CategoryID = CategoryID;

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
      router.push("/admin/" + user.username);

    }

    else {
      // If no user was found, show an error
      setError('Yetkiniz yok');
    }



  }


  return (
    <div>
      < Navbar className="fixed z-100" />
      <div className="min-h-screen py-20 ">
        <div className="container mx-auto my-2">
          <div className="flex flex-col w-10/12 mx-auto overflow-hidden shadow-lg lg:flex-row lg:w-8/12 bg-gray rounded-xl">
            <div className="flex flex-col items-center justify-center w-full px-12 py-16 bg-orange-400 lg:w-1/2 bg-gradient-to-l" >
              <div action="#">
                <div >
                  <label htmlFor="Title" className="text-gray">Başlık</label>
                  <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Başlık" className="w-full px-2 py-1 border border-gray-400 " />
                  <label htmlFor="Url" className="text-gray">Resim url'i giriniz.</label>
                  <input value={imageurl} onChange={(e) => setImageURL(e.target.value)} type="url" placeholder="http://" className="w-full px-2 py-1 border border-gray-400" />
                  <label htmlFor="Keywords" className="text-gray">Anahtar kelimeler</label>
                  <input value={Keywords} onChange={(e) => setKeywords(e.target.value)} type="text" placeholder="örn.:bilim,teknik vs" className="w-full px-2 py-1 border border-gray-400" />
                  <label htmlFor="Content" className="text-gray">İçerik</label>
                  <textarea value={Content} onChange={(e) => setContent(e.target.value)} placeholder="İçerik bilgisi." rows={10} className="w-full px-2 py-1 border border-gray-400 resize-y " />
                </div>
              </div>
            </div>
            <div className="w-full px-12 py-16 lg:w-1/2">
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


                      <Menu.Item>
                        {({ active }) => (
                          <button
                            value={1} onClick={(e) => setCategoryID(e.target.value)}

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
                            value={CategoryID} onClick={setCategoryID("2")}

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
                <>
                  <button className="w-full px-32 py-2 mt-5 text-center bg-orange-600 btn btn-primary rounded-xl text-gray" onClick={() => setIsOpen(true)}>
                    Paylaş
                  </button>

                  {isOpen && (
                    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center modal-overlay">
                      <div className="p-6 bg-white rounded shadow-lg modal-content">
                        <div ><button className="mb-4 text-lg bg-orange-400 btn btn-secondary" onClick={() => setIsOpen(false)}>
                          Kapat
                        </button></div>


                        <label htmlFor="username">Kullanıcı adı : </label>
                        <input
                          type="text"
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <div />
                        <label htmlFor="password">Şifre : </label>
                        <input
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="error">{error}</p>}
                        <div />
                        <button onClick={Register} className="w-full px-32 py-2 mt-5 text-center bg-orange-600 rounded-xl text-gray">
                          Doğrula
                        </button>

                      </div>
                    </div>
                  )}
                </>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}
export default Validate
