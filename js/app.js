'use strict';

let cookiesArray = [];
function Cookies(locationName, minCustomer, maxCustomer, avgCookies) {
    this.locationName = locationName;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies
    this.hoursOFoperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm'
        , '3pm', '4pm', '5pm', '6pm', '7pm'];
    this.customerPERhoure = [];
    this.cookiesPERhoure = [];
    this.totalCookies = 0;
    cookiesArray.push(this);
}

Cookies.prototype.getCustomers = function () { // .................get random customer
    for (let i = 0; i < this.hoursOFoperation.length; i++) {
        let min = Math.ceil(this.minCustomer);
        let max = Math.floor(this.maxCustomer);
        this.customerPERhoure.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
}
Cookies.prototype.getCookies = function () { // ....................get Cookies method
    for (let i = 0; i < this.hoursOFoperation.length; i++) {
        let sum = Math.floor(this.customerPERhoure[i] * this.avgCookies);
        this.cookiesPERhoure.push(sum);
        this.totalCookies += sum;
    }
}
let container = document.getElementById('mainelement');
let tableEl = document.createElement('table');
Cookies.prototype.tableHeader = function () { // ................... Header Render
    container.appendChild(tableEl);
    let tR1 = document.createElement('tr');
    tableEl.appendChild(tR1);
    let th1 = document.createElement('th');
    tR1.appendChild(th1);
    for (let i = 0; i < this.hoursOFoperation.length; i++) {
        let th = document.createElement('th');
        tR1.appendChild(th);
        th.textContent = this.hoursOFoperation[i];
    }
    let th2 = document.createElement('th');
    tR1.appendChild(th2);
    th2.textContent = 'Daily Location Total';
}
Cookies.prototype.seattleRender = function () { //................. Seattle Render
    let tR2 = document.createElement('tr');
    tableEl.appendChild(tR2);
    let td1 = document.createElement('td');
    tR2.appendChild(td1);
    td1.textContent = this.locationName;
    for (let i = 0; i < this.hoursOFoperation.length; i++) {
        let td = document.createElement('td');
        tR2.appendChild(td);
        td.textContent = this.cookiesPERhoure[i];
    }
    let td2 = document.createElement('td');
    tR2.appendChild(td2);
    td2.textContent = this.totalCookies;
}
Cookies.prototype.tokyoRender = function () { //................. Tokyo Render
    let tR3 = document.createElement('tr');
    tableEl.appendChild(tR3);
    let td1 = document.createElement('td');
    tR3.appendChild(td1);
    td1.textContent = this.locationName;
    for (let i = 0; i < this.hoursOFoperation.length; i++) {
        let td = document.createElement('td');
        tR3.appendChild(td);
        td.textContent = this.cookiesPERhoure[i];
    }
    let td2 = document.createElement('td');
    tR3.appendChild(td2);
    td2.textContent = this.totalCookies;
}
Cookies.prototype.dubaiRender = function () { //................. Dubai Render
    let tR4 = document.createElement('tr');
    tableEl.appendChild(tR4);
    let td1 = document.createElement('td');
    tR4.appendChild(td1);
    td1.textContent = this.locationName;
    for (let i = 0; i < this.hoursOFoperation.length; i++) {
        let td = document.createElement('td');
        tR4.appendChild(td);
        td.textContent = this.cookiesPERhoure[i];
    }
    let td2 = document.createElement('td');
    tR4.appendChild(td2);
    td2.textContent = this.totalCookies;
}
Cookies.prototype.parisRender = function () { //................. Paris Render
    let tR5 = document.createElement('tr');
    tableEl.appendChild(tR5);
    let td1 = document.createElement('td');
    tR5.appendChild(td1);
    td1.textContent = this.locationName;
    for (let i = 0; i < this.hoursOFoperation.length; i++) {
        let td = document.createElement('td');
        tR5.appendChild(td);
        td.textContent = this.cookiesPERhoure[i];
    }
    let td2 = document.createElement('td');
    tR5.appendChild(td2);
    td2.textContent = this.totalCookies;
}
Cookies.prototype.limaRender = function () { //................. Lima Render
    let tR6 = document.createElement('tr');
    tableEl.appendChild(tR6);
    let td1 = document.createElement('td');
    tR6.appendChild(td1);
    td1.textContent = this.locationName;
    for (let i = 0; i < this.hoursOFoperation.length; i++) {
        let td = document.createElement('td');
        tR6.appendChild(td);
        td.textContent = this.cookiesPERhoure[i];
    }
    let td2 = document.createElement('td');
    tR6.appendChild(td2);
    td2.textContent = this.totalCookies;
}
Cookies.prototype.totalRaw = function () { //................. Total Render
    let tR7 = document.createElement('tr');
    tableEl.appendChild(tR7);
    let td1 = document.createElement('td');
    tR7.appendChild(td1);
    td1.textContent = 'Total';

    for (let i = 0; i < this.hoursOFoperation.length; i++) { // ......First column summation :)
        let td = document.createElement('td');
        tR7.appendChild(td);
        let sum = 0;
        for (let j = 0; j < cookiesArray.length; j++) {
            sum += cookiesArray[j].cookiesPERhoure[i];
        }
        td.textContent = sum;
    }

    let td2 = document.createElement('td'); // ..................Total of Totals :)
    tR7.appendChild(td2);
    let sum = 0;
    for (let i = 0; i < cookiesArray.length; i++) {
        sum += cookiesArray[i].totalCookies;
    }
    td2.textContent = sum;
}


//............................... NEW Instances addmission and thier function calls
let seattle = new Cookies('seattle', 23, 65, 6.3);
seattle.tableHeader();
seattle.getCustomers();
seattle.getCookies();
seattle.seattleRender();
let tokyo = new Cookies('tokyo', 3, 24, 1.2);
tokyo.getCustomers();
tokyo.getCookies();
tokyo.tokyoRender();
let dubai = new Cookies('dubai', 11, 38, 3.7);
dubai.getCustomers();
dubai.getCookies();
dubai.dubaiRender();
let paris = new Cookies('paris', 20, 38, 2.3);
paris.getCustomers();
paris.getCookies();
paris.parisRender();
let lima = new Cookies('lima ', 2, 16, 4.6);
lima.getCustomers();
lima.getCookies();
lima.limaRender();
lima.totalRaw();