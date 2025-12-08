export function InputElement({ image, placeholder, type }){
 return(
  <span className="input-container
      bg-white
        rounded-full
        h-15
        px-8
        py-9
        w-full
        flex
        flex-row
        gap-5.75
        w-full
        justify-start
        items-center">
          <img src={`../src/assets/${image}`} alt="name" className="h-5
          w-5.25"/>
          <span className="w-0.25 h-9.25 bg-[#f2f2f2]"></span>
          <input id="text" placeholder={placeholder} type={type}
          className="text-black
          focus:outline-none
          flex-1"/>
      </span>
 )
}