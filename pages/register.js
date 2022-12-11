import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from 'next/router';




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

function signUp({users}) {
    const router = useRouter();
    const [username, setusername] = useState("");
    const[error, setError] = useState(null);
  
    const [password, setpassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const usersArray = Array.from(users.data);

    const hasMatch = usersArray.some(
        (user) => user.username === username
    );


    // If a user was found, set a cookie and redirect to the dashboard
    
   

    async function Register() {

        if (hasMatch) {


            setError('Kullanıcı adına kullanımda');
            
        }
        else{
            let item = { username, password }
            console.warn(item)

            let result = await fetch("http://localhost:2000/api/users", {
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
            console.warn("Result: ", result)
            router.push('/login');
        }




       

    }
    return (
        <>
            <form class="min-h-screen  bg-cover  shadow-md bg-[url('https://c4.wallpaperflare.com/wallpaper/718/756/55/gray-dark-gradation-blur-wallpaper-preview.jpg')]  flex flex-col justify-center sm:py-12" >
                <div class="relative py-3 sm:max-w-xl sm:mx-auto -translate-y-12">
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-600 shadow-lg transform  -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div class="relative px-4 py-10 bg-stone-300 bg-opacity-70 shadow-lg sm:rounded-3xl sm:p-20">
                        <div class="max-w-md mx-auto">
                            <div>
                                <h1 class="text-2xl font-semibold">techAll Hesap Oluşturma   </h1>
                            </div>
                            <div class="divide-y divide-gray-200" >
                                <div class="py-8 my-3 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div class="relative">
                                        <input value={username} onChange={(e) => setusername(e.target.value)} name="username" type="username" class="peer mb-6 placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                                        <label for="username" class="absolute left-0 -top-5 mb-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Kullanıcı adı</label>
                                    </div>
                                    <div class="relative">
                                        <input id="password-field"
                                           
                                            value={password} onChange={(e) => setpassword(e.target.value)} autocomplete="off" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                                        <label for="password" class="absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Şifre</label>
                                        {isLoading && <p>Loading...</p>}
                                        {error && <p>{error}</p>}
                                    </div>
                                    <div class="relative">
                                        <button 
                                            onClick={Register}
                                            className="px-2 px-3 py-1 text-white bg-orange-500 rounded rounded-md bg-opacity-80 form-control btn btn-primary submit hover:bg-gray-700" type="submit" class="bg-orange-500  text-white rounded-md px-2 py-1 " >Kayıt Ol</button>
                                    </div>
                                    <a  href = "/login">
                                        <div class="mt-6 text-gray-600 text-center text-sm border-b-2 border-orange-500 hover:text-orange-500">Hesabınız var ise giriş yapabilirsiniz.</div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
           
            

        </>


    );


}

export default signUp;