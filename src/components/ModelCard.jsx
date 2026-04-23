import React, { useState } from "react";

const ModelCard = ({ model }) => {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const handleSubscribe = () => {
    setIsSubscribe(true);
  };
  return (
    <div>
      <div className="card rounded-3xl shadow-sm">
        <div className="bg-base-300 py-5 rounded-t-3xl">
          <img className="w-48 h-48 mx-auto" src={model.image} alt="" />
        </div>
        <div className="card-body">
          <h2 className="font-bold text-xl">{model.title}</h2>
          <p className="text-gray-500">{model.description}</p>
          <h2 className="">
            <span className="font-bold text-2xl">{model.price}$</span>/Month
          </h2>
          <div className="">
            <button
              onClick={handleSubscribe}
              className="btn btn-primary w-full text-white bg-red-500 border-none hover:bg-green-500"
            >
              {isSubscribe ? "Subscribed" : "Subscribe Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
