import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import { useState } from "react";

const AllData = gql`
  query ProductBulkDiscount {
    product(id: "cHJvZHVjdDoxOQ==") {
      id
      name
      bulkDiscountEnabled
      bulkDiscountData {
        quantity
        price
        freeProduct {
          id
          name
        }
        image
        mostPopular
      }
    }
  }
`;

export default function Home() {
  const products = [
    {
      name: "Croc's Needle Nose Wire Strippers",
      price: "$30.00",
      image: "/tool.png",
    },
  ];

  const images = [
    "/tool.png",
    "/image20.jpg",
    "/image 20 (2).jpg",
    "/sddefault 1.png",
  ];
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedTotalValue, setSelectedTotalValue] = useState(null);
  const [count, setCount] = useState(5);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [cartItems, setCartItems] = useState([]);
  console.log(selectedItem);

  const handleBoxClick = (item, selectedItem) => {
    console.log("sachin", item, selectedItem);
    setSelectedItem(item);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleArrowClick = (direction) => {
    const currentIndex = images.indexOf(selectedImage);
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else if (direction === "next") {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedImage(images[newIndex]);
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
    <div className=" w-[85%] bg-white pb-4 mx-auto">
      <div className="flex justify-between mt-10">
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
        <div className="flex items-end">
          <span className="font-semibold text-black text-lg">#48020</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-auto">
        <div className="flex flex-col-reverse my-auto mt-0 md:flex-row mx-auto">
          <div className="flex p-4 gap-6 mt-4 md:gap-0 md:flex-col mx-auto">
            <div
              className="hidden justify-center cursor-pointer md:flex"
              onClick={() => handleArrowClick("prev")}
            >
              <Image src="/arrowup.svg" width="40" height="40"></Image>
            </div>
            {images?.map((image, index) => (
              <div
                key={index}
                className={`box-border h-[92px] w-[92px] p-4 border-2 flex my-auto rounded-3xl cursor-pointer
              ${
                selectedImage === image ? "border-blue-500" : "border-[#8C8C8C]"
              }`}
                onClick={() => handleImageClick(image)}
              >
                <Image src={image} width="100" height="100"></Image>
              </div>
            ))}
            <div
              className="hidden justify-center cursor-pointer md:flex"
              onClick={() => handleArrowClick("next")}
            >
              <Image src="/arrowdown.svg" width="40" height="40"></Image>
            </div>
          </div>

          <div className="mx-auto">
            <div className=" flex flex-col box-border mx-auto h-[533px] w-[504px] border-2 border-[#8C8C8C] bg-white rounded-3xl mt-4 sm:mx-0">
              <div className="w-[440px] h-[440px] mx-auto my-auto">
                <Image src={selectedImage} width="500" height="510"></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 mx-auto">
          <div className="mx-auto ">
            <h1 className=" font-extrabold text-2xl basis-full">
              Croc's Needle Nose Wire Strippers
            </h1>
            <h2 className=" font-semibold text-xl mt-2 ">
              Multi-use handheld wire strippers
            </h2>
            <div className="overflow-hidden transition-[max-height] relative z-0">
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
              <div className="sm:order- basis-full">
                <div className="my-6 flex gap-4">
                  <span className="text-heading text-4xl font-extrabold flex-initial ">
                  ${selectedTotalValue ? selectedTotalValue : 30.00}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-full sm:order-2 box-border h-[70px] w-[517px] p-4 bg-[#F7921D] max-sm:w-full flex rounded-full">
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
          <div className=" font-semibold text-xl mt-2">Choose How Many:</div>
          <div>
            {products?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex box-border h-[67px] w-[517px] my-4 rounded-md cursor-pointer justify-between
            ${
              selectedItem?.name === item?.name
                ? "bg-[#FDCE0D] border-2 border-[#FDCE0D]"
                : "bg-white border-2 border-[#8C8C8C]"
            }`}
                  onClick={() => handleBoxClick(item, selectedItem)}
                >
                  <div className="flex justify-center items-center mx-1">
                    <div className="w-12 h-14 py-2 my-auto ml-2 bg-white rounded-sm shadow">
                      <Image
                        src={item.image}
                        width="80"
                        height="80"
                        className="rounded-sm"
                      ></Image>
                    </div>
                    <p className=" text-base flex font-bold items-center mx-1">
                      {item.name}
                    </p>
                  </div>
                  <div className=" flex justify-center items-center mx-1">
                    <span className="text-heading text-xl font-extrabold pl-3 text-red">
                      {item.price}
                    </span>
                    <p className="mt-2 text-xs text-black font-semibold p-0.5">
                      PER UNIT
                    </p>
                  </div>
                </div>
              );
            })}
            {data?.product?.bulkDiscountData?.map((item, index, array) => {
              const isLastItem = index === array.length - 1;
              const discountValue = 100 - (item.price / 30) * 100;
              const fixedValue = Math.abs(discountValue);
              const totalValue = fixedValue.toFixed(0);

              const totalUnit = item.quantity * item.price;
              const totalPrice = Math.abs(totalUnit);
              const lastTotalPrice = Math.abs(count * item.price);
              const actualPrice = Math.abs(item.quantity * 30);

              const isSelected = selectedItem === item;
              const isMostPopular =
                item.mostPopular && (!selectedItem || selectedItem === item);

              return (
                <div key={item.id}>
                  {item.mostPopular && (
                    <div className=" box-border h-[22px] w-[113px] bg-black ml-[380px]">
                      <p className="text-white text-sm text-center font-normal">
                        Most Popular
                      </p>
                    </div>
                  )}
                  <div
                    className={`box-border w-[517px] p-3 flex gap-5 mb-4 cursor-pointer rounded-md 
                ${
                  isSelected
                    ? "bg-[#FDCE0D] border-2 border-[#FDCE0D]"
                    : isMostPopular
                    ? "bg-[#FDCE0D] border-2 border-[#FDCE0D]"
                    : "bg-white border-2 border-[#8C8C8C]"
                }
                ${isLastItem ? "h-[120px]" : "h-[80px]"}`}
                    key={item.id}
                    onClick={() => {
                      handleBoxClick(item);
                      setSelectedTotalValue(totalPrice);
                    }}
                  >
                    <div className=" flex w-full justify-between">
                      <div className="flex gap-2">
                        {item.image ? (
                          <div className=" w-12 h-14 py-2 bg-white rounded-sm shadow">
                            <Image
                              src={item.image}
                              width="80"
                              height="80"
                              className="rounded-sm"
                            ></Image>
                          </div>
                        ) : null}
                        <div className=" my-auto">
                          <span className="text-lg text-black font-bold">
                            Buy {item.quantity} &
                            <span className="text-lg text-red font-bold">
                              {" "}
                              Get {totalValue}%off
                            </span>
                          </span>
                          <div>
                            <span className=" font-medium text-sm">
                              <span>
                                Free
                                <span className="ml-1">|</span>
                                <span className="ml-1">
                                  {item.freeProduct.name}
                                </span>
                              </span>
                            </span>
                          </div>
                          {isLastItem && (
                            <div className=" flex pt-2">
                              <button
                                className="pb-1 w-7 h-7 bg-[#F7921D] rounded-full text-2xl font-semibold flex items-center justify-center"
                                onClick={() => setCount(count - 1)}
                              >
                                -
                              </button>
                              <span className=" ml-5">
                                {count < 10 ? "0" : ""}
                                {count}
                              </span>
                              <button
                                className="ml-5 w-7 h-7 bg-[#F7921D] rounded-full text-2xl font-semibold flex items-center justify-center"
                                onClick={() => setCount(count + 1)}
                              >
                                +
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex mt-1">
                        {data?.product?.bulkDiscountEnabled ? (
                          <div>
                            <div>
                              {isLastItem ? (
                                <span className="text-base font-extrabold text-red max-sm:text-[16px] max-sm:font-extrabold">
                                  ${lastTotalPrice}{" "}
                                </span>
                              ) : (
                                <span className="text-base font-extrabold text-red max-sm:text-[16px] max-sm:font-extrabold">
                                  ${totalPrice}{" "}
                                </span>
                              )}
                              <span className="text-base font-medium text-[#3A3A3A] line-through max-sm:text-[16px] max-sm:font-semibold">
                                ${actualPrice}{" "}
                              </span>
                            </div>
                            <div className="flex">
                              <span className="text-xl text-black font-extrabold max-sm:text-[16px] max-sm:font-bold">
                                ${item.price}
                              </span>
                              <p className="text-sm text-black font-semibold pl-1 pt-[6px]">
                                PER UNIT
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className=" mt-1">
                            <span className="text-xl font-extrabold text-red max-sm:text-[16px] max-sm:font-extrabold">
                              ${totalPrice}{" "}
                            </span>
                            <span className="text-lg font-medium text-[#3A3A3A] line-through max-sm:text-[16px] max-sm:font-semibold">
                              ${actualPrice}{" "}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
    </div>
  );
}
