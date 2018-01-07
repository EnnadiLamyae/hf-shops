package org.hf.challenge.controllers;

import org.hf.challenge.services.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShopController {
	
	private final ShopService service;
	
	@Autowired
	public ShopController(final ShopService service) {
		this.service = service;
	}
	@RequestMapping(value="/shops",method=RequestMethod.GET)
	public ResponseEntity<?> getShops(){
		 return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
	}
	
	@RequestMapping(value="/shops/{id}",method=RequestMethod.GET)
	public ResponseEntity<?> shopById(@PathVariable String id){
		 return new ResponseEntity<>(service.find(id), HttpStatus.OK);
	}
	
	@RequestMapping(value="/shops/{name}",method=RequestMethod.GET)
	public ResponseEntity<?> shopByName(@PathVariable String name){
		 return new ResponseEntity<>(service.findByName(name), HttpStatus.OK);
	}

}
