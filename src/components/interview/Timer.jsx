import { useEffect, useState } from "react";

function Timer({ duration, onTimeUp }) {

  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {

    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);

  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (

    <h3>

      ⏱ Time Left :
      {" "}
      {String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}

    </h3>

  );

}

export default Timer;