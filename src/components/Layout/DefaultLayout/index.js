import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <SideBar></SideBar>
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
