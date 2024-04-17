import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { About } from "./pages";
import { Button } from "./components/ui/button";
import { useAppSelector } from "./hooks";
function App() {
  const { name } = useAppSelector((state) => state.userState);
  console.log(name);
  return (
    <>
      <div>
        <About />
      </div>
    </>
  );
}

export default App;
