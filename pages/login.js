
import React, { useState } from 'react';
import { useRouter } from 'next/router';



export const getServerSideProps = async () => {
    const request = await fetch(
        `http://localhost:2000/api/users/`
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
        

        

        const user = usersArray.find(
            (user) => user.username === username && user.password === password 
            
            
        );
       

        
        // If a user was found, set a cookie and redirect to the dashboard
        if (user && user.UserType_ID == 2  ) {
            router.push("/admin/" + user.username);

           
        }
         else if (user && user.UserType_ID == 1  ) {
            router.push("/user/"+user.username);

           
        }
        else {
            // If no user was found, show an error
            setError('Invalid username or password');
        }
    };

    return (
        <form className="min-h-screen  bg-cover  shadow-md bg-[url('https://c4.wallpaperflare.com/wallpaper/718/756/55/gray-dark-gradation-blur-wallpaper-preview.jpg')]  flex flex-col justify-center sm:py-12"  onSubmit={handleSubmit}>
            <div className="relative py-3 -translate-y-12 sm:max-w-xl sm:mx-auto">
		<div
                    className="absolute inset-0 transform translate-y-12 -skew-y-6 shadow-lg bg-gradient-to-r from-orange-400 to-orange-700 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
                <div className="relative px-4 py-10 translate-y-12 shadow-lg bg-stone-800 bg-opacity-60 sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold text-orange-200">techAll  Kullanıcı Girişi </h1>
				</div>
				<div className="divide-y divide-gray-200" >
					<div className="py-8 my-3 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative ">
							<input autoComplete="off"  name="username" type="username" className="w-full h-10 mb-3 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600" />
							<label htmlFor="username" className="absolute mb-6 left-0 -top-5 text-gray-300 text-sm peer-placeholder-shown:text-base mb-3 peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Kullanıcı adı</label>
						</div>
						<div className="relative">
							<input autoComplete="off"  name="password" type="password" className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600" />
							<label htmlFor="password" className="absolute left-0 -top-5 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Şifre</label>
                                    {isLoading && <p>Loading...</p>}                           
                                        {error && <p>{error}</p>}						
                        </div>
						<div className="relative">
                                    <button type="submit" className="px-2 py-1 text-white bg-orange-300 rounded-md bg-opacity-60 hover:bg-orange-600 hover:bg-opacity-80 " onClick={() => setIsLoading(true) }>Giriş</button>
						</div>
                                <a href="/register">
                                    <div className="mt-6 text-sm text-center text-orange-200 border-b-2 border-orange-400 hover:text-orange-500">Hesabınız yok ise kayıt olabilirsiniz.</div></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</form>



);

};

export default Login;
