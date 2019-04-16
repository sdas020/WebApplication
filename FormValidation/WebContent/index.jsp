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
<h1>Welcome to Flight booking System</h1>
</head>
<body BACKGROUND="image.jpeg">
<form > 
<label>SourcePoint</label>   
<select name="SourcePoint" >  
<option>India</option>  
<option>Pakistan</option>  
<option>China</option> 
<option>Other</option> 
</select>
<label>DestinationPoint</label> 
<select name="DestinationPoint" >  
<option>India</option>  
<option>Pakistan</option>  
<option>China</option> 
<option>Other</option>  
</select> 
<label>Start Date: </label>
<input type="date" id="stdate" onchange="removeSdaterr()">
<span id="errstdate"></span>
</p>
<p>
<label>Return Date: </label>
<input type="date" id="rtdate" name="rday" onchange="removeRdaterr()">
<span id="errrtdate"></span>
</p>
enter email:<input type="text" name="userEmail"/>
enter number of seats to book:<input type="number" name="NumberOfTicket" id="numberofticket" value=""/> 
<button type="button" class="Seats availability" name="Seats availability" onclick="ticketsAvailability()">Check seats availability</button>

<p id="message"></p>


<div id="container">
</div>


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