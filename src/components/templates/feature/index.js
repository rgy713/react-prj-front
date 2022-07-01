import Button from '../../atoms/button';
import Coin from '../../../assets/images/contents-coin.png';
import { useEffect, useRef, useState } from 'react';

const InfoPage = () => {
  const textEarnRef = useRef();
  const textBorrowRef = useRef();
  const textDividensRef = useRef();
  const imgCoinRef = useRef();
  const imgCoin1Ref = useRef();
  const [line1, setLine1] = useState();
  const [line2, setLine2] = useState();
  const [line3, setLine3] = useState();

  const drawLines = () => {
    let x1, y1, x2, y2, x3, y3, x4, y4;
    if (imgCoinRef?.current?.offsetParent) {
      x1 =
        textEarnRef?.current?.offsetLeft +
        textEarnRef?.current?.offsetWidth / 2;
      y1 =
        textEarnRef?.current?.offsetTop +
        textEarnRef?.current?.offsetHeight / 2;
      x2 = imgCoinRef?.current?.offsetLeft - 80;
      y2 = y1;
      x3 = imgCoinRef?.current?.offsetLeft - 20;
      y3 = textEarnRef?.current?.offsetTop + 50;
      setLine1({
        cx: x1,
        cy: y1,
        r: 4,
        points: `${x1},${y1} ${x2},${y2} ${x3},${y3}`,
      });

      x1 =
        textBorrowRef?.current?.offsetLeft +
        textBorrowRef?.current?.offsetWidth / 2;
      y1 =
        textBorrowRef?.current?.offsetTop +
        textBorrowRef?.current?.offsetHeight / 2;
      x2 = imgCoinRef?.current?.offsetLeft - 80;
      y2 = y1;
      x3 = imgCoinRef?.current?.offsetLeft - 20;
      y3 = textBorrowRef?.current?.offsetTop - 50;
      setLine2({
        cx: x1,
        cy: y1,
        r: 4,
        points: `${x1},${y1} ${x2},${y2} ${x3},${y3}`,
      });

      x1 = textDividensRef?.current?.offsetLeft - 20;
      y1 =
        textDividensRef?.current?.offsetTop +
        textDividensRef?.current?.offsetHeight / 2;
      x2 =
        imgCoinRef?.current?.offsetLeft + imgCoinRef?.current?.offsetWidth + 50;
      y2 = y1;
      x3 =
        imgCoinRef?.current?.offsetLeft + imgCoinRef?.current?.offsetWidth + 20;
      y3 = textDividensRef?.current?.offsetTop + 50;
      setLine3({
        cx: x1,
        cy: y1,
        r: 4,
        points: `${x1},${y1} ${x2},${y2} ${x3},${y3}`,
      });
    } else {
      x1 = textEarnRef?.current?.offsetLeft + 50;
      y1 =
        textEarnRef?.current?.offsetTop +
        textEarnRef?.current?.offsetHeight / 2;
      x2 = 30;
      y2 = y1;
      x3 = x2;
      y3 =
        imgCoin1Ref?.current?.offsetTop +
        imgCoin1Ref?.current?.offsetHeight +
        20;
      x4 = imgCoin1Ref?.current?.offsetLeft - 30;
      y4 = imgCoin1Ref?.current?.offsetTop + 130;
      setLine1({
        cx: x1,
        cy: y1,
        r: 4,
        points: `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}`,
      });

      x1 = textBorrowRef?.current?.offsetLeft + 50;
      y1 =
        textBorrowRef?.current?.offsetTop +
        textBorrowRef?.current?.offsetHeight / 2;
      x2 = 10;
      y2 = y1;
      x3 = x2;
      y3 =
        imgCoin1Ref?.current?.offsetTop +
        imgCoin1Ref?.current?.offsetHeight +
        10;
      x4 = imgCoin1Ref?.current?.offsetLeft - 30;
      y4 = imgCoin1Ref?.current?.offsetTop + 100;
      setLine2({
        cx: x1,
        cy: y1,
        r: 4,
        points: `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}`,
      });

      x1 =
        textDividensRef?.current?.offsetLeft +
        textDividensRef?.current?.offsetWidth -
        50;
      y1 =
        textDividensRef?.current?.offsetTop +
        textDividensRef?.current?.offsetHeight / 2;
      x2 =
        textDividensRef?.current?.offsetLeft +
        textDividensRef?.current?.offsetWidth + 20;
      y2 = y1;
      x3 = x2;
      y3 = textEarnRef?.current?.offsetTop - 130;
      x4 =
        imgCoin1Ref?.current?.offsetLeft +
        imgCoin1Ref?.current?.offsetWidth +
        30;
      y4 = imgCoin1Ref?.current?.offsetTop + 80;
      setLine3({
        cx: x1,
        cy: y1,
        r: 4,
        points: `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}`,
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      drawLines();
    }, 2000);

    window.addEventListener('resize', drawLines);
  }, []);

  const renderSvgLine = (props) => {
    return (
      <svg className='absolute top-0 stroke-2 w-full h-full'>
        <circle
          cx={props.cx}
          cy={props.cy}
          r={props.r}
          stroke='#C4C4C4'
          fill='#C4C4C4'
        />
        <polyline points={props.points} fill='none' stroke='#C4C4C4' />
      </svg>
    );
  };

  return (
    <div className='my-8 p-5 lg:container m-auto flex flex-col-reverse md:flex-col'>
      <div className='flex flex-col md:flex-row justify-center md:justify-evenly mt-8 md:mt-1'>
        <div className='text-center md:text-left'>
          <h2 className='text-2xl font-bold'>
            $901,111,111.26
            <p className='ml-8 text-[#179C64] text-3xl inline-block'>
              Dividends
            </p>
          </h2>
          <p className='inline-block text-sm text-gray-700 font-medium'>
            Paid out to Hatom Token Holders over 3 years
          </p>
        </div>

        <div className='flex justify-center mt-5 md:mt-0'>
          <Button btnName='Buy Hatom Tokens' className={'px-5 max-h-[54px]'}/>
        </div>
      </div>
      <div className='relative w-full'>
        <div className='w-full justify-center items-center flex md:hidden'>
          <img
            ref={imgCoin1Ref}
            src={Coin}
            className='relative bg-cover w-[150px]'
          />
        </div>
        <h3 className='mt-12 text-3xl font-bold text-center md:text-left'>
          <span className='text-indigo-700'>Features</span> of Hatom Protocol
        </h3>
        <div className='w-full flex flex-col md:flex-row text-center md:text-left px-6 md:px-1'>
          <div className='w-full md:basis-1/4'>
            <h3 ref={textEarnRef} className='mt-12 text-2xl font-bold'>
              Earn
            </h3>
            <p className='mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className='mt-3'>
              tortor, dignissim sit amet, adipiscing nec, ultricies sed dolor.
            </p>
            <h3 ref={textBorrowRef} className='mt-12 text-2xl font-bold'>
              Borrow
            </h3>
            <p className='mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className='basis-1/2  justify-center items-center hidden md:flex'>
            <img
              ref={imgCoinRef}
              src={Coin}
              className='relative bg-cover w-[200px]'
            />
          </div>
          <div className='w-full md:basis-1/4'>
            <h3 ref={textDividensRef} className='mt-12 text-2xl font-bold'>
              Dividends
            </h3>
            <p className='mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. tortor,
              dignissim sit amet.
            </p>
            <ul className='list-disc mt-5 pl-5 marker:text-[#179C64]'>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. tortor,
                dignissim sit ametent.
              </li>
              <li className='mt-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. tortor,
                dignissim sit amet.ectetur adip from one ex-diivident date othe
                next
              </li>
            </ul>
          </div>
        </div>
        {line1 && renderSvgLine(line1)}
        {line2 && renderSvgLine(line2)}
        {line3 && renderSvgLine(line3)}
      </div>
    </div>
  );
};

export default InfoPage;
