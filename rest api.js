//Compare two JSON 

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
let compare = (obj1.name == obj2.name)
console.log(compare)//true
let compare1 = (obj1.age == obj2.age)
console.log(compare1)//true


// display all the country all properties in console

let request = new XMLHttpRequest();
request.open('GET' , 'http://api.countrylayer.com/v2/all?access_key=c4a59db57474aee0d04acc7c9065607d');
request.send();
request.onload = function(){
    let countrydata = JSON.parse(this.responseText);
    for(let country of countrydata){
        console.log(country)
    }

}

// display all the region in console

let request = new XMLHttpRequest();
request.open('GET' , 'http://api.countrylayer.com/v2/all?access_key=c4a59db57474aee0d04acc7c9065607d');
request.send();
request.onload = function(){
    let countrydata = JSON.parse(this.responseText);
    for(let country of countrydata){
        console.log(country.region)
    }

}