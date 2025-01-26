/* eslint-disable react/prop-types */
import { useState } from "react";
import InfoContextProvider from "./InfoContextProvider";

let initInfo = {
  fullName: "Pooya Samimi",
  skills: "React TypeScript Git shadcn/ui",
  avatarUrl: null,
  fileName: "File Name",
  registerDate: 0,
};
export default function InfoProvider({ children }) {
  const [info, setInfo] = useState(initInfo);

  return (
    <InfoContextProvider.Provider value={{ info, setInfo, initInfo }}>
      {children}
    </InfoContextProvider.Provider>
  );
}
