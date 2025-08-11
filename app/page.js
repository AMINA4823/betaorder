import Image from "next/image";


export default function Home() {
  return (
        <main>
           <div className="flex w-[100%] h-[60px] bg-white-200 border-y border-gray-500 flex justify-between py-3 px-4 sticky">
    <h1 className="text-2xl font-bold  text-pink-500"> STARBUCKS</h1>
    <div className="font-bold flex gap-10 text-2xl text-white">
      <p className="hover: text-pink-800">HOME</p>
      <p className="hover: text-pink-800">MENU</p>
      <p className="hover: text-pink-800">PRODUCTS</p>
      <p className="hover: text-pink-800">ORDER</p>

zxd
    </div>
    </div>
     <div className="bg-[url('/strawLatte.jpeg')] bg-cover bg-no-repeat h-[40vh]  md: bg-[url('/strawLatte.jpeg')] md: h-[60vh] lg:bg-[url('/strawLatte.jpeg')] lg:h-[100vh] lg:bg-cover lg:bg-no-repeat h-screen w-full h-full flex justify-between items-center">
 <div className= " flex grid grids-cols-4 px-15 py-40"> 
 <h1 className="text-black text-2xl font-bold">Just in </h1> 
 <p className="text-black text-6xl font-bold"> OUR SPECIAL STRAWBERRY MATCHA</p>
 <p className="text-black text-2xl mt-4">MADE TO TANGLE YOUR TASTE BUDS </p>
 <div className="w-[150px] h-[60px] rounded-full bg-white flex gap-2 justify-center items-center border border-white hover:bg-pink-200 tex-pink-700 text-sm hover:text-white mt-5">
   <p className="">SHOP NOW</p> 
   </div> 
   </div>
   </div> 

   <div className="grid grid-cols-3 py-40 ">
         <div className="[url('/Rich Vegan.jpeg')]  w-[50px] h-[50px]"> 
           <div className="mt-8 px-14 py-4  " >
      <p className="text-2xl font-bold">LARGE VEGAN CAKE </p> 
      <div className="flex gap-2 mt-2">
         <p> $35.00</p>
         </div>
       </div>
       </div>
           <div className="[url('/download.jpeg')] w-[50px] h-[50px]">
              <div className="mt-8 px-14 py-4  " >
  
      <p className="text-2xl font-bold">BLUEBERRY BOBA SHAKE  </p>
      <p className="text-sm text-gray-500 mt-2"></p>
      <div className="flex gap-2 mt-2">
         <p> $20.00</p>
         </div>
       </div>
       </div>
            <div className="[url('/Tres Leches Cake.jpeg')] w-[50px] h-[50px]">
              <div className="mt-8 px-14 py-4  " >
    
      <p className="text-2xl font-bold">TRES LACHES CAKE </p>
       <p className="text-sm text-gray-500 mt-2"></p>
        <div className="flex gap-2 mt-2">
       <p>$15.00</p>
      </div>
        <div className="justify-center mt-18 px-42">
        <div className="text- text-pink-500 text-6xl ">
          </div>
          </div>
           </div>
           </div>

           </div>

                   

                   <div className="py-3 px-120 text-3xl ">FOLLOW US @ STARBUCKS</div>
      
        

         <div className="w-[100%] h-[20px] bg-pink-800  flex  py-2px-4 sticky justify-center mt-19 flex">
    <h1 className="text-2xl font-bold  text-white-500"> SIGN UP FOR NEWS LETTER</h1>
         </div>
         <div className="w-[100%] h-[100px] bg-pink-800 py-15 ">
    <ul className=" hidden md:flex gap-20">
        <li>ABOUT </li>
        <li>WHERE TO ORDER</li>
        <li>CONTACT US</li>
        <li>FAQ</li>
        <li>RETURNS& REFUNDS</li>
        <li>WALKIN STORE LOCATIONS</li>
    </ul>

     </div>

      <div className =" bg-pink-800 px-140  flex ">
     <h1>terms of services .privacy policy</h1>
    <h2>@2025 STARBUCKS</h2>
    </div>
  



</main>


  );}

