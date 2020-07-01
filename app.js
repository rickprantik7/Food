const fs= require('fs');
const data=fs.readFileSync('foodyo_output.json')
let foodData= JSON.parse(data)
var recommendations=foodData.body.Recommendations
var foods=[]
foods.push(recommendations)

//console.log(foodData.body.Recommendations);
recommendations.forEach(function(food){

  //console.log(food.RestaurantName);
  var x=food.menu
x.forEach(function(items){
  if(items.type=="sectionheader"){
  //console.log(food.RestaurantName);
var child=items.children

child.forEach(function(child){
if(child.type=="item"){
 var childs=child.children
 childs.forEach(function(baby){
   if(baby.selected==1)
   {

     var childes= baby.children
     childes.forEach(function(babies){
       if(babies.selected==1){
         console.log(food.RestaurantName);
         console.log("--> "+child.name);
         console.log("---->"+ baby.name);
         console.log("------->"+babies.name);

}

     })
   }
 })
  }
})


}
})



})
