import React from "react";
 import BestSeller from "./Components/Home/BestSeller";
import Navbar from "./Components/Navbar/Navbar";
import Mainslider from "./Components/Home/Mainslider";
import Exploreslider from "./Components/Home/Exploreslider";

function App() {
  return (
    < >
    <div className="bg-[black] text-[white]">
      <Navbar />
      <Mainslider />
      <Exploreslider/>
      <BestSeller />
      </div>
    </>
  );
}

export default App;
