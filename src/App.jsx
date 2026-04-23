import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Models from "./components/Models";
import Navbar from "./components/Navbar";

const loadModels = async () => {
  const res = await fetch("/Ai-models.Json");

  return res.json();
};

const modelPromise = loadModels();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Models modelPromise={modelPromise}></Models>
      <Footer></Footer>
    </>
  );
}

export default App;
