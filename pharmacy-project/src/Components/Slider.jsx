import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Components/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // Display 9 items on desktop (equal to the total number of items)
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // Display 3 items on tablet
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 2, // Display 2 items on mobile
  },
};

const SlideItem = ({ medicine }) => (
  <div className="slider" style={{backgroundColor:"white"}}> 
    <div className="card">
      <img src={medicine.imageUrl} height="300" alt={medicine.name} />
      <div className="card-content">
        <h3 className="card-header">{medicine.name}</h3>
        <div className="card-meta">
          <span className="date">{medicine.date}</span>
        </div>
        <p className="card-description">Medicine Type: {medicine.type}</p>
        <div className="card-det">
          <span className="expiry">
            <b>{medicine.expiry}</b>
          </span>
        </div>
      </div>
    </div>
  </div>
);

const SliderComponent = () => {
 
  const medicineData = [
    // Your medicine data here...
    // (The medicine data you provided)

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
    <div className="parent">

      <div className="lined-wrap">
        <div className="line-text"><h3>Recently Added</h3></div>
        <div className="line"></div>
        </div>
  
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
        autoPlay={true} // Enable auto play
        autoPlaySpeed={1000} // Set the time between auto-scrolls (in milliseconds) to 3 seconds (adjust as needed)
        infinite={true} // Enable continuous looping
      
        itemClass="carousel-item-padding-40-px" // Custom class to add padding between carousel items (add CSS as needed)
      >
        {medicineData.map((medicine, index) => (
          <SlideItem key={index} medicine={medicine} />
        ))}
      </Carousel>
    </div>
  );
};

export default SliderComponent;
