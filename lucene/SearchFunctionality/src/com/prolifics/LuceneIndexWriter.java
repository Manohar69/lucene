package com.prolifics;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.List;
import java.util.Set;

import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.DoubleField;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.LongField;
import org.apache.lucene.document.StringField;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.index.IndexWriterConfig.OpenMode;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;
import org.apache.lucene.util.Version;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

/**
 * Created by suay on 5/13/14.
 */
public class LuceneIndexWriter {

	String indexPath = "indexDir";

	String jsonFilePath = "/ICDCodes.json";

	IndexWriter indexWriter = null;

	public LuceneIndexWriter(String indexPath, String jsonFilePath) {
		this.indexPath = indexPath;
		this.jsonFilePath = jsonFilePath;
	}

	public void createIndex() throws Exception, ParseException {
		JSONArray jsonObjects = parseJSONFile();
		openIndex();
		addDocuments(jsonObjects);
		finish();
	}

	/**
	 * Parse a Json file. The file path should be included in the constructor
	 * 
	 * @throws ParseException
	 * @throws IOException
	 */
	public JSONArray parseJSONFile() throws IOException, Exception {

		// Get the JSON file, in this case is in ~/resources/test.json
		InputStream jsonFile = getClass().getResourceAsStream(jsonFilePath);

		System.out.println("jsonFilePath-------" + jsonFile);
		Reader readerJson = new InputStreamReader(jsonFile);

		// Parse the json file using simple-json library
		Object fileObjects = JSONValue.parse(readerJson);

		JSONArray arrayObjects = (JSONArray) fileObjects;

		/*
		 * JSONParser parser = new JSONParser(); Object obj = parser.parse(readerJson);
		 * JSONArray arrayObjects = new JSONArray(); arrayObjects.add(obj);
		 */
		return arrayObjects;

	}

	public boolean openIndex() {
		try {
			Directory dir = FSDirectory.open(new File(indexPath));
			Analyzer analyzer = new StandardAnalyzer(Version.LUCENE_48);
			IndexWriterConfig iwc = new IndexWriterConfig(Version.LUCENE_48, analyzer);

			// Always overwrite the directory
			iwc.setOpenMode(OpenMode.CREATE);
			indexWriter = new IndexWriter(dir, iwc);

			return true;
		} catch (Exception e) {
			System.err.println("Error opening the index. " + e.getMessage());

		}
		return false;

	}

	/**
	 * Add documents to the index
	 */
	public void addDocuments(JSONArray jsonObjects) {

		for (JSONObject object : (List<JSONObject>) jsonObjects) {
			// printJsonObject(object);

			// }
			Document doc = new Document();
			for (String field : (Set<String>) object.keySet()) {
				Class type = object.get(field).getClass();
				if (type.equals(String.class)) {
					doc.add(new StringField(field, (String) object.get(field), Field.Store.YES));
				} else if (type.equals(Long.class)) {
					doc.add(new LongField(field, (long) object.get(field), Field.Store.YES));
				} else if (type.equals(Double.class)) {
					doc.add(new DoubleField(field, (double) object.get(field), Field.Store.YES));
				} else if (type.equals(Boolean.class)) {
					doc.add(new StringField(field, object.get(field).toString(), Field.Store.YES));
				}
			}
			try {
				if (doc.getFields().size() > 0)
					indexWriter.addDocument(doc);
			} catch (IOException ex) {
				System.err.println("Error adding documents to the index. " + ex.getMessage());
			}

		}
	}

	public void printJsonObject(JSONObject jsonObj) {
		for (Object key : jsonObj.keySet()) {
			// based on you key types
			String keyStr = (String) key;
			Object keyvalue = jsonObj.get(keyStr);
			Document doc = new Document();
			// Print key and value
			//System.out.println("key: " + keyStr + " value: " + keyvalue);
			Class type = jsonObj.get(keyStr).getClass();
			if (type.equals(String.class)) {

				doc.add(new StringField(keyStr, (String) jsonObj.get(keyStr), Field.Store.YES));
			} /*
				 * else if(type.equals(Long.class)){ doc.add(new LongField(keyStr,
				 * (long)jsonObj.get(keyStr), Field.Store.YES)); }else
				 * if(type.equals(Double.class)){ doc.add(new DoubleField(keyStr,
				 * (double)jsonObj.get(keyStr), Field.Store.YES)); }
				 */else if (type.equals(Boolean.class)) {
				doc.add(new TextField(keyStr, jsonObj.get(keyStr).toString(), Field.Store.YES));

			}
			try {
				if (doc.getFields().size() > 0)
					indexWriter.addDocument(doc);
			} catch (IOException ex) {
				System.err.println("Error adding documents to the index. " + ex.getMessage());
			}
			// for nested objects iteration if required
			if (keyvalue instanceof JSONObject)
				printJsonObject((JSONObject) keyvalue);
		}
	}

	/**
	 * Write the document to the index and close it
	 */
	public void finish() {
		try {
			indexWriter.commit();
			indexWriter.close();
		} catch (IOException ex) {
			System.err.println("We had a problem closing the index: " + ex.getMessage());
		}
	}

}