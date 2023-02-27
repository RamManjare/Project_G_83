package com.app.service;

import java.util.List;
import java.util.Optional;

//import com.app.dto.LoginRequestDto;
import com.app.pojos.LoginDetails;
import com.app.pojos.User_info;

public interface IUserInfoService {
	User_info getUser(int UserInfoId) ;

	User_info saveUser(User_info u);

	List<User_info> getAll();

	String deleteUserDetails(int userInfoId);

	LoginDetails checkLogin(String email_id, String password);

	User_info updateUserDetails(User_info detachedUser);

//	Optional<User_info> authenticateEmp(LoginRequestDto dto);
}
