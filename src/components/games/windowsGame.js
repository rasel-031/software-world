import "./games.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase";
import { useEffect, useState } from "react";
import {
  faCheck,
  faDownload,
  faShieldAlt,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function WindowsGame() {
  //latest windows app
  const [winItem, setWinItems] = useState([]);
  useEffect(() => {
    const myItems = firebase.database().ref("games").child("windowsGame");
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
  const [recWinItem, setRecWinItems] = useState([]);
  useEffect(() => {
    const myItems = firebase
      .database()
      .ref("games")
      .child("windowsGameRecommend");
    myItems.on("value", (snapshot) => {
      const dataItems = snapshot.val();
      const data = [];
      for (let id in dataItems) {
        data.push(dataItems[id]);
      }
      //console.log(snapshot.val());
      setRecWinItems(dataItems);
    });
  }, []);

  //See more or see less toggle button

  const [toggle, setToggle] = useState(false);

  return (
    <div className="games-views">
      <div className="games-carts">
        {winItem.map((data) => (
          <div className="games-cart-container">
            <div className="games-cart-img ">
              <img src={data.image} alt="" />
            </div>
            <div className="games-name">
              <h2>{data.name}</h2>
              <h4>
                <FontAwesomeIcon icon={faCog} />
                &nbsp;
                {data.genre}
              </h4>
              <div className="games-cart-title">
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
              <div className="games-cart-title2">
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
              <hr />
              <div className="games-cart-description">
                <p>
                  {toggle ? data.description : data.description.slice(0, 200)}
                  <span
                    className="games-cart-toggle"
                    onClick={() => setToggle(!toggle)}
                  >
                    &nbsp;&nbsp;{toggle ? "Show less" : "Read more"}
                  </span>
                </p>
              </div>
            </div>
            <div>
              <button
                className="games-cart-down-btn"
                onClick={(event) => window.open(data.link, "_blank")}
              >
                Free Download&nbsp;&nbsp;|&nbsp;&nbsp;
                <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="games-recommend">
        <div className="games-recommend-cart2">
          <h3>Recommend for windows</h3>
          <hr />
          <div className="games-recommend-cont">
            {recWinItem.map((data) => (
              <>
                <div className="games-recommend-cart">
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
    </div>
  );
}

export default WindowsGame;
