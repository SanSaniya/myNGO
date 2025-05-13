var dt = new Date();

function RenderDate(){
var day = dt.getDay(); 
console.log(dt.getDay());

var endDate = new Date(
    dt.getFullYear(),
    dt.getMonth() +1, 
    0
).getDate();
var prevDate = new Date(
    dt.getFullYear(),
    dt.getMonth(), 
    0
).getDate();  

var today = new Date();
var months = [
    "January", "Febuary", "March", "April", "May", "June", "July", "august", "September", "october", "November", "December"
];

console.log(months[dt.getMonth()]);

document.getElementById("#date_str").innerHTML = dt.toDateString();

document.getElementById("#month").innerHTML = months[dt.getMonth()];
var cells = " "; 
for(x = day ; x>0 ; x--){
    cells += "<div class = 'prev-date'>" + (prevDate - x + 1) + "</div>";
};

for(i=1; i<= endDate; i++){
    if(i==today.getDate() && dt.getMonth()==today.getMonth()){ //active date condition
    cells+="<div class='today'>" + i + "</div>";
    }else{                                                      
        cells+="<div>" + i + "</div>";
    }
}

document.getElementsByClassName("days")[0].innerHTML = cells;

}

//moving of months in the calendar
function moveDate(para){
    if(para == 'prev'){
        dt.setMonth(dt.getMonth() - 1);
        RenderDate();
    }
    else if(para == 'next'){
        dt.setMonth(dt.getMonth() + 1);
        RenderDate();
    }
}
