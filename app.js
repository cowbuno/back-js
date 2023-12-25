const express = require('express'); 
const bodyParser = require('body-parser'); 
 
const app = express(); 
const port = 3000; 
 
app.use(bodyParser.urlencoded({ extended: true })); 
 
app.get('/', (req, res) => { 
  res.sendFile(__dirname + '/index.html'); 
}); 
 
app.post('/calculate', (req, res) => { 
  const num1 = parseFloat(req.body.num1); 
  const num2 = parseFloat(req.body.num2); 
  const operation = req.body.operation; 
 
  let result; 
 
  switch (operation) { 
    case 'add': 
      result = num1 + num2; 
      break; 
    case 'subtract': 
      result = num1 - num2; 
      break; 
    case 'multiply': 
      result = num1 * num2; 
      break; 
    case 'divide': 
      if (num2 !== 0) { 
        result = num1 / num2; 
      } else { 
        result = 'Cannot divide by zero'; 
      } 
      break; 
    default: 
      result = 'Invalid operation'; 
  } 
 
  res.send(`Result: ${result}`); 
}); 
 
app.listen(port, () => { 
  console.log(`Server is running at http://localhost:${port}`); 
});