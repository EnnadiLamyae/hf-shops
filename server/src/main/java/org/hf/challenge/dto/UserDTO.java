package org.hf.challenge.dto;

import java.io.Serializable;
import java.util.List;

import org.hf.challenge.encoder.BCryptPasswordDeserializer;
import org.hf.challenge.entities.Shop;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;


public class UserDTO implements Serializable {

	private static final long serialVersionUID = -2188995204060257406L;

	private String username;
	@JsonDeserialize(using = BCryptPasswordDeserializer.class)
    private String password;
    private String name;
    
    private List<Shop> preferredShops;
   

	public UserDTO() {
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

	public String getName() {
		return name;
	}

	public void setName(final String name) {
		this.name = name;
	}
    
	public List<Shop> getPreferredShops() {
		return preferredShops;
	}

	public void setPreferredShops(List<Shop> preferredShops) {
		this.preferredShops = preferredShops;
	}
}
