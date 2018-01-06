package org.hf.challenge.dto;

import java.io.Serializable;

public class TokenDTO implements Serializable {

	private static final long serialVersionUID = 5639653311806920618L;
	
	private String token;

	public TokenDTO() {
		super();
	}

	public String getToken() {
		return token;
	}

	public void setToken(final String token) {
		this.token = token;
	}
	
	

}
