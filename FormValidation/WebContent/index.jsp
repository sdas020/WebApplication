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
<form > 
<label>SourcePoint</label>   
<select id="splace" name="SourcePoint" onchange="verifyPlaces()">  
<option>India</option>  
<option>Pakistan</option>  
<option>China</option> 
<option>Other</option> 
</select>
<label>DestinationPoint</label> 
<select id="dplace" name="DestinationPoint" onchange="verifyPlaces()">  
<option>India</option>  
<option>Pakistan</option>  
<option>China</option> 
<option>Other</option>  
</select> 
<span id="errplace"></span>
<label>Start Date: </label>
<input type="date" id="stdate" onchange="selectdate()">
<span id="errstdate"></span>
</p>
<p>
<label>Return Date: </label>
<input type="date" id="rtdate" name="rday" onchange="selectdate()">
<span id="errrtdate"></span> 
</p>
enter email:<input type="text" name="userEmail"/>
enter number of seats to book:<input type="number" name="NumberOfTicket" id="numberofticket" value=""/> 
<button type="button" class="Seats availability" name="Seats availability" onclick="ticketsAvailability()">Check seats availability</button>
<div id="passform">
</div>
<p id="message"></p>
<input id="prcbtn" type="submit" onclick="getPrice()" value="Estimate Price" disabled>
<input id="subbtn" type="submit" onclick="succMsg()" value="Book Now" disabled>

<div id="container">
</div>
<p>
<label>Number of Passengers: </label>
  <input type="text" name="passengers" maxlength="2" size="1" id="passdet" value="" onkeypress="return isNumber(event)">
  <input id="addpass" type="submit" class="btn btn-large btn-primary" onclick="addTables()" value="Add" disabled>
  <span id="tablerr"></span>
</p>
<!--  <marquee behavior="alternate"><img src="AirIndia.jpg" href="http://www.airindia.in/"
src="SpiceJetAirliness.jpg" href="https://www.spicejet.com/"-->
c></marquee>
<!--<marquee behavior="alternate"><img src="SpiceJetAirliness.jpg" href="https://www.spicejet.com/"></marquee>
<marquee behavior="alternate"><img src="Indigo.jpg" href="https://www.goindigo.in/" ></marquee>-->
<marquee >
<div style="width:900;  height:250px; overflow:scroll; overflow-x: scroll;overflow-y: hidden;">

      <img src="AirIndia.jpg" nlick()="AirIndia()"/>
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