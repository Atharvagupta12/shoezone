import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";

import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div
          className="flex flex-col lg:flex-row md:px-15 gap-[50px] 
        lg-gap-[100px]"
        >
          {/* left colum start */}
          <div
            className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full
        mx-auto lg-mx-0"
          >
            <ProductDetailsCarousel />
          </div>
          {/* left column end */}

          {/* Right colum start */}
          <div className="flex-[1] py-3">
            {/* Product Title */}
            <div className="text-[34px] font-semibold mb-5">
              Jordan Retro 6 G
            </div>
            {/* Product Title */}

            {/* Product Subtitle */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>
            {/* Product Subtitle */}

            {/* Product Price */}
            <div className="text-lg font-semibold">MRP : $ 60.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of all taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also include all applicable duties )`}
            </div>

            {/* Product Size Range */}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div
                  className="text-md font-medium text-black/[0.5] 
                cursor-pointer"
                >
                  Select Guide
                </div>
              </div>

              {/* Size Start */}
              <div className="grid grid-cols-3 gap-2 ">
                <div
                  className="border rounded-md text-center py-2 font-medium 
                hover:border-black cursor-pointer"
                >
                  UK 6
                </div>
                <div
                  className="border rounded-md text-center py-2 font-medium 
                hover:border-black cursor-pointer"
                >
                  UK 6.5
                </div>
                <div
                  className="border rounded-md text-center py-2 font-medium 
                hover:border-black cursor-pointer"
                >
                  UK 7
                </div>
                <div
                  className="border rounded-md text-center py-2 font-medium 
                hover:border-black cursor-pointer"
                >
                  UK 7.5
                </div>
                <div
                  className="border rounded-md text-center py-2 font-medium 
                hover:border-black cursor-pointer"
                >
                  UK 8
                </div>
                <div
                  className="border rounded-md text-center py-2 font-medium 
                hover:border-black cursor-pointer"
                >
                  UK 8.5
                </div>
                <div
                  className="border rounded-md text-center py-2 font-medium 
                hover:border-black cursor-pointer"
                >
                  UK 9
                </div>
                <div
                  className="border rounded-md text-center py-2 font-medium 
                bg-black/[0.1] cursor-not-allowed opacity-50"
                >
                  UK 9.5
                </div>
                <div
                  className="border rounded-md text-center py-2 font-medium 
                bg-black/[0.1] cursor-not-allowed opacity-50"
                >
                  UK 10
                </div>
              </div>
              {/* Size End */}

              {/* Show Error */}
              <div className="text-red-600 mt-2">
                Size Selection is Required
              </div>
              {/* Show Error */}
            </div>
            {/* Product Size Range */}

            {/* Add to cart button */}
            <Link href="/cart" className="transform overflow-hidden bg-white 
            duration-200 hover:scale-105 cursor-pointer">
            <button 
              className="w-full py-4 rounded-full bg-black text-white
            text-lg font-medium transition-transform active:scale-95 mb-3 
            hover:opacity-75"
            >
              Add To Cart
            </button>
            </Link>
            {/* Add to cart button */}

            {/* Wishlist button */}
            <button
              className="w-full py-4 rounded-full border border-black
            text-lg font-medium transition-transform active:scale-95 flex items-center
            justify-center gap-2 mb-10  hover:opacity-75"
            >
              Add To Wishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/*  Wishlist button */}

            <div className="text-lg font-bold mb-5">Product Details</div>
            <div className="text-mb mb-5">
              Feel Unbeatable from the feel boxto the final put in a desighn its
              that pure Early MJ: speed, class and laden with true early '90s
              touches like visible Air and a translucent rubber sole that
              continues to stand in test of time. This model fuses the strut of
              1st MJ's championship with some of our best Golf technology
              helping to make you confident when it come the time for you Race.
            </div>
            <div className="text-mb mb-5">
              Feel Unbeatable from the feel boxto the final put in a desighn its
              that pure Early MJ: speed, class and laden with true early '90s
              touches like visible Air and a translucent rubber sole that
              continues to stand in test of time. This model fuses the strut of
              1st MJ's championship with some of our best Golf technology
              helping to make you confident when it come the time for you Race.
              
            </div>
          </div>
          {/* Right colum end */}
        </div>

      <RelatedProducts/>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
