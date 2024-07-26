const express = require("express");
const app = express();
const arithmeticfunctions = require("./arithmetic_functions.js");
app.use(express.json());

// ADDING 2 NUMBERS
// PATH & CALLBACK ARROW FUNCTION
// CALLBACK FUNCTIONS PROVIDE ACCESS TO THE RESULTING REQUEST
app.post("/calculate", (req, res) => {
  const operation = req.body.operation;

  switch (operation) {
    case "add":
      total = arithmeticfunctions.add(req.body.num1, req.body.num2);
      break;
    case "sub":
      total = arithmeticfunctions.sub(req.body.num1, req.body.num2);
      break;
    case "mul":
      total = arithmeticfunctions.multiply(req.body.num1, req.body.num2);
      break;
    case "div":
      total = arithmeticfunctions.divide(req.body.num1, req.body.num2);
      break;
    default:
      retun.res.status(400).send("Invalid Operation");
  }
  console.log("Operation is: " + operation);
  console.log("Value 1: " + value1);
  console.log("Value 2: " + value2);
  console.log("The result is : " + total);
  res.send({ total });
});
app.listen(3000);
