import React from 'react';
import { useTimer } from 'react-timer-hook';

export default function MyTimer({ expiryTimestamp, handleTimeCountDown }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      // console.warn('onExpire called');
      handleTimeCountDown();
    },
  });
  return (
    <div className="text-countDown">{`${minutes} : ${seconds}`}</div>
  );
}
