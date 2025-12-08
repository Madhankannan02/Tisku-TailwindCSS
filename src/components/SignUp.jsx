import { Link } from "react-router-dom";
import { HeroImage } from "./HeroImage";
import { InputElement } from "./InputElements";
import { HomePage } from './Homepage'
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();
 return (
  <main className="flex
  px-8
  py-8
  gap-7">

   <HeroImage image={"Rectangle 1.png"} />

   <div className="
   flex
   flex-1
   items-top
   justify-center
   gap-6.75
   flex-col">

    <div className=" top-part bg-linear-to-tl from-[#D9CCAB] to-[#FFFFF]
    flex-1
    rounded-3xl
    flex
    items-center
    px-20
    py-15
    flex-col
    gap-18
    ">

    <div className="flex flex-col items-center
    gap-12">
      <div className="flex flex-col
      justify-center
      items-center">
     <img src="../src/assets/tisku.svg" alt="logo"
      className="w-17 h-20" />

     <div className="flex
     flex-col
     gap-3
     items-center
     ">
     <p className="
     font-sophia
     font-normal
     text-4xl">
      Welcome to Tisku
     </p>
     <p className="
     mx-auto
     text-center
     font-itcbook
     font-light
     w-[65%]">
      Fashion is a luxury fashion label dedicated to creating refined, premium designs that celebrate individuality, sophistication, and true beauty in every detail.
     </p>
     </div>
     </div>

    <div className="inputs flex gap-6 flex-col w-full">

      <InputElement image={"user.svg"} placeholder={"Enter your name"} />

      <InputElement image={"email.svg"} placeholder={"Enter your email"} />

      <InputElement image={"password.svg"} placeholder={"Enter your password"} />

    </div>
    </div>

    <div className="flex
    flex-col
    justify-between
    w-full
    h-full
    items-center">
    <div className="buttons
    flex
    flex-col
    items-center
    w-full
    gap-6">

      <button className="
      flex
      items-center
      justify-center
      h-15
      px-8
      py-9
      bg-black
      text-white
      text-center
      w-full
      rounded-full
      font-itcbook
      text-xl
      cursor-pointer" onClick={()=>navigate("/homepage")}>Sign Up</button>

      <span className="w-full
      bg-black
      opacity-18
      h-0.5
      rounded-full"></span>

      <button className="py-5
      bg-white
      text-black
      text-center
      w-full
      rounded-full
      font-itcbook
      text-xl
      flex
      justify-center
      items-center
      gap-4
      cursor-pointer"> <img src="../src/assets/google.svg" alt="google" className="size-5" /> Sign in with Google</button>


    </div>

    <p className="font-itclight
    text-3
    text-black">Already have an account? <Link to="/signin"> <span className="font-itcbook
    font-bold
    hover:underline
    hover:cursor-pointer">Sign In</span> </Link></p>
    </div>

   </div>

    <div
  className="
    down-part
    bg-[#F2F2F2]
    rounded-[120px]
    h-50
    w-full
    px-8
    py-12
    flex
    justify-between
    items-center
  "
>
  {/* Profiles */}
  <div className="flex flex-row
  items-center gap-8">
    <div className="relative h-24 w-[200px]">
      <img
        src="../src/assets/pro1.svg"
        alt=""
        className="size-24 absolute left-0"
      />
      <img
        src="../src/assets/pro2.svg"
        alt=""
        className="size-24 absolute left-[60px]"
      />
      <img
        src="../src/assets/pro3.svg"
        alt=""
        className="size-24 absolute left-[120px]"
      />
    </div>

    {/* Text */}
    <div className="flex flex-col gap-4 items-start">
      <p className="font-itcbook
      font-semibold
      text-xl">
        Let’s join with 100k+ Users!
      </p>
      <p className="font-itclight">Let’s see happy customers</p>
    </div>
  </div>

  {/* Circle and arrow */}
  <div className="px-10
    py-10
    border-2
    border-[#b3b3b3]
    border-opacity-[40%]
    rounded-full">
    <img src="../src/assets/arrow.svg" alt="arrow" className="size-6"/>
  </div>
    </div>


   </div>

  </main>
 );
}