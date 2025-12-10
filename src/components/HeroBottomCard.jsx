import { ChipTitle } from "./ChipTitle";

export function HeroBottomCard({ image, name, title}){
 return(
  <div className="
     flex-1
     rounded-[27px]
     hover:flex-[1.6]
     h-[270px]
     relative
     group
     ">
      <span className="w-full
      h-19
      absolute
      rounded-bl-[27px]
      rounded-br-[27px]
      bottom-0
      bg-gradient-to-t from-[#D4CBAC] to-[#CFCCC3]/0"></span>
      <img
       src={`../src/assets/${image}`}
       alt=""
       className="
         h-full
         w-full
         object-cover
         transition-all
         duration-300
         rounded-[27px]
         hover:rounded-[27px]
       "/>
       <ChipTitle title={title} />
       <span className="font-itcbook
        text-xl
        text-white
        absolute
        left-5
        bottom-7
        text-white
        duration-300
        group-hover:text-black">
        {name}
        </span>

       <div className="flex
       items-center
       justify-center
       rounded-full
       h-9
       w-9
       bg-white
       outline-1
       outline-[#b3b3b3]/40
       absolute
       top-5
       right-5
       group-hover:bg-black
       transition-colors
       duration-300">
        <img src="../src/assets/arrowlight.svg" alt="Small arrow" className="
         absolute
         h-2.8
         w-3
         transition-opacity
         duration-300
         opacity-100
         group-hover:opacity-0" />

         <img src="../src/assets/arrowlighthover.svg" alt="Small arrow" className="
         absolute
         h-2.8
         w-3
         transition-opacity
         duration-300
         opacity-0
         group-hover:opacity-100" />
       </div>
    </div>
 );
}