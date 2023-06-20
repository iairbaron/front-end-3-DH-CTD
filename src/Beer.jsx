import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
  const [beer, setBeer] = useState({});
  const navigate = useNavigate()
  const params = useParams();

  console.log("EL PARAMS ES", params.id);
  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setBeer(response[0]);
      });
  }, []);

  return (
    <div>
      <h2>Cerveza numero...</h2>
      <div className="card">
        <img src={beer.image_url} alt="beer-detail" />
        <p>{beer.tagline}</p>
        <p>{beer.description}</p>
        <p>{beer.brewers_tips} </p>
      </div>
      <button  onClick={()=> navigate(-1)  } > Go back</button>
    </div>
  );
};

export default Beer;
