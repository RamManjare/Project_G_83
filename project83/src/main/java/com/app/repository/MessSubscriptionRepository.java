package com.app.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Mess_Subscription;
public interface MessSubscriptionRepository extends JpaRepository<Mess_Subscription, Integer>{

	@Query("Select  m.subscription_id from Mess_Subscription m where mess_id= :mess_id ")
	public List<Object []> getSubscriptionOfMess(int mess_id);
	
	@Query("Select  m.subscription_id from Mess_Subscription m where user_id= :user_id ")
	public List<Object []> getMySubscriptionList(int user_id);
	
	
}
