// Expired.js

import React from 'react';
import './CriticalStock.css';

const Critical = () => {
  const medicineData = [
    // The medicine data you provided (same as used in SliderComponent)
    // (Add your medicine data here...)
    {
      name: "Medicine Name 1",
      date: "Add Date 1",
      type: "GASEOUS, LIQUID, SOLID",
      critical: "Critical Date 1",
      imageUrl: "./companylogo/7514751.jpg",
      supplierName: "Supplier 1",
      supplierNumber: "Supplier Number 1",
      stock: "10",
      stock: "10",
    },

    {
      name: "Medicine Name 1",
      date: "Add Date 1",
      type: "GASEOUS, LIQUID, SOLID",
      critical: "Critical Date 1",
      imageUrl: "./companylogo/7514751.jpg",
      supplierName: "Supplier 1",
      supplierNumber: "Supplier Number 1",
      stock: "10",
    },
    {
      name: "Medicine Name 1",
      date: "Add Date 1",
      type: "GASEOUS, LIQUID, SOLID",
      critical: "Critical Date 1",
      imageUrl: "./companylogo/7514751.jpg",
      supplierName: "Supplier 1",
      supplierNumber: "Supplier Number 1",
      stock: "10",
    },
    {
      name: "Medicine Name 1",
      date: "Add Date 1",
      type: "GASEOUS, LIQUID, SOLID",
      critical: "Critical Date 1",
      imageUrl: "./companylogo/7514751.jpg",
      supplierName: "Supplier 1",
      supplierNumber: "Supplier Number 1",
      stock: "10",
    },
    {
      name: "Medicine Name 1",
      date: "Add Date 1",
      type: "GASEOUS, LIQUID, SOLID",
      critical: "Critical Date 1",
      imageUrl: "./companylogo/7514751.jpg",
      supplierName: "Supplier 1",
      supplierNumber: "Supplier Number 1",
      stock: "10",
    },

    {
      name: "Medicine Name 1",
      date: "Add Date 1",
      type: "GASEOUS, LIQUID, SOLID",
      critical: "Critical Date 1",
      imageUrl: "./companylogo/7514751.jpg",
      supplierName: "Supplier 1",
      supplierNumber: "Supplier Number 1",
      stock: "10",
    },

    {
      name: "Medicine Name 1",
      date: "Add Date 1",
      type: "GASEOUS, LIQUID, SOLID",
      critical: "Critical Date 1",
      imageUrl: "./companylogo/7514751.jpg",
      supplierName: "Supplier 1",
      supplierNumber: "Supplier Number 1",
      stock: "10",
    },

    {
      name: "Medicine Name 1",
      date: "Add Date 1",
      type: "GASEOUS, LIQUID, SOLID",
      critical: "Critical Date 1",
      imageUrl: "./companylogo/7514751.jpg",
      supplierName: "Supplier 1",
      supplierNumber: "Supplier Number 1",
      stock: "10",
    },
    {
      name: "Medicine Name 1",
      date: "Add Date 1",
      type: "GASEOUS, LIQUID, SOLID",
      critical: "Critical Date 1",
      imageUrl: "./companylogo/7514751.jpg",
      supplierName: "Supplier 1",
      supplierNumber: "Supplier Number 1",
      stock: "10",
    },


  ];
  return (
    <>
      <div className="lined-wrap">
        <div className="line-text">
          <h3>Stock Alert</h3>
        </div>
        <div className="line"></div>
      </div>


      <div className='critical-container'>
        {medicineData.map((medicine, index) => (
          <div className='critical-card' key={index}>
            <div className='critical-content'>
              <div className='critical-image'>
                <img src={medicine.imageUrl} height='100' width='100' alt='Medicine' />
              </div>
              <div className='critical-medicine-details'>
                <div className='critical-medi-name'>
                  <h3 className='critical-heading' style={{ fontSize: "14px" }}>Medicine Name</h3>
                  <h3>{medicine.name}</h3>
                </div>
                <div className='critical-medi-stock'>
                  <h3 className='heading' style={{ fontSize: "14px" }}>Medicine Stock</h3>
                  <h3 style={{ color: "red" }}>{medicine.stock}</h3>
                </div>
                {/* Additional data to be displayed on hover */}
                <div className='critical-supplier'>
                  <p>Supplier:<br></br>{medicine.supplierName}</p>
                  <p>Supplier Number:<br></br> {medicine.supplierNumber}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      {/* Add more spacing or other content below if needed */}
    </>
  );
};

export default Critical;  