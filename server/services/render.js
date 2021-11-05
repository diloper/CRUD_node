exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    res.render('index');

    
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    res.render("update_user")
}