import CartItem from "@/components/CartItem";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const cart = () => {
  return (
    <div className="w-full md:py-10">
      <Wrapper>
        {/* Heading and Pargraph Start */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div
            className="text-[28px] md:text-[34px] mb-5 Font-semibold 
          leading-tight"
          >
            Shopping Cart
          </div>
        </div>
        {/* Heading and Pargraph End */}

        {/*Cart Content Start  */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* cart items */}
          <div className="flex-[2]">
            <div className="text-lg font-bold">
              Cart Items
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
          </div>
          {/* cart items */}

          {/* Summary */}
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>
            <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-black">
                  Subtotal
                </div>
                <div className="text-md md:text-lg font-medium text-black">
                  19.695 $
                </div>
              </div>
              <div className="text-sm md:text-md py-5 border-t mt-5">
                The subtotal reflects the total price of your order, including
                duties and taxes, before any applicable discounts. It does not
                include delivery costs and international transaction fees.
              </div>
            </div>

            {/* BUTTON START */}
            <Link href="/" className="transform overflow-hidden bg-white 
            duration-200 hover:scale-105 cursor-pointer">
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg 
              font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Checkout
            </button>
            </Link>
            {/* BUTTON END */}
          </div>
          {/* Summary */}
        </div>

        {/*Cart Content End */}
      </Wrapper>
    </div>
  );
};

export default cart;
