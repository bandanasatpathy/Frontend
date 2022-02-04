import React, { createContext } from "react";

const UserContext = createContext({ userData: "", auth: false }); //initial values

export { UserContext };