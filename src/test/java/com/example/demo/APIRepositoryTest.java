package com.example.demo;


import java.util.List;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import com.example.demo.model.API;
import com.example.demo.repository.APIRepository;




@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)

public class APIRepositoryTest {
    
    @Autowired
     private APIRepository apiRepository;

	@Test
    @Order(1)
    @Rollback(value = false)
    public void  CheckWordTest(){

        API api = new API();
        api.setUrl("https://dzone.com/articles/how-to-deploy-an-erc-20-smart-contract-on-avalanch");
        api.setWord("bonjour");

        apiRepository.save(api);
    }
	@Test
    @Order(2)
	
	public void getListofAutowiredTest() {
	    List<API> autowired = apiRepository.findAll();
	    Assertions.assertThat(autowired.size()).isGreaterThan(0);
	}
	
    
}
