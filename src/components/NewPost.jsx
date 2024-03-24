import React, { useEffect, useRef, useState } from "react";
import { Button } from "reactstrap";
import "./NewPost.css";
import * as faceapi from "face-api.js";

function NewPost({ image }) {
  const { url, width, height } = image;
  const [faces, setFaces] = useState([]);
  const [inputText, setInputText] = useState("");
  const [friends, setFriends] = useState([]);

  const imgRef = useRef();
  const canvasRef = useRef();

  // const handleText = (e) => {
  //   setInputText(e.target.value);
  // };

  const canvasStyle = {
    border: "4px solid yellow",
  };

  const postStyle = {
    width: "190px",
  };

  const handleImage = async () => {
    const detections = await faceapi.detectAllFaces(
      imgRef.current,
      new faceapi.TinyFaceDetectorOptions()
    );

    setFaces(detections.map((d) => Object.values(d.box)));

    // canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(imgRef.current);
    // faceapi.matchDimensions(canvasRef.current, {
    //   width,
    //   height,
    // });

    // const resized = faceapi.resizeResults(detections, {
    //   width,
    //   height,
    // });

    // faceapi.draw.drawDetections(canvasRef.current, resized);
    // faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
    // faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
  };

  const enter = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineWidth = 5;
    ctx.strokeStyle = "yellow";
    faces.map((face) => ctx.strokeRect(...face));
  };

  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      ])
        .then(handleImage)
        .catch((e) => console.log(e));
    };

    imgRef.current && loadModels();
  }, []);

  const addFriend = (e) => {
    setFriends((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(friends);
  return (
    <div>
      {/* ================================ Next page code start ================================ */}

      <div className="row" id="newpostContainer">
        <div className="col-9 newpostContainer1">
          <img
            crossOrigin="anonymous"
            src={url}
            className="newpostImage"
            alt="New Post"
            width={width}
            height={height}
            ref={imgRef}
          />

          <canvas
            className="newpostCanvas"
            style={canvasStyle}
            width={width}
            height={height}
            ref={canvasRef}
            onMouseEnter={enter}
          />

          {faces.map((face, i) => (
            <input
              type="text"
              id="inputValue"
              className="canvasInput form-control form-control-sm"
              placeholder="Tag a friend"
              key={i}
              name={`input${i}`}
              onChange={addFriend}
              value={inputText}
              style={{ left: face[0], top: face[1] + face[3] + 5, postStyle }}
            />
          ))}
        </div>
        <div className="col-3 newpostContainer2">
          <div className="newpostContainer3">
            <h1 className="newpostHeading">Share Your Post</h1>
            <input
              className="form-control form-control-lg"
              id="newpostInput"
              type="text"
              placeholder="What's on your mind?"
            ></input>

            {friends && (
              <span className="friends">
                With <span className="name">{Object.values(friends) + " "}</span>
              </span>
            )}

            <Button className="btn" id="newpostButton">
              Send
            </Button>
          </div>
        </div>
      </div>

      {/* ================================ Next page code end ================================ */}
    </div>
  );
}

export default NewPost;
