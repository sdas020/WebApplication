package com.form.logic;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class MyServlet
 */
public class MyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MyServlet()  {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		PrintWriter out = response.getWriter();
		out.print("Done");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request,response);
		response.setContentType("text/html");  
		PrintWriter out = response.getWriter();  
		          
		String SourcePoint=request.getParameter("SourcePoint");  
		String DestinationPoint=request.getParameter("DestinationPoint");  
		String Name=request.getParameter("Name");
		String Gender=request.getParameter("Gender");
		String Age=request.getParameter("Age");
		String NumberOfTicket=request.getParameter("NumberOfTicket");
		String userEmail=request.getParameter("userEmail");
		out.print("You are successfully registered..."+SourcePoint+DestinationPoint+
				Name+Gender+Age+NumberOfTicket+userEmail); 
		//out.println("Ticket number generated :"+SourcePoint.substring(0, 2)+DestinationPoint.substring(0, 2)+
			//	Name.substring(0, 2)+Gender.substring(0, 2)+Age.substring(0, 2)+NumberOfTicket.substring(0, 2)+userEmail.substring(0, 2));
		
	}

}
