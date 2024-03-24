import "./App.css";
import { Button } from "reactstrap";
import Navbar from "./components/Navbar";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import NewPost from "./components/NewPost";

function App() {
  const [file, setFile] = useState();
  const [image, setimage] = useState();

  const inputStyle = {
    display: "none",
  };

  useEffect(() => {
    const getImage = () => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setimage({
          url: img.src,
          width: img.width,
          height: img.height,
        });
      };
    };

    file && getImage();
  }, [file]);

  return (
    <div>
      <Navbar />
      {image ? (
        <NewPost image={image} />
      ) : (
        <div className="bodyContainer">
          <div className="bodyContent row">
            <div className="bodyImage col-3">
              <img
                className="profileImage"
                src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202203/face-600x900.png?itok=4wm2x8C2"
                alt="Profile Image"
              />
            </div>
            <div className="bodyInput col-9">
              <input
                className="imageInput"
                type="text"
                placeholder="What's on your mind?"
              />
              <hr className="inputBorder" />
              <label htmlFor="fileInput">
                <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <rect fill="#fff" height="60" rx="10" width="60" />
                  <path
                    d="M48,48H12a4,4,0,0,1-4-4V16a4,4,0,0,1,4-4H26l4,4H48a4,4,0,0,1,4,4V44A4,4,0,0,1,48,48Z"
                    fill="#eff28d"
                  />
                  <path
                    d="M48,49.5H12A5.506,5.506,0,0,1,6.5,44V16A5.506,5.506,0,0,1,12,10.5H26a1.5,1.5,0,0,1,1.061.439l3.56,3.561H48A5.506,5.506,0,0,1,53.5,20V44A5.506,5.506,0,0,1,48,49.5Zm-36-36A2.5,2.5,0,0,0,9.5,16V44A2.5,2.5,0,0,0,12,46.5H48A2.5,2.5,0,0,0,50.5,44V20A2.5,2.5,0,0,0,48,17.5H30a1.5,1.5,0,0,1-1.061-.439L25.379,13.5Z"
                    fill="#f29580"
                  />
                  <rect
                    fill="#eff28d"
                    height="26"
                    rx="4"
                    width="44"
                    x="8"
                    y="22"
                  />
                  <path
                    d="M48,49.5H12A5.506,5.506,0,0,1,6.5,44V26A5.506,5.506,0,0,1,12,20.5H48A5.506,5.506,0,0,1,53.5,26V44A5.506,5.506,0,0,1,48,49.5Zm-36-26A2.5,2.5,0,0,0,9.5,26V44A2.5,2.5,0,0,0,12,46.5H48A2.5,2.5,0,0,0,50.5,44V26A2.5,2.5,0,0,0,48,23.5Z"
                    fill="#f2bf80"
                  />
                </svg>
              </label>
              <input
                id="fileInput"
                type="file"
                style={inputStyle}
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />
              &nbsp; &nbsp;&nbsp;
              <a
                target="_blank"
                href="https://www.google.com/maps/@28.5826502,77.3704737,14z?entry=ttu"
              >
                <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <rect fill="#fff" height="60" rx="10" width="60" />
                  <rect
                    fill="#c1f7fd"
                    height="40"
                    rx="6"
                    transform="translate(60 64) rotate(180)"
                    width="40"
                    x="10"
                    y="12"
                  />
                  <path
                    d="M10,47.5a1.5,1.5,0,0,1-1.061-2.561l30-30a1.5,1.5,0,0,1,2.122,2.122l-30,30A1.5,1.5,0,0,1,10,47.5Z"
                    fill="#f2bf80"
                  />
                  <path
                    d="M50,47.5a1.5,1.5,0,0,1-1.061-.439l-30-30a1.5,1.5,0,0,1,2.122-2.122l30,30A1.5,1.5,0,0,1,50,47.5Z"
                    fill="#f2bf80"
                  />
                  <path
                    d="M44,53.5H16A7.508,7.508,0,0,1,8.5,46V18A7.508,7.508,0,0,1,16,10.5H44A7.508,7.508,0,0,1,51.5,18V46A7.508,7.508,0,0,1,44,53.5Zm-28-40A4.505,4.505,0,0,0,11.5,18V46A4.505,4.505,0,0,0,16,50.5H44A4.505,4.505,0,0,0,48.5,46V18A4.505,4.505,0,0,0,44,13.5Z"
                    fill="#7bcdd1"
                  />
                  <path
                    d="M18,20a12,12,0,1,1,22.683,5.448H40.7l-8.913,17.46h-.009a1.985,1.985,0,0,1-3.546,0h-.009l-8.913-17.46h.012A11.934,11.934,0,0,1,18,20Zm12,4a4,4,0,1,0-4-4A4,4,0,0,0,30,24Z"
                    fill="#f2c4bb"
                  />
                  <path
                    d="M30,45.5a3.481,3.481,0,0,1-3.009-1.728,1.659,1.659,0,0,1-.11-.182L17.969,26.13a1.417,1.417,0,0,1-.075-.175A13.332,13.332,0,0,1,16.5,20a13.5,13.5,0,0,1,27,0,13.348,13.348,0,0,1-1.4,5.96,1.345,1.345,0,0,1-.074.17L33.118,43.59a1.436,1.436,0,0,1-.109.182A3.482,3.482,0,0,1,30,45.5Zm-.519-3.415a1.56,1.56,0,0,1,.081.138.484.484,0,0,0,.876,0c.025-.047.051-.092.08-.136l8.758-17.159a1.64,1.64,0,0,1,.071-.161A10.385,10.385,0,0,0,40.5,20a10.5,10.5,0,0,0-21,0,10.379,10.379,0,0,0,1.153,4.766,1.441,1.441,0,0,1,.073.166ZM30,25.5A5.5,5.5,0,1,1,35.5,20,5.506,5.506,0,0,1,30,25.5Zm0-8A2.5,2.5,0,1,0,32.5,20,2.5,2.5,0,0,0,30,17.5Z"
                    fill="#f28080"
                  />
                  <path
                    d="M18,21.5A1.5,1.5,0,0,1,16.5,20,13.515,13.515,0,0,1,30,6.5a1.5,1.5,0,0,1,0,3A10.512,10.512,0,0,0,19.5,20,1.5,1.5,0,0,1,18,21.5Z"
                    fill="#ffafc5"
                  />
                </svg>
              </a>
              &nbsp; &nbsp;&nbsp;
              <a
                target="_blank"
                href="https://calendar.google.com/calendar/u/0/r?pli=1"
              >
                <svg
                  height="24"
                  version="1.1"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="translate(0 -1028.4)">
                    <path
                      d="m5 1032.4c-1.1046 0-2 0.9-2 2v14c0 1.1 0.8954 2 2 2h6 2 6c1.105 0 2-0.9 2-2v-14c0-1.1-0.895-2-2-2h-6-2-6z"
                      fill="#bdc3c7"
                    />
                    <path
                      d="m5 3c-1.1046 0-2 0.8954-2 2v14c0 1.105 0.8954 2 2 2h6 2 6c1.105 0 2-0.895 2-2v-14c0-1.1046-0.895-2-2-2h-6-2-6z"
                      fill="#ecf0f1"
                      transform="translate(0 1028.4)"
                    />
                    <path
                      d="m5 3c-1.1046 0-2 0.8954-2 2v3 1h18v-1-3c0-1.1046-0.895-2-2-2h-6-2-6z"
                      fill="#e74c3c"
                      transform="translate(0 1028.4)"
                    />
                    <path
                      d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z"
                      fill="#c0392b"
                      transform="translate(.5 1028.4)"
                    />
                    <path
                      d="m6 1c-0.5523 0-1 0.4477-1 1v3c0 0.5523 0.4477 1 1 1s1-0.4477 1-1v-3c0-0.5523-0.4477-1-1-1z"
                      fill="#bdc3c7"
                      transform="translate(0 1028.4)"
                    />
                    <path
                      d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z"
                      fill="#c0392b"
                      transform="translate(12.5 1028.4)"
                    />
                    <g fill="#bdc3c7">
                      <path d="m18 1029.4c-0.552 0-1 0.4-1 1v3c0 0.5 0.448 1 1 1s1-0.5 1-1v-3c0-0.6-0.448-1-1-1z" />
                      <path d="m5 1039.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z" />
                      <path d="m5 1042.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z" />
                      <path d="m5 1045.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z" />
                    </g>
                    <path
                      d="m40 18a6 6 0 1 1 -12 0 6 6 0 1 1 12 0z"
                      fill="#34495e"
                      transform="matrix(.82491 0 0 .82491 -9.5468 1032.1)"
                    />
                    <path
                      d="m18.5 14c-0.276 0-0.5 0.224-0.5 0.5v0.5 3 0.5c0 0.276 0.224 0.5 0.5 0.5h0.5 2 0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5-2v-3-0.5c0-0.276-0.224-0.5-0.5-0.5z"
                      fill="#bdc3c7"
                      transform="translate(0 1028.4)"
                    />
                    <path
                      d="m18.5 1041.4c-3.038 0-5.5 2.4-5.5 5.5 0 3 2.462 5.5 5.5 5.5s5.5-2.5 5.5-5.5c0-3.1-2.462-5.5-5.5-5.5zm0 1c2.485 0 4.5 2 4.5 4.5 0 2.4-2.015 4.5-4.5 4.5s-4.5-2.1-4.5-4.5c0-2.5 2.015-4.5 4.5-4.5z"
                      fill="#7f8c8d"
                    />
                    <path
                      d="m27 17.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5 0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5z"
                      fill="#95a5a6"
                      transform="translate(-8 1029.4)"
                    />
                  </g>
                </svg>
              </a>
              &nbsp; &nbsp;&nbsp;
              <Button className="btn" id="inputButton">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
