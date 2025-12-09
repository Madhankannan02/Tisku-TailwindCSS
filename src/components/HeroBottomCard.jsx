export function HeroBottomCard({ image, name, title}){
 return(
  <div className="
     flex-1
     rounded-[27px]
     hover:flex-[1.6]
     h-[270px]
     relative
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
         duration-1000
         rounded-[27px]
         hover:rounded-[27px]
       "/>
       <span
         className="
          font-itclight
          absolute
          text-sm
          px-3
          py-1.5
          bg-neutral-100
          rounded-full
          outline-2
          outline-[#d9dbe9]
          w-fit
          left-5
          top-6
         ">
         {title}
       </span>
       <span className="font-itcbook
       text-xl
       text-white
       absolute
       left-5
       bottom-7">{name}</span>

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
       right-5">
        <img src="../src/assets/arrowlight.svg" alt="Small arrow" className="
         h-2.8
         w-3" />
       </div>
    </div>
 );
}