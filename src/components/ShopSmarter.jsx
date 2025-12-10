import { SmallButton } from "./SmallButton";

export function ShopSmarter(){
 return(
    <>
    <section className="
      mt-10
      px-8
      py-10
      flex
      flex-row-reverse
      justify-between
      gap-12
      ">
       <img src="../src/assets/image 8.png" alt="" className="
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
        text-4xl">Shop Smarter, Not Harder</span>
    
        <p className="font-itcbook
        text-lg">Stop wasting time hopping between countless websites. Our powerful Price Comparison Engine does the heavy lifting for you, bringing real-time pricing data and availability from the web's top fashion and beauty retailers directly to your screen.</p>
       </div>
      
       <div className="flex flex-col gap-8">
        <div className="flex
       flex-col
       gap-4
       ">
        <div className="flex
        gap-10">
         <div className="flex
         gap-1.5
         items-center">
          <span className="flex justify-center items-center bg-[#1B4FE4]/15 rounded-full h-5 w-5">
          <img src="../src/assets/Mark.svg" alt="Tcik"className="h-3 w-3" />
          </span>
          <p className="font-itclight text-2xl"> <span className="font-bold">Real-Time Savings:</span>  Always secure the best possible deal. We track discounts, sales, and price drops so you don't miss out.</p>
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
          <p className="font-itclight text-2xl"> <span className="font-bold">Comprehensive View</span>  See the exact price, available sizes, shipping costs, and return policies from multiple stores side-by-side.</p>
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
          <p className="font-itclight text-2xl"> <span className="font-bold">Never Pay Too Much:</span> Know instantly if you're getting the best value for your desired item before you commit to a purchase.</p>
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
          <p className="font-itclight text-2xl"> <span className="font-bold">Effortless Convenience: </span>  Find, compare, and click straight to the retailer's checkout page without leaving our platform.</p>
         </div>
        </div>

        </div>
        <SmallButton text={"Compare Prices Now"} />
       </div>
    
      </div>
      </section>
    </>
   );
}