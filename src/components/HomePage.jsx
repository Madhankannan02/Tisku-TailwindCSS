import { Link } from "react-router-dom";

export function HomePage(){
 return(
  <>
  <nav className="px-7
  pt-4
  flex
  w-full
  items-center
  flex
  border-b-1
  border-neutral-100
  ">

   <div className="flex-start flex gap-5 justify-center items-center">
    <img src="../src/assets/tisku.svg" alt="logo" className="h-20.25
    w-17"/>

    <span className="
    bg-neutral-100
    outline-1
    outline-neutral-400
    rounded-[16px]
    w-[340px]
    h-[52px]
    px-4
    flex
    justify-center
    items-center
    ">
    <input placeholder="Search Your Favourite Creator" className="font-itclight
    text-l
    text-neutral-600
    w-full
    focus:outline-none"/>
    <img src="../src/assets/search.svg" className="size-8"/>
    </span>
   </div>

   <div className="flex-1">
    <div className="font-itclight
    text-xl
    text-[#000000]
    flex
    gap-3
    justify-end">
     <Link to="/homepage" className="text-black opacity-[100%] underline">Home</Link>
     <Link className="
    opacity-[63%]">Creators</Link>
     <Link className="
    opacity-[63%]">AI Studio</Link>
     <Link className="
    opacity-[63%]">Price Compare</Link>
     <Link className="flex justify-center gap-1 
    opacity-[63%]">My Profile <img src="../src/assets/downarrow.svg" className="
    opacity-[63%]" /></Link>
    </div>
   </div>

  </nav>

  <section className="hero pt-5 w-full px-7
  pb-10">

   <div className="hero-upper-part relative">
    <img src="../src/assets/heromain.svg" alt="Main Hero Image" className="w-full" />

    <div className="flex
    absolute
    left-20
    top-32
    flex-col
    gap-12
    ">
     <span className="font-itclight
     text-l
     px-3
     py-1.5
     bg-neutral-100
     rounded-full
     outline-2
     outline-[#d9dbe9]
     w-fit
     ">Your Personalized Fashion Feed</span>

     <div className="flex flex-col gap-2">
      <h1 className="font-sophia
      font-bold
      text-5xl
      text-black
      w-[687px]
      leading-normal">Achieve Your Vision. Connect. Compare. Create.</h1>

      <p className="font-itcbook
      text-lg
      text-black
      w-[652px]">Your gateway to the global fashion world—discover top creators, try AI virtual looks, and compare prices instantly.</p>
     </div>
    </div>
   </div>

   <div className="flex gap-6
   pt-6">

    <div className="single-part relative">
     <img src="../src/assets/herodown1.svg" alt="" className=""/>
     <span className="font-itclight
     absolute
     text-l
     px-3
     py-1.5
     bg-neutral-100
     rounded-full
     outline-2
     outline-[#d9dbe9]
     w-fit
     left-5
     top-6
     ">Discover the visionaries</span>
    </div>

    <div className="single-part relative">
     <img src="../src/assets/herodown1.svg" alt="" className=""/>
     <span className="font-itclight
     absolute
     text-l
     px-3
     py-1.5
     bg-neutral-100
     rounded-full
     outline-2
     outline-[#d9dbe9]
     w-fit
     left-5
     top-6
     ">Discover the visionaried</span>
    </div>

    <div className="single-part relative">
     <img src="../src/assets/herodown1.svg" alt="" className=""/>
     <span className="font-itclight
     absolute
     text-l
     px-3
     py-1.5
     bg-neutral-100
     rounded-full
     outline-2
     outline-[#d9dbe9]
     w-fit
     left-5
     top-6
     ">Discover the visionaried</span>
    </div>

   </div>

  </section>

  </>
 );
}