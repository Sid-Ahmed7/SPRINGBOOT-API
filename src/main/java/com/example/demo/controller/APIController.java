package com.example.demo.controller;

import org.springframework.http.ResponseEntity;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;

import com.example.demo.service.APIServices;
import com.example.demo.model.API;
import com.example.demo.response.ResponseHandler;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class APIController {
	
	APIServices services;

	public APIController(APIServices services) {
	    super();
		this.services = services;
	}
	
	//POST METHOD
	@PostMapping("/content/check")
	public ResponseEntity<Object> CheckWord(@RequestBody API api, String url) throws IOException {

		url = api.geturl();
		try {
			URL ulr = new URL(url);
			URLConnection urlConnection = ulr.openConnection();
			BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
			String line;
			while ((line = bufferedReader.readLine()) != null) {
				if (line.contains(api.getword())) {
					return ResponseHandler.generateResponse("rejected", HttpStatus.OK,api.getword());
				}
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
		return ResponseHandler.generateResponse("accepted", HttpStatus.OK, services.CheckWord(api));
	}
	
	
	//GET METHOD
	@GetMapping("/content")
	public ResponseEntity<List<API>> getAuthorized() {
		List<API> reference = services.getAuthorized();
		if (reference.isEmpty()) {
			return new ResponseEntity<List<API>>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<List<API>>(reference,HttpStatus.OK);
		}
	}

	//DELETE METHOD
		@DeleteMapping("/content/supp")
	public ResponseEntity<String> deleteByUrl(@RequestBody API api){
		try{
			String url = api.geturl();
			
			Long id = services.deleteUrl(url);
			return new ResponseEntity<String>("Deleted successfully!.",HttpStatus.OK);
		}catch (Exception e){
			return new ResponseEntity<String>("URL not found!.",HttpStatus.BAD_REQUEST);
		}
}
//delete by id
/*@DeleteMapping("content/${id}")
	public ResponseEntity <String> deleteId(@PathVariable Long id) {
		try{
		services.deleteU(id);
		return new ResponseEntity<String>(" Deleted successfully!.", HttpStatus.OK);
	}catch (Exception e){
	return new ResponseEntity<String>("URL not found!.",HttpStatus.BAD_REQUEST);
}
	}
	/*@DeleteMapping("/content")
	public ResponseEntity<String> delete(@RequestBody API api){
		try{
			services.deleteAll(api);
			return new ResponseEntity<String>("URL deleted successfully!.",HttpStatus.OK);
		}catch (Exception e){
			return new ResponseEntity<String>("URL not found!.",HttpStatus.BAD_REQUEST);
		}*/
		
	}


