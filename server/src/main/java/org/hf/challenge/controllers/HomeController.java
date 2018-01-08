package org.hf.challenge.controllers;

import java.util.Collections;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	 @RequestMapping(value="/api/home",method = RequestMethod.GET)
	    public ResponseEntity<?> home() {
	        return new ResponseEntity<>("home!", HttpStatus.OK);
	    }
}
