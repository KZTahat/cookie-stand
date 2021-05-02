'use strict';

let seattle = {
    locationName: 'seattle',
    hoursOFoperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm'
        , '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCustomer: 23,
    maxCustomer: 65,
    avgCookie: 6.3,
    customerPERhoure: [],
    cookiesPERhoure: [],

    getCustomers: function (min, max) {
        for (let i = 1; i <= 14; i++) {
            min = Math.ceil(min);
            max = Math.floor(max);
            this.customerPERhoure.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
    },
    getCookies: function () {
        for (let i = 0; i < this.customerPERhoure.length; i++) {
            this.cookiesPERhoure.push(Math.floor(this.customerPERhoure[i] * (6.3)));
        }
    },
    render: function () {
        let container = document.getElementById('mainelement');
        let h1El = document.createElement('h1');
        h1El.textContent = 'Seattle';
        container.appendChild(h1El);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < this.cookiesPERhoure.length; i++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.hoursOFoperation[i]}: `+ this.cookiesPERhoure[i];
        }
        let sum = 0;
        for (let i = 0; i < this.cookiesPERhoure.length; i++){
            sum = sum + this.cookiesPERhoure[i];
        }
        let liTotal = document.createElement('li');
        ulEl.appendChild(liTotal);
        liTotal.textContent = 'total: '+ sum;
    }
}
console.log('seattle');
seattle.getCustomers(seattle.minCustomer, seattle.maxCustomer);
console.log(seattle.customerPERhoure);
seattle.getCookies();
console.log(seattle.cookiesPERhoure);
seattle.render();

// .................................................................Tokyo...
let tokyo = {
    locationName: 'tokyo',
    hoursOFoperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm'
        , '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCustomer: 3,
    maxCustomer: 24,
    avgCookie: 1.2,
    customerPERhoure: [],
    cookiesPERhoure: [],

    getCustomers: function (min, max) {
        for (let i = 1; i <= 14; i++) {
            min = Math.ceil(min);
            max = Math.floor(max);
            this.customerPERhoure.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
    },
    getCookies: function () {
        for (let i = 0; i < this.customerPERhoure.length; i++) {
            this.cookiesPERhoure.push(Math.floor(this.customerPERhoure[i] * (6.3)));
        }
    },
    render: function () {
        let container = document.getElementById('mainelement');
        let h1El = document.createElement('h1');
        h1El.textContent = 'tokyo';
        container.appendChild(h1El);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < this.cookiesPERhoure.length; i++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.hoursOFoperation[i]}: `+ this.cookiesPERhoure[i];
        }
        let sum = 0;
        for (let i = 0; i < this.cookiesPERhoure.length; i++){
            sum = sum + this.cookiesPERhoure[i];
        }
        let liTotal = document.createElement('li');
        ulEl.appendChild(liTotal);
        liTotal.textContent = 'total: '+ sum;
    }
}
console.log('tokyo');
tokyo.getCustomers(tokyo.minCustomer, tokyo.maxCustomer);
console.log(tokyo.customerPERhoure);
tokyo.getCookies();
console.log(tokyo.cookiesPERhoure);
tokyo.render();

// ......................................................................Dubai...
let dubai = {
    locationName: 'dubai',
    hoursOFoperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm'
        , '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCustomer: 11,
    maxCustomer: 38,
    avgCookie: 3.7,
    customerPERhoure: [],
    cookiesPERhoure: [],

    getCustomers: function (min, max) {
        for (let i = 1; i <= 14; i++) {
            min = Math.ceil(min);
            max = Math.floor(max);
            this.customerPERhoure.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
    },
    getCookies: function () {
        for (let i = 0; i < this.customerPERhoure.length; i++) {
            this.cookiesPERhoure.push(Math.floor(this.customerPERhoure[i] * (6.3)));
        }
    },
    render: function () {
        let container = document.getElementById('mainelement');
        let h1El = document.createElement('h1');
        h1El.textContent = 'dubai';
        container.appendChild(h1El);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < this.cookiesPERhoure.length; i++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.hoursOFoperation[i]}: `+ this.cookiesPERhoure[i];
        }
        let sum = 0;
        for (let i = 0; i < this.cookiesPERhoure.length; i++){
            sum = sum + this.cookiesPERhoure[i];
        }
        let liTotal = document.createElement('li');
        ulEl.appendChild(liTotal);
        liTotal.textContent = 'total: '+ sum;
    }
}

console.log('dubai');
dubai.getCustomers(dubai.minCustomer, dubai.maxCustomer);
console.log(dubai.customerPERhoure);
dubai.getCookies();
console.log(dubai.cookiesPERhoure);
dubai.render();

// ......................................................................Paris...
let paris = {
    locationName: 'paris',
    hoursOFoperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm'
        , '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCustomer: 20,
    maxCustomer: 38,
    avgCookie: 2.3,
    customerPERhoure: [],
    cookiesPERhoure: [],

    getCustomers: function (min, max) {
        for (let i = 1; i <= 14; i++) {
            min = Math.ceil(min);
            max = Math.floor(max);
            this.customerPERhoure.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
    },
    getCookies: function () {
        for (let i = 0; i < this.customerPERhoure.length; i++) {
            this.cookiesPERhoure.push(Math.floor(this.customerPERhoure[i] * (6.3)));
        }
    },
    render: function () {
        let container = document.getElementById('mainelement');
        let h1El = document.createElement('h1');
        h1El.textContent = 'paris';
        container.appendChild(h1El);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < this.cookiesPERhoure.length; i++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.hoursOFoperation[i]}: `+ this.cookiesPERhoure[i];
        }
        let sum = 0;
        for (let i = 0; i < this.cookiesPERhoure.length; i++){
            sum = sum + this.cookiesPERhoure[i];
        }
        let liTotal = document.createElement('li');
        ulEl.appendChild(liTotal);
        liTotal.textContent = 'total: '+ sum;
    }
}

console.log('paris');
paris.getCustomers(paris.minCustomer, paris.maxCustomer);
console.log(paris.customerPERhoure);
paris.getCookies();
console.log(paris.cookiesPERhoure);
paris.render();

// ......................................................................Lima...
let lima = {
    locationName: 'lima',
    hoursOFoperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm'
        , '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCustomer: 2,
    maxCustomer: 16,
    avgCookie: 4.6,
    customerPERhoure: [],
    cookiesPERhoure: [],

    getCustomers: function (min, max) {
        for (let i = 1; i <= 14; i++) {
            min = Math.ceil(min);
            max = Math.floor(max);
            this.customerPERhoure.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
    },
    getCookies: function () {
        for (let i = 0; i < this.customerPERhoure.length; i++) {
            this.cookiesPERhoure.push(Math.floor(this.customerPERhoure[i] * (6.3)));
        }
    },
    render: function () {
        let container = document.getElementById('mainelement');
        let h1El = document.createElement('h1');
        h1El.textContent = 'lima';
        container.appendChild(h1El);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < this.cookiesPERhoure.length; i++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${this.hoursOFoperation[i]}: `+ this.cookiesPERhoure[i];
        }
        let sum = 0;
        for (let i = 0; i < this.cookiesPERhoure.length; i++){
            sum = sum + this.cookiesPERhoure[i];
        }
        let liTotal = document.createElement('li');
        ulEl.appendChild(liTotal);
        liTotal.textContent = 'total: '+ sum;
    }
}

console.log('lima');
lima.getCustomers(lima.minCustomer, lima.maxCustomer);
console.log(lima.customerPERhoure);
lima.getCookies();
console.log(lima.cookiesPERhoure);
lima.render();