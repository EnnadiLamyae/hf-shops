package org.hf.challenge.repositories;

import org.hf.challenge.entities.Shop;
import org.hf.challenge.entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ShopRepository extends MongoRepository<Shop, String> {

	Shop findByName(String name);
}
