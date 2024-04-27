import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoMdHeartEmpty } from "react-icons/io";
import { addToCart } from "@/store/cartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(true);
  const dispatch = useDispatch();
  const p = product?.data?.[0]?.attributes;

  const notify = () => {
    toast.success("Successfully Added to Your Cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="w-full md:py-20">
      <ToastContainer />
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
            <ProductDetailsCarousel images={p.image.data} />
          </div>
          {/* left column end */}

          {/* Right colum start */}
          <div className="flex-[1] py-3">
            {/* Product Title */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">{p.name}</div>
            {/* Product Title */}

            {/* Product Subtitle */}
            <div className="text-lg font-semibold mb-5">{p.subtitle}</div>
            {/* Product Subtitle */}

            {/* Product Price */}

            <div className="flex items-center text-black/[0.5]">
              <p className=" mr-2 text-lg font-semibold ">&#8377;{p.price}</p>

              {p.original_price && (
                <>
                  <p className="text-base font-medium line-through">
                    &#8377;{p.original_price}
                  </p>
                  <p className=" ml-auto text-base font-medium text-green-500">
                    {getDiscountedPricePercentage(p.original_price, p.price)}%
                    off
                  </p>
                </>
              )}
            </div>

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
              <div id="sizesGrid" className="grid grid-cols-3 gap-2 ">
                {p.size.data.map((item, i) => (
                  <div
                    key={i}
                    className={`border rounded-md text-center py-3 font-medium 
                  ${
                    item.enabled
                      ? "hover:border-black cursor-pointer"
                      : "cursor cursor-not-allowed bg-black/[0.1] opacity-50"
                  } ${selectedSize === item.size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelectedSize(item.size);
                      setShowError(false);
                    }}
                  >
                    {item.size}
                  </div>
                ))}
              </div>
              {/* Size End */}

              {/* Show Error */}
              {showError && (
                <div className="text-red-600 mt-2">
                  Size Selection is Required
                </div>
              )}
              {/* Show Error */}
            </div>
            {/* Product Size Range */}

            {/* Add to cart button */}

            <button
              className="w-full py-4 rounded-full bg-black text-white
            text-lg font-medium transition-transform active:scale-95 mb-3 
            hover:opacity-75"
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  document.getElementById("sizesGrid").scrollIntoView({
                    block: "center",
                    behaviour: "smooth",
                  });
                } else {
                  dispatch(
                    addToCart({
                      ...product?.data?.[0],
                      selectedSize,
                      oneQuantityPrice: p.price,
                    })
                  );
                  notify();
                }
              }}
            >
              Add To Cart
            </button>

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

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-mb mb-5">
                "The Air Jordan Retro brings back the memorable game shoe that
                Michael Jordan wore during the '97–98 season, all the way to his
                6th championship title. All the classic details are there like
                the quilted overlay, iconic sculpted midsole and holographic
                eye. Drag Drag - Colour Shown: Black/White/True Red Drag -
                Style: 414571-062"
              </div>
            </div>
          </div>
          {/* Right colum end */}
        </div>

        <RelatedProducts products={products} />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  const paths = products?.data?.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );

  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
