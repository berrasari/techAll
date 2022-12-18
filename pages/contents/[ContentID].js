

const URL = `http://localhost:2000/`;




const Content = ({ post }) => {


    return (
        <><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className=" ">{
                <div key={post.data.ContentID} className="relative py-16 bg-transparent overflow-hidden">
                    <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                            <svg
                                className="absolute top-12 left-full transform translate-x-32"
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
                                className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
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
                                className="absolute bottom-12 left-full transform translate-x-32"
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
                    <div className="relative px-4 sm:px-6 lg:px-8">
                        <div className="text-lg max-w-prose mx-auto">
                            <h1>
                                <div className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                                    Introducing
                                </div>
                                <div className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    {post.data.title}
                                </div>
                            </h1>
                            <p className="mt-8 text-xl text-gray-500 leading-8">
                                {post.data.Content}
                            </p>
                        </div>

                        <div>
                            <img
                                className="w-full rounded-lg"
                                src={post.data.imageurl}
                                alt=""
                                width={1310}
                                height={873}
                            />

                        </div>


                    </div>
                </div>
            }</div>
        </div>
        </>
    )
}

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
    console.log(ContentID);
    const request = await fetch(`${URL}api/Contents/content/${ContentID}`);
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