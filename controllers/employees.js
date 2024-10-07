const express= require('express');
const mongoose= require('mongoose');

const Employee= require('../models/employeedata.js');

const router= express.Router();

const getEmployees = async (req, res) => {
    try {
        const employee= await employee.find();
        
        res.status(200).json(employee);
    } catch(error) {
        res.status(404).console.log(error).json({message: error.message});
    }
}

const getspecEmployee = async (req,res) => {
    const id = req.params.id;

    try {
        const emp = await Employee.findOne({id: id});

        res.status(200).json(emp);
    } catch(error) {
        res.status(404).console.log(error).json({ message: error.message});
    }
}

const createEmployee =  async (req, res) => {
    console.log(req.body);
    const newemployee = new Employee({
        name:req.body.name,
        id:req.body.id,
        registration:req.body.registration,
        created_on:req.body.created_on

    })
    try {
        await newemployee.save();

        res.status(201).json(newemployee);

    } catch(error) {
        res.status(400).console.log(error).json({ message : error.message});
    }

}

const updateEmployee = async (req, res) => {
    const id= req.params.id;
    try{
        await Employee.findOneAndUpdate({
            id: id,
        },
        {   
            name:req.body.name,
            registration:req.body.registration,
            created_on:req.body.created_on
        }
        )
        res.status(202).json({id: id});

    } catch (error) {
        res.status(401).console.log(error).json({message: error.message});
    }
    
}

const deleteEmployee = async (req, res) => {
    const id= req.params.id;

    try {
        await Employee.findOneAndRemove({id: id});
        res.status(203).json({id:id});

    }catch(error) {
        res.status(402).console.log(error).json({message: error.message});
    }
}

module.exports.getEmployees= getEmployees;
module.exports.createEmployee= createEmployee;
module.exports.getspecEmployee= getspecEmployee;
module.exports.updateEmployee= updateEmployee;
module.exports.deleteEmployee= deleteEmployee;
