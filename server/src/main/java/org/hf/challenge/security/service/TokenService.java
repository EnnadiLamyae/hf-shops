package org.hf.challenge.security.service;

public interface TokenService {

	String getToken(String username, String password);
	
}
