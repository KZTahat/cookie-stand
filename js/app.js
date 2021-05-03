'use strict';

let cookiesArray = [];
function Cookies(locationNmae,minCustomer,maxCustomer,avgCokkies){
    this.locationName = locationNmae;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.hoursOFoperation= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm'
    , '3pm', '4pm', '5pm', '6pm', '7pm'];
    this.customerPERhoure= [];
    this.cookiesPERhoure= [];
    cookiesArray.push(this);
}

Cookies.prototype.getCustomers = function(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    this.customerPERhoure.push(Math.floor(Math.random() * (max - min + 1) + min));
}