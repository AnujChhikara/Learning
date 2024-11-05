import { useRef, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const intervalRef = useRef();

  const handleStartButton = () => {
    setIsTimerRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1000);
    }, 1000);
  };

  const handleStopButton = () => {
    clearInterval(intervalRef.current);
    setIsTimerPaused(true);
  };

  return (
    <div className='stopwatch-container'>
      <div className='time-display'>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div className='buttons'>
        {isTimerRunning ? (
          <button disabled={!isTimerPaused} onClick={handleStartButton}>
            Resume
          </button>
        ) : (
          <button onClick={handleStartButton}>Start</button>
        )}

        <button onClick={handleStopButton}>Stop</button>
      </div>
    </div>
  );
}
