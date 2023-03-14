import React, { useEffect, useState } from "react";
import classes from "./ChoseTime.module.css";
import "../Schedule/Schedule.css";

const ChoseTime = ({ availableTime, setSelectTime, selectedTime }) => {
  const [fromTimes, setFromTimes] = useState([]);
  const [unavailableTimes, setUnavailableTimes] = useState([]);

  useEffect(() => {
    if (availableTime?.available?.length > 0) {
      const { available, unavailable } = availableTime;
      const fromTime = new Date(available[0]?.from_unix * 1000);
      const toTime = new Date(available[available?.length - 1]?.to_unix * 1000);
      const times = [];
      for (
        let time = fromTime;
        time < toTime;
        time.setHours(time.getHours() + 1)
      ) {
        if (
          time.toLocaleTimeString("en-US") !==
          new Date(available[0]?.to_unix * 1000).toLocaleTimeString("en-US")
        )
          times.push(time.toLocaleTimeString("en-US"));
      }
      setFromTimes(times);

      const unavailableTimes = unavailable.map((time) =>
        new Date(time?.from_unix * 1000).toLocaleTimeString("en-US")
      );
      setUnavailableTimes(unavailableTimes);
    }
  }, [availableTime]);

  const ChooseTime = (time) => {
    setSelectTime(time);
  };
  const takeBackGround = (time) => {
    if (unavailableTimes.includes(time)) {
      return "card-unAvailable";
    }
    if (selectedTime === time) {
      return "cardPressed";
    } else {
      return "card";
    }
  };
  return (
    <div className={classes.container}>
      <h4>Choose time</h4>
      {fromTimes?.length > 0 && (
        <div className={classes.cardContainer}>
          {fromTimes.map((time) => (
            <div
              onClick={() => ChooseTime(time)}
              className={takeBackGround(time)}
              key={time}
            >
              {(time.length === 11 ? time.slice(0, 5) : time.slice(0, 4)) +
                " " +
                time.slice(8)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChoseTime;
