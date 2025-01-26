import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Profile } from "./ui/Profile";
import { Badge } from "./ui/badge";
import { useContext } from "react";
import { Input } from "./ui/input";
import InfoContextProvider from "@/contexts/InfoContextProvider";
import { forwardRef } from "react";

const Display = forwardRef(function Display(_, ref) {
  const { info, setInfo } = useContext(InfoContextProvider);
  const { fullName, avatarUrl, registerDate, fileName, skills } = info;
  return (
    <Card className="dark w-1/3" ref={ref}>
      <CardHeader>
        <CardDescription className="bg-stone-900 font-medium text-center rounded">
          <Input
            value={fileName}
            className="focus-visible:border-none"
            onChange={({ target: { value } }) =>
              setInfo({ ...info, fileName: value.trim() })
            }
            onClick={(e) => e.target.select()}
            spellCheck={false}
            maxLength={25}
          />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center gap-3">
        <Profile url={avatarUrl} fullName={fullName} />
        <div className="">
          <CardTitle>{fullName}</CardTitle>
          <CardDescription className="mt-2 mb-4">
            {registerDate ? registerDate + " Days ago." : "Today."}
          </CardDescription>
          <div className="flex gap-2 flex-wrap">
            {skills.split(" ").map((skill) => {
              if (skill.length) {
                return (
                  <Badge
                    key={skill}
                    variant={"secondary"}
                    className={"pb-1 tracking-wider"}
                  >
                    {skill}
                  </Badge>
                );
              }
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

export default Display;
