"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarClock, Loader2 } from "lucide-react";

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <div className="text-center text-2xl font-bold text-green-600">Billing is now available!</div>;
  }

  return (
    <div className="space-y-6 text-center">
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(timeLeft).map(([interval, value]) => (
          <div key={interval} className="flex flex-col items-center">
            <div className="text-4xl font-extrabold text-primary">{value}</div>
            <div className="text-sm text-muted-foreground capitalize">{interval}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Component() {
  const [isLoading, setIsLoading] = useState(false);
  const targetDate = new Date("2026-01-01T00:00:00");

  const handleCheckAgain = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center p-5">
      <Card className="w-full max-w-lg rounded-xl shadow-lg">
        <CardHeader className="text-center space-y-4">
          <CalendarClock className="mx-auto h-16 w-16 text-indigo-600" />
          <CardTitle className="text-4xl font-extrabold text-indigo-800">Billing Coming Soon</CardTitle>
          <p className="text-lg text-gray-500">
            We Are working hard to bring you the new billing system. Stay tuned!
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-center text-indigo-800 mb-4">Coming In</h3>
            <CountdownTimer targetDate={targetDate} />
          </div>
          <p className="text-sm text-center text-gray-500">
            Our new billing system will be available on <strong>January 1, 2026</strong>. We appreciate your patience and look forward to serving you!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
