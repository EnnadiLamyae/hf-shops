package org.hf.challenge.services;

import java.util.List;

import org.hf.challenge.entities.Shop;
import org.hf.challenge.repositories.ShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BasicShopService implements ShopService {
	
	private final ShopRepository repository;
	
	@Autowired
	public BasicShopService(final ShopRepository repository) {
		this.repository = repository;
	}

	@Override
	public Shop find(String id) {
		return repository.findOne(id);
	}

	@Override
	public Shop findByName(String name) {
		return repository.findByName(name);
	}

	@Override
	public List<Shop> findAll() {
		return repository.findAll();
	}

}
