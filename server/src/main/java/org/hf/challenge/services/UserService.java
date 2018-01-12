package org.hf.challenge.services;

import java.util.List;

import org.hf.challenge.entities.Shop;
import org.hf.challenge.entities.User;

public interface UserService {

	 User create(User object);
	 User find(String id);
	 User findByUsername(String userName);
	 List<User> findAll();
	 User update(String id, User object);
	 String delete(String id); 
	 List<Shop> likeShop(String userId,String shopiId);
}
