package org.hf.challenge.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	 @RequestMapping(value="/",method = RequestMethod.GET)
	    public ResponseEntity<?> home() {
	        return new ResponseEntity<>("home!", HttpStatus.OK);
	    }
}
