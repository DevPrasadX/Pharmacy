import React from 'react'

import '../Components/Recentcss.css';

const RecentAdd = () => {
  return (
    <>
    <span><h3>Recently Added</h3></span>
    <div className='container'>
    

      <div className='card-container'>
      {/*card 1  */}
      <div className="card">
          <img src="./companylogo/7514751.jpg" height="300" alt="Matthew" />
          <div className="card-content">
              <h3 className="card-header">Medicine Name</h3>
              <div className="card-meta">
                  <span className="date">Add Date</span>
              </div>
              <p className="card-description">Medicine Type: GASEOUS, LIQUID, SOLID</p>
              <div className="card-det">
                  <span className="expiry"><b>Expiry Date</b></span>
              </div>
          </div> 
      </div>

      {/* card 2 */}
      <div className="card">
          <img src="./companylogo/7514751.jpg" height="300" alt="Matthew" />
          <div className="card-content">
              <h3 className="card-header">Medicine Name</h3>
              <div className="card-meta">
                  <span className="date">Add Date</span>
              </div>
              <p className="card-description">Medicine Type: GASEOUS, LIQUID, SOLID</p>
              <div className="card-det">
                  <span className="expiry"><b>Expiry Date</b></span>
              </div>
          </div> 
      </div>
      {/*card 3  */}
      <div className="card">
          <img src="./companylogo/7514751.jpg" height="300" alt="Matthew" />
          <div className="card-content">
              <h3 className="card-header">Medicine Name</h3>
              <div className="card-meta">
                  <span className="date">Add Date</span>
              </div>
              <p className="card-description">Medicine Type: GASEOUS, LIQUID, SOLID</p>
              <div className="card-det">
                  <span className="expiry"><b>Expiry Date</b></span>
              </div>
          </div> 
      </div>

      {/* card 4 */}
      <div className="card">
          <img src="./companylogo/7514751.jpg" height="300" alt="Matthew" />
          <div className="card-content">
              <h3 className="card-header">Medicine Name</h3>
              <div className="card-meta">
                  <span className="date">Add Date</span>
              </div>
              <p className="card-description">Medicine Type: GASEOUS, LIQUID, SOLID</p>
              <div className="card-det">
                  <span className="expiry"><b>Expiry Date</b></span>
              </div>
          </div> 
      </div>
     

       {/* card 5 */}
       <div className="card">
          <img src="./companylogo/7514751.jpg" height="300" alt="Matthew" />
          <div className="card-content">
              <h3 className="card-header">Medicine Name</h3>
              <div className="card-meta">
                  <span className="date">Add Date</span>
              </div>
              <p className="card-description">Medicine Type: GASEOUS, LIQUID, SOLID</p>
              <div className="card-det">
                  <span className="expiry"><b>Expiry Date</b></span>
              </div>
          </div> 
      </div>
    
      </div>


    </div>
    </>
  )
}

export default RecentAdd