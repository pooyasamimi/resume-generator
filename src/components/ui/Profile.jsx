/* eslint-disable react/prop-types */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useMemo } from "react";


export function Profile({ url, fullName }) {
  const nameProccess = useMemo(() => {
    const emojiRegex = /^\p{Extended_Pictographic}+$/u;
    return fullName.trim()
      ? fullName.split(" ").map((word) => {
          if (word) {
            if (emojiRegex.test(word)) {
              return [...word][0];
            } else return word[0]?.toUpperCase();
          } else return "";
        })
      : [];
  }, [fullName]);

  // useEffect(() => {
  //   console.log(nameProccess);

  //   if (!nameProccess.length) {
  //     setInfo((prev) => ({ ...prev, fullName: "🌶" }));
  //   }
  // }, [nameProccess, setInfo]);
  return (
    <Avatar className="w-32 h-32">
      <AvatarImage src={url} alt="avatar" />
      <AvatarFallback>{nameProccess.map((fl) => `${fl} `)}</AvatarFallback>
      {/* <AvatarFallback>{nameProccess.length? nameProccess.map((fl) => `${fl} `):'💕🌶'}</AvatarFallback> */}
    </Avatar>
  );
}
