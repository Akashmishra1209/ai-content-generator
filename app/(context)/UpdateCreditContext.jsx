import { createContext } from "react";

// You can provide a default value here, e.g., an empty object or default function
export const UpdateCreditContext = createContext({
  UpdateCreditContext: null, // Default value (function or object, based on your logic)
  setUpdateCreditContext: () => {}, // Default empty function (can be replaced when provided)
});
