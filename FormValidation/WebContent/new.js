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
	var ticketsCount = document.getElementById('numberofticket').value;
	var availableTickets = 50 - parseInt(ticketsCount);
    var container = document.getElementById("container");
	if(availableTickets > 0 ){
	  	//alert("Congratulation " + availableTickets+  " tickets is available");
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
		alert("Maximum seats are 50. Cannot book more than 50 seats.");
	  
	}
}


function tableCreate(num) {
	  var tabdiv = document.getElementById('container');
	  var tbl = document.createElement('table');
	  tbl.style.offsetWidth;
	  var tbdy = document.createElement('tbody');
	  for (var i = 0; i < num; i++) {
		  console.log("i is - " + i);
	    var tr = document.createElement('tr');
	    for (var j = 0; j < 3; j++) {
	    	console.log("j is - " + j);
	        var td = document.createElement('td');
	var input = document.createElement("input");
	        input.type = "text";
	        input.name = "member" + i;
	input.value="";
	
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
	}


function removeSdaterr(){
	document.getElementById('errstdate').innerHTML=""; 
}

function removeRdaterr(){
	document.getElementById('errrtdate').innerHTML=""; 
}