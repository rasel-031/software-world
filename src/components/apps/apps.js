import "./apps.css";
import "../about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersCog } from "@fortawesome/free-solid-svg-icons";
import { faAndroid, faWindows } from "@fortawesome/free-brands-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import WindowsApp from "./windowsApp";
import AndroidApp from "./androidApp";
import About from "../about";

function Apps() {
  return (
    <div className="apps-container">
      <div className="apps-navbar">
        <h3>
          <FontAwesomeIcon icon={faUsersCog} />
          &nbsp;Apps
        </h3>
        <p>
          You can get here&nbsp;
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </p>
      </div>

      {/* app windows display container */}
      <div className="apps-display-container">
        <Tabs>
          <TabList>
            <div className="apps-nav-view">
              <Tab className="apps-nav-title">
                <FontAwesomeIcon icon={faWindows} />
                &nbsp;Windows
              </Tab>
              &nbsp; &nbsp;
              <Tab className="apps-nav-title">
                <FontAwesomeIcon icon={faAndroid} />
                &nbsp;Android
              </Tab>
            </div>
          </TabList>

          <TabPanel>
            <WindowsApp />
          </TabPanel>
          <TabPanel>
            <AndroidApp />
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

export default Apps;
