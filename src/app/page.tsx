'use client';

import React, { useEffect, useState } from 'react';
import Input from '@/app/ui/input';
import Button from '@/app/ui/button';
import useCountdownTimer from './hooks/useCountdownTimer';

export default function Home() {
  const {
    timeRemaining,
    startTimer,
    pauseResumeTimer,
    resetTimer,
    paused,
    targetTime,
    handleTimeInputChange,
  } = useCountdownTimer({ hours: 0, minutes: 0, seconds: 0 });

  return (
    <div className='flex flex-col items-center justify-center gap-24'>
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
