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

export default function Form({ onSaveImage }) {
  const { info, setInfo, initInfo } = useContext(InfoContextProvider);
  const { fullName, skills } = info;
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
  return (
    <Card className="dark w-1/2 max-w-lg">
      <CardHeader>
        <CardTitle>Resume Creator</CardTitle>
        <CardDescription>Export your snap-shot in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                defaultValue={fullName}
                onChange={inputHandler}
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
                defaultValue={skills}
                onChange={inputHandler}
                spellCheck={false}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="avatar">Avatar</Label>
              <Input
                id="avatar"
                type="file"
                accept=".jpg , .jpeg , .png"
                onChange={avatarHandler}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="register-data">Register Date</Label>
              <DatePicker id="register-data" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setInfo({ ...initInfo })}>
          Reset
        </Button>
        <Button onClick={onSaveImage}>Export</Button>
      </CardFooter>
    </Card>
  );
}
