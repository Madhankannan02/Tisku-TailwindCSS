import { SmallButton } from "./SmallButton";

export function AiStudio(){
 return(
  <section className="
  mt-10
  bg-gradient-to-t from-[#D9CCAB] to-[#F7F7F7]
  px-8
  py-10
  flex
  gap-12
  ">
   <img src="../src/assets/aistudio.png" alt="" className="
   w-200
   h-140"/>

  <div className="flex
  flex-col">

   <div className="flex
   flex-col
   gap-4
   pb-10">
    <span className="font-sophia
    font-bold
    text-4xl">The AI Studio: Visualize Your Transformation</span>

    <p className="font-itcbook
    text-lg">Experience real-time virtual makeovers powered by intelligent AI—see yourself in new styles before making a decision.</p>
   </div>
  
   <div className="flex flex-col gap-20">
    <div className="flex
   flex-col
   gap-5
   ">
    <div className="flex
    gap-10">
     <div className="flex
     gap-1.5
     items-center">
      <span className="flex justify-center items-center bg-[#1B4FE4]/15 rounded-full h-5 w-5">
      <img src="../src/assets/Mark.svg" alt="Tcik"className="h-3 w-3" />
      </span>
      <p className="font-itclight text-2xl">Hyper-realistic previews that look natural and tailored to you</p>
     </div>
    </div>

    <div className="flex
    gap-10">
     <div className="flex
     gap-1.5
     items-center">
      <span className="flex justify-center items-center bg-[#1B4FE4]/15 rounded-full h-5 w-5">
      <img src="../src/assets/Mark.svg" alt="Tcik"className="h-3 w-3" />
      </span>
      <p className="font-itclight text-2xl">Fashion-inspired style collections crafted by industry creators</p>
     </div>
    </div>

    <div className="flex
    gap-10">
     <div className="flex
     gap-1.5
     items-center">
      <span className="flex justify-center items-center bg-[#1B4FE4]/15 rounded-full h-5 w-5">
      <img src="../src/assets/Mark.svg" alt="Tcik"className="h-3 w-3" />
      </span>
      <p className="font-itclight text-2xl">Smart personalization that understands your face structure and preferences</p>
     </div>
    </div>

    <div className="flex
    gap-10">
     <div className="flex
     gap-1.5
     items-center">
      <span className="flex justify-center items-center bg-[#1B4FE4]/15 rounded-full h-5 w-5">
      <img src="../src/assets/Mark.svg" alt="Tcik"className="h-3 w-3" />
      </span>
      <p className="font-itclight text-2xl">Instant transformations with a single upload</p>
     </div>
    </div>

    <div className="flex
    gap-10">
     <div className="flex
     gap-1.5
     items-center">
      <span className="flex justify-center items-center bg-[#1B4FE4]/15 rounded-full h-5 w-5">
      <img src="../src/assets/Mark.svg" alt="Tcik"className="h-3 w-3" />
      </span>
      <p className="font-itclight text-2xl">Shareable results for inspiration and feedback</p>
     </div>
    </div>
    </div>
    <SmallButton text={"Visualize My New Look"} />
   </div>

  </div>
  </section>
 );
}