/* eslint-disable react/prop-types */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import InfoContextProvider from "@/contexts/InfoContextProvider";
import { useMemo } from "react";
import { useEffect } from "react";
import { useContext } from "react";

export function Profile({ url, fullName }) {
  const { setInfo } = useContext(InfoContextProvider);
  const nameProccess = useMemo(() => {
    const emojiRegex = /^\p{Extended_Pictographic}+$/u;
    return fullName
      ? fullName.split(" ").map((word) => {
          if (word) {
            if (emojiRegex.test(word)) {
              return [...word][0];
            } else return word[0]?.toUpperCase();
          }
        })
      : [];
  }, [fullName]);
  useEffect(() => {
    console.log(nameProccess);

    if (!nameProccess.length) {
      setInfo((prev) => ({ ...prev, fullName: "🖕🌶" }));
    }
  }, [nameProccess, setInfo]);
  return (
    <Avatar className="w-32 h-32">
      <AvatarImage src={url} alt="avatar" />
      <AvatarFallback>{nameProccess.map((fl) => `${fl} `)}</AvatarFallback>
    </Avatar>
  );
}
