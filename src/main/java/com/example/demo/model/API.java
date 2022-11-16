package com.example.demo.model;

import javax.persistence.GeneratedValue;

import javax.persistence.GenerationType;
import javax.persistence.Id;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Table;

@Table(name = "API")
@Entity
public class API implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String url;
	private String word;

	public API() {
	}

	public API(Long id, String url, String word) {
		super();
		this.id = id;
		this.url = url;
		this.word = word;

	}

	public Long getId() {
		return id;
	}

	public String geturl() {
		return url;
	}

	public String getword() {
		return word;
	}

	public void setID(Long id) {
		this.id = id;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public void setWord(String word) {
		this.word = word;
	}

}
