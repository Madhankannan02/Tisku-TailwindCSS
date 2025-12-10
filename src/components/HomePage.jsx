import { Link } from "react-router-dom";
import { HeroSection } from "./HeroSection";
import { Collaborator } from "./Collaborator";

export function HomePage(){
 return(
  <>
  <nav className="px-7
  pt-4
  flex
  w-full
  items-center
  border-b-
  border-neutral-100
  ">

   <div className="flex-start flex gap-5 justify-center items-center">
    <img src="../src/assets/tisku.svg" alt="logo" className="h-20.25
    w-17"/>

    <span className="
    bg-neutral-100
    outline-1
    outline-neutral-400
    rounded-2xl
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
    opacity-63">Creators</Link>
     <Link className="
    opacity-63">AI Studio</Link>
     <Link className="
    opacity-63">Price Compare</Link>
     <Link className="flex justify-center gap-1 
    opacity-63">My Profile <img src="../src/assets/downarrow.svg" className="
    opacity-63" /></Link>
    </div>
   </div>

  </nav>

  <HeroSection />
  <Collaborator />

  </>
 );
}