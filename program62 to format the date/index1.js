const dateObj = new Date();

let date = dateObj.getDate();
let month = dateObj.getMonth();
let year  = dateObj.getFullYear();

if(date<10){
date = '0'+date;

}
if(month<10){
    month = '0' +month;
};

const date1 = date +'/'+month+'/'+year;
console.log(date1)
const date2 = month+'-'+date+'-'+year;
console.log(date2)