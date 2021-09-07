import "./games.css";
import "../about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faAndroid, faWindows } from "@fortawesome/free-brands-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import WindowsGame from "./windowsGame";
import AndroidGame from "./androidGame";
import About from "../about";

function Games() {
  return (
    <div className="games-container">
      <div className="games-navbar">
        <h3>
          <FontAwesomeIcon icon={faGamepad} />
          &nbsp;Games
        </h3>
        <p>
          You can get here&nbsp;
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </p>
      </div>

      {/* app windows display container */}
      <div className="games-display-container">
        <Tabs>
          <TabList>
            <div className="games-nav-view">
              <Tab className="games-nav-title">
                <FontAwesomeIcon icon={faWindows} />
                &nbsp;Windows
              </Tab>
              &nbsp; &nbsp;
              <Tab className="games-nav-title">
                <FontAwesomeIcon icon={faAndroid} />
                &nbsp;Android
              </Tab>
            </div>
          </TabList>

          <TabPanel>
            <WindowsGame />
          </TabPanel>
          <TabPanel>
            <AndroidGame />
          </TabPanel>
        </Tabs>
      </div>
      {/* About US*/}
      <div className="about">
        <About />
      </div>
      <br />
    </div>
  );
}

export default Games;
