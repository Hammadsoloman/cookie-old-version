
var h = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var totalFooter =[];
function Resturent(name, min, max, Avg) {
    this.name = name;
  //  this.customers = customers;
    this.min = min;
    this.max = max;
    this.Avg = Avg;
    this.R = [];
    this.Total = 0;
    
}

Resturent.prototype.getRandomCustomers = function (min, max) {
    return getRandomCustomers(min,max);
};


var container = document.getElementById('Resturent1');
var tableEl = document.createElement('table')
container.appendChild(tableEl);

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

Resturent.prototype.render = function () {
    // var liTotalEl = document.createElement('');
    // liTotalEl.textContent = 'totale'+ ':' + this.Total ;
    // ulEl.appendChild(liTotalEl);
    // Resturent.getTheResult(); // we should call the function it inside the render to call it
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



    // tdEl = document.createElement('td');
    // trEl.appendChild(tdEl);
    // tdEl.textContent=this.Totale;
    // //console.log(this);
 

};




var firstResturent = new Resturent('Seattle', 23, 65, 6.3);
firstResturent.getRandomCustomers();
firstResturent.header();
firstResturent.render();
var secoundResturent = new Resturent('Tokyo',3, 24, 1.2)
secoundResturent.getRandomCustomers();
//secoundResturent.header();
secoundResturent.render();
var thirdResturent = new Resturent('Dubai',11, 38, 3.7)
//thirdResturent.header();
thirdResturent.render();
var fourthResturent = new Resturent('Paris', 20, 38, 2.3)
//fourthResturent.header();
fourthResturent.render();
var fifthesturent = new Resturent('Lima', 2, 16, 4.6)
//fifthesturent.header();
fifthesturent.render();

function getRandomCustomers(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + 1) + min;
};

var tdEl = document.createElement('td');
tableEl.appendChild(tdEl);
tdEl.textContent = 'total';

// var totalFooter=[];
for(var i = 0; i < h.length; i++) { 
  // console.log(secoundResturent.R[i]);
   var e =Math.floor(firstResturent.R[i]+secoundResturent.R[i]+thirdResturent.R[i]+fourthResturent.R[i]+fifthesturent.R[i]);
   console.log(e);
   totalFooter.push(e);
   var tdEl = document.createElement('td');
   tableEl.appendChild(tdEl);
  tdEl.textContent =this.totalFooter[i];

}
w=0;
for(i=0;i<h.length;i++){
    var tdEl = document.createElement('td');
    tableEl.appendChild(tdEl);
    var w =w+totalFooter[i];
};
tdEl.textContent=w;


// for(var i = 0; i <14; i++){
// var tdEl = document.createElement('td');
// tableEl.appendChild(tdEl);
// tdEl.textContent = totalFooter ;
// }

// console.table(totalFooter);










//   var tdTotalEl = document.createElement('td');
//   trEl.appendChild(tdEl);
//        for (var i = 0; i < h.length; i++) {
//        tdTotalEl = document.createElement('td'); 
//      tdTotalEl.textContent = this.Total
//        }








/*














*/







