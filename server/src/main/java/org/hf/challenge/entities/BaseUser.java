package org.hf.challenge.entities;

import java.io.Serializable;
import java.util.Map;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="users")
public class BaseUser implements Serializable {

	private static final long serialVersionUID = 5528707891743512516L;
	@Id
	private String id;
	private String name;
	private String createdAt;
	private  Map<String,Shop> preferredShops = null;
	private  Map<String,Shop> dislikedShops = null;
	
	public BaseUser() {
		super();
	}

	public BaseUser(String name) {
		this();
		this.name = name;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}

	public  Map<String,Shop> getPreferredShops() {
		return preferredShops;
	}

	public void setPreferredShops( Map<String,Shop> preferredShops) {
		this.preferredShops = preferredShops;
	}

	public  Map<String,Shop> getDislikedShops() {
		return dislikedShops;
	}

	public void setDislikedShops( Map<String,Shop> dislikedShops) {
		this.dislikedShops = dislikedShops;
	}
	

}
