package org.hf.challenge.entities;

import java.io.Serializable;

public class Location implements Serializable{

	private static final long serialVersionUID = 6337055089285009909L;
	
	private String type;
	private Double coordinates[];
	
	public Location() {
		super();
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Double[] getCoordinates() {
		return coordinates;
	}

	public void setCoordinates(Double[] coordinates) {
		this.coordinates = coordinates;
	}
	
	
}
