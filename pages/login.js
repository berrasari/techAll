
import React, { useState } from 'react';
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



const Login = ({users}) => {
    const router = useRouter();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        // Get the username and password values from the form
        const username = event.currentTarget.username.value;
        const password = event.currentTarget.password.value;

// Convert the users variable to an array
    const usersArray = Array.from(users.data);

        const hasMatch = usersArray.some(
            (user) => user.username === username && user.password === password
        );

        
        // If a user was found, set a cookie and redirect to the dashboard
        if (hasMatch) {
            

            router.push('/');
        } else {
            // If no user was found, show an error
            setError('Invalid username or password');
        }
    };

    return (
        <form class="min-h-screen  bg-cover  shadow-md bg-[url('https://c4.wallpaperflare.com/wallpaper/718/756/55/gray-dark-gradation-blur-wallpaper-preview.jpg')]  flex flex-col justify-center sm:py-12"  onSubmit={handleSubmit}>
            <div class="relative py-3 sm:max-w-xl sm:mx-auto -translate-y-12">
		<div
			class="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-700 shadow-lg transform  -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-stone-800 bg-opacity-60 shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl text-orange-200 font-semibold">techAll  Kullanıcı Girişi </h1>
				</div>
				<div class="divide-y divide-gray-200" >
					<div class="py-8 my-3 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative ">
							<input autocomplete="off"  name="username" type="username" class="peer  placeholder-transparent h-10 w-full border-b-2 mb-3 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
							<label for="username" class="absolute mb-6 left-0 -top-5 text-gray-300 text-sm peer-placeholder-shown:text-base mb-3 peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Kullanıcı adı</label>
						</div>
						<div class="relative">
							<input autocomplete="off"  name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
							<label for="password" class="absolute left-0 -top-5 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Şifre</label>
                                    {isLoading && <p>Loading...</p>}                           
                                        {error && <p>{error}</p>}						
                        </div>
						<div class="relative">
                                    <button type="submit" class="bg-orange-300 bg-opacity-60 text-white rounded-md px-2 py-1 hover:bg-orange-600 hover:bg-opacity-80 " onClick={() => setIsLoading(true) }>Giriş</button>
						</div>
                                <a href="/register">
                                    <div class="mt-6 text-orange-200 text-center text-sm border-b-2 border-orange-400  hover:text-orange-500">Hesabınız yok ise kayıt olabilirsiniz.</div></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</form>



);

};

export default Login;
