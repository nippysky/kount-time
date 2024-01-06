"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { calculateRemainingTime, formatTime } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Countdown() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const [isPaused, setIsPaused] = useState<boolean>(false);

  const hour = searchParams.get("hour");
  const minute = searchParams.get("minute");
  const second = searchParams.get("second");

  const [remainingTime, setRemainingTime] = useState<number>(
    calculateRemainingTime(
      parseInt(hour as string, 10),
      parseInt(minute as string, 10),
      parseInt(second as string, 10)
    )
  );

  useEffect(() => {
    let timerInterval: NodeJS.Timeout;

    if (!isPaused) {
      timerInterval = setInterval(() => {
        setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    if (remainingTime === 0) {
      toast({
        title: "Dear User,",
        description: "Countdown Completed",
      });
    }

    return () => clearInterval(timerInterval);
  }, [remainingTime, isPaused]);

  // Function to ahndle Pause
  const handlePauseClick = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  // Function to handle reset
  const handleResetClick = () => {
    setRemainingTime(
      calculateRemainingTime(
        parseInt(hour as string, 10),
        parseInt(minute as string, 10),
        parseInt(second as string, 10)
      )
    );
    setIsPaused(false);
  };

  const handleStop = () => {
    router.push("/");
  };

  return (
    <div className="px-5">
      <h1 className="font-black lg:text-[4.5rem] text-[3rem] mt-20">
        {formatTime(remainingTime)}
      </h1>

      <div>
        <div className="flex flex-col md:flex-row w-full md:justify-between md:items-center gap-5 mt-10">
          <Button
            variant={"outline"}
            className="w-full"
            onClick={handlePauseClick}
          >
            {isPaused ? "Resume" : "Pause"}
          </Button>

          <Button className="w-full" onClick={handleResetClick}>
            Reset
          </Button>
        </div>

        <Button
          variant={"destructive"}
          className="w-full mt-5"
          onClick={handleStop}
        >
          Stop
        </Button>
      </div>
    </div>
  );
}
