package com.app.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.app.pojos.User_info;
@Repository
public interface UserInfoRepository extends JpaRepository<User_info, Integer> {
	//Optional<User_info> findById( int UserInfoId);
	@Query("Select u.user_id, u.name from User_info u where email_id= :email and password= :password")
	public List<Object []> checkLogin(String email,String password);

	//public Optional<User_info> findByEmailAndPassword(String email, String password);

}
