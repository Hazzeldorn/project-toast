import React from "react";

function useKeydown(key, callback) {
  // guard clauses
  if (typeof key !== "string" || key.length < 1) {
    throw new Error("The key must be a string with at least one character");
  }

  if (typeof callback !== "function") {
    throw new Error("The callback must be a function");
  }

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === key) {
        callback(event);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);
}

export default useKeydown;
