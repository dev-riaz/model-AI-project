import React, { use } from "react";
import ModelCard from "./modelCard";

const Models = ({ modelPromise }) => {
  const models = use(modelPromise);
  console.log(models);

  return (
    <div>
      <div className="text-center space-y-2 py-5">
        <h2 className="text-4xl font-bold">Choose Your Ai Models</h2>
        <p className="text-gray-400">
          One Subscription to give you all frontier Ai models
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mt-3 mb-6">
        {models.map((model) => (
          <ModelCard model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default Models;
