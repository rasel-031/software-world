import "./articles.css";
import "../about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faCalendarAlt,
  faNewspaper,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase";
import { useEffect, useState } from "react";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import About from "../about";
import { useInView } from "react-intersection-observer";

function Articles() {
  //articles data
  const [articlesItem, setArticlesItems] = useState([]);
  useEffect(() => {
    const myItems = firebase.database().ref("articles").child("posts");
    myItems.on("value", (snapshot) => {
      const dataItems = snapshot.val();
      const data = [];
      for (let id in dataItems) {
        data.push(dataItems[id]);
      }
      //console.log(snapshot.val());
      setArticlesItems(dataItems);
    });
  }, []);

  //See more or see less toggle button
  const [toggle, setToggle] = useState(false);
  //react intercestion observer
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <div className="articles">
      <div className="articles-navbar">
        <h3>
          <FontAwesomeIcon icon={faNewspaper} />
          &nbsp;Articles
        </h3>
        <p>
          The more you read, the more you learn&nbsp;
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </p>
      </div>
      <div className="articles-container">
        <div className="articles-left-container">
          <div
            id="articles-sticky-mobile"
            className={
              inView ? "articles-sticky-false" : "articles-sticky-true"
            }
          >
            <div className="article-writter">
              <h4>Rahajul Amin</h4>
              <p>
                I am a contributor and writter in all posts. I am also CEO of
                the RT Soft World company. I am a android app and game
                developer. I made many videos to help people. Please, subscribe
                my youtube channel.
              </p>
              <p>@rahajuamin</p>
              <a href="#github">www.github.com/rahajulamin</a>
              <br />
              <a href="#linkedin">www.linkedin.com/rahajulamin</a>
              <br />
              <br />
              <button
                onClick={(event) =>
                  window.open("https://www.youtube.com", "_blank")
                }
              >
                <FontAwesomeIcon icon={faYoutubeSquare} />
                &nbsp;&nbsp;Subscribe
              </button>
            </div>
            <div className="article-message">
              <hr />
              <h4>Message Us</h4>
              <textarea placeholder="write here..."></textarea>
              <button>Send</button>
            </div>
          </div>
        </div>
        <div className="articles-right-container">
          {articlesItem.map((data) => (
            <div className="articles-view">
              <h2>{data.title}</h2>
              <div className="article-date">
                <span>
                  &nbsp;
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  &nbsp;{data.date}.
                </span>
                <span>
                  &nbsp;
                  <FontAwesomeIcon icon={faStar} />
                  &nbsp;5 min read
                </span>
              </div>
              <hr />
              <div className="article-img">
                <img src={data.image} alt="" />
              </div>
              <p>
                {toggle ? data.description : data.description.slice(0, 250)}
                <span
                  className="apps-cart-toggle"
                  onClick={() => setToggle(!toggle)}
                >
                  &nbsp;&nbsp;{toggle ? "Show less" : "Read more"}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* About US*/}
      <div ref={ref} className="about">
        <About />
      </div>
      <br />
    </div>
  );
}

export default Articles;
