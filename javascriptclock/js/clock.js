function addZero(num){
    if (num<10) 
    return "0"+num;
    else return num;
}

function getTurkishDay(dayOfWeek){
    let day="";
    switch(dayOfWeek){
    case 0:
        day = "Pazar";
        break;
      case 1:
        day = "Pazartesi";
        break;
      case 2:
         day = "Salı";
        break;
      case 3:
        day = "Çarşamba";
        break;
      case 4:
        day = "Perşembe";
        break;
      case 5:
        day = "Cuma";
        break;
      case 6:
        day = "Cumartesi";
        break;
    }
    return day
}

function showTime(){
    var now = new Date();
    var str = "";
    let second=addZero(now.getSeconds());
    let minutes=addZero(now.getMinutes());
    let hours=addZero(now.getHours());
    let day=getTurkishDay(now.getDay())
    str=hours+ ":" + minutes + ":" + second +" "+ day;
    document.getElementById("myClock").innerHTML= str;
}
setInterval(showTime,1000);


let fullname = prompt("Lütfen Adınızı Giriniz")

document.getElementById("myName").innerHTML =fullname




