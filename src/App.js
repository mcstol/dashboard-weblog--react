import { render } from "@testing-library/react";
import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/sidebar";


function App(){
      return(
          <div>
            <Header />
            <Sidebar />
          </div>
      ) 
      
}
export default App;

