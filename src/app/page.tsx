'use client';

import React, { useEffect, useState } from 'react';
import Input from '@/app/ui/input';
import Button from '@/app/ui/button';

type TimeRemaining = {
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Home() {
  const [targetTime, setTargetTime] = useState<Date | null>(null);
  const [paused, setPaused] = useState(false);
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
    let timer: NodeJS.Timeout;
    if (targetTime && !paused) {
      timer = setInterval(() => {
        const timeLeft = calculateTimeLeft();
        if (timeLeft) {
          setTimeRemaining(timeLeft);
        } else {
          clearInterval(timer);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [targetTime, paused]);

  const pauseResumeTimer = () => {
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

  return (
    <div className='flex flex-col items-center justify-center gap-16'>
      <div className='flex flex-col gap-12 lg:flex-row'>
        <Input
          name='hours'
          handleOnChange={(e) =>
            handleTimeInputChange(e.target.value, 'hours', 99)
          }
          remainingTime={timeRemaining.hours}
        />
        <Input
          name='minutes'
          handleOnChange={(e) =>
            handleTimeInputChange(e.target.value, 'minutes', 60)
          }
          remainingTime={timeRemaining.minutes}
        />
        <Input
          name='seconds'
          handleOnChange={(e) =>
            handleTimeInputChange(e.target.value, 'seconds', 60)
          }
          remainingTime={timeRemaining.seconds}
        />
      </div>
      <div className='flex flex-col gap-8 lg:flex-row'>
        <Button
          name='Start button'
          onClick={() =>
            startTimer(
              timeRemaining.hours,
              timeRemaining.minutes,
              timeRemaining.seconds
            )
          }
        >
          Start
        </Button>
        <Button name='Pause resume button' onClick={pauseResumeTimer}>
          {paused ? 'Resume' : 'Pause'}
        </Button>
        <Button name='Pause resume button' onClick={resetTimer}>
          Reset
        </Button>
      </div>
    </div>
  );
}
