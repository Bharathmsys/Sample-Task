import React, { useState } from "react";

const Sample = () => {
  const [pincode, setPincode] = useState();
  const [data, setData] = useState([]);
  let url = "https://api.postalpincode.in/pincode/";
  const handleEvent = async () => {
    try {
      let mainUrl = url + pincode;
      let request = await fetch(mainUrl);
      let respone = await request.json();
      if (
        respone[0].PostOffice === null ||
        respone[0].PostOffice === undefined
      ) {
        alert("Data Not found");
      }
      setData(respone[0].PostOffice);
      setPincode("");
    } catch (error) {
      alert("Error:", error);
    }
  };

  return (
    <div>
      <input
        value={pincode}
        className="input"
        type="number"
        onChange={(e) => {
          setPincode(e.target.value);
        }}
        placeholder="Enter Your Pindcode "
      />
      <button className="button" onClick={handleEvent}>add</button>

      <div>
        {data.map((each) => {
          return (
            <div className="container">
              <h4>Name : {each.Name}</h4>
              <h6>Division : {each.Division}</h6>
               <h6>Block : {each.Block}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sample;
