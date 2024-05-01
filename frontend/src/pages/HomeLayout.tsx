import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading } from "@/components";
import { Navbar } from "../components/";

const HomeLayout = () => {
  const isLoading = useNavigation().state === "loading";
  // const isLoading = true;
  return (
    <>
      <Header />
      <Navbar />
      <div className="align-element py-20">
        {isLoading ? <Loading /> : <Outlet />}
      </div>
    </>
  );
};

export default HomeLayout;
