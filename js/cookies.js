
var h = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Resturent(name, min, max, Avg) {
    this.name = name;
    this.customers = 0;
    this.min = min;
    this.max = max;
    this.Avg = Avg;
    this.R = [];
    this.Total = 0;
    this.totalArray = [];
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
       console.log(this.getRandomCustomers());
    }
    tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent=this.Totale;
    //console.log(this);

};




var firstResturent = new Resturent('Seattle', 23, 65, 6.3);
firstResturent.getRandomCustomers();
firstResturent.header();
firstResturent.render();
var secoundResturent = new Resturent('Tokyo', 0, 3, 24, 1.2, [], 0)
secoundResturent.getRandomCustomers();
//secoundResturent.header();
secoundResturent.render();
var thirdResturent = new Resturent('Dubai', 0, 11, 38, 3.7, [], 0)
//thirdResturent.header();
thirdResturent.render();
var fourthResturent = new Resturent('Paris', 0, 20, 38, 2.3, [], 0)
//fourthResturent.header();
fourthResturent.render();
var fifthesturent = new Resturent('Lima', 0, 2, 16, 4.6, [], 0)
//fifthesturent.header();
fifthesturent.render();

function getRandomCustomers(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + 1) + min;
};


// I still will work on the footer , that we have on it the totale,and we can have it by making loop for the sum of the totale.

// footer
//   var tdTotalEl = document.createElement('td');
//         // trEl.appendChild(tdTotalEl);
//        for (var i = 0; i < h.length; i++) {
//        tdEl = document.createElement('td'); 
//      tdTotalEl.textContent = ' totale ${tdEl};
//        }








/*








                                                 LAB---06






*/









// var seattle = {
//     name: 'seattle',
//     customers: 0,
//     min: 23,
//     max: 65,
//     Avg: 6.3,
//     R: [],
//     Total: 0,


    //  getRandomCustomers: function (min, max) {
    //     min = Math.ceil(this.min);
    //     max = Math.floor(this.max);
    //     return Math.floor(Math.random() * (max - min) + 1) + min;
    // },

//     getTheResult: function () {
//         for (var i = 0; i < 14; i++) {
//             var x = Math.floor((this.getRandomCustomers()) * (this.Avg));
//             this.R.push(x);
//             console.log(x);
//             this.Total += this.R[i];
//             // console.log(this.Total);


//             // console.log(this.R.push((this.getRandomCustomers()) * (this.Avg)));
//             // this.R[i].push(x);

//         }

//     },




    //  var ulEl = document.createElement('ul');
    //  sectionEl.appendChild(ulEl);
    //  h1El.textContent = this.name;
    //  var ulEl = document.createElement('ul');
    //  sectionEl.appendChild(ulEl);




//     console.log(Resturent.getRandomCustomers());
// Resturent.render();

    // console.log(seattle.getTheResult());
//     // 
//     render: function () {
//         seattle.getTheResult(); // we should call the function it inside the render to call it
//         var container = document.getElementById('Resturent1');
//         var sectionEl = document.createElement('section');
//         container.appendChild(sectionEl);
//         var h1El = document.createElement('h1');
//         sectionEl.appendChild(h1El);
//         h1El.textContent = seattle.name;
//         var ulEl = document.createElement('ul');
//         sectionEl.appendChild(ulEl);
//         for (var i = 0; i < h.length; i++) {
//             var liEl = document.createElement('li');
//             liEl.textContent = `${h[i]}: ${this.R[i]}`;
//             ulEl.appendChild(liEl);

//         }
//         var liTotalEl = document.createElement('li');
//         liTotalEl.textContent = 'totale'+ ':' + this.Total ;
//         ulEl.appendChild(liTotalEl);
//     };
// // };

