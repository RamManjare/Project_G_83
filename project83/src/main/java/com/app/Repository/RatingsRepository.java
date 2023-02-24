package com.app.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Ratings;

public interface RatingsRepository extends JpaRepository<Ratings, Integer> {
	
	@Query("Select r.rating_id from Ratings r where mess_id= :mess_id ")
	public List<Object []> getMenuById(int mess_id);

}
