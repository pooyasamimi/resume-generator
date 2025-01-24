"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useContext } from "react";
import InfoContextProvider from "@/contexts/InfoContextProvider";
import { useEffect } from "react";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
export function DatePicker({ id }) {
  const { info, setInfo } = useContext(InfoContextProvider);
  const [date, setDate] = useState(new Date());



  useEffect(() => {
    const registerDate = date
      ? Math.ceil((new Date() - date) / 1000 / 60 / 60 / 24)-1
      : setDate(new Date());
    setInfo((prevInfo) => ({ ...prevInfo, registerDate }));
  }, [date, setInfo]);

  return (
    <Popover>
      <PopoverTrigger asChild id={id}>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 dark">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
