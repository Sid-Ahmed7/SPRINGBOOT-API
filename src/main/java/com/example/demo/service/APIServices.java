package com.example.demo.service;

import java.util.List;

import com.example.demo.model.API;

public interface APIServices {
	
	//Save in DB
	API CheckWord(API api);
	//Get URL authorized
	List<API> getAuthorized();
	//Delete URL
	Long deleteUrl(String url);

	//void deleteU(Long id);

	

}
