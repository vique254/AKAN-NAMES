var  maleNames = [" Kwasi","Kwadwo","Kwabena"," Kwaku","Yaw","Kofi","Kwame"]

 var femaleNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua", "Ama"]

 var dayOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


function giveAkanName (){

    var month= parseInt(document.getElementById("month").value);
    var day =parseInt(document.getElementById("day").value);
    var year =parseInt(document.getElementById("year").value);
    var gender = getGender();

    var date =new Date(year +"/" + month + "/"+day);

    var dayBorn = date.getDay();

    var akanName;
    
    if(gender ==="male"){
        akanName = maleNames[dayBorn];
    }
    else{
        akanName = femaleNames[dayBorn];
    }

    alert("You were born on "+dayOfTheWeek[dayBorn]+ " and your Akan name is "+akanName);
}

function getGender(){
    var gender = document.getElementsByName("gender");
    
    for(i = 0; i < gender.length; i++){
        if(gender[i].checked){
            return(gender[i].value)
        }
    }

}