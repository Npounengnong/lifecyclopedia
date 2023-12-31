import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import CyclOPediaClassPage from "./CyclOPediaClassPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
      <Header/>
      <div className="row text-white">
        <div>
          <span className="h1 text-warning text-center">Class Component</span>
          <CyclOPediaClassPage/>
        </div>
      </div>   
  </div>
);