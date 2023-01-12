// console.log("running");

function addtask(){
    // console.log("running if");
    if (document.querySelector(".item").value.length==0){
       alert("Please enter a task");
    }
    else{
        // console.log("running else");
        document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML +`
        <div class="displayitem">
        <input type="checkbox" class="taskcheck">
        <span class="tasktext">
        ${document.querySelector(".item").value}
        </span>
        <button class="delete" ><i class="fa-solid fa-trash-can"></i></button>
        </div>`;
        document.querySelector(".item").value="";
        update();
    }

var task_del= document.querySelectorAll(".delete");
for(var i=0;i<task_del.length;i++){
    task_del[i].onclick=function(){
        this.parentNode.remove();
        update();
    }
}
}
function update(){
var count= $(".displayitem").find("*").length;
// console.log(count);
if(count==0){
    // console.log(document.getElementById("hh"));
   document.getElementById("hh").style.opacity= '0';
}
else{
    document.getElementById("hh").style.opacity= '1';
}
}
// function del(){
//     var task_del= document.querySelectorAll(".delete");
//     task_del[0].parentNode.remove();
// }
function timing(){
    // console.log("calling");
let date=new Date();
// console.log(date.getFullYear());
let hour=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();
document.getElementById("time").innerHTML=hour+" : "+min+" : "+sec;
let da=date.getDate();
let month=date.getMonth();
let year=date.getFullYear();
let string="";
switch(month+1){
    case 1: string="JANUARY";
    // console.log("calling");
break;
case 2: string="FEBRUARY";
break;
case 3: string="MARCH";
break;
case 4: string="APRIL";
break;
case 5: string="MAY";
break;
case 6: string="JUNE";
break;
case 7: string="JULY";
break;
case 8: string="AUGUST";
break;
case 9: string="SEPTEMBER";
break;
case 10: string="OCTOBER";
break;
case 11: string="NOVEMBER";
break;
case 12: string="DECEMBER";
break;
}
document.getElementById("month").innerHTML=da+", "+ string+", " + year;
let day=date.getDay();
let str="";
switch(day){
    case 1: str="MONDAY";
    // console.log("calling");
break;
case 2: str="TUESDAY";
break;
case 3: str="WEDNESDAY";
break;
case 4: str="THURSDAY";
break;
case 5: str="FRIDAY";
break;
case 6: str="SATURDAY";
break;
case 7: str="SUNDAY";
break;
}
document.getElementById("day").innerHTML=str;

}
setInterval(timing,1000);