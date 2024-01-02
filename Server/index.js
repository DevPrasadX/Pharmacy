// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const Medicine = require('./model'); // Import the Medicine schema

const cors = require('cors');

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());


app.set('view engine', 'ejs');

const DB_NAME = 'test';

async function connectToMongoDB() {
  try {
    await mongoose.connect(
    `mongodb+srv://DevPrasadX:Pass%231234@medicinedata.0hhnkty.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

// Call the function to connect to MongoDB
connectToMongoDB();


app.get('/', (req, res) => {
  res.send('Welcome to the NASA API');
});

// Create a new medicine
app.post('/postmedicines', async (req, res) => {
  try {
    const {
      company_name,
      med_name,
      date_of_arrival,
      expiry_date,
      stock,
      price,
      manufacture_date,
      supplier_number
    } = req.body;

    // Create a new Medicine instance based on the schema
    const newMedicine = new Medicine({
      company_name,
      med_name,
      date_of_arrival,
      expiry_date,
      stock,
      price,
      manufacture_date,
      supplier_number
    });

    // Save the new medicine to the database
    await newMedicine.save();

    res.status(201).json({ message: 'Medicine added successfully' });
  } catch (error) {
    console.error('Error adding medicine:', error);
    res.status(500).json({ error: 'An error occurred while saving the medicine.' });
  }
});


app.get('/api/getmedicinename/:med_name/:company_name', async (req, res) => {
  try {
    const { med_name,company_name } = req.params; // Get the med_name from URL parameter

    const medicine = await Medicine.findOne({ med_name,company_name }, { _id: 1,med_name:1,company_name:1,stock:1 });

    if (!medicine) {
      return res.status(404).json({ error: 'Medicine not found.' });
    }

    res.json({ _id: medicine._id,med_name:medicine.med_name,
      comoany_name:medicine.company_name,stock:medicine.stock });
  } catch (error) {
    console.error('Error fetching medicine:', error);
    res.status(500).json({ error: 'An error occurred while fetching the medicine.'});
}
});

app.get('/api/stock_decrement/getmedicinename/:med_name/:company_name', async (req, res) => {
  try {
    const { med_name, company_name } = req.params; // Get the med_name and company_name from URL parameters

    const medicine = await Medicine.findOne({ med_name, company_name }, { _id: 1, med_name: 1, company_name: 1, stock: 1 });

    if (!medicine) {
      return res.status(404).json({ error: 'Medicine not found.' });
    }

    // Assuming a quantity of 1 is being retrieved, you can adjust this based on your use case
    const quantityToRetrieve = 1;

    // Check if there's enough stock to retrieve
    if (medicine.stock >= quantityToRetrieve) {
      // Subtract the quantity retrieved from the available stock in the database
      medicine.stock -= quantityToRetrieve;
      
      // Save the updated stock value back to the database
      await medicine.save();
      
      // Send the response with the details of the retrieved item
      res.json({
        _id: medicine._id,
        med_name: medicine.med_name,
        company_name: medicine.company_name,
        stock: medicine.stock
      });
    } else {
      res.status(400).json({ error: 'Insufficient stock to retrieve.' });
    }
  } catch (error) {
    console.error('Error fetching medicine:', error);
    res.status(500).json({ error: 'An error occurred while fetching the medicine.' });
  }
});


app.get('/api/getmedicines', async (req, res) => {
    try {
      const medicines = await Medicine.find().sort({date_of_arrival:-1});
  
      res.json(medicines);
    } catch (error) {
      console.error('Error fetching medicines:', error);
      res.status(500).json({ error: 'An error occurred while fetching medicines.' });
    }
  });

  app.get('/api/getexpirymedicines', async (req, res) => {
    try {
      const currentDate = new Date(); // Get the current date
  
      // Calculate dates for 1 year and 6 months from now
      const oneYearFromNow = new Date(currentDate);
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 3);
  
      const sixMonthsFromNow = new Date(currentDate);
      sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 10);
  
      // Query medicines that have expiry dates less than 1 year or 6 months from now
      const medicines = await Medicine.find({
        expiry_date: {
          //$lt: oneYearFromNow, // Expiry date less than 1 year from now
          $lt: sixMonthsFromNow // Expiry date less than 6 months from now
        }
      }).sort({ expiry_date: -1 }).limit(12);
  
      res.json(medicines);
    } catch (error) {
      console.error('Error fetching medicines:', error);
      res.status(500).json({ error: 'An error occurred while fetching medicines.' });
    }
  });
   
  app.get('/api/getmedicinesstock', async (req, res) => {
    try {
      const medicines = await Medicine.find({ stock: { $lt: 100 } }) // Find medicines where stock is below 100
        .sort({ stock: 1 }); // Sort by expiry_date in descending order
    // Limit the result to 12 items
  
      res.json(medicines);
    } catch (error) {
      console.error('Error fetching medicines:', error);
      res.status(500).json({ error: 'An error occurred while fetching medicines.' });
    }
  });


 


    
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
// Route to retrieve data from the nakamura_1979_sm_locations collection
