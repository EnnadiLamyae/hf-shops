package org.hf.challenge.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.hf.challenge.entities.Shop;
import org.hf.challenge.entities.User;
import org.hf.challenge.services.ShopService;
import org.hf.challenge.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ShopController {
	
	private final ShopService service;
	private final UserService userService;
	
	
	@Autowired
	public ShopController(final ShopService service, final UserService userService) {
		this.service = service;
		this.userService = userService;
	}
	@RequestMapping(value="/api/shops",method=RequestMethod.GET)
	public ResponseEntity<?> getShops(@RequestParam String username, @RequestParam  double latitude ,@RequestParam  double longitude ){
			 User user = userService.findByUsername(username);
			 Map<String,Shop> evens = user.getPreferredShops();
			 List<Shop> shops = service.findNearby(longitude,latitude);
			 final List<Shop> result = shops.stream()
		     .filter(x -> !evens.containsKey(x.getId()))
		     .collect(Collectors.toList());
			 List<Object> response = new ArrayList<>();
			 response.add(result);
			 response.add(result.size());
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	@RequestMapping(value="/api/preferredShops/add",method=RequestMethod.POST)
	public ResponseEntity<?> likeShop(@RequestParam String username, @RequestParam String id){
	    	User user = userService.findByUsername(username);
	    	Shop shop = service.find(id);
	    	Map<String,Shop> shops = user.getPreferredShops();
	    	shops.putIfAbsent(shop.getId(),shop);
			user = userService.update(user.getId(), user);
		 return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(value="/api/preferredShops",method=RequestMethod.GET)
	public ResponseEntity<?> preferredShops(@RequestParam String username){
		User user = userService.findByUsername(username);
		List<Shop> result = new ArrayList<>(user.getPreferredShops().values());
		List<Object> response = new ArrayList<>();
		 response.add(result);
		 response.add(result.size());
		return new ResponseEntity<>(response,HttpStatus.OK);
	}
	
	@RequestMapping(value="/api/preferredShops/remove",method=RequestMethod.POST)
	public ResponseEntity<?> removeShop(@RequestParam String username,@RequestParam String id){
		User user = userService.findByUsername(username);
    	Map<String,Shop> shops = user.getPreferredShops();
    	Shop shop = service.find(id);
    	if(shop != null && shops.containsKey(shop.getId()))
    		shops.remove(shop.getId());
		user = userService.update(user.getId(), user);
		List<Object> response = new ArrayList<>();
		 response.add(user.getPreferredShops());
		 response.add(user.getPreferredShops().size());
		return new ResponseEntity<>(response,HttpStatus.OK);
	}

}
