import React, { useState } from "react";
import Animation from "./component/animation";
import Button from "./component/Button";
const App = () => {
  // Track whether the dropdown is open or not
  const [openDropdown, setOpenDropdown] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setOpenDropdown((prevState) => !prevState);
  };

  return (
    <div className="app-container flex flex-col items-center pb-10">
      <Animation />
      <Button />
    </div>
  );
};

export default App;
