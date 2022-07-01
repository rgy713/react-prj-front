import React from "react";
import Lottie from "react-lottie";
import loopAnimation from "../../assets/json/loop.json";

const LoopAnimationIcon = ({ width, height }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loopAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} width={width} height={height} />;
};

export default LoopAnimationIcon;
