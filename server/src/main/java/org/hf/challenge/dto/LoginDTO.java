package org.hf.challenge.dto;

import java.io.Serializable;

public class LoginDTO implements Serializable {

	private static final long serialVersionUID = -2397862632167312186L;
	private String username;
    private String password;
    
	public LoginDTO() {
		super();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(final String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(final String password) {
		this.password = password;
	}
    
    
}
