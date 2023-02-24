package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.*;
import com.app.service.RatingsService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class RatingsController {

	@Autowired
	RatingsService ratingService;
	
	@PostMapping("/saveRating")
	public Ratings saveUser(@RequestBody Ratings r)
	{
		//System.out.println(u);
		return ratingService.saveRatings(r);
	}
	
	//get All User
	@GetMapping("/getAllRatings")
	public List<Ratings> getAll()
	{
		return ratingService.getAll();
	}
}
