import React, { useState, useEffect } from "react";
import axios from "axios";
import Meals from "./components/Meals";
import Deliveroo from "./img/Deliveroo_logo.svg";

import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://deliveroo-back-end.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      <div className="App">
        {isLoading === true ? (
          <p>En cours de chargement ...</p>
        ) : (
          <div className="conteneur-principale">
            <header className="header">
              <div className="conteneur-logo">
                <div>
                  <img className="logo" src={Deliveroo} alt="Deliveroo-logo" />
                </div>
              </div>

              <div className="conteneur-head">
                <div className="conteneur-h1-img">
                  <div className="p">
                    <h1>{data.restaurant.name}</h1>
                    <p>{data.restaurant.description}</p>
                  </div>
                  <div>
                    <img
                      className="pic-head"
                      src="https://f.roocdn.com/images/menus/17697/header-image.jpg"
                      alt=" photo-plat"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className="conteneur-main">
              <Meals categories={data.categories} />

              <div className="panier">
                <button>Valider mon panier</button>
                <div>Brunch authentique 1 personne</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
