// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const Medicine = require('./model'); // Import the Medicine schema

const cors = require('cors');

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Connect to MongoDB
// const DB_NAME = 'NASA';

async function connectToMongoDB() {
  try {
    await mongoose.connect(
    //   `mongodb+srv://gurnanivansh57:iz64rqtBBQss8iQ7@cluster101.nuwewcc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    `mongodb+srv://DevPrasadX:Pass%231234@medicinedata.0hhnkty.mongodb.net/?retryWrites=true&w=majority`,
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

// Define a route for the home route ("/")
app.get('/', (req, res) => {
  res.send('Welcome to the NASA API');
});

// Assuming you have the Medicine schema defined in 'medicineSchema.js'

// Create a new medicine
app.post('/api/medicines', async (req, res) => {
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


app.get('/api/getmedicines', async (req, res) => {
    try {
      const medicines = await Medicine.find();
  
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












// ... rest of your code

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
