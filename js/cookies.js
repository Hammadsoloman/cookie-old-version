Var seatel = {
    customers: 0,
    min: 23,
    max: 65,
    Avg: 6.3,
    getCustomers: function () {
        this.customers = getRandomCustomers(this.min, this.mix);
        console.log(getCustomers());
    },



    
};
 
//  R=[],

// var reapet= Function() {
//  for(let i = 0; i < 14; i++) {
  
// /* x = seatel.Avg * seatel.coustomers,
//  R[i].push(x),*/
//  } 

// };


function getRandomCustomers(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

