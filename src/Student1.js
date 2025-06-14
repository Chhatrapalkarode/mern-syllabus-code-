//  chat 
import React, { useState } from "react";

function Student1() {
  const [rno, setSrno] = useState("");
  const [sname, setSname] = useState("");
  const [smark, setSmark] = useState("");
  const [slist, setSlist] = useState([]);

  const handleSrnoText = (evt) => {
    setSrno(evt.target.value);
  };0
  const handleSnameText = (evt) => {
    setSname(evt.target.value);
  };
  const handleSmarkText = (evt) => {
    setSmark(evt.target.value);
  };
  
  const handlesubmit = () => {
    const obj = {
      RollNo: rno,
      Studentname: sname,
      Studentmark: smark
    };
    setSlist([...slist, obj]); // Update state immutably
  };
  
  const handleStudentb = () => {
    setSname(""); // Clear student name
  };

  const handleresult = () => {
    setSlist([]); // Clear student list
  };

  return (
    <div>
      <center>
        <div>Roll No</div>
        <div>
          <input type="number" onChange={handleSrnoText} value={rno} />
        </div><br />
        <div>Student Name</div>
        <div>
          <input type="text" onChange={handleSnameText} value={sname} />
        </div><br />
        <div>Student Marks</div>
        <div>
          <input type="number" onChange={handleSmarkText} value={smark} />
        </div><br />
        <div>Result</div>
        <div>
        
          <input type="text" value={slist.map(item => `${item.RollNo} - ${item.Studentname} - ${item.Studentmark}`).join(", ")} readOnly />
        </div><br />
        <div>
          <button onClick={handlesubmit}>Click Here</button>
        </div><br />
        <div>
          <button onClick={handleStudentb}>Clear Student Name</button>
        </div>
        <div>
          <button onClick={handleresult}>Clear Student List</button>
        </div><br />
        <div>
          <h4>Student List</h4>
        </div>
        <table border="1">
          <thead>
            <tr>
              <th>RollNo</th>
              <th>Student Name</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {slist.map((item) => (
              <tr >
                <td>{item.RollNo}</td>
                <td>{item.Studentname}</td>
                <td>{item.Studentmark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default Student1;
