

const URL = 'http://localhost:2000/';

export const getStaticPaths = async () => {



    const res = await fetch(`${URL}api/Contents`);
    const posts = await res.json()
    const paths = posts.data.map((post) => {
        return { params: { ContentID: post.ContentID.toString(), } }
    })

    return {

        paths: paths,
        fallback: false
    };
}

export const getStaticProps = async (context) => {
    const ContentID = context.params.ContentID;
    const request = await fetch(`${URL}api/Contents/${ContentID}`);
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


const Content = ({post}) => {

    


    return (
        <><div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">


            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="">{
                
                
                <div key={post.data.ContentID } className="relative py-16 overflow-hidden bg-transparent">
                    
                    <div className="hidden  lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
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
                    <div className="min-h-screen shadow-lg rounded-xl  px-4 sm:px-6 w-full  lg:px-8 flex items-stretch">
                    <div className="w-10/12  mx auto lg:w-8/12 items-center justify-center bg-gray rounded-xl  shadow-lg overflow-hidden ">
                    <div class="w-full  flex flex-col text-base bg-gradient-to-l  py-16 px-12" >
                        <div >
                         <h1 class="text-left font-bold text-orange-700 ">{post.data.title}</h1>
                         
                        </div>
                        <div className="  text-base font-semibold tracking-wide text-left text-gray-600 ">
                                YAZAR: {post.data.username}    
                                </div>
                        
                  </div>
                            
                            <div className="flex flex-col justify-center items-center">
                            <img
                                className=" w-10/12 my-auto lg:w-8/12 rounded-lg"
                                src={post.data.imageurl}
                                alt=""
                                width={1310}
                                height={873}
                            />

                        </div>
                        
                        
                            <div className="mt-8 text-xl leading-8 text-gray-900">
                                {post.data.Content}
                            </div>
                        </div>
                        <div className=" w-1/6  lg:w-1/3    rounded-xl  shadow-lg overflow-hidden ">
                        <div class="w-full h-14 flex flex-col items-center justify-center bg-orange-400 bg-gradient-to-l  py-7 px-12" >
                                    {post.data.Likes} Beğeni  {post.data.Comments} Yorum
                                    
                                </div>
                        
<div class=" relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
    
        <div class="flex flex-col w-full">
            
                <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">user{post.data.author}</p>
            
    </div>
    <p class="-mt-4 text-gray-500">{post.data.Comment} </p>


    </div>
</div>
                        </div>
                                
                    </div>
            }</div>
        </div></>

    )
}


export default Content
