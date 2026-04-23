import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen max-w-5xl mx-auto ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="w-80 animate-pulse" src="/public/banner.png" alt="" />
          <div>
            <div className="badge bg-red-400/50 text-red-500 py-4 px-5 rounded-full font-medium border-red-400">
              Future AI Models
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mt-9">
              One Subscription All the Ai You Need
            </h1>
            <p className="py-6">
              Experience to the full spectrum on frontier Intelligence. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn bg-red-500 rounded-full text-white">
              Get Unlimited Access
            </button>
            <div className="flex items-center gap-8 text-sm text-zinc-600 pt-6">
              <div>✓ 50+ Frontier Models</div>
              <div>✓ No Usage Limits</div>
              <div>✓ Cancel Anytime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
