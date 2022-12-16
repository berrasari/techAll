

import React, { useState,useEffect } from "react";
import { useRouter } from 'next/router'; 

export const getStaticProps=async()=>{
    const request=await fetch('http://localhost:2000/api/Contents');
   
    const content=await request.json();

    return{
        props:{
            content,
        },
    };
}

function MenuPage(props) {
  const { menuItems } = props

  return (
    <ul>
      {menuItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}

MenuPage.getInitialProps = async () => {
  const { data } = await fetch('http://localhost:2000/api/Categories')
  const categories=await {data}.json();

    return{
        props:{
            categories,
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
              <form class=" min-h-screen py-20">
              <div class="container mx-auto my-2">
                <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-gray rounded-xl mx-auto shadow-lg overflow-hidden">
                   <div class="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-l bg-orange-400 py-16 px-12" >
                       <form action="#">
                        <div >
                            <label htmlFor="Title" class="text-gray">Başlık</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)}type="text" placeholder="Başlık" class="border border-gray-400 py-1 px-2 w-full "/>
                            <label htmlFor="Url" class="text-gray">Resim url'i giriniz.</label>
                            <input value={imageurl} onChange={(e) => setImageURL(e.target.value)}type="url" placeholder="http://" class="border border-gray-400 py-1 px-2 w-full"/>
                            <label htmlFor="Keyword" class="text-gray">Anahtar kelimeler</label>
                            <input value={keyword} onChange={(e) => setKeyword(e.target.value)}type="text" placeholder="örn.:bilim,teknik vs" class="border border-gray-400 py-1 px-2 w-full"/>
                            <label htmlFor="Content" class="text-gray">İçerik</label>
                            <textarea value={Content} onChange={(e) => setContent(e.target.value)} placeholder="İçerik bilgisi." rows={10} class=" resize-y border border-gray-400 py-1 px-2 w-full" />
                        </div>
                       </form>
                   </div>
                   <div class="w-full lg:w-1/2 py-16 px-12">
                       <label htmlFor="Categories">Kategori</label>
                       {MenuPage}
                       <div >
                        <button  onClick={Register} class=" px-32 py-2 mt-5 bg-orange-600  w-full rounded-xl text-center text-gray"> Kaydet</button>
                       </div>
                   </div>
                </div>
               
                </div> 
              </form>
           </div>
           
    );
}
export default Validate