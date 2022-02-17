function myFunctionOne() {
//   e.preventDefault();
  let tip;
  let totalTip;
  let billTotal;
  let bill = Number(document.getElementById("money").value);
  let people = Number(document.getElementById("people").value);

  tip = bill * 0.05;
  if( people !== 0){

    totalTip = tip / people;

    document.getElementById("tip").innerHTML = "$" + totalTip.toFixed(2);

    billTotal = (tip + bill) / people;
    document.getElementById("total").innerHTML = "$" + billTotal.toFixed(2);
    document.getElementById("empyt").innerHTML = "";
    document.getElementById("people").style = "";
    document.getElementById("custom").value = "";

  }else{
    document.getElementById("empyt").innerHTML = "Can´t be zero";
    document.getElementById("empyt").style.color = "#FF0000";
    document.getElementById("people").style.outline = "2px solid #FF0000";
  
    
  }
  
}

function myFunctionTwo() {
//   e.preventDefault();
  let tip;
  let totalTip;
  let billTotal;
  let bill = Number(document.getElementById("money").value);
  let people = Number(document.getElementById("people").value);

  tip = bill * 0.10;

  totalTip = tip / people;

  if (people !== 0) {
    totalTip = tip / people;

    document.getElementById("tip").innerHTML = "$" + totalTip.toFixed(2);

    billTotal = (tip + bill) / people;
    document.getElementById("total").innerHTML = "$" + billTotal.toFixed(2);
    document.getElementById("empyt").innerHTML = "";
    document.getElementById("people").style = "";
    document.getElementById("custom").value = "";
  } else {
    document.getElementById("empyt").innerHTML = "Can´t be zero";
    document.getElementById("empyt").style.color = "#FF0000";
    document.getElementById("people").style.outline = "2px solid #FF0000";
  }
}

function myFunctionThree() {
//   e.preventDefault();
  let tip;
  let totalTip;
  let billTotal;
  let bill = Number(document.getElementById("money").value);
  let people = Number(document.getElementById("people").value);

  tip = bill * 0.15;

  totalTip = tip / people;

  if (people !== 0) {
    totalTip = tip / people;

    document.getElementById("tip").innerHTML = "$" + totalTip.toFixed(2);

    billTotal = (tip + bill) / people;
    document.getElementById("total").innerHTML = "$" + billTotal.toFixed(2);
    document.getElementById("empyt").innerHTML = "";
    document.getElementById("people").style = "";
    document.getElementById("custom").value = "";
  } else {
    document.getElementById("empyt").innerHTML = "Can´t be zero";
    document.getElementById("empyt").style.color = "#FF0000";
    document.getElementById("people").style.outline = "2px solid #FF0000";
  }
}

function myFunctionFour() {
//   e.preventDefault();
  let tip;
  let totalTip;
  let billTotal;
  let bill = Number(document.getElementById("money").value);
  let people = Number(document.getElementById("people").value);

  tip = bill * 0.25;

  if (people !== 0) {
    totalTip = tip / people;

    document.getElementById("tip").innerHTML = "$" + totalTip.toFixed(2);

    billTotal = (tip + bill) / people;
    document.getElementById("total").innerHTML = "$" + billTotal.toFixed(1);
    document.getElementById("empyt").innerHTML = "";
    document.getElementById("people").style = "";
    document.getElementById("custom").value = "";
  } else {
    document.getElementById("empyt").innerHTML = "Can´t be zero";
    document.getElementById("empyt").style.color = "#FF0000";
    document.getElementById("people").style.outline = "2px solid #FF0000";
  }
}


function myFunctionFive() {
//   e.preventDefault();
  let tip;
  let totalTip;
  let billTotal;
  let bill = Number(document.getElementById("money").value);
  let people = Number(document.getElementById("people").value);
  let empyt = Number(document.getElementById('empyt'));

  tip = bill * 0.50;

  if (people !== 0) {
    totalTip = tip / people;

    document.getElementById("tip").innerHTML = "$" + totalTip.toFixed(2);

    billTotal = (tip + bill) / people;
    document.getElementById("total").innerHTML = "$" + billTotal.toFixed(2);
    document.getElementById("empyt").innerHTML = "";
    document.getElementById("people").style = "";
    document.getElementById("custom").value = "";
  } else{
    document.getElementById("empyt").innerHTML = "Can´t be zero";
    document.getElementById("empyt").style.color = "#FF0000";
    document.getElementById("people").style.outline = "2px solid #FF0000";
  }
}


function custom(){

    let x = Number(document.getElementById('custom').value) / 100;
    let bill = Number(document.getElementById("money").value);
    let people = Number(document.getElementById("people").value);

    
    if(people === 0 || bill === 0){
      document.getElementById("tip").innerHTML = "$0.00";
      document.getElementById("total").innerHTML = "$0.00";
      document.getElementById("empyt").innerHTML = "Can´t be zero";
      document.getElementById("empyt").style.color = "#FF0000";
      document.getElementById("people").style.outline = "2px solid #FF0000";
      
    }else{

      x = (bill * x) / people;

      document.getElementById("tip").innerHTML = "$" + x.toFixed(2);

      x = x + bill / people;

      document.getElementById("total").innerHTML = "$" + x.toFixed(2);

      document.getElementById("empyt").innerHTML = "";
      document.getElementById("people").style = "";
    }
    
}

function noTip(){

    let totalPerson;
    let bill = Number(document.getElementById("money").value);
    let people = Number(document.getElementById("people").value);

    totalPerson = bill / people;
    

    if(people !== 0 && people !== ""){
       document.getElementById("total").innerHTML = "$"+totalPerson.toFixed(2);
       document.getElementById("empyt").innerHTML = ""
       document.getElementById("people").style = "";
       document.getElementById("custom").value = "";
    }else{
        document.getElementById("empyt").innerHTML = "Can´t be zero";
        document.getElementById("empyt").style.color = "#FF0000";
        document.getElementById("people").style.outline = "2px solid #FF0000";
        document.getElementById("tip").innerHTML = "$0.00";
    }
   
}


function reset(){
    
    document.getElementById('money').value = "";
    document.getElementById('people').value = "";
    document.getElementById('custom').value = "";
    document.getElementById('tip').innerHTML = "$0.00";
    document.getElementById('total').innerHTML = "$0.00";
    document.getElementById("empyt").innerHTML = "";
    document.getElementById("people").style = "";
}