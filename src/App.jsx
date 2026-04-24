import { useState } from "react";
import "./App.css";
import AdCard from "./components/AdCard";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Models from "./components/Models";
import Navbar from "./components/Navbar";
import Tab from "./components/Tab";

const loadModels = async () => {
  const res = await fetch("/Ai-models.Json");

  return res.json();
};

const modelPromise = loadModels();

function App() {
  const [activeTab, setActiveTab] = useState("Models");
  const [carts, setCarts] = useState([]);
  // console.log(carts);

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="tabs tabs-box bg-transparent justify-center mb-5">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full px-10 font-bold"
          aria-label="Models"
          defaultChecked
          onClick={() => setActiveTab("Models")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full px-10 font-bold"
          aria-label={`Cart(${carts.length})`}
          onClick={() => setActiveTab("Cart")}
        />
      </div>
      {activeTab === "Models" && (
        <Models
          modelPromise={modelPromise}
          carts={carts}
          setCarts={setCarts}
        ></Models>
      )}
      {activeTab === "Cart" && (
        <AdCard carts={carts} setCarts={setCarts}></AdCard>
      )}
      <Footer></Footer>
    </>
  );
}

export default App;
