package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.app.Repository.UserInfoRepository;

import com.app.pojos.LoginDetails;
import com.app.pojos.User_info;
import com.app.custom_exceptions.ResourceNotFoundException;
@Service
@Transactional
public class UserInfoService {
  @Autowired
  UserInfoRepository userInfoRepo;

public User_info getUser(int UserInfoId) {

	System.out.println(UserInfoId+"<--------------->");
	try {
		User_info user;
		user= userInfoRepo.findById(UserInfoId).get();
		return user;
	}
	catch(Exception e)
	{
		e.printStackTrace();
		return null;
	}
	
}

public User_info saveUser(User_info u) {

		return userInfoRepo.save(u);
	
	
}

public List<User_info> getAll() {

	return userInfoRepo.findAll();
}

public LoginDetails checkLogin(String email, String password) {
	 List<Object []> u=userInfoRepo.checkLogin(email, password);
	 User_info user=null;
	 System.out.println(u.get(0)[0]);
	 int id=(int)u.get(0)[0];
	 user=getUser(id);
	 LoginDetails loginDetails=new LoginDetails();
	 loginDetails.setUser_id(user.getUser_id());
	 loginDetails.setName(user.getName());
	 loginDetails.setEmail_id(user.getEmail_id());
	 loginDetails.setUserType(user.getUserType());
	 loginDetails.setAddress(user.getAddress());
	 System.out.println(loginDetails.toString());
	return loginDetails;
}
}
