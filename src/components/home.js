import "./home.css";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faCheck,
  faCogs,
  faDownload,
  faFireAlt,
  faShieldAlt,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase";
import { useEffect, useState } from "react";
import {
  faAndroid,
  faGooglePlay,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import About from "./about";

function Home() {
  //upcoming app
  const [item, setItems] = useState([]);
  useEffect(() => {
    const myItems = firebase.database().ref("home").child("upcoming");
    myItems.on("value", (snapshot) => {
      const dataItems = snapshot.val();
      const data = [];
      for (let id in dataItems) {
        data.push(dataItems[id]);
      }
      //console.log(snapshot.val());
      setItems(dataItems);
    });
  }, []);

  //latest windows app
  const [winItem, setWinItems] = useState([]);
  useEffect(() => {
    const myItems = firebase.database().ref("home").child("latestWindow");
    myItems.on("value", (snapshot) => {
      const dataItems = snapshot.val();
      const data = [];
      for (let id in dataItems) {
        data.push(dataItems[id]);
      }
      //console.log(snapshot.val());
      setWinItems(dataItems);
    });
  }, []);

  //top download windows app
  const [topWinItem, setTopWinItems] = useState([]);
  useEffect(() => {
    const myItems = firebase.database().ref("home").child("topDownWindows");
    myItems.on("value", (snapshot) => {
      const dataItems = snapshot.val();
      const data = [];
      for (let id in dataItems) {
        data.push(dataItems[id]);
      }
      //console.log(snapshot.val());
      setTopWinItems(dataItems);
    });
  }, []);

  //latest windows app
  const [androidItem, setAndroidItems] = useState([]);
  useEffect(() => {
    const myItems = firebase.database().ref("home").child("latestAndroid");
    myItems.on("value", (snapshot) => {
      const dataItems = snapshot.val();
      const data = [];
      for (let id in dataItems) {
        data.push(dataItems[id]);
      }
      //console.log(snapshot.val());
      setAndroidItems(dataItems);
    });
  }, []);

  //top download android app
  const [topAndItem, setTopAndItems] = useState([]);
  useEffect(() => {
    const myItems = firebase.database().ref("home").child("topDownAndroid");
    myItems.on("value", (snapshot) => {
      const dataItems = snapshot.val();
      const data = [];
      for (let id in dataItems) {
        data.push(dataItems[id]);
      }
      //console.log(snapshot.val());
      setTopAndItems(dataItems);
    });
  }, []);

  return (
    <div className="home-container">
      {/* For latest upcoming app start */}

      <div className="home-upcoming">
        <h3>
          <FontAwesomeIcon icon={faFireAlt} />
          &nbsp;Upcoming App
        </h3>
        <p>
          Release in Play Store&nbsp;
          <FontAwesomeIcon icon={faGooglePlay} />
        </p>
      </div>
      <div className="home-upcoming-app">
        {item.map((data) => (
          <div className="upcoming-cart">
            <div className="cart-container">
              <img src={data.image} alt="" />
              <h2>{data.name}</h2>
              <h3>{data.genre}</h3>
            </div>
            <hr />
            <div className="cart-footer">
              <p>
                <FontAwesomeIcon icon={faStar} />
                &nbsp;Free
              </p>
              <p>
                <FontAwesomeIcon icon={faCogs} />
                &nbsp;{data.category}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* For latest upcoming app end */}

      {/* For latest windows app start */}
      <div className="home-upcoming">
        <h3>
          <FontAwesomeIcon icon={faWindows} />
          &nbsp;Latest Windows App
        </h3>
        <p>
          You can get here&nbsp;
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </p>
      </div>
      <div className="home-windows-app">
        <div className="latest-windows-app-cart1">
          {winItem.map((data) => (
            <div className="windows-cart-container">
              <div className="windows-cart-img ">
                <img src={data.image} alt="" />
              </div>
              <div className="window-app-name">
                <h2>{data.name}</h2>
                <div className="windows-cart-title">
                  <h4>
                    <FontAwesomeIcon icon={faStar} />
                    &nbsp;Free&nbsp;&nbsp;&nbsp;
                  </h4>
                  <h4>
                    <FontAwesomeIcon icon={faCheck} />
                    &nbsp;In English&nbsp;&nbsp;&nbsp;
                  </h4>
                  <h4>Version:&nbsp;&nbsp;{data.version}</h4>
                </div>
                <div className="windows-cart-title2">
                  <h4>
                    <FontAwesomeIcon icon={faShieldAlt} />
                    &nbsp;Security Status&nbsp;&nbsp;&nbsp;
                  </h4>
                  <h4>
                    (<FontAwesomeIcon icon={faUser} />
                    &nbsp;
                    {data.download})
                  </h4>
                </div>
              </div>
              <div>
                <button
                  className="windows-cart-down-btn"
                  onClick={(event) => window.open(data.link, "_blank")}
                >
                  Free Download&nbsp;&nbsp;|&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faDownload} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="latest-windows-app-cart2">
          <h3>Top downloads</h3>
          <hr />
          <div className="windows-top-down-cont">
            {topWinItem.map((data) => (
              <>
                <div className="windows-top-down-cart">
                  <img src={data.image} alt="" />
                  &nbsp;&nbsp;&nbsp;
                  <h4>{data.name}</h4>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>
      </div>
      {/* For latest windows app end*/}

      {/* For latest android app start */}
      <div className="home-upcoming">
        <h3>
          <FontAwesomeIcon icon={faAndroid} />
          &nbsp;Latest Android App
        </h3>
        <p>
          You can get Play Store&nbsp;
          <FontAwesomeIcon icon={faGooglePlay} />
        </p>
      </div>
      <div className="home-android-app">
        <div className="latest-android-app-cart1">
          {androidItem.map((data) => (
            <div className="android-cart-container">
              <div className="android-cart-img">
                <img src={data.image} alt="" />
              </div>
              <div className="android-cart-title">
                <h2>{data.name}</h2>
                <h4>
                  <FontAwesomeIcon icon={faStar} />
                  &nbsp;Free
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCheck} />
                  &nbsp;In English
                </h4>
                <h4>Version:&nbsp;&nbsp;{data.version}</h4>
                <h4>
                  <FontAwesomeIcon icon={faShieldAlt} />
                  &nbsp;Security Status&nbsp;(
                  <FontAwesomeIcon icon={faUser} />
                  &nbsp;
                  {data.download})
                </h4>
              </div>
              <div>
                <button
                  className="android-cart-down-btn"
                  onClick={(event) => window.open(data.link, "_blank")}
                >
                  Free Download&nbsp;&nbsp;|&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faDownload} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="latest-android-app-cart2">
          <h3>Top downloads</h3>
          <hr />
          <div className="android-top-down-cont">
            {topAndItem.map((data) => (
              <>
                <div className="android-top-down-cart">
                  <img src={data.image} alt="" />
                  &nbsp;&nbsp;&nbsp;
                  <h4>{data.name}</h4>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>
      </div>
      {/* For latest android app end*/}

      {/* About US */}
      <div className="about">
        <About />
      </div>
    </div>
  );
}

export default Home;
