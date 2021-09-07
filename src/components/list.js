import firebase from "../database/firebase";
import { useEffect, useState } from "react";
import React from "react";

function List() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const myItems = firebase.database().ref("iteams");
    myItems.on("value", (snapshot) => {
      const dataItems = snapshot.val();
      const data = [];
      for (let id in dataItems) {
        data.push(dataItems[id]);
      }
      setItems(data);
    });
  }, []);
  return (
    <div>
      <h1>hiiii</h1>
      {items.map((num) => (
        <div>
          <a href={num.name} key={num.id}>
            {num.title}
          </a>
          <br />
          <img src={num.url} alt="rasel pic" />
        </div>
      ))}
      <h3>kkkkkkkk</h3>
    </div>
  );
}

export default List;
