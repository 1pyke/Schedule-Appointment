import React, { useState } from "react";
import Card from "./reusableComponents/Card";
import Fees from "./fees/Fees";
import Schedule from "./Schedule/Schedule";
import classes from "./ScheduleAppointmentCard.module.css";
import swal from "sweetalert2";

const ScheduleAppointmentCard = ({ appointmentData }) => {
  const [selectDayForAppointment, setSelectDayForAppointment] = useState(null);
  const [selectDateForAppointment, setSelectDateForAppointment] =
    useState(null);
  const handelBookApointment = () => {
    swal.fire({
      position: "center",
      icon: "success",
      title: "Booked Appointment Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <>
      <Card>
        <Fees fees={appointmentData?.rating} />
        <Schedule
          setSelectDayForAppointment={setSelectDayForAppointment}
          setSelectDateForAppointment={setSelectDateForAppointment}
          scheduleData={appointmentData?.schedule}
        />
      </Card>
      <div className={classes.buttonContainer}>
        <button
          onClick={
            selectDateForAppointment && selectDayForAppointment
              ? handelBookApointment
              : null
          }
          className={
            selectDateForAppointment && selectDayForAppointment
              ? classes.bookAppoitnemntButton
              : classes.unAvaliableBookAppoitnemntButton
          }
        >
          Book Appointment
        </button>
      </div>
    </>
  );
};

export default ScheduleAppointmentCard;
