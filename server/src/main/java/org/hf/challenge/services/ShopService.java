package org.hf.challenge.services;

import java.util.List;

import org.hf.challenge.entities.Shop;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.data.domain.Page;


public interface ShopService {

	public Shop find(String id);
	public Shop findByName(String name);
	public List<Shop> findAll();
	public List<Shop> findNearby(double lon, double lat);
	
}
