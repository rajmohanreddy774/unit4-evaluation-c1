const express= require("express")

const app=express();



app.use(logger);

app.get("/books",function(req,res)
{
    return res.send({route:"/books", path:req.path})
})

let permission=false;
app.get("/libraries",checkPermission("librarian"),function(req,res)
{
    return res.send({ route: "/libraries", permission: permission, path:req.path})
})


app.get("/authors",checkPermission("author"),function(req,res)
{
    return res.send({route: "/authors", permission: permission, path:req.path})
})


function logger(req,res,next)
{
    if(req.path==="/books" )
    {
        req.path="books";
    }
    else if (req.path==="/libraries")
    {
        req.path="library";
    }
    else if(req.path==="/authors")
    {
        req.path="author"
    }
   
    next();
}


function checkPermission(role)
{

     return function logger1(req,res, next)
    {
        if(role==="librarian")
        {
            permission:true;
        }
        else if(role==="author"){
           permission: true;
        }
        next();

    }
}
   
    


app.listen(4000,()=>{
    console.log("listening to port 4000"); 
})