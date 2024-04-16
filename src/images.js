import React from "react";
import "./dictionary.css";

export default function Images(props) {
  function showPopUp() {
    let popUpImg = document.querySelector(".pop-up-image");
    popUpImg.style.display = "block";
  }

  if (props.image) {
    console.log(props.image);
    return (
      <div className="images-main-div">
        <div className="row  img-div">
          {props.image.photos.map(function (photos, index) {
            return (
              <div className="col-4 mt-3 img" key={index}>
                <img
                  onClick={showPopUp}
                  className="img-fluid"
                  alt={photos.alt}
                  src={photos.src.landscape}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
