package com.prolifics;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.catalina.servlet4preview.ServletContext;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.index.Term;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.search.FuzzyQuery;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TermQuery;
import org.apache.lucene.search.TopDocs;
import org.apache.lucene.search.WildcardQuery;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;
import org.apache.lucene.util.Version;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import jdk.internal.dynalink.support.ClassLoaderGetterContextProvider;

/**
 * Servlet implementation class getData
 */
@WebServlet(name = "getData1", urlPatterns = { "/getData1" })
public class getData extends HttpServlet {

	List<String[]> resultList = new ArrayList<String[]>();

	JSONArray jArray = new JSONArray();

	int th;

//	ClassLoader classLoader = getClass().getClassLoader();

	public String INDEX_PATH = "indexDir";

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// System.out.println(System.getProperty("index.path"));
		resultList.clear();
		jArray.clear();

		// System.out.println("Index Path"+INDEX_PATH);
		String data = request.getParameter("data");
		System.out.println("Data is:"+data);

		// System.out.println("Present Project Directory : "+
		// System.getProperty("user.dir"));

		long startTime = System.nanoTime();

		/*
		 * LuceneIndexWriterTest liwt = new LuceneIndexWriterTest();
		 * liwt.testWriteIndex();
		 */
		if(data!=null) {
		try {
			testQueryLucene(data);
		} catch (Exception e) {
			e.printStackTrace();
		}
		}

		
		response.setContentType("application/json");
         System.out.println("JARRAY IS:");
         System.out.println(jArray.toString());
		response.getWriter().print(jArray);
		long endTime = System.nanoTime();
		long totalTime = endTime - startTime;

		double seconds = (double) totalTime / 1000000000.0;
		System.out.println("Total Time of Execution: " + seconds + " seconds.");

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

	public void testQueryLucene(String input) throws Exception {
		// Directory indexDirectory = FSDirectory.open(new File(INDEX_PATH));
		System.out.println(INDEX_PATH);
		Directory indexDirectory = FSDirectory.open(new File(getServletContext().getRealPath(INDEX_PATH)));
		//Directory indexDirectory = FSDirectory.open(new File("/var/dha/indexDir"));
		System.out.println("Before opening index reader");
		System.out.println(indexDirectory);
		IndexReader indexReader = DirectoryReader.open(indexDirectory);
		System.out.println("IndexReader:"+indexReader);
		System.out.println("After opening index reader");
		final IndexSearcher indexSearcher = new IndexSearcher(indexReader);
		String[] A = { "InternalIDEDG1", "ICD10Code", "Description" };
		for (int j = 0; j < A.length; j++) {
			String x = "*" + input + "*";
			Term t = new Term(A[j], x);
			Query query = new WildcardQuery(t);

			TopDocs topDocs = indexSearcher.search(query, 50);
			th = topDocs.totalHits;

			String querystr = input;
			StandardAnalyzer analyzer = new StandardAnalyzer(Version.LUCENE_48);

			ScoreDoc[] hits = topDocs.scoreDocs;

			for (int i = 0; i < hits.length; ++i) {
				int docId = hits[i].doc;
				Document d = indexSearcher.doc(docId);
				JSONObject obj = new JSONObject();
				obj.clear();
				String[] rowData = new String[3];

				rowData[0] = d.get("InternalIDEDG1");
				rowData[1] = d.get("ICD10Code");
				rowData[2] = d.get("Description");
				obj.put("InternalIDEDG1", rowData[0]);
				obj.put("ICD10Code", rowData[1]);
				obj.put("Description", rowData[2]);

				jArray.add(obj);

			}
			System.out.println(jArray.toString());
		}

	}

}
