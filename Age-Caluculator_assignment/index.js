function Age(){
    let date =document.getElementById("dob-day").value;//21
    let month = document.getElementById("dob-month").value;
    let year = document.getElementById("dob-year").value;
    
    let d = new Date()//12
    let d1 = d.getDate();
    console.log(d1)
    let m = 1+d.getMonth()
    let y = d.getFullYear()
    let leap = [31,28,31,30,31,30,31,31,30,31,30,31]
    if(month && isNaN(month)===false &&
       date && isNaN(date) === false &&
       year && isNaN(year) === false
    )
    {
    if (date>d1){//21>12
        d1 = d1+leap[m-1]//
    }
    if(month>m){
        m = m+12;
        y = y-1
    }
    var date1= d1-date
    var month1 = m-month
    var year1 = y -year
    document.getElementById("age").innerHTML =
    "Your Age is " +year1 +"Years "+month1+"Months "+date1+"Days"
}
else{
    if((!month || isNaN(month)) && (!date || isNaN(date))  && (!year || isNaN(year))){
        document.getElementById("age").innerHTML ="Please input valid data for month year field"
    }

   
    else if(!date || isNaN(date)){
        document.getElementById("age").innerHTML ="Please input valid date field"
    }

   
       else  if(!month|| isNaN(month)){
            document.getElementById("age").innerHTML ="Please input valid date field"
        }
    }

}


