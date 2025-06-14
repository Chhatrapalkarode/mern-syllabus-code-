import React, { useState } from "react";
import axios from "axios";

const Delete = () => {
  const [BId, setBId] = useState();
  const handleBIdText = (evt) => {
    setBId(evt.target.value);
  };
  const handleDeleteButton = () => {
    axios
      .delete("http://localhost:9669/book/remove/" + BId)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <center>
        <h4>Delete Book Details</h4>
        <table>
          <tr>
            <td>Enter BOOK id</td>
            <td>
              <input type="number" onChange={handleBIdText} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit" onClick={handleDeleteButton}>
                Delete
              </button>
            </td>
          </tr>
        </table>
      </center>
    </div>
  );
};

export default Delete;
