package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;



@EntityScan("com.example.demo.model")
@EnableAutoConfiguration
@SpringBootApplication
public class ApiApplication {

	public static void main(String[] args) {
		
		
		SpringApplication.run(ApiApplication.class, args);
	}

	
}
