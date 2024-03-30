import Link from "next/link";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";


const CartItem = () => {
  return (
    <div className="flex py-3 gap-3 md:gap-5 border-b">
      {/* image */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px] ">
      <Link href="/Product/1" className="transform overflow-hidden bg-white duration-200
    hover:scale-105 cursor-pointer">
        <img src="/product-1.webp" />
        </Link>
      </div>
      {/* image */}
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-xl font-semibold text-black/[0.8]">
            Jordan Retro 6 G
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Men&apos;s Golf Shoes
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : $19.695
          </div>
        </div>

        {/* Product Subtitle */}

        <div className="text-sm md:text-md font-medium text-black/[0.5] mt-2">
          Men&apos;s Golf Shoes
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5]
         text-sm md:text-md">
            <div className="flex item-center gap-1">
                <div className="font-semibold">Size:</div>
                <select className="hover:text-black">
                 <option value="1">uk 6</option>
                 <option value="1">uk 7</option>
                 <option value="1">uk 8</option>
                 <option value="1">uk 9</option>
                 <option value="1">uk 10</option>
                 <option value="1">uk 11</option>
              
                </select>
            </div>

            <div className="flex item-center gap-1">
                <div className="font-semibold">Quantity</div>
                <select className="hover:text-black">
                 <option value="1">1</option>
                 <option value="1">2</option>
                 <option value="1">3</option>
                 <option value="1">4</option>
                 <option value="1">5</option>
                 <option value="1">6</option>
                 <option value="1">7</option>
                 <option value="1">8</option>
              
                </select>
            </div>
         </div>
         <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] 
         hover:text-black text-[16px] md:text-[18px]" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
