import { HeroBottomCard } from "./HeroBottomCard";

export function HeroSection(){
 return(
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

   <span className="hero-bottom-card
   flex
   gap-6
   pt-6
   w-full
   overflow-hidden">

    <HeroBottomCard image={"herodown1.svg"} name={"Find Your Creator"} title={"Discover the Visionaries"}/>

    <HeroBottomCard image={"herodown2.svg"} name={"Find Your Creator"} title={"Discover the Visionaries"}/>
    
    <HeroBottomCard image={"herodown3.svg"} name={"Find Your Creator"} title={"Discover the Visionaries"}/>

   </span>

  </section>
 );
}