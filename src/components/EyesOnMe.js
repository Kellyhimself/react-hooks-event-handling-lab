// Code EyesOnMe Component Here
import React from "react";

// This is a React component called EyesOnMe
const EyesOnMe = () => {
  // This is a function that will be called when the button is focused
  const handleFocus = () => {
    console.log("Good!");
  };

  // This is a function that will be called when the button is blurred (loses focus)
  const handleBlur = () => {
    console.log("Hey! Eyes on me!");
  };

  // This is the button element
  return (
    <button
      // This is the event listener for the focus event
      onFocus={handleFocus}
      // This is the event listener for the blur event
      onBlur={handleBlur}
    >
      Eyes on me
    </button>
  );
};

// Export the EyesOnMe component so it can be used in other parts of the application
export default EyesOnMe;
