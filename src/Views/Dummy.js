import React, { useState } from "react";
import { ButtonSell } from "../Assets/Components/Button/ButtonSell/ButtonSell";
import { ModalDelete } from "../Assets/Components/Modal/ModalDelete";
import { ModalOffers } from "../Assets/Components/Modal/ModalOffers";
import { ModalWarning } from "../Assets/Components/Modal/ModalWarning";

export const Dummy = () => {
  const [isClosed, setisClosed] = useState(true);

  const handleModal = () => {
    setisClosed(!isClosed);
  };

  const test = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://sneakers-staging.herokuapp.com/product/display-all",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {isClosed ? null : <ModalWarning closed={()=>{handleModal()}}/> }

      <div>aaddsdddddddddddddddddddddd</div>
      <button onClick={()=>{handleModal()}}>cek</button>


    </div>
  );
};
