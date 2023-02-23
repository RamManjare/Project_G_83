package com.app.Repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Mess_Owner;


public interface MessOwnerRepository extends JpaRepository<Mess_Owner, Integer> {
	
	@Query("Select m.mess_id from Mess_Owner m where user_id= :user_id ")
	public List<Object []> getMessById(int user_id);

}