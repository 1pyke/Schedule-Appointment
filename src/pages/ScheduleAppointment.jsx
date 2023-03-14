import React, { useState, useEffect, useMemo } from "react";
import ScheduleAppointmentCard from "../components/scheduleAppointment/ScheduleAppointmentCard";
import axios from "axios";
import Loader from "../components/scheduleAppointment/Loader";

const ScheduleAppointment = () => {
  const [appointmentData, setAppointmentData] = useState(null);

  const memoizedAppointmentData = useMemo(() => {
    return appointmentData;
  }, [appointmentData]);

  useEffect(() => {
    const fetchAppointmentData = async () => {
      try {
        const response = await axios.get(
          "https://cura-front-end-test.herokuapp.com/"
        );
        setAppointmentData(JSON.parse(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchAppointmentData();
  }, []);

  if (!memoizedAppointmentData) {
    return <Loader />;
  }

  return (
    <section>
      <ScheduleAppointmentCard appointmentData={memoizedAppointmentData} />
    </section>
  );
};

export default ScheduleAppointment;
