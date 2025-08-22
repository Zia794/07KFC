import React from "react";
import Topdeals from "./Components/Home/Topdeals";
import BestSeller from "./Components/Home/BestSeller";
import Navbar from "./Components/Navbar/Navbar";
import Mainslider from "./Components/Home/Mainslider";
import Exploreslider from "./Components/Home/Exploreslider";

function App() {
  return (
    <>
      <div className="bg-[black] text-[white]">
        <Navbar />
      <Mainslider />
      <Exploreslider/>
      <BestSeller />
        <Topdeals />
        
      </div>
    </>
  );
}

export default App;
