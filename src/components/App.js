import React, { useState } from "react";
import "./App.css";
import SlideShow from "./SlideShow";

const slide = [
  {
    image: "birds.png",
    audio: "birds.mp3",
  },
  {
    image: "cricket.jpg",
    audio: "cricket.mp3",
  },
  {
    image: "dog.jpg",
    audio: "dog.mp3",
  },
  {
    image: "running.jpg",
    audio: "running.mp3",
  },
  {
    image: "sea.jpg",
    audio: "sea.mp3",
  },
];

function App() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="app">
      <SlideShow
        slide={slide[current]}
        setcurrentId={setCurrent}
        currentId={current}
      />
    </div>
  );
}

export default App;
