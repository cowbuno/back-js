const express = require('express');
const app = express();
const port = 3000;

// Body parser for forms
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));

// BMI Routes
const bmiRoutes = require('./routes/bmiRoutes.js');
app.use('/bmicalculator', bmiRoutes);

// Home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
