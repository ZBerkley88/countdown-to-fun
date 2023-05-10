import React from "react";

// ================== COMPONENTS ==================
import Header from "./components/header/Header";
import Timer from "./components/timer/Timer";
import Operations from "./components/operations/Operations";
import Numbers from "./components/numbers/Numbers";

function App() {
  return (
    <>
      <Header />
      {/* <Timer /> */}
      <Numbers />
      <Operations />
    </>
  );
}

export default App;
