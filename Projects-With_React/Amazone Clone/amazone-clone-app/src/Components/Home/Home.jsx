import React from "react";
import "../Home/Home.css";
import Products from "../Products/Products";
function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://img.freepik.com/premium-photo/kitchen-appliance-shelf-extreme-closeup-3d-rendering_476612-3751.jpg"
          alt="home-image"
        />
        <div className="home-row">
          <Products
            id="123321341"
            title={"The Lean Startup : How Constant Inovation Creates Radio"}
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Products
            id="4906542"
            title="Samsung LC45hgiuy 89 Curved LED Gaming Monitor"
            price={199.8}
            rating={4}
            image="https://m.media-amazon.com/images/I/71L1ezoIH9L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home-row">
          <Products
            id="8765454"
            title="Amazone Echo (3rd generation) | Smart speaker with Alexa."
            price={89.54}
            rating={6}
            image="https://m.media-amazon.com/images/I/61BBwp9hYjL._AC_SL1000_.jpg"
          />
          <Products
            id="36545435"
            title={
              "Smart Pc With 1TB Storage and 16 RAM,Processor speed is more quicker"
            }
            price={345.76}
            rating={4}
            image="https://m.media-amazon.com/images/I/41DeT328kPL._AC_SL1000_.jpg"
          />
          <Products
            id="65345634"
            title={
              "Large Capacity Power Bank With Lion-Battery.Long lasted in a week."
            }
            price={65.3}
            rating={3}
            image="https://m.media-amazon.com/images/I/71PyPkEE5gL._AC_SX425_.jpg"
          />
        </div>
        <div className="home-row">
          <Products
            id="235435554"
            title={"Kitchen Dishes, Made with Nikel. Longer Served."}
            price={87.32}
            rating={5}
            image="https://m.media-amazon.com/images/I/917BTSQCT6L._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
