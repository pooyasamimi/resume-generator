/* eslint-disable react/prop-types */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Profile({ url, fullName }) {
  const f = fullName.split(" ").map((word) => (word[0] ? word[0] : ""));
  console.log(f);

  return (
    <Avatar className="w-32 h-32">
      <AvatarImage src={url} alt="avatar" />
      <AvatarFallback>{f.map((fl) => `${fl.toUpperCase()} `)}</AvatarFallback>
    </Avatar>
  );
}
