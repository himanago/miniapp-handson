import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";

function App() {
  useEffect(() => {
    liff.init({ liffId: import.meta.env.VITE_LIFF_ID }).catch(console.error);
  }, []);
  
  return (
    <div className="App">
      {liff.id}
    </div>
  );
}

export default App;