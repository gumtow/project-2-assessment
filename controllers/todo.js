// Dependencies
const express = require('express');
const router = express.Router();
const ToDo = require('../models/todo.js');

// Routes
/**************************************************************************
 * PRESENTATIONAL ROUTES (all GET requests)
 * 
 * Index: Shows all resources - links to New, Edit and Delete routes
 * New: Shows form to create ne resource item - linked to Create Route
 * Show: Shows 1 individual resourced from list
 * Edit: Shows a form to update a resource item - linked to Update Route
 * 
 * *************************************************************************/
// Seed
router.get('/seed', (req, res)=>{
    ToDo.create([
        {
            title:"Test Item",
        }
    ], (err, data)=>{
        res.redirect('/todo');
    })
});

// 01. Index Route
 router.get('/', (req, res)=>{
    ToDo.find({}, (err, allItems)=>{
        if(err){
            console.log(err)
        }
        res.render('Index', {
           todos: allItems
           
        });
    })
 });

// 02. New Route
router.get('/new', (req, res)=>{
    res.render('New');
});


 /**************************************************************************
 * FUNCTIONAL ROUTES
 * 
 * Create: Creates a new resource (POST)
 * Delete: Deletes a resource (DELETE)
 * Update: Updates a resource (PUT)
 * 
 * *************************************************************************/

// 05. Create Route
router.post('/', (req, res)=>{
    ToDo.create(req.body, (err, toDoItem)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/todo');
    })
});


// 06. Delete Route
router.delete('/:id', (req, res)=>{
    ToDo.findByIdAndRemove(req.params.id, (err, itemRemoved)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/todo');
    });
});





// Export Router
module.exports = router;