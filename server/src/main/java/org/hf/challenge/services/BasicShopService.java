package org.hf.challenge.services;

import java.util.ArrayList;
import java.util.List;

import org.hf.challenge.entities.Shop;
import org.hf.challenge.repositories.ShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mongodb.BasicDBObjectBuilder;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;

import org.springframework.data.mongodb.core.MongoTemplate;

@Service
public class BasicShopService implements ShopService {
	
	private final ShopRepository repository;
	private MongoTemplate mongoTemplate;
	
	@Autowired
	public BasicShopService(final ShopRepository repository,final MongoTemplate mongoTemplate) {
		this.repository = repository;
		this.mongoTemplate = mongoTemplate;
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

	
	private DBObject buildGeoQuery(double lon, double lat) {
		// Mongo uses longitude, latitude combination
		Double[] coordinates = new Double[] {lon, lat};
		DBObject geometryContent = BasicDBObjectBuilder.start().add("type", "Point")
				.add("coordinates", coordinates).get();
		DBObject nearContent = BasicDBObjectBuilder.start().add("$geometry", geometryContent)
				.get();
		DBObject locationContent = BasicDBObjectBuilder.start().add("$near", nearContent).get();
		return locationContent;
	}

	@Override
	public List<Shop> findNearby(double lon, double lat) {

		List<Shop> shops=null;
		DBObject geoQuery = buildGeoQuery(lon, lat);
		DBObject location = BasicDBObjectBuilder.start().add("location", geoQuery).get();
		DBCursor cursor = mongoTemplate.getCollection("shops").find(location);
		shops = cursor.hasNext() ? new ArrayList<Shop>() : null;
		while (cursor.hasNext()) {
			DBObject empDBObject = (DBObject)cursor.next();
			Shop shop= mongoTemplate.getConverter().read(Shop.class, empDBObject);
			shops.add(shop);
		}
		
		return shops;
	}

}
