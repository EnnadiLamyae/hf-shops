package org.hf.challenge.repositories;

import org.hf.challenge.entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

	User findByUsername(final String userName);
}
