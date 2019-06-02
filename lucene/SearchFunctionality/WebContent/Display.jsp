
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.*"%>
<%@ page language="java" import="java.util.*, java.lang.*"%>
<%@page import="com.prolifics.getData"%>
<!DOCTYPE>
<html>
<head>
<style>
body {
	background-image: url("lgn.jpg");
}

table, th, td {
	text-align: centre;
	border: 1px solid black;
	border-collapse: collapse;
}

th, td {
	padding: 10px;
}
</style>
</head>
<body>
	<%
		String[] Arr = new String[10];
		int x;
		x = (int) session.getAttribute("n");
		List<String[]> result = new ArrayList<String[]>();
		result = (List<String[]>) session.getAttribute("Array");
		int size = result.size();
	%>

	<form action=getData>


		<h1>Search Results</h1>
		<h2>
			<%
				out.print("Total Found: " + size + " Result(s)");
			%>
		</h2>
		<tr>
			<%
				Iterator itr = result.iterator();
				//traversing elements of ArrayList object  
				while (itr.hasNext()) {
					String[] st = (String[]) itr.next();
			%>
			</br>
			<%
				for (String res : st)
						out.print(res + "\n");

				}
			%>
		</tr>
		</br> </br> <input type="hidden" name="hdnbt" value="Hello" /> <input
			type="submit" name="bt" value="Re Search"
			onclick="{document.frm.hdnbt.value=this.value;document.frm.submit();}" />

	</form>
</body>
</html>
