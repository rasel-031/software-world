import "./bestProducts.css";
import "../about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import WindowsBP from "./windowsBP";
import AndroidBP from "./androidBP";
import About from "../about";

function BestProduct() {
  return (
    <div className="best-products">
      <div className="best-products-navbar">
        <h3>
          <FontAwesomeIcon icon={faProductHunt} />
          &nbsp;Best Products
        </h3>
        <p>
          You can get here, download now!!!&nbsp;
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </p>
      </div>
      <div className="best-products-container">
        <div>
          <div className="best-windows-product">
            <h3>Windows</h3>
          </div>
          <br />
          <div className="best-windows-product-cart">
            <WindowsBP />
          </div>
        </div>
        <div>
          <div className="best-android-product">
            <h3>Android</h3>
          </div>
          <br />
          <div className="best-android-product-cart">
            <AndroidBP />
          </div>
        </div>
      </div>
      {/* About US*/}
      <div className="about">
        <About />
      </div>
    </div>
  );
}

export default BestProduct;
