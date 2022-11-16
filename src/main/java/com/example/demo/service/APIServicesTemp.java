package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.model.API;
import com.example.demo.repository.APIRepository;

@Service
@Transactional
public class APIServicesTemp implements APIServices {

	private APIRepository apiRepository;

	public APIServicesTemp(APIRepository apiRepository) {
	    super();
		this.apiRepository = apiRepository;
		}
	
	@Override
	public API CheckWord(API api) {
		
		if( (apiRepository.findByWord(api.getword())!= null) && (apiRepository.findByUrl(api.geturl())!= null)) {
			
			throw new RuntimeException("Word already exists");
		}
	
	
		return apiRepository.save(api);
	}

	@Override
	public List<API> getAuthorized() {
		List<API> content = new ArrayList<API>();
		apiRepository.findAll().forEach(urll -> content.add(urll));
		return content;
	}

	@Override
	public Long deleteUrl (String url){
		 return apiRepository.deleteByUrl(url);
	}

	/*@Override
	public void deleteU(Long id){
	    apiRepository.deleteById(id);
	}*/

	
}