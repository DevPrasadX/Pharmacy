// Expired.js

import React from 'react';
import './Expiry.css';

const Expired = () => {
  const medicineData = [
    // The medicine data you provided (same as used in SliderComponent)
    // (Add your medicine data here...)
    {
      name: "Medicine Name 1",
      date: "Add Date 1",
      type: "GASEOUS, LIQUID, SOLID",
      expiry: "Expiry Date 1",
      imageUrl: "./companylogo/7514751.jpg",
    },

    {
      name: "Medicine Name 2",
      date: "Add Date 2",
      type: "GASEOUS, LIQUID, SOLID",
      expiry: "Expiry Date 2",
      imageUrl: "./companylogo/7514751.jpg",
    },
    {
      name: "Medicine Name 3",
      date: "Add Date 3",
      type: "GASEOUS, LIQUID, SOLID",
      expiry: "Expiry Date 3",
      imageUrl: "./companylogo/7514751.jpg",
    },
    {
      name: "Medicine Name 4",
      date: "Add Date 4",
      type: "GASEOUS, LIQUID, SOLID",
      expiry: "Expiry Date 4",
      imageUrl: "./companylogo/7514751.jpg",
    },
    {
      name: "Medicine Name 5",
      date: "Add Date 4",
      type: "GASEOUS, LIQUID, SOLID",
      expiry: "Expiry Date 5",
      imageUrl: "./companylogo/7514751.jpg",
    },

    {
      name: "Medicine Name 6",
      date: "Add Date 4",
      type: "GASEOUS, LIQUID, SOLID",
      expiry: "Expiry Date 6",
      imageUrl: "./companylogo/7514751.jpg",
    },

    {
      name: "Medicine Name 7",
      date: "Add Date 4",
      type: "GASEOUS, LIQUID, SOLID",
      expiry: "Expiry Date 7",
      imageUrl: "./companylogo/7514751.jpg",
    },

    {
      name: "Medicine Name 8",
      date: "Add Date 4",
      type: "GASEOUS, LIQUID, SOLID",
      expiry: "Expiry Date 8",
      imageUrl: "./companylogo/7514751.jpg",
    },
    {
      name: "Medicine Name 9",
      date: "Add Date 4",
      type: "GASEOUS, LIQUID, SOLID",
      expiry: "Expiry Date 9",
      imageUrl: "./companylogo/7514751.jpg",
    },


  ];

  return (
    <>
      <div className="lined-wrap">
        <div className="line-text"><h3>About to Expire</h3></div>
        <div className="line"></div>
      </div>

      <div className='expiry-container'>
        {medicineData.map((medicine, index) => (
          <div className='expiry-card' key={index}>
            <div className='content'>
              <div className='expiry-image'>
                <img src={medicine.imageUrl} height='100' width='100' alt={medicine.name} />
              </div>
              <div className='medicine-details'>
                <h3 className='heading'  style={{  fontSize:"14px" }}>Medicine Name</h3>
            
                <h3>{medicine.name}</h3>
                <p style={{ color: "#FF0000" }}>{medicine.expiry}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add more spacing or other content below if needed */}
    </>
  );
};

export default Expired;
