import { ChipTitleBottom } from "./ChipTitleBottom";

export function Collaborator(){
 return(<section className="collaborator
  pt-5
  px-7
  pb-10
  flex
  flex-row
  gap-18">

   <div className="flex
   flex-col
   flex-start
   gap-6
   w-100">
    <span className="font-sophia
    font-bold
    text-4xl">Meet Your Next Collaborator</span>

    <p className="font-itcbook
    text-lg">Discover top fashion creators—filter by expertise, style, location, and pricing to find professionals who align with your creative vision.</p>

    <button className="px-4
    py-2.5
    bg-black
    rounded-full
    text-white
    flex
    flex-row
    gap-2.5
    font-itcbook
    text-3.5
    items-center
    w-fit
    leading-loose">Find Your Fashion Collaborator Today
    <span className="bg-white
    flex
    justify-center
    items-center
    rounded-full
    w-9
    h-9">
    <img src="../src/assets/arrowlight.svg" alt="" className="
         h-2.8
         w-3"/> 
    </span>
    </button>
   </div>

   <div className="flex
   flex-1
   justify-between
   gap-7
   w-full">
     <div className="
     relative">
          <img src="../src/assets/collaborator1.png" alt="" className="
          rounded-7
          w-full"/>
          <p className="absolute
          bottom-14
          left-4
          font-itcbook
          text-2xl
          text-white">Fashion Designers</p>
          <ChipTitleBottom title={"Find Designers"} />
     </div>
     <div className="
     relative">
          <img src="../src/assets/collaborator2.png" alt="" className="w-full
          rounded-7"/>
          <p className="absolute
          bottom-14
          left-4
          font-itcbook
          text-2xl
          text-white">Makeup Artists</p>
          <ChipTitleBottom title={"Find an Artists"} />
     </div>
     <div className="
     relative">
          <img src="../src/assets/collaborator3.png" alt="" className="w-full
          rounded-7"/>
          <p className="absolute
          bottom-14
          left-4
          font-itcbook
          text-2xl
          text-white">Fashion Stylists </p>
          <ChipTitleBottom title={"Find Designers"} />
     </div>
   </div>

  </section>
  );
}