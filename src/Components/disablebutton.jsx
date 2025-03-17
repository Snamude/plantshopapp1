import React, { useState } from 'react';

function MyComponent() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClick = () => {
    setIsButtonClicked(true);
    // Perform any other actions needed after the click
  };

  return (
    <button onClick={handleClick} disabled={isButtonClicked}>
      {isButtonClicked ? 'Clicked!' : 'Click me'}
    </button>
  );
}

export default MyComponent;