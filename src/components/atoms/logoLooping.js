import Lottie from "lottie-react";
import logoAnimation from "../../assets/json/loop.json";

const logoLooping = () => {
  return (
    <Lottie
      animationData={logoAnimation}
      loop={true}
      autoplay={true}
      className="w-20 h-auto"
    />
  );
};

export default logoLooping;
