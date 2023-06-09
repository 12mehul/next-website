import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import { useState } from "react";

const AllData = gql`
  query ProductBulkDiscount {
    product(id: "cHJvZHVjdDoxMQ==") {
      id
      name
      bulkDiscountData {
        quantity
        price
        freeProduct
      }
    }
  }
`;

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [count, setCount] = useState(5);
  const [cartItems, setCartItems] = useState([]);
  console.log(selectedItem);

  const handleBoxClick = (item) => {
    setSelectedItem(item);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const { loading, data, error } = useQuery(AllData);
  console.log(data);
  console.log(cartItems);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className=" w-[85%] bg-white pb-4">
      <div>
      <div className=" flex justify-between mx-44 mt-10">
        <div className="flex gap-2 ">
          <div className="flex items-center gap-2 hover:underline cursor-pointer font-medium">
            <div className="bg-sky-100 p-1 rounded-full">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </div>
          </div>
          <p className="font-medium flex gap-2 text-[#2F294D] text-xl ">
            Category:
            <a
              className="underline font-medium text-[#1069CF]"
              href="/product-category/rack-a-ville/residential-house/residential-house-finishing/device-install-residential-house-finishing/"
            >
              Home Carousel
            </a>
          </p>
        </div>
        <span className=" font-semibold text-black text-lg">#48020</span>
      </div>
      </div>

      <div className=" relative flex sm:grid-cols-2 md:grid-cols-2">
        <div className="  flex flex-row">
          <div className=" flex-col p-5 mt-4 ">
            <div className="flex justify-center">
              <Image src="/arrowup.svg" width="40" height="40"></Image>
            </div>
            <div className=" box-border h-[92px] w-[92px] p-4 border-2 flex border-[#8C8C8C] my-4 rounded-3xl pt-2">
              <Image src="/tool.png" width="100" height="100"></Image>
            </div>
            <div className=" box-border h-[92px] w-[92px] p-4 border-2 flex border-[#8C8C8C] my-4 rounded-3xl pt-2">
              <Image src="/image20.jpg" width="100" height="100"></Image>
            </div>
            <div className=" box-border h-[92px] w-[92px] p-4 border-2 flex border-[#8C8C8C] my-4 rounded-3xl pt-2">
              <Image src="/image 20 (2).jpg" width="100" height="100"></Image>
            </div>
            <div className=" box-border h-[92px] w-[92px] p-4 border-2 flex border-[#8C8C8C] my-4 rounded-3xl pt-2">
              <Image src="/sddefault 1.png" width="100" height="100"></Image>
            </div>
            <div className="flex justify-center">
              <Image src="/arrowdown.svg" width="40" height="40"></Image>
            </div>
          </div>

          <div className=" -ml-6">
            <div className=" flex-col p-5 max-sm:p-3 sm:w-[300px]">
              <div className=" flex box-border h-[520px] w-[490px] p-4 border-2 border-[#8C8C8C] bg-white my-4 rounded-2xl pt-2 mr-10">
                <div className=" w-[440px] h-[440px] mx-8 my-10 ">
                  <Image src="/tool.png" width="500" height="530"></Image>
                </div>
              </div>
            </div>
          </div>

          <div className=" p-5 mt-3 md:ml-60 sm:ml-60">
            <div className="px-sm-x-margin  ">
              <h1 className=" font-bold text-3xl basis-full">
                Croc's Needle Nose Wire Strippers
              </h1>
              <h2 className=" font-semibold text-xl mt-2 ">
                Multi-use handheld wire strippers
              </h2>
              <div className="overflow-hidden transition-[max-height] relative z-0">
                {/* <div className="Product_description__wwpon">
                <p>
                  The Driller’s Dust Bowl got upgraded! Now available the
                  Driller’s Dust Bowl Pro equipped with a vacuum adapter.
                </p>
              </div> */}
                <div className="absolute bottom-0 ">
                  <div className="relative w-full h-8 bg-gradient-to-b from-transparent to-white"></div>
                </div>
              </div>
              <div className="flex h-5 mt-4">
                <svg viewBox="0 0 80 14.240479" version="1.1" height="100%">
                  <defs>
                    <linearGradient
                      id="star-rating-gradient-0"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stop-color="#F2C94C"></stop>
                      <stop offset="0%" stop-color="#F2C94C"></stop>
                      <stop offset="0%" stop-color="#d2d2d2"></stop>
                      <stop offset="100%" stop-color="#d2d2d2"></stop>
                    </linearGradient>
                  </defs>
                  <g transform="translate(60.498384,-2.23625)" id="g20">
                    <path
                      fill="url('#star-rating-gradient-0"
                      id="path18"
                      d="m 9.049,2.927 c 0.3,-0.921 1.603,-0.921 1.902,0 l 1.07,3.292 a 1,1 0 0 0 0.95,0.69 h 3.462 c 0.969,0 1.371,1.24 0.588,1.81 l -2.8,2.034 a 1,1 0 0 0 -0.364,1.118 l 1.07,3.292 c 0.3,0.921 -0.755,1.688 -1.54,1.118 l -2.8,-2.034 a 1,1 0 0 0 -1.175,0 l -2.8,2.034 C 5.828,16.851 4.774,16.084 5.073,15.163 l 1.07,-3.292 A 1,1 0 0 0 5.779,10.753 L 2.98,8.72 C 2.197,8.15 2.6,6.91 3.568,6.91 H 7.029 A 1,1 0 0 0 7.98,6.22 L 9.05,2.928 Z m -15.766204,0 c 0.3,-0.921 1.603,-0.921 1.902,0 l 1.07,3.292 a 1,1 0 0 0 0.95,0.69 h 3.462 c 0.969,0 1.371,1.24 0.588,1.81 l -2.8,2.034 a 1,1 0 0 0 -0.364,1.118 l 1.07,3.292 c 0.3,0.921 -0.755,1.688 -1.54,1.118 l -2.8,-2.034 a 1,1 0 0 0 -1.175,0 l -2.8,2.034 c -0.784,0.57 -1.838,-0.197 -1.539,-1.118 l 1.07,-3.292 a 1,1 0 0 0 -0.364,-1.118 l -2.799,-2.033 c -0.783,-0.57 -0.38,-1.81 0.588,-1.81 h 3.461 a 1,1 0 0 0 0.951,-0.69 l 1.07,-3.292 z m -15.766204,0 c 0.3,-0.921 1.603,-0.921 1.902,0 l 1.07,3.292 a 1,1 0 0 0 0.95,0.69 h 3.462 c 0.969,0 1.371,1.24 0.588,1.81 l -2.8,2.034 a 1,1 0 0 0 -0.364,1.118 l 1.07,3.292 c 0.3,0.921 -0.755,1.688 -1.54,1.118 l -2.8,-2.034 a 1,1 0 0 0 -1.175,0 l -2.8,2.034 c -0.784,0.57 -1.838,-0.197 -1.539,-1.118 l 1.07,-3.292 a 1,1 0 0 0 -0.364,-1.118 l -2.799,-2.033 c -0.783,-0.57 -0.38,-1.81 0.588,-1.81 h 3.461 a 1,1 0 0 0 0.951,-0.69 l 1.07,-3.292 z m -15.766204,0 c 0.3,-0.921 1.603,-0.921 1.902,0 l 1.07,3.292 a 1,1 0 0 0 0.95,0.69 h 3.462 c 0.969,0 1.371,1.24 0.588,1.81 l -2.8,2.034 a 1,1 0 0 0 -0.364,1.118 l 1.07,3.292 c 0.3,0.921 -0.755,1.688 -1.54,1.118 l -2.8,-2.034 a 1,1 0 0 0 -1.175,0 l -2.8,2.034 c -0.784,0.57 -1.838,-0.197 -1.539,-1.118 l 1.07,-3.292 a 1,1 0 0 0 -0.364,-1.118 l -2.799,-2.033 c -0.783,-0.57 -0.38,-1.81 0.588,-1.81 h 3.461 a 1,1 0 0 0 0.951,-0.69 l 1.07,-3.292 z m -15.766204,0 c 0.3,-0.921 1.603,-0.921 1.902,0 l 1.07,3.292 a 1,1 0 0 0 0.95,0.69 h 3.462 c 0.969,0 1.371,1.24 0.588,1.81 l -2.8,2.034 a 1,1 0 0 0 -0.364,1.118 l 1.07,3.292 c 0.3,0.921 -0.755,1.688 -1.54,1.118 l -2.8,-2.034 a 1,1 0 0 0 -1.175,0 l -2.8,2.034 c -0.784,0.57 -1.838,-0.197 -1.539,-1.118 l 1.07,-3.292 a 1,1 0 0 0 -0.364,-1.118 l -2.799,-2.033 c -0.783,-0.57 -0.38,-1.81 0.588,-1.81 h 3.461 a 1,1 0 0 0 0.951,-0.69 l 1.07,-3.292 z"
                    ></path>
                  </g>
                </svg>
                <a className=" ml-3" href="#reviews">
                  <p className=" font-semibold border-b border-black ">
                    (0 reviews)
                  </p>
                </a>
                <div className=" w-[2px] h-[26px] bg-black ml-4 "></div>
                <p className=" font-semibold text-lg text-[#008D41] ml-4">
                  In Stock (20)
                </p>
              </div>
            </div>
            <div className="px-sm-x-margin pt-sm-y-spacing">
              <div className="flex w-full items-start flex-wrap">
                <div className="mb-sm-y-spacing sm:order-2"></div>
                {/* <div className="flex-grow text-right sm:order-2">
                <div className="font-medium text-green">
                  In Stock (<span className="text-lg font-bold font-heading"
                    >201</span
                  >)
                </div>
                <div
                  className="mx-auto mb-sm-y-spacing lg:container flex justify-end"
                >
                  #48020
                </div>
              </div> */}
                <div className="sm:order-0 basis-full">
                  <div className="my-6 flex gap-4">
                    <span className="text-heading text-4xl font-extrabold flex-initial ">
                      $30.00
                    </span>
                    <span className="mt-3 -ml-3 font-medium text-lg">
                      PER UNIT
                    </span>
                  </div>
                </div>
                <div className=" font-semibold text-xl">Choose How Many:</div>
              </div>
            </div>
            <div className="flex justify-center items-center box-border h-[80px] w-[500px] max-sm:w-full border-2 border-[#8C8C8C] my-4 rounded-lg ">
              <p className=" text-lg font-bold max-sm:text-[13px] ">
                Buy Croc's Needle Nose Wire Strippers
              </p>
              <span className="text-heading text-xl font-extrabold max-sm:text-[16px] pl-3 text-[#E01F00]">
                $30.00
              </span>
              <p className="mt-2 text-xs text-black font-semibold">PER UNIT</p>
            </div>
            <div className=" box-border h-[18px] w-[118px] p-4 bg-black ml-[360px] max-sm:ml-[300px] mt-5">
              <p className="text-white text-sm -mt-2 font-normal">
                Most Popular
              </p>
            </div>

            {data?.product?.bulkDiscountData?.map((item, index, array) => {
              const isLastItem = index === array.length - 1;
              const discountValue = 100 - (item.price / 30) * 100;
              const totalValue = Math.abs(discountValue);

              const totalUnit = item.quantity * item.price;
              const totalPrice = Math.abs(totalUnit);
              const actualPrice = Math.abs(item.quantity * 30);

              return (
                <div
                  className={`box-border h-[100px] w-[500px] max-sm:w-full px-5 p-3 flex gap-5 mb-4 cursor-pointer rounded-lg 
                ${
                  selectedItem === item
                    ? "bg-[#FDCE0D] border-none"
                    : "bg-white border-2 border-[#8C8C8C]"
                }`}
                  key={item.id}
                  onClick={() => handleBoxClick(item)}
                >
                  <div>
                    <div className=" flex-grow-0 pt-3">
                      <span className="text-lg text-black font-bold max-sm:text-[13px] ">
                        Buy {item.quantity} &
                        <span className="text-lg text-[#E01F00] font-bold max-sm:text-[13px]">
                          {" "}
                          Get {totalValue}%off
                        </span>
                      </span>
                      {isLastItem && (
                        <div className=" flex pt-[10px] ">
                          <button
                            className="pb-1 w-7 h-7 bg-[#F7921D] rounded-full text-4xl font-semibold flex items-center justify-center"
                            onClick={() => setCount(count - 1)}
                          >
                            -
                          </button>
                          <span className=" ml-3">0{count}</span>
                          <button
                            className="ml-3 w-7 h-7 bg-[#F7921D] rounded-full text-3xl font-semibold flex items-center justify-center"
                            onClick={() => setCount(count + 1)}
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>

                    <div>
                      <span className=" font-semibold text-base">
                        <span className=" ml-1 text-lg">
                          <span className=" ml-1">{item.freeProduct}</span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className=" flex-grow-0 ml-[130px] mt-1">
                    <div>
                      <span className=" text-lg font-extrabold text-[#E01F00] max-sm:text-[16px] max-sm:font-extrabold ">
                        ${totalPrice}{" "}
                      </span>
                      <span className=" text-lg font-medium text-[#3A3A3A] line-through max-sm:text-[16px] max-sm:font-semibold">
                        ${actualPrice}{" "}
                      </span>
                    </div>
                    <div className=" flex">
                      <span className="text-xl text-black font-bold max-sm:text-[16px] max-sm:font-bold">
                        {item.price}
                      </span>
                      <p className="text-sm text-black font-semibold pl-1 pt-[6px]">
                        PER UNIT
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="box-border h-[90px] w-[512px] max-sm:w-full p-4 border flex gap-5 border-black mb-4  rounded-md">
            <div className=" flex-grow-0 pt-1">
              <div>
                <span className="text-lg text-black font-bold max-sm:text-[13px]">Buy 3 &
                  <span className="text-lg text-red-600 font-bold max-sm:text-[13px]"> Get  15%off</span>
                </span>
              </div>
              <div>
                <span className="text-xs text-black font-semibold pt-1 ">Free |</span>
                
                <span className="text-xs text-black font-semibold pt-1">V- Clutter</span>
                
              </div>
            </div>
            <div className=" flex-grow-0 ml-[150px] -mt-2">
              <div>
              <span className=" text-base text-red-600 max-sm:text-[16px] max-sm:font-semibold ">$51.83 </span>
              <span className=" text-sm text-black-400 line-through max-sm:text-[16px] max-sm:font-semibold">$60.98 </span>
              </div>
              <div className=" flex">
                <span className="text-2xl text-black font-semibold max-sm:text-[16px]  max-sm:font-bold">$25.92</span>
                <p className="text-xs text-black font-semibold pt-3 max-sm:font-bold max-sm:pt-2">PER UNIT</p>
              </div>
            </div>
            </div>
            <div className="box-border h-[90px] w-[512px] max-sm:w-full  p-4 border flex gap-5 border-black mb-4  rounded-md">
            <div className=" flex-grow-0 pt-1">
              <div>
                <span className="text-lg text-black font-bold max-sm:text-[13px] max-sm:font-semibold">Buy 4 &
                  <span className="text-lg text-red-600 font-bold max-sm:text-[13px]"> Get  20%off</span>
                </span>
              </div>
              <div>
                <span className="text-xs text-black font-semibold pt-1 ">Free |</span>
                
                <span className="text-xs text-black font-semibold pt-1">V- Clutter</span>
                
              </div>
            </div>
            <div className=" flex-grow-0 ml-[150px] -mt-2">
              <div>
              <span className=" text-base text-red-600 max-sm:text-[16px] max-sm:font-bold">$51.83 </span>
              <span className=" text-sm text-black-400 line-through max-sm:text-[16px] max-sm:font-bold">$60.98 </span>
              </div>
              <div className=" flex">
                <span className="text-2xl text-black font-semibold max-sm:text-[16px] max-sm:font-bold">$25.92</span>
                <p className="text-xs text-black font-semibold pt-3 max-sm:font-bold max-sm:pt-2">PER UNIT</p>
              </div>
            </div>
            </div>
            <div className="box-border h-[120px] w-[512px] max-sm:w-full p-4 border flex gap-5 border-black mb-4  rounded-md">
            <div className=" flex-grow-0 pt-2">
              <div>
                <span className="text-lg text-black font-bold max-sm:text-[13px] ">Buy 5 &
                  <span className="text-lg text-red-600 font-bold max-sm:text-[13px]"> Get More than 25%off</span>
                </span>
              </div>
              <div>
                <span className="text-xs text-black font-semibold pt-1 ">Free |</span>
                
                <span className="text-xs text-black font-semibold pt-1">V- Clutter</span>
                
              </div>
              <div className="flex justify-start">
                <button
                  className="h-5 w-5 mt-3 leading-8 text-3xl max-sm:text-[13px] rounded-full bg-light-gray  bg-yellow-400 flex items-center justify-center hover:cursor-pointer"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg></button
                ><input
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]+"
                  id="quantity-undefined"
                  name="quanitity"
                  min="1"
                  className="h-10 w-16 px-0 text-center border-none text-xl font-heading leading-10"
                  value="1"
                /><button
                  className="h-5 w-5 mt-3 leading-8 text-3xl rounded-full bg-yellow-400 flex items-center justify-center hover:cursor-pointer"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className=" flex-grow-0 ml-[50px] -mt-2">
              <div>
              <span className=" text-base text-red-600 max-sm:text-[16px] max-sm:font-bold ">$51.83 </span>
              <span className=" text-sm text-black-400 line-through max-sm:text-[16px] max-sm:font-bold">$60.98 </span>
              </div>
              <div className=" flex">
                <span className="text-2xl text-black font-semibold max-sm:text-[16px] max-sm:font-bold">$25.92</span>
                <p className="text-xs text-black font-semibold pt-3 max-sm:font-bold max-sm:pt-2">PER UNIT</p>
              </div>
            </div>
            </div> */}
            <div className="basis-full sm:order-2 box-border h-[70px] w-[517px] p-4 bg-amber-500 max-sm:w-full flex  mt-[50px] rounded-full">
              <button
                className="w-full  bg-racky-orange px-8 text-xl font-body  font-extrabold rounded-full mb-sm-y-spacing"
                onClick={() => addToCart({ id: 1, name: "Product 1" })}
              >
                <span className="flex justify-center items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="mr-2"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"></path>
                  </svg>
                  Add to Cart
                </span>
              </button>
            </div>
            {/* <div className="overflow-hidden transition-[max-height] relative z-0">
              <div className="px-sm-x-margin py-sm-y-spacing">
              <div className="Product_short_description__JDFPy">
                <h3>Features:</h3>
                <ul>
                  <li>Easy disposal of debris.</li>
                  <li>Works with hole saws up to 8″.</li>
                </ul>
              </div>
              </div>
              <div className="absolute bottom-0">
                <div className="relative w-full h-8 bg-gradient-to-b from-transparent to-white"></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>


      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      {/* <div className="p-information bg-white rounded-[19px]">
        <div className="flex mb-sm-y-spacing">
          <h2 className="text-black text-2xl font-extrabold sm:text-3xl pr-4">
            Product Information
            <div className="flex mt-1">
              <div
                className="border-2 border-racky-orange rounded basis-full sm:border-4"
              ></div>
              <div
                className="ml-2 basis-1 border-2 border-racky-orange rounded sm:border-4"
              ></div>
            </div>
          </h2>
        </div>
      </div> */}
      {/* <div className="bg-white m-2 mb-sm-y-spacing p-2 rounded-2xl lg:container lg:mx-auto  sm:mx-sm-x-margin">
        <div className="w-full sm:px-sm-x-margin pt-sm-y-spacing order-3 lg:container">
          <div className="flex mb-sm-y-spacing">
            <h2 className="text-black text-2xl font-extrabold sm:text-3xl pr-4">
              Product Information
              <div className="flex mt-1">
                <div className="border-2 border-racky-orange rounded basis-full sm:border-4"></div>
                <div className="ml-2 basis-1 border-2 border-racky-orange rounded sm:border-4"></div>
              </div>
            </h2>
          </div>
          <div className="flex mb-sm-y-spacing">
            <p className="text-xl  py-3 mb-10 text-racky-orange">
              The Croc's Needle Nose Wire Strippers have all the main features
              of the best wire strippers plus so much more! With ergonomic
              handles, Electricians tell us they love the feel of these wire
              strippers. The Croc’s Needle Nose Wire Strippers are rated to cut
              standardized American Wire Gauge (AWG) wire sizes, cuts bolts, as
              well as strips NMD, and can even do some sleeve crimping. You can
              also be sure to never misplace the Croc's, no matter the
              environment, with its glow in the dark handles.
            </p>
          </div>
          <div className="flex mb-sm-y-spacing">
            <h2 className="text-black text-2xl font-extrabold sm:text-3xl pr-4 mb-8">
              Featured Videos
              <div className="flex mt-1">
                <div className="border-2 border-racky-orange rounded basis-full sm:border-4"></div>
                <div className="ml-2 basis-1 border-2 border-racky-orange rounded sm:border-4"></div>
              </div>
            </h2>
          </div>
        </div>
      </div> */}
    </div>
  );
}
