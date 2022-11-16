package com.example.demo.repository;

import com.example.demo.model.API;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface APIRepository extends JpaRepository<API, Long> {

	//Find WORD
	API findByWord(String word);
	API findByUrl(String url);
	//Delete ByURL
	Long deleteByUrl(String url);
	

	
}
