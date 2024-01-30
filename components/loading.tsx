import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "@/data/loading.json";

const Loading = () => {
  return <Lottie animationData={loadingAnimation} loop={true} />;
};

export default Loading;
