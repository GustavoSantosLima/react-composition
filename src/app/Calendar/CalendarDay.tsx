interface CalendarDayProps {
  day: any;
}

export function CalendarDay({ day }: CalendarDayProps) {
  return (
    <div className="bg-white w-12 h-12 flex items-center justify-center">
      {day}
    </div>
  );
}
