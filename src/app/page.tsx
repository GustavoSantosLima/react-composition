"use client";

import moment from "moment";
import { Calendar } from "./Calendar";
import { useState } from "react";

export default function Home() {
  const [dayNow, setDayNow] = useState(Number(moment().format("D")));
  const [daysMonth, setDaysMonth] = useState(Number(moment().daysInMonth()));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Calendar.Root>
        {Array.from({ length: dayNow - 1 }, (_, key) => (
          <Calendar.Day
            key={key}
            day={moment()
              .subtract(dayNow - (key + 1), "days")
              .format("D")}
          />
        ))}

        <Calendar.Day day={dayNow} />

        {Array.from({ length: daysMonth - dayNow }, (_, key) => (
          <Calendar.Day
            key={key}
            day={moment()
              .add(key + 1, "days")
              .format("D")}
          />
        ))}
      </Calendar.Root>
    </main>
  );
}
