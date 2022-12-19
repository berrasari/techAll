
const URL = 'http://localhost:2000/';




const Content = ({ post }) => {



    return (
        <>
        <div className="text-center inline-flex items-center px-12 py-2 text-sm font-bold text-gray-900  shadow-lg ">  
        Hosgeldiniz. Yazar hesabına giriş yaptınız.
       </div>
            <div className="min-h-screen px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="">{
                <div key={post.username} className="relative py-12 overflow-hidden bg-transparent">
                    
                    <div className="hidden lg:absolute lg:inset-y-0  lg:w-full">
                        <div className="relative h-full mx-auto text-lg max-w-prose" aria-hidden="true">
                            <svg
                                className="absolute transform translate-x-32 top-12 left-full"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                            >
                                <defs>
                                    <pattern
                                        id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                            </svg>
                            <svg
                                className="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                            >
                                <defs>
                                    <pattern
                                        id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                            </svg>
                            <svg
                                className="absolute transform translate-x-32 bottom-12 left-full"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                            >
                                <defs>
                                    <pattern
                                        id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                            </svg>
                        </div>
                    </div>
                    
                    <div class="container mx-auto my-2">
                <div class="flex flex-col w-full bg-gray rounded-xl mx-auto shadow-lg overflow-hidden">
                   <div class="w-full  flex flex-col items-center justify-center bg-gradient-to-l  py-16 px-12" >
                        <div >
                         <h1 class="text-left font-bold">PROFİL</h1>
                         
                        </div>
                        
                   </div>
                   <div class=" relative w-full  py-8 sm:px-6 lg:px-8  bg-orange-400">
                   
                        <div className="mx-auto text-lg max-w-prose">
                            
                            <h1>
                                <div className="block text-base font-semibold tracking-wide text-center text-gray-600 uppercase">
                                        İÇERİKLERİNİZ 
                                </div>
                                    

                            </h1>
                            
                        </div>

                        <div class="grid gap-4 grid-cols-3 mt-0 mt-12 w-lg mx-18 lg:grid-cols-5 lg:max-w-none">

                                <div class="flex justify-center"><a href="/content">
                                        <button className=" bg-orange-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                            + Yeni
                                        </button>
                                    </a>
                                    
                                    <ul class="translate-x-4 bg-white rounded-lg w-96 text-gray-900">

                                        {post.data.map((post) => (
                                            <a href={"../contents/" + post.ContentID}>
                                                <li class="px-6 py-2 border text-bold border-gray-200 w-full rounded-lg hover:bg-stone-400 hover:text-white">{post.title}</li></a>
                                           
                                        ))}


                                    </ul>
                                    
                                </div>
                           

                        </div>


                    
                   </div>
                </div>
               
                </div> 
              
                </div>
            }</div>
        </div></>

    )
}

export const getStaticPaths = async () => {



    const res = await fetch(`${URL}api/users`);
    const posts = await res.json()
    const paths = posts.data.map((post) => {
        return { params: { username: post.username.toString(), } }
    })

    return {

        paths: paths,
        fallback: false
    };
}

export const getStaticProps = async (context) => {
    const username = context.params.username;
    const request = await fetch(`${URL}api/Contents/author/${username}`);
    const post = await request.json();
    if (!post) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            post,
        },
    }
}
export default Content
