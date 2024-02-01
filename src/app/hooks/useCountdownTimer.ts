import { useState, useEffect } from 'react';

type TimeRemaining = {
  hours: number;
  minutes: number;
  seconds: number;
};

const useCountdownTimer = (initialState: TimeRemaining) => {
  const [targetTime, setTargetTime] = useState<Date | null>(null);
  const [paused, setPaused] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    if (targetTime) {
      const now = new Date();
      let difference = +targetTime - +now;

      if (difference > 0) {
        let hours = Math.floor(difference / (1000 * 60 * 60));
        let minutes = Math.floor((difference / (1000 * 60)) % 60);
        let seconds = Math.floor((difference / 1000) % 60);

        return { hours, minutes, seconds };
      }
    }
    return null;
  };

  const startTimer = (hours: number, minutes: number, seconds: number) => {
    setPaused(false);

    let additionalHours = Math.floor(minutes / 60);
    hours += additionalHours;
    minutes = minutes % 60;

    const now = new Date();
    const target = new Date(
      now.getTime() + hours * 3600000 + minutes * 60000 + seconds * 1000
    );
    setTargetTime(target);

    setTimeRemaining({
      hours: hours + additionalHours,
      minutes: minutes,
      seconds: seconds,
    });
  };

  useEffect(() => {
    if (targetTime && !paused) {
      const immediateTimeLeft = calculateTimeLeft();
      if (immediateTimeLeft) {
        setTimeRemaining(immediateTimeLeft);
      }

      const timer = setInterval(() => {
        const timeLeft = calculateTimeLeft();
        if (timeLeft) {
          setTimeRemaining(timeLeft);
        } else {
          clearInterval(timer);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [targetTime, paused]);

  const updateTimer = () => {
    const now = new Date();
    const newTargetTime = new Date(
      now.getTime() +
        timeRemaining.hours * 3600000 +
        timeRemaining.minutes * 60000 +
        timeRemaining.seconds * 1000
    );
    setTargetTime(newTargetTime);

    const immediateTimeLeft = calculateTimeLeft();
    if (immediateTimeLeft) {
      setTimeRemaining(immediateTimeLeft);
    }
  };

  const pauseResumeTimer = () => {
    if (paused) {
      updateTimer();
    }
    setPaused(!paused);
  };

  const resetTimer = () => {
    setTargetTime(null);
    setPaused(false);
    setTimeRemaining({ hours: 0, minutes: 0, seconds: 0 });
  };

  const handleTimeInputChange = (
    value: string,
    type: 'hours' | 'minutes' | 'seconds',
    maxInput: number
  ) => {
    const numValue = parseInt(value, 10) || 0;

    if (numValue > maxInput) {
      return;
    }

    setTimeRemaining({
      ...timeRemaining,
      [type]: numValue,
    });
  };

  return {
    timeRemaining,
    startTimer,
    pauseResumeTimer,
    resetTimer,
    targetTime,
    paused,
    handleTimeInputChange,
  };
};

export default useCountdownTimer;
