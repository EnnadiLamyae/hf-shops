package org.hf.challenge.services;

import java.util.List;

import org.hf.challenge.entities.Shop;

public interface ShopService {

	public Shop find(String id);
	public Shop findByName(String name);
	public List<Shop> findAll();
	
}
