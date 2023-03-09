const express=require("express");
const app=express();
const port=8000;

const expressLayouts=require("express-ejs-layouts");
app.use(expressLayouts);

// Set up Router Engine
app.use('/',require('./routes'));

// View Engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the port ${port}`);
    }
    console.log(`Server is running at port ${port}`);
});