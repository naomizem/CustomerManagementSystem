require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path'); 
const customersRoute = require('./routes/CustomersRoute');
const mursheRoute = require('./routes/MursheRoute');
const paturRoute = require('./routes/PaturRoute');

const app = express();
const port = process.env.PORT || 3000;
console.log('🔹 MONGO_URI:', process.env.MONGO_URI);

const connectDB = require('./data/db');
connectDB();

app.use(cors());
app.use(express.json());


app.use('/api/customers', customersRoute);
app.use('/api/mursheDetalis', mursheRoute);
app.use('/api/paturDetalis', paturRoute);

const clientBuildPath = path.join(__dirname, '../client/build');
app.use(express.static(clientBuildPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
});


app.use((err, req, res, next) => {
    console.error('❌ ERROR DETAILS:', err);     
    console.error('🔹 Request URL:', req.originalUrl); 
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});


app.listen(port, () => {
    console.log(`✅ Server listening at http://localhost:${port}`);
});
