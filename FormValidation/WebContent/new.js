function ticketsAvailability1() {
  var message, x;
  message = document.getElementById("message");
  message.innerHTML = "";
  x = document.getElementById("number of ticket").value;
  try { 
   
    if(x > 50) throw "maximum number of ticket is 50";
    else{
  	alert("Congratulation ticket is available") 
    }
    
  }
  catch(err) {s
    message.innerHTML = "Input " + err;
  }
}
function ticketsAvailability() {
	var d1 = document.getElementById("stdate").value;
	var d2 = document.getElementById("rtdate").value;
	var email = document.getElementById("userEmail").value;
	if(email==""){
		document.getElementById('emailDetails').innerHTML="Email cannot be empty!";
		document.getElementById("prcbtn").disabled=true;
		
	}
	//var fl = verifyPlaces();
	if(d1==""){
		document.getElementById('errstdate').innerHTML="Enter a start date!"; 
		document.getElementById("prcbtn").disabled=true;
	}
	if(d2==""){
		document.getElementById('errrtdate').innerHTML="Enter a end date!"; 
		document.getElementById("prcbtn").disabled=true;
	}
	var p1 = document.getElementById("splace").value;
	var p2 = document.getElementById("dplace").value;
	
	if(p1==p2){
		document.getElementById('errplace').innerHTML="Source and Destination cannot be of the same place!";
		document.getElementById("prcbtn").disabled=true;
	}
	if(d1>d2&&d2!=""){
		document.getElementById('errstdate').innerHTML="Start date cannot be lesser than return date!";
		document.getElementById("prcbtn").disabled=true;
		
	}
	
	
	else{
		
		//document.getElementById("prcbtn").disabled=true;
	var ticketsCount = document.getElementById('numberofticket').value;
	var availableTickets = 51 - parseInt(ticketsCount);
    var container = document.getElementById("container");
	if(availableTickets > 0 ){
	  	//alert("Congratulation " + availableTickets+  " tickets is available");
		document.getElementById("prcbtn").disabled=false;
		console.log("Calling tableCreate()");
		console.log("ticketsCount is - " + ticketsCount);
		//var container = document.getElementById('container');
		while (container.hasChildNodes()) {
			container.removeChild(container.lastChild);
	    }
		 tableCreate(ticketsCount);
	  }
	if(parseInt(ticketsCount) > 50 ){
	  	//alert("Congratulation " + availableTickets+  " tickets is available");
		alert("Maximum seats are 50. Cannot book more than 50 seats4.");
		
	}
	if(parseInt(ticketsCount) == 0 ){
	  	//alert("Congratulation " + availableTickets+  " tickets is available");
		alert("Book at least 1 ticket");
		
	}
	}
}


function tableCreate(num) {
	  var tabdiv = document.getElementById('container');
	  var tbl = document.createElement('table');
	  tbl.style.offsetWidth;
	  var tbdy = document.createElement('tbody');
	  var trh = document.createElement('tr');
		var th = document.createElement('th');
		th.innerHTML = "Name";
		trh.appendChild(th);
		th = document.createElement('th');
		th.innerHTML = "Gender";
		trh.appendChild(th);
		th = document.createElement('th');
		th.innerHTML = "Age";
		trh.appendChild(th);
		th = document.createElement('th');
		th.innerHTML = "Price(Rs)";
		trh.appendChild(th);
		tbdy.appendChild(trh);
		tbl.appendChild(tbdy);
		tabdiv.appendChild(tbl);
	  for (var i = 0; i < num; i++) {
		  console.log("i is - " + i);
	    var tr = document.createElement('tr');
	    for (var j = 0; j < 4; j++) {
	    	console.log("j is - " + j);
	    	var td = document.createElement('td');
			var input;
			if(j!=1){
			input = document.createElement("input");
			input.type = "text";
			input.name = "member" + i;
			input.value="";
			}else{
				input = document.createElement("select");
				input.setAttribute("name", "gendropdown");
				input.setAttribute("id", "gendd");

			    option = document.createElement("option");
			    option.setAttribute("value", "Male");
			    option.innerHTML = "Male";
			    input.appendChild(option);

			    option = document.createElement("option");
			    option.setAttribute("value", "Female");
			    option.innerHTML = "Female";
			    input.appendChild(option);
			}
			if(j==0){
				//input.setAttribute("onkeypress", "return check(event,value)");
				input.setAttribute("oninput", "checkLength(40,this)");
			}else if(j==2){
				input.setAttribute("maxlength", "2");
				input.setAttribute("size", "1");
				input.id="AgeDetails"
				//input.setAttribute("onkeypress", "return isNumber(event)");
			}else if(j==3){
				input.setAttribute("size", "3");
				input.readOnly=true;
			}
	
	/*if(j==2){
	input.disabled = true;
	}*/
	        td.appendChild(input)
	        tr.appendChild(td)
	    }
	    tbdy.appendChild(tr);
	  }
	  tbl.appendChild(tbdy);
	  tabdiv.appendChild(tbl)
//	  var Agedetails=document.getElementById('AgeDetails');
//	  if(Agedetails>0)
//		  {
//		  document.getElementById('prcbtn').disabled=false;
//		  }
	}


function removeSdaterr(){
	document.getElementById('errstdate').innerHTML=""; 
}

function removeRdaterr(){
	document.getElementById('errrtdate').innerHTML=""; 
}

function selectdate(){
//	var todaysDate = new Date(); // Gets today's date
//    // Max date attribute is in "YYYY-MM-DD".  Need to format today's date accordingly
//    var year = todaysDate.getFullYear(); 
//    var month = ("0" + (todaysDate.getMonth() + 1)).slice(-2);  // MM
//    var day = ("0" + todaysDate.getDate()).slice(-2);           // DD
//    var minDate = (year +"-"+ month +"-"+ day); // Results in "YYYY-MM-DD" for today's date 
//    // Now to set the max date value for the calendar to be today's date
//    $('.calendarDate input').attr('min',minDate);
//   $(document).ready(function(){
//	   $("#stdate").datepcker({
//		   minDate:-1
//	   });
//   });
   $(function () {
       var date = new Date();
       var currentMonth = date.getMonth(); // current month
       var currentDate = date.getDate(); // current date
       var currentYear = date.getFullYear(); //this year
       $("#stdate").datepicker({
           changeMonth: true, // this will allow users to chnage the month
           changeYear: true, // this will allow users to chnage the year
           minDate: new Date(currentYear, currentMonth, currentDate)
          
       });
   });
   clearFields();
}
function verifyPlaces(){
	var p1 = document.getElementById("splace").value;
	var p2 = document.getElementById("dplace").value;
	var pl=0;
	if(p1==p2){
		document.getElementById('errplace').innerHTML="Source and Destination cannot be of the same place!";
		pl=1;
	}else{
		document.getElementById('errplace').innerHTML="";
	}
	document.getElementById('addpass').disabled=true;
	clearFields();
	removeEntryTables();
	return pl;
}
function clearFields() {
	var container, inputs, index;

	container = document.getElementById('passform');
	inputs = container.getElementsByTagName('input');
	while (inputs[0]) {
		inputs[0].remove();
	}
	textin = container.getElementsByTagName('label');
	while (textin[0]) {
		textin[0].remove();
	}
	document.getElementById('passdet').value="";
	document.getElementById('passdet').disabled=true;
}

function removeEntryTables(){
	var container = document.getElementById("passform");
	// Clear previous contents of the container
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}	
}
function getPrice(){
	var tbldiv = document.getElementById('container');
	var tblrow = tbldiv.getElementsByTagName('tr');
	var price;
	for (var i = 1; i < tblrow.length; i++) {
                price=2000;
                var d2 = document.getElementById("rtdate").value;
                if(d2==""){
                price = price/2;
                }
		var age = tblrow[i].getElementsByTagName('td')[2].getElementsByTagName('input')[0].value;
		var gender = tblrow[i].getElementsByTagName('td')[1].getElementsByTagName('select')[0].value;
		if(age>60){
			price = price-(.10*price);
		}else if(age<=11){
			price = 0;
		}else if(gender=="Female"){
			price = price-(.05*price);
		}
		tblrow[i].getElementsByTagName('td')[3].getElementsByTagName('input')[0].value=price;
	}
	var container = document.getElementById("totalspan");
	var txt = document.createElement("label");
	txt.innerHTML = "Total: ";
	container.appendChild(txt)
	// Create an <input> element, set its type and name attributes
	var input = document.createElement("input");
	input.type = "text";
	input.id="priceDetails";
	input.value = totalPrice();
	input.readOnly=true;
	container.appendChild(input);
	var priceDetails = document.getElementById("priceDetails").value;
	if(priceDetails>0){
		var p1 = document.getElementById("splace").value;
		var p2 = document.getElementById("dplace").value;
		var d1 = document.getElementById("stdate").value;
		var d2 = document.getElementById("rtdate").value;
		if(p1!=p2){
			//
			var email = document.getElementById("userEmail").value;
			if(email!="")
				{
            if(d1=="")
            	{
            	document.getElementById('errstdate').innerHTML="Enter a start date!";
            	}
            if(d2=="")
        	{
        	document.getElementById('errrtdate').innerHTML="Enter a end date!";
        	}
            if(d1>d2)
            	{
            	document.getElementById('errstdate').innerHTML="Start date cannot be lesser than return date!";
        		
            	}
            else{
		      document.getElementById('subbtn').disabled=false;
            }
				}
			else
				{
				//alert("Please enter email!");
				document.getElementById('emailDetails').innerHTML="Please enter email!"; 
				}
		}
		else
			{
			alert("Source and destination cannot be same");
			}
	}
	//document.getElementById('subbtn').disabled=false;
}

function totalPrice(){
	var tbldiv = document.getElementById('container');
	var tblrow = tbldiv.getElementsByTagName('tr');
	var tot=parseInt("0") ;
	for (var i = 1; i < tblrow.length; i++) {
		tot=tot + parseInt(tblrow[i].getElementsByTagName('td')[3].getElementsByTagName('input')[0].value);
	}
	return tot;
}
function verifyDates(){
	var d1 = document.getElementById("stdate").value;
	var d2 = document.getElementById("rtdate").value;
	//var fl = verifyPlaces();
	if(d1==""){
		document.getElementById('errstdate').innerHTML="Enter a start date!"; 
		//fl=1;
	}

	if(d1>d2&&d2!=""){
		document.getElementById('errstdate').innerHTML="Start date cannot be lesser than return date!";
		//fl=1;
	}
//	if(fl==0){
//		document.getElementById('errstdate').innerHTML=""; 
//		document.getElementById('errrtdate').innerHTML="";
//		document.getElementById('errplace').innerHTML="";
//		document.getElementById('stavail').innerHTML="Congratulations! 50 tickets available.";
//		document.getElementById('passdet').disabled=false;		
//		document.getElementById('addpass').disabled=false;
//	}
	clearFields();
}
function succMsg(){

	var p1 = document.getElementById("splace").value;
	var p2 = document.getElementById("dplace").value;

	document.getElementById('tsuccessmesg').innerHTML="Tickets booked successfully from " + p1 + " to " + p2 + ". Have a nice journey"; 
	
	}


$(document).ready(function(){
	var dtToday = new Date(); 
	var month = dtToday.getMonth() + 1;
	var day = dtToday.getDate();
	var year = dtToday.getFullYear();
	if(month < 10)
		month = '0' + month.toString();
	if(day < 10)
		day = '0' + day.toString(); 
	var maxDate = year + '-' + month + '-' + day;
	$('#stdate').attr('min', maxDate);
	$('#rtdate').attr('min', maxDate);
	clearFields();
});