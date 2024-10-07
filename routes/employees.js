const express = require("express");

const  employee_Act = require("../controllers/employees"); 

const router = express.Router();

router.get('/', employee_Act.getEmployees);
router.get('/:id', employee_Act.getspecEmployee);
router.post('/create', employee_Act.createEmployee);
router.patch('/:id', employee_Act.updateEmployee);
router.delete('/:id', employee_Act.deleteEmployee);

module.exports=router;
