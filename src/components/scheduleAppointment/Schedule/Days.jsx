import React, { useState, useEffect } from "react";
import "./Schedule.css";
import moment from "moment";
const Days = ({ day, date, item, selectDay, selectedDay }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const checkAvailability = () => {
      const myDateArray = moment(item?.availability?.date, "DD-MM-YYYY").format(
        "YYYY-MM-DD"
      );
      const currentDate = moment().format("YYYY-MM-DD");
      if (moment(myDateArray).isAfter(currentDate)) {
        setIsAvailable(true);
      }
    };
    checkAvailability();
  }, [item]);

  const handleSelectDay = () => {
    setIsPressed(!isPressed);
    if (isAvailable) {
      selectDay(item);
    }
  };
  const takeBackGround = () => {
    if (!isAvailable) {
      return "card-unAvailable";
    }
    if (selectedDay === item) {
      return "cardPressed";
    } else {
      return "card";
    }
  };
  return (
    <>
      <div className={takeBackGround()} onClick={handleSelectDay}>
        <div className="days">{day}</div>
        <div className="numberOfDay">{date}</div>
      </div>
    </>
  );
};

export default Days;
