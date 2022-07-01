import { ReactComponent as BgImage } from '../../../assets/images/bg.svg';

import { ReactComponent as People } from '../../../assets/images/people.svg';
import Lottie from 'lottie-react';
import magicAnimation from '../../../assets/json/magic.json';
import Coin from '../../../assets/images/coin.png';
import Title from '../../../assets/images/title.png';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [coinIconH, setCoinIconH] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      const v = ((coinIconH + 1) % 22) + 1;
      setCoinIconH(v);
    }, 100);
    return () => clearInterval(interval);
  }, [coinIconH]);

  return (
    <div className='mx-[-50px] md:mx-0 md:w-full h-full block relative bg-transparent'>
      <BgImage className='-z-40 object-cover top-0 right-0 w-full' />
      <div className='absolute top-[42.99%] left-[44.47%] w-[15.1%] h-[19.18%] overflow-hidden'>
        <img
          className='relative w-full'
          src={Coin}
          style={{
            marginTop: `-${coinIconH * 100}%`,
          }}
        ></img>
      </div>
      <Lottie
        animationData={magicAnimation}
        loop={true}
        autoplay={true}
        className='z-0 absolute w-full bg-transparent top-0 right-0'
      />
      <People className='absolute z-0 object-cover top-0 right-0 w-full' />
      <div className='absolute z-0 object-cover top-[4rem] md:top-[7rem] right-0 w-full text-center'>
        <div className='w-full flex justify-center'>
          <img src={Title} className='w-1/2 md:w-1/3 justify-self-center' />
        </div>
        <p className='text-[#367E6B] text-sm md:text-lg font-bold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default Hero;
