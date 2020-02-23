
var h = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seattle = {
    customers: 0,
    min: 23,
    max: 65,
    Avg: 6.3,
    R : [],


    getRandomCustomers :function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
      },

    getTheResult :function name(params) {

        var R=[];

        for (let i = 0; i < 14; i++) {
            
            var x = seattle.getRandomCustomers*seattle.Avg;
    
            R[i].push(x);
            
        }
    }
     
    },


    function container (){
        document.getElementById('seattle');
        var rEl = document.createComment('tr');
        var hEl = document.createElement('th');
        hEl.textContent='places';

        rEl.appendChild(hEl);
        for (var i = 0; i < h.length; i++) {
          hEl = document.createElement('th');
          hEl.textContent = h[i];
          rEl.appendChild(thEl);
        };
        hEl = document.createElement('th');
        hEl.textContent = 'Total';
        rEl.appendChild(hEl);
        locationTable.appendChild(rEl);


    };
            
    
    /*i could write 5 resturent , but im stil nut sure about my code, its wrong,
    so i will countinus it when i get the correct answer*/
    
    
  
  
    
        
   

 
//  

// var reapet= Function() {
//  for(let i = 0; i < 14; i++) {
  
// /* x = seatel.Avg * seatel.coustomers,
//  R[i].push(x),*/
//  } 

// };




