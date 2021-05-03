import React, { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";

import "./SlideShow.css";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function SlideShow({ slide, setcurrentId, currentId }) {
  // useEffect(() => {
  //   const audio = new Audio(`audio/${slide.audio}`);
  //   audio.play();
  // });

  return (
    <div className="slideShow">
      <div className="slideShow__button__container">
        <ArrowBackIosIcon
          className="slideShow__nav"
          onClick={() => {
            if (currentId <= 0) {
              currentId = 4;
            } else {
              currentId--;
            }
            setcurrentId(currentId);
          }}
        />
      </div>

      <img src={`image/${slide.image}`} alt="" />
      <div className="text__overlay">
        <p>{slide.text}</p>
      </div>

      <ReactAudioPlayer src={`audio/${slide.audio}`} autoPlay />

      <div className="slideShow__button__container">
        <ArrowForwardIosIcon
          className="slideShow__nav"
          onClick={(e) => {
            if (currentId >= 4) {
              currentId = 0;
            } else {
              currentId++;
            }
            setcurrentId(currentId);
          }}
        />
      </div>
    </div>
  );
}

export default SlideShow;
