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
    const [UserType_ID, setUserType_ID] = useState("");
  
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
            let item = { username, password, UserType_ID }
            item.UserType_ID=2;
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
            <form className="min-h-screen  bg-cover  shadow-md bg-[url('https://c4.wallpaperflare.com/wallpaper/718/756/55/gray-dark-gradation-blur-wallpaper-preview.jpg')]  flex flex-col justify-center sm:py-12" >
                <div className="relative py-3 -translate-y-12 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-orange-300 to-orange-600 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 shadow-lg bg-stone-300 bg-opacity-70 sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">techAll Hesap Oluşturma   </h1>
                                <h2 className='font-semibold'>YAZAR HESABI</h2>
                            </div>
                            <div className="divide-y divide-gray-200" >
                                <div className="py-8 my-3 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input value={username} onChange={(e) => setusername(e.target.value)} name="username" type="username" className="w-full h-10 mb-6 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600" />
                                        <label for="username" className="absolute left-0 -top-5 mb-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Kullanıcı adı</label>
                                    </div>
                                    <div className="relative">
                                        <input id="password-field"
                                           
                                            value={password} onChange={(e) => setpassword(e.target.value)} autoComplete="off" name="password" type="password" className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600" />
                                        <label for="password" className="absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Şifre</label>
                                        {isLoading && <p>Loading...</p>}
                                        {error && <p>{error}</p>}
                                    </div>
                                    <div className="relative">
                                        <button 
                                            onClick={Register}
                                            className="px-2 px-3 py-1 text-white bg-orange-500 rounded rounded-md bg-opacity-80 form-control btn btn-primary submit hover:bg-gray-700" type="submit"  >Kayıt Ol</button>
                                    </div>
                                    <a href="/register
                                    ">
                                        <div  className="mt-6 text-sm text-center text-gray-600 border-b-2 border-orange-500 hover:text-orange-500">Okuyucu olarak kayıt olmak için tıklayınız.</div>
                                    </a>
                                    
                                    <a href="/login">
                                        <div className="mt-6 text-sm text-center text-gray-600 border-b-2 border-orange-500 hover:text-orange-500">Hesabınız var ise giriş yapabilirsiniz.</div>
                                    </a>

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