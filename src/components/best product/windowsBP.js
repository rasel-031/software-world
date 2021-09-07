import "./bestProducts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "firebase";
import { useEffect, useState } from "react";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

function WindowsBP() {
  //latest windows app
  const [winItem, setWinItems] = useState([]);
  useEffect(() => {
    const myItems = firebase.database().ref("bestProducts").child("windowsBP");
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

  return (
    <>
      {winItem.map((data) => (
        <div className="BP-cart-container">
          <div className="BP-cart-img ">
            <img src={data.image} alt="" />
          </div>
          <div className="BP-cart2">
            <div className="BP-cart-img-icon">
              <img src={data.icon} alt="" />
            </div>
            <div className="BP-cart-title">
              <h4>{data.name}</h4>
              <p>{data.genre}</p>
              <span>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </span>
            </div>
          </div>
          <div className="BP-cart-down-btn">
            <button onClick={(event) => window.open(data.link, "_blank")}>
              Download Now
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default WindowsBP;
