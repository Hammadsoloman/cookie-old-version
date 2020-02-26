var h = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
    name: 'seattle',
    customers: 0,
    min: 23,
    max: 65,
    Avg: 6.3,
    R: [],
    Total: 0,


     getRandomCustomers: function (min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        return Math.floor(Math.random() * (max - min) + 1) + min;
    },

    getTheResult: function () {
        for (var i = 0; i < 14; i++) {
            var x = Math.floor((this.getRandomCustomers()) * (this.Avg));
            this.R.push(x);
            this.Total += this.R[i];
                 }

    } };



  
    seattle.render = function () {
        seattle.getTheResult(); 
        var container = document.getElementById('Resturent1');
        var sectionEl = document.createElement('section');
        container.appendChild(sectionEl);
        var h1El = document.createElement('h1');
        sectionEl.appendChild(h1El);
        h1El.textContent = seattle.name;
        var ulEl = document.createElement('ul');
        sectionEl.appendChild(ulEl);
        for (var i = 0; i < h.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${h[i]}: ${this.R[i]}`;
            ulEl.appendChild(liEl);

        }
        var liTotalEl = document.createElement('li');
        liTotalEl.textContent = 'totale'+ ':' + this.Total ;
        ulEl.appendChild(liTotalEl);
    };
    seattle.render();


