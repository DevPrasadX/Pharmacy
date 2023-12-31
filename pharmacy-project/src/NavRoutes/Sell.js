import React, { useState } from 'react';
import './SellMedi.css'; // Create your CSS file for styling
import QrReader from 'react-qr-scanner'; // Import the QrReader component
import axios from 'axios';
const Sell = () => {
  const [result, setResult] = useState(null);
  const [companyName, setCompanyName] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [medicineType, setMedicineType] = useState('');
  const [medicineExpiry, setMedicineExpiry] = useState('');
  const [medicineMFD, setMedicineMFD] = useState('');
  const [medicinePrice, setMedicinePrice] = useState('');
  const [medicineStock, setMedicineStock] = useState('');
  const [supplierNumber, setSupplierNumber] = useState('');

  const handleScan = (data) => {
    if (data) {
      let scannedData = data;
      if (typeof data !== 'string') {
        scannedData = JSON.stringify(data);
        console.log(scannedData);
        console.log(medicineStock);
        
      }

      const dataArray = scannedData.split(',');
      if (dataArray.length >= 8) {
        setCompanyName(dataArray[0]);
        setMedicineName(dataArray[1]);
        setMedicineType(dataArray[2]);
        setMedicineExpiry(dataArray[3]);
        setMedicineMFD(dataArray[4]);
        setMedicinePrice(dataArray[5]);
        setMedicineStock(dataArray[6]);
        setSupplierNumber(dataArray[7]);
      } else {
        console.error('Scanned data does not contain enough information');
      }
    } else {
      console.error('Scanned data is undefined or null');
    }
  };

   const handleConfirmButton = async () => {
//     alert("STOCK UPDATED, MEDICINE : "+medicineName+" has been sold");
//     try {
//     const medName = 'Prozac';
// const companyName = 'Merck';

// <<<<<<< HEAD
//     const response = await fetch(`http://localhost:5050/api/getmedicinename/${medName}/${companyName}`);
    
//     if (!response.ok) {
//       const errorMessage = await response.json();
//       throw new Error(errorMessage.error || 'Failed to fetch medicine details');
//     }

//     const medicineDetails = await response.json();
//     return medicineDetails;
//   } catch (error) {
//     console.error('Error fetching medicine:', error.message);
//     // Handle error
//     return { error: error.message };
//   }
   };

  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Error fetching medicine data:', error);
  //     }
  //   } else {
  //     console.error('Invalid quantity input');
  //   }
  // };
  
    }
  }
>>>>>>> 6d906235dced682404bca32ee52d5732a7f3b682


  const handleGetMedicine = async () => {
    try {
      const response = await axios.get('http://localhost:5050/api/getmedicinename/${medName}/${companyName}');
      //setMedicine(response.data);
    } catch (error) {
      console.error('Error fetching medicine:', error);
      // Handle error here
}
};

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="qr-scanner">
    <h2>QR Code Scanner</h2>
    <div className="scanner-container">
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    </div>

      <div className="scanned-data">
        <table className="medicinedatatable">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Medicine Name</th>
              <th>Medicine Type</th>
              <th>Medicine Expiry</th>
              <th>Medicine MFD</th>
              <th>Medicine Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="COMPANY_NAME">{companyName.substring(9)}</td>
              <td id="MEDICINE_NAME">{medicineName}</td>
              <td>{medicineType}</td>
              <td>{medicineExpiry}</td>
              <td>{medicineMFD}</td>
              <td>{medicinePrice}</td>
              <td>
                <input type="number" id="medicinestock" name="medicinestock" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={handleConfirmButton}>Confirm</button>
    </div>
  );
};

export default Sell;
