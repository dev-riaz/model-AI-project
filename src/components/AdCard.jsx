import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const AdCard = ({ carts, setCarts }) => {
  //   const cart = use(carts);
  //   console.log(carts);
  const totalPrise = carts.reduce((sum, cart) => sum + cart.price, 0);

  const proceedPayment = () => {
    setCarts([]);
    toast.success("Your order proceed")
  };

  const handleDelete = (cart) => {
    const filterArray = carts.filter((item) => item.id !== cart.id);
    setCarts(filterArray);
    toast('Item deleted !')
  };
  return (
    <div>
      <div className="w-5xl mx-auto mb-14 border border-base-300 p-4 space-y-2">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        {carts.length === 0 ? (
          <div className="text-center bg-base-300 p-10 text-2xl rounded-3xl">
            {" "}
            Your Cart is Empty
          </div>
        ) : (
          <>
            {carts.map((cart) => (
              <div
                key={cart.id}
                className="bg-base-300 flex items-center justify-between p-5 rounded-3xl gap-5"
              >
                <div className="flex items-center gap-5">
                  <img className="w-20" src={cart.image} alt="" />
                  <div className="">
                    <h1 className=" text-2xl font-bold">{cart.title}</h1>
                    <p className="text-gray-400">{cart.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold">{cart.price}$</span>
                    <span> /month</span>
                  </div>
                  <button
                    onClick={() => handleDelete(cart)}
                    className="btn font-bold text-xl bg-red-500 rounded-full"
                  >
                    <RxCross2></RxCross2>
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center p-5 bg-base-300 text-xl font-bold">
              <h1>Total</h1>
              <h1>{totalPrise}$</h1>
            </div>
            <div className="text-end">
              <button
                onClick={proceedPayment}
                className="btn bg-amber-400 font-medium"
              >
                Proceed to Checkout<FaArrowRight></FaArrowRight>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdCard;
