import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarCard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Calendar</h2>

      <div className="flex justify-center">
        <Calendar onChange={setDate} value={date} />
      </div>

      <div className="mt-5 border-t pt-4">
        <p className="text-sm text-gray-500">Selected Date</p>
        <p className="font-semibold text-gray-800">{date.toDateString()}</p>
      </div>
    </div>
  );
}

export default CalendarCard;
