import "./styles.css";
import { useState } from "react";
import Calendar, { CalendarDayHeader } from "./Calender";

const RunCalender = () => {
  const [yearAndMonth, setYearAndMonth] = useState([2022, 3]);
  return (
    <div className="App">
      <Calendar
        yearAndMonth={yearAndMonth}
        onYearAndMonthChange={setYearAndMonth}
        renderDay={(calendarDayObject) => (
          <div>
            <CalendarDayHeader calendarDayObject={calendarDayObject} />
          </div>
        )}
      />
    </div>
  );
}
export default RunCalender;