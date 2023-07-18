import { ReactNode } from "react";

interface CalendarWeekProps {
  children: ReactNode;
}

export function CalendarWeek({ children }: CalendarWeekProps) {
  return <div className="flex">{children}</div>;
}
