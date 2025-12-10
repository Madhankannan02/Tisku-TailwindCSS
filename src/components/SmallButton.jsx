export function SmallButton({ text }){
 return(
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
    leading-loose">{text}
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
 );
}