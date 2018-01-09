package org.hf.challenge.repositories;

import java.util.List;

import org.hf.challenge.entities.Shop;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mongodb.DBObject;
import com.mongodb.BasicDBObjectBuilder;

import org.springframework.data.geo.Point;

public interface ShopRepository extends MongoRepository<Shop, String> {

	Shop findByName(String name);
	//public List<Shop> findByLocationNear(Point point);
	

	

	
}
