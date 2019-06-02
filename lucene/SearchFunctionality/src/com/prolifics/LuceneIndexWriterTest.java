package com.prolifics;



import java.io.File;
import java.io.IOException;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.index.Term;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TermQuery;
import org.apache.lucene.search.TopDocs;
import org.apache.lucene.search.TopScoreDocCollector;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;
import org.apache.lucene.util.Version;

import com.prolifics.LuceneIndexWriter;


/**
 * Created by suay on 5/13/14.
 */
public class LuceneIndexWriterTest {
	//static final String INDEX_PATH = "D:\\DHA SEARCH ENGINE\\SearchBOX\\src\\indexDir";
    static final String INDEX_PATH = "indexDir";
    static final String JSON_FILE_PATH = "/ICDCodes.json";


    public void testWriteIndex(){
        try {
            LuceneIndexWriter lw = new LuceneIndexWriter(INDEX_PATH, JSON_FILE_PATH);
            lw.createIndex();
                 
            //Check the index has been created successfully
            Directory indexDirectory = FSDirectory.open(new File(INDEX_PATH));
            IndexReader indexReader = DirectoryReader.open(indexDirectory);

            int numDocs = indexReader.numDocs();
            System.out.println("Number of DOCS"+numDocs);
       

            for ( int i = 0; i < numDocs; i++)
            {
            	
                Document document = indexReader.document( i);
              // System.out.println( "d=" +document);
            }


        } catch (Exception e) {
            e.printStackTrace();
        }
    }



  
    
}
