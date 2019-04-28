<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="style.css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="new.js"></script>
<title>Flight booking System</title>
</marquee><h1>Welcome to Flight booking System</h1></marquee>
</head>
<body BACKGROUND="image.jpeg">

  <input type="radio" name="JourneyType" id="OnwardJorney" onclick="enableDisable(this.unchecked, 'rtdate')">OnwardJorney
  <input type="radio" name="JourneyType" id="ReturnJouney" onclick="enableDisable(this.checked, 'rtdate')">ReturnJourney<br><br>
  
<label>SourcePoint</label>   
<select id="splace" name="SourcePoint" onchange="verifyPlaces()" disabled> 
<option>Select</option>  
<option>India</option>  
<option>Pakistan</option>  
<option>China</option> 
</select>
<label>DestinationPoint</label> 
<select id="dplace" name="DestinationPoint" onchange="verifyPlaces()" disabled>  
<option>Select</option> 
<option>India</option>  
<option>Pakistan</option>  
<option>China</option> 
</select> 
<span id="errplace"></span>
<label>Start Date: </label>
<input type="date" id="stdate" onchange="selectdate()" disabled>
<span id="errstdate"></span>
</p>
<p>
<label>Return Date: </label>
<input type="date" id="rtdate" name="rday" onclick="verifyDates()" disabled>
<span id="errrtdate"></span> 
</p>
<span id="emailDetails"></span>
enter email:<input type="email" id="userEmail" onchange="emailFieldverification()" disabled>
<p id="emailspace" style="color: red;"></p>
<span id="numberofTicketDetails"></span>
enter number of seats to book:<input type="number" name="NumberOfTicket" id="numberofticket"  min=0 oninput="validity.valid||(value='');" value="" disabled/> 
<button type="button" id="SeatsAvailabilityDetails" class="Seats availability" name="Seats availability" onclick="ticketsAvailability()" disabled>Check seats availability</button>
<div id="passform">
</div>
<p id="message"></p>
<div id="smtfinal">
<span id="totalspan"></span>
<input id="prcbtn" type="button" onclick="getPrice()" value="Estimate Price" disabled>
<input id="subbtn" type="button" onclick="succMsg()" value="Book Now" disabled>
<input id="canbtn" type="button" onclick="refresh()" value="Cancel" disabled>
<span id="tsuccessmesg"></span>
</div>
<div id="container">
</div>
<p>

<!--  <marquee behavior="alternate"><img src="AirIndia.jpg" href="http://www.airindia.in/"
src="SpiceJetAirliness.jpg" href="https://www.spicejet.com/"-->

<!--<marquee behavior="alternate"><img src="SpiceJetAirliness.jpg" href="https://www.spicejet.com/"></marquee>
<marquee behavior="alternate"><img src="Indigo.jpg" href="https://www.goindigo.in/" ></marquee>-->
<marquee >
<div style="width:1200;  height:400px; overflow:scroll; overflow-x: scroll;overflow-y: hidden;">

      <img src="AirIndia.jpg" alt="AirIndia" usemap="AirIndia" onlick="AirIndia()"/>
      
      <img src="SpiceJetAirliness.jpg" ="https://www.spicejet.com/"/>
      <img src="Indigo.jpg" href="https://www.goindigo.in/" >
     

    </div>
    </marquee>
<!-- enter name:<input type="text" name="Name"/> 
<label>Gender</label> 
<select name="Gender" >  
<option>Male</option>  
<option>Female</option>
</select>  
enter Age:<input type="text" name="Age"/>
  
<br/><br/>  
<input type="submit" value="send"/>  
  
</form>
<form method="post" action="SendSMS.jsp">
Message:<br>
<input type="text" name="message">
<br>
Mobile Number:<br>
<input type="text" name="phone">
<br>
<br><br>
<input type="submit" name="save" value="submit">
</form>-->

</body>
</html>