var express=require("express");
var app=express();
var port=process.env.PORT||3000;
app.listen(port);
var cors=require("cors");
var bodyparser=require("body-parser");
app.use(cors());

var url=bodyparser.urlencoded({extended:false});
app.use(bodyparser.json());
app.get("/",function(req,res){
  res.send("hi");
});
app.post("/user",url,function(req,res){

a=req.query.numbers;
f=true;
id="gari";
odd=[];
even=[];
c=0;
c1=0;
for(i=0;i<a.length;i++)
{
  x=parseInt(a[i]);


if(x%2==1)
{
odd.push(x);
}
else if(x%2==0)
{

even.push(x);

}

}
json={is_success:f, user:id,"odd":odd,"even":even};
res.send(json);


});
