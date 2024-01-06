"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export function TimerCard() {
  const router = useRouter();
  const { toast } = useToast();
  const [hour, setHour] = useState<number | "">("");
  const [minute, setMinute] = useState<number | "">("");
  const [second, setSecond] = useState<number | "">("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: "hour" | "minute" | "second"
  ) => {
    const value = e.target.value;

    // Allow only numbers (you can modify this regex according to your needs)
    const isValidInput = /^\d*$/.test(value);

    if (isValidInput || value === "") {
      if (type === "hour") {
        setHour(value === "" ? "" : parseInt(value, 10));
      } else if (type === "minute") {
        setMinute(value === "" ? "" : parseInt(value, 10));
      } else {
        setSecond(value === "" ? "" : parseInt(value, 10));
      }
    }
  };

  const handleStartClick = () => {
    // Check if both hour and minute are provided
    if (hour !== "" && minute !== "" && second !== "") {
      // Navigate to the new page and pass the inputted values as query parameters
      router.push(`/countdown?hour=${hour}&minute=${minute}&second=${second}`);
    } else {
      toast({
        title: "Dear User, Calm Down",
        description: "Please enter both hour and minute values",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
        <CardDescription>
          Enter your desired hour and minute to begin countdown.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input
                id="hour"
                placeholder="How Many Hour(s)"
                value={hour}
                onChange={(e) => handleInputChange(e, "hour")}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Input
                id="minute"
                placeholder="How Many Minute(s)"
                value={minute}
                onChange={(e) => handleInputChange(e, "minute")}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Input
                id="second"
                placeholder="How Many Second(s)"
                value={second}
                onChange={(e) => handleInputChange(e, "second")}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleStartClick}>
          Start
        </Button>
      </CardFooter>
    </Card>
  );
}
