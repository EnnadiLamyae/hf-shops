package org.hf.challenge.controllers;




import java.util.ArrayList;
import java.util.List;

import org.hf.challenge.entities.Shop;
import org.hf.challenge.services.ShopService;
import org.hf.challenge.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.support.PagedListHolder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.geo.Point;


@RestController
public class ShopController {
	
	private final ShopService service;
	private final UserService userService;
	
	@Autowired
	public ShopController(final ShopService service,final UserService userService) {
		this.service = service;
		this.userService = userService;
	}
	@RequestMapping(value="/api/shops",method=RequestMethod.GET)
	public ResponseEntity<?> getShops(@RequestParam  double latitude ,@RequestParam  double longitude /*,@RequestParam int page*/){
		 List<Shop> shops = service.findNearby(longitude,latitude);
		 List<Object> response = new ArrayList<>();
		 response.add(shops);
		 response.add(shops.size());
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	@RequestMapping(value="/shops/like",method=RequestMethod.GET)
	public ResponseEntity<?> likeShop(@RequestParam String user, @RequestParam String shop){
		 return new ResponseEntity<>(userService.likeShop(user, shop), HttpStatus.OK);
	}
	
	@RequestMapping(value="/shops/dislike/{userId}",method=RequestMethod.GET)
	public ResponseEntity<?> dislikeShop(@PathVariable String id){
		 return new ResponseEntity<>(service.find(id), HttpStatus.OK);
	}
	
	@RequestMapping(value="/shops/preferred",method=RequestMethod.GET)
	public ResponseEntity<?> shopByName(@PathVariable String name){
		 return new ResponseEntity<>(service.findByName(name), HttpStatus.OK);
	}

}
