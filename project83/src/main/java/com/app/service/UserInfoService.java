package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.app.Repository.UserInfoRepository;

import com.app.pojos.LoginDetails;
import com.app.pojos.User_info;
import com.app.custom_exceptions.ResourceNotFoundException;

//import com.app.dto.LoginRequestDto;
@Service
@Transactional
public class UserInfoService implements IUserInfoService  {
  @Autowired
  UserInfoRepository userInfoRepo;
@Override
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
@Override
public User_info saveUser(User_info u) {

		return userInfoRepo.save(u);
	
	
}
@Override
public List<User_info> getAll() {

	return userInfoRepo.findAll();
}
@Override
public String deleteUserDetails(int userInfoId) {
	if(userInfoRepo.existsById(userInfoId)) 
	{
		userInfoRepo.deleteById(userInfoId);
		return "user details deleted ....";
	}
	return "Deletion Failed : Invalid user Id !!!!!!!!!!!";
}

@Override
public User_info updateUserDetails(User_info detachedUser) {
	// confirm if user with id exists !
	if (userInfoRepo.existsById(detachedUser.getUser_id())) {
		userInfoRepo.save(detachedUser);
	}
	return detachedUser;
}

@Override
public LoginDetails checkLogin(String email, String password) {
	 List<Object []> u=userInfoRepo.checkLogin(email, password);
	 User_info user=null;
	// System.out.println(u.get(0)[0]);
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
//public Optional<User_info> authenticateEmp(LoginRequestDto dto) {
//	// TODO Auto-generated method stub
//	return userInfoRepo.findByEmailAndPassword(dto.getEmail(), dto.getPassword());
//}




}
