import axios from "axios";
import React, { useState } from "react";

const Update = () => {
  const [BId, setBId] = useState();
  const [BName, setBName] = useState();
  const [BPrice, setBPrice] = useState();

  const handleBIdText = (evt) => {
    setBId(evt.target.value);
  };
  const handleBNameText = (evt) => {
    setBName(evt.target.value);
  };
  const handleBPriceText = (evt) => {
    setBPrice(evt.target.value);
  };
  const handleSearchButton = () => {
    axios
      .get("http://localhost:9669/book/search/" + BId)
      .then((res) => {
        setBId(res.data.BId);
        setBName(res.data.BName);
        setBPrice(res.data.BPrice);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const handleUpdateButton = () => {
    var obj = {
      BId: BId,
      BName: BName,
      BPrice: BPrice,
    };
    axios
      .put("http://localhost:9669/book/edit/", obj)
      .then((res) => {
        alert("Data Updated");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <center>
        <h4>BOOk Data Update </h4>
        <table>
          <tbody>
            <tr>
              <td>Book id</td>
              <td>
                <input type="number" onChange={handleBIdText} value={BId} />
                <button type="submit" onClick={handleSearchButton}>
                  Search
                </button>
              </td>
            </tr>
            <tr>
              <td>Book Name</td>
              <td>
                <input type="text" onChange={handleBNameText} value={BName} />
              </td>
            </tr>
            <tr>
              <td>Book Price</td>
              <td>
                <input
                  type="number"
                  onChange={handleBPriceText}
                  value={BPrice}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="submit" onClick={handleUpdateButton}>
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default Update;
