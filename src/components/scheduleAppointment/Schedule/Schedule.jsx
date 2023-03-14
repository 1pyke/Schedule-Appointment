import React, { useState } from "react";
import Slider from "react-slick";
import Days from "./Days";
import ChoseTime from "../choseTime/ChoseTime";

import "./Schedule.css";

const Schedule = ({
  scheduleData,
  setSelectDayForAppointment,
  setSelectDateForAppointment,
}) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const takeFirstChars = (str, num) => str.substring(0, num);

  const selectDay = (day) => {
    setSelectedDay(day);
    setSelectedTime();
    setSelectDayForAppointment(day);
    setSelectDateForAppointment();
  };
  const setSelectTime = (time) => {
    setSelectedTime(time);
    setSelectDateForAppointment(time);
    console.log(time);
  };

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h4>Schedule</h4>
      <Slider {...sliderSettings}>
        {scheduleData?.map((item, index) => (
          <Days
            key={index}
            item={item}
            index={index}
            selectedDay={selectedDay}
            day={takeFirstChars(item?.availability?.day, 3)}
            date={takeFirstChars(item?.availability?.date, 2)}
            selectDay={selectDay}
          />
        ))}
      </Slider>
      <ChoseTime
        selectedTime={selectedTime}
        setSelectTime={setSelectTime}
        availableTime={selectedDay ? selectedDay : scheduleData[1]}
      />
    </div>
  );
};

export default Schedule;
