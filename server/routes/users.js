const Router = require('express').Router(); // Initialize Router
let User = require('../models/user.model');
//route - get method
Router.route('/').get( (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
});
//route - post method
Router.route('/add').post( (req, res) => {
    const username = req.body.username;
    const newUser = new User({username}); 

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error' + err))
});

module.exports = Router;
