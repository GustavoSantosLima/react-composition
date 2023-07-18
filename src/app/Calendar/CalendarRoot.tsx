import { ReactNode } from "react";

interface CalendarRootProps {
  children: ReactNode;
}

export function CalendarRoot({ children }: CalendarRootProps) {
  return <div className="bg-black grid grid-cols-7 gap-[1px]">{children}</div>;
}
