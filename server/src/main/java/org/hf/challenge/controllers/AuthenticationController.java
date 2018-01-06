package org.hf.challenge.controllers;

import org.hf.challenge.dto.LoginDTO;
import org.hf.challenge.dto.TokenDTO;
import org.hf.challenge.security.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/signin")
public class AuthenticationController {

	  private final TokenService tokenService;

	    @Autowired
	    public AuthenticationController(final TokenService tokenService) {
	        this.tokenService = tokenService;
	    }

	    @RequestMapping(method = RequestMethod.POST)
	    public ResponseEntity<?> authenticate(@RequestBody final LoginDTO dto) {
	        final String token = tokenService.getToken(dto.getUsername(), dto.getPassword());
	        if (token != null) {
	            final TokenDTO response = new TokenDTO();
	            response.setToken(token);
	            return new ResponseEntity<>(response, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>("Authentication failed", HttpStatus.BAD_REQUEST);
	        }
	    }
}
