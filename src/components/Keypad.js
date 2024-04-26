// Code Keypad Component Here

function Keypad() {
  const handleInputChange = () => {
    console.log("Entering password...");
  };
  return <input type="password" onChange={handleInputChange} />;
}

export default Keypad;
