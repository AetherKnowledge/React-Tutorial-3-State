import { useState } from "react";

const EventListener = () => {
  const [message, setMessage] = useState("No action yet");

  function handleClick() {
    setMessage("I was clicked!");
    console.log("I was clicked!");
  }

  function handleMouseOver() {
    setMessage("I was hovered!");
    console.log("I was hovered!");
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4 bg-zinc-950 rounded-lg shadow-md p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Event Listener Component</h2>
      <p className="text-gray-600">
        <strong>Event listeners</strong> let your React app respond to user actions, like clicks or mouse movements. You can think of them as your app's way of "listening" for things the user does, and then running code in response.<br /><br />
        For example, when you click the button or hover over the image, this component updates the message and logs the action. This makes your app interactive and dynamic.<br /><br />
        <em>Event listeners are like sensors that help your app react to the world!</em>
      </p>
      <img
        className="w-160 h-90 block"
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
        onMouseOver={handleMouseOver}
      />
      <button className="bg-blue-500 text-white p-2 px-4 rounded text-lg font-semibold" onClick={handleClick}>Click me</button>
      <p className="text-lg">Last action: {message}</p>
    </div>
  );
};

export default EventListener;
