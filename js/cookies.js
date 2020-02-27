
var h = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var totalFooter =[];
function Resturent(name, min, max, Avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.Avg = Avg;
    this.R = [];
    this.Total = 0;
    
}
//write Random Equation
Resturent.prototype.getRandomCustomers = function (min, max) {
    return getRandomCustomers(min,max);
};
//End Random Equation


//id and table in globale for illustrate thim once
var container = document.getElementById('Resturent1');
var tableEl = document.createElement('table')
container.appendChild(tableEl);
////End id and table in globale


//Write the header
Resturent.prototype.header = function () {
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent= " ";
    for (var i = 0; i < h.length; i++) {
        var thEl = document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent = h[i];
    }
}
//end the header


//write the render
Resturent.prototype.render = function () {
     var container = document.getElementById('Resturent1');
    var sectionEl = document.createElement('section');
    container.appendChild(sectionEl);
    var h2El = document.createElement('h2');
    sectionEl.appendChild(h2El);
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.name;

    for (var i = 0; i < 14; i++) {
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        var z = Math.floor((this.getRandomCustomers(this.min,this.max)) * (this.Avg));
        this.Total=this.Total +z ;
        tdEl.textContent = z;
        this.R.push(z);
        console.log(this.getRandomCustomers());
    }
    tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.Total;
    console.log("render");

};

//End the render, its to build the inside (td) with resturant nane

//


//

//intarence value for the constractor
var firstResturent = new Resturent('Seattle', 23, 65, 6.3);
firstResturent.getRandomCustomers();
firstResturent.header();
firstResturent.render();
var secoundResturent = new Resturent('Tokyo',3, 24, 1.2)
secoundResturent.getRandomCustomers();
secoundResturent.render();
var thirdResturent = new Resturent('Dubai',11, 38, 3.7)
thirdResturent.render();
var fourthResturent = new Resturent('Paris', 20, 38, 2.3)
fourthResturent.render();
var fifthesturent = new Resturent('Lima', 2, 16, 4.6)
fifthesturent.render();
//End the intarence value for the constractor

 //


 ///

//it to complete the Random equation, and we call it by the get RandomCusomeers
function getRandomCustomers(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + 1) + min;
};
//End of complete the Random equation, and we call it by the get RandomCusomeers

//To write the secound total, the row
var tdEl = document.createElement('td');
tableEl.appendChild(tdEl);
tdEl.textContent = 'total';
for(var i = 0; i < h.length; i++) { 
   var e =Math.floor(firstResturent.R[i]+secoundResturent.R[i]+thirdResturent.R[i]+fourthResturent.R[i]+fifthesturent.R[i]);
   console.log(e);
   totalFooter.push(e);
   var tdEl = document.createElement('td');
   tableEl.appendChild(tdEl);
  tdEl.textContent =this.totalFooter[i];
}
//End of it

//To write the thered total, the row
w=0;
for(i=0;i<h.length;i++){
    var tdEl = document.createElement('td');
    tableEl.appendChild(tdEl);
    var w =w+totalFooter[i];
};
tdEl.textContent=w;

var resForm = document.getElementById('resForm');
resForm.addEventListener('submit',function(event){
    event.preventDefault();

    var name = event.target.name.value;
    var min =event.target.min.value;
    var max = event.target.max.value;
    var Avg = event.target.Avg.value;
    var firstResturent = new Resturent(name,min, max, Avg);
    firstResturent.render();
    console.log("add");

});
//End of it
























