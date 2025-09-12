/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePicker } from "./ui/DatePicker";
import { useContext } from "react";
import InfoContextProvider from "@/contexts/InfoContextProvider";
import { useRef } from "react";
import { useState } from "react";

export default function Form({ onSaveImage }) {
  const fileRef = useRef(null);
  const fullNameRef = useRef(null);
  const { info, setInfo, initInfo } = useContext(InfoContextProvider);
  const { fullName, skills } = info;

  //نگهداری استیت فرزند در کامپوننت پدر برای راحتی
  const [date, setDate] = useState(new Date());

  function inputHandler({ target }) {
    setInfo({
      ...info,
      [target.id == "name" ? "fullName" : "skills"]: target.value,
    });
  }
  function avatarHandler({ target }) {
    const file = target.files[0];
    if (file) {
      const profURL = URL.createObjectURL(file);
      setInfo({ ...info, avatarUrl: profURL });
    } else {
      setInfo({ ...info, avatarUrl: null });
    }
  }
  function fullNameBlurHandler() {
    if (!fullName) {
      setInfo((prev) => ({ ...prev, fullName: "💜🍒" }));
    }
  }
  function resetHandler() {
    setInfo({ ...initInfo });
    fileRef.current.value = null;
    setDate(new Date());
  }
  return (
    <Card className="dark w-5/6 sm:w-1/2 sm:max-w-lg">
      <CardHeader>
        <CardTitle>Resume Generator</CardTitle>
        <CardDescription>Export your snap-shot in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                ref={fullNameRef}
                id="name"
                placeholder="Enter your full name"
                onInput={inputHandler}
                onBlur={fullNameBlurHandler}
                value={fullName}
                onClick={(e) => e.target.select()}
                spellCheck={false}
                maxLength={25}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="skills">Skills</Label>
              <Input
                id="skills"
                placeholder="Put your skills with space"
                value={skills}
                onInput={inputHandler}
                onClick={(e) => e.target.select()}
                spellCheck={false}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="avatar">Avatar</Label>
              <Input
                ref={fileRef}
                id="avatar"
                type="file"
                accept=".jpg , .jpeg , .png"
                onChange={avatarHandler}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="register-data">Register Date</Label>
              <DatePicker id="register-data" date={date} setDate={setDate} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={resetHandler}>
          Reset
        </Button>
        <Button onClick={onSaveImage}>Export</Button>
      </CardFooter>
    </Card>
  );
}
