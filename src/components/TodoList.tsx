'use client';

import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { ScrollArea } from "./ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function TodoList() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <ScrollArea className="h-full w-full rounded-lg border p-4 overflow-hidden">
      <h1>Todo List</h1>
      <Popover>
        <PopoverTrigger render={
          <Button className="my-2 w-full cursor-pointer">
            <CalendarIcon />
            {date ? date.toDateString() : 'Calendar'}
          </Button>
        } />
        <PopoverContent className="w-full h-full p-0 m-0">
           <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border"
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
      <FieldGroup>
        {Array.from({ length: 10 }, (_, index) => (
          <FieldLabel key={index}>
            <Field orientation="horizontal" className="items-center">
              <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" className="self-center" />
              <FieldContent>
                <FieldDescription>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldLabel>
        ))}
      </FieldGroup>
    </ScrollArea>
  );
}