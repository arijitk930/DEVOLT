import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-31T23:59:59").getTime(); // Replace with your desired date
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white font-futuristic text-center mt-8">
      <div className="text-4xl md:text-6xl flex justify-center space-x-8">
        <div>
          <p className="text-purple-300">{timeLeft.days || 0}</p>
          <p className="text-sm">Days</p>
        </div>
        <div>
          <p className="text-purple-300">{timeLeft.hours || 0}</p>
          <p className="text-sm">Hours</p>
        </div>
        <div>
          <p className="text-purple-300">{timeLeft.minutes || 0}</p>
          <p className="text-sm">Minutes</p>
        </div>
        <div>
          <p className="text-purple-300">{timeLeft.seconds || 0}</p>
          <p className="text-sm">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer