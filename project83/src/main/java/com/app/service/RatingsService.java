package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Repository.RatingsRepository;
import com.app.pojos.*;


@Service
public class RatingsService {
	
	@Autowired
	RatingsRepository ratingsRepo;
	
	public Ratings saveRatings(Ratings rating)
	{
		return ratingsRepo.save(rating);
	}
	
	public List<Ratings> getAll()
	{
		return ratingsRepo.findAll();
	}
	
}
