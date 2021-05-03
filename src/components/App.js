import React, { useState } from "react";
import "./App.css";
import SlideShow from "./SlideShow";

const slide = [
  {
    image: "birds.png",
    audio: "birds.mp3",
    text: "This is bird",
  },
  {
    image: "cricket.jpg",
    audio: "cricket.mp3",
    text: "This is Cricket",
  },
  {
    image: "dog.jpg",
    audio: "dog.mp3",
    text: "This is Dog",
  },
  {
    image: "running.jpg",
    audio: "running.mp3",
    text: "This is bird",
  },
  {
    image: "sea.jpg",
    audio: "sea.mp3",
    text: "This is bird",
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
