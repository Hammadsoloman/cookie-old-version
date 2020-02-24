
var h = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seattle = {
    name :'seattle',
    customers: 0,
    min: 23,
    max: 65,
    Avg: 6.3,
    R: [],
    Total :0,


    getRandomCustomers: function (min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        return Math.floor(Math.random() * (max - min) + 1) + min;
    },

    getTheResult: function () {
        for (var i = 0; i < 14; i++) {
           var x=((this.getRandomCustomers()) * (this.Avg));
          this.R.push(x);
            console.log(x);
            this.Total=x+this.Total;
           // console.log(this.Total);
            

            // console.log(this.R.push((this.getRandomCustomers()) * (this.Avg)));
            // this.R[i].push(x);

        }

    },

    


    



    // function container (){
    //     document.getElementById('seattle');

    //     var rEl = document.createComment('tr');
    //     var hEl = document.createElement('th');
    //     hEl.textContent='places';

    //     rEl.appendChild(hEl);
    //     for (var i = 0; i < h.length; i++) {
    //       hEl = document.createElement('th');
    //       hEl.textContent = h[i];
    //       rEl.appendChild(thEl);
    //     };
    //     hEl = document.createElement('th');
    //     hEl.textContent = 'Total';
    //     rEl.appendChild(hEl);
    //     locationTable.appendChild(rEl);




// console.log(seattle.getTheResult());
// 
render : function(){
    seattle.getTheResult(); // we should call the function it inside the render to call it
    var container = document.getElementById('Resturent1');
    var sectionEl = document.createElement('section');
    container.appendChild(sectionEl);
    var h1El = document.createElement('h1');
    sectionEl.appendChild(h1El);
    h1El.textContent = seattle.name;
    var ulEl = document.createElement('ul');
    sectionEl.appendChild(ulEl);
    for(var i = 0 ; i < h.length ; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${h[i]}: ${this.R[i]}`;
      ulEl.appendChild(liEl);
    }}};
console.log(seattle.getRandomCustomers());
seattle.render();
/*i could write 5 resturent , but im stil nut sure about my code, its wrong,
so i will countinus it when i get the correct answer*/









//  

// var reapet= Function() {
//  for(let i = 0; i < 14; i++) {

// /* x = seatel.Avg * seatel.coustomers,
//  R[i].push(x),*/
//  } 

// };
 