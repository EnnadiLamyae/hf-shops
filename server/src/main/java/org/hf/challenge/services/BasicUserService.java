package org.hf.challenge.services;

import java.time.LocalDateTime;
import java.util.List;

import org.hf.challenge.entities.Shop;
import org.hf.challenge.entities.User;
import org.hf.challenge.repositories.ShopRepository;
import org.hf.challenge.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BasicUserService implements UserService {

	private final UserRepository repository;
	private final ShopRepository shopRepository;
	
	@Autowired
    public BasicUserService(final UserRepository repository,final ShopRepository shopRepository) {
        this.repository = repository;
        this.shopRepository = shopRepository;
    }
	@Override
	public User create(User user) {
		user.setCreatedAt(String.valueOf(LocalDateTime.now()));
        return repository.save(user);
	}

	@Override
	public User find(String id) {
		return repository.findOne(id);
	}

	@Override
	public User findByUsername(String userName) {
		return repository.findByUsername(userName);
	}

	@Override
	public List<User> findAll() {
		return repository.findAll();
	}

	@Override
	public User update(String id, User user) {
		user.setId(id);
        final User saved = repository.findOne(id);
        if (saved != null) {
            user.setCreatedAt(saved.getCreatedAt());
        } else {
            user.setCreatedAt(String.valueOf(LocalDateTime.now()));
        }
        repository.save(user);
        return user;
	}

	@Override
	public String delete(String id) {
		repository.delete(id);
        return id;
	}
	@Override
	public List<Shop> likeShop(String userId,String shopiId) {
		Shop shop = this.shopRepository.findOne(shopiId);
		User user = this.repository.findOne(userId);
		List<Shop> shops= user.getPreferredShops();
		shops.add(shop);
		repository.save(user);
		return shops;
	}

}
