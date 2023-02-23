package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.validation.annotation.Validated;


//import com.app.dto.LoginRequestDto;
import com.app.pojos.LoginDetails;
import com.app.pojos.User_info;
import com.app.service.UserInfoService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class User_infoController {
	@Autowired
	UserInfoService userInfoService;

	// fetch By Id
	@GetMapping("/{UserInfoId}")
	public User_info getUser(@PathVariable int UserInfoId) {
		System.out.println(UserInfoId + "<----------->");

		return userInfoService.getUser(UserInfoId);

	}

	// register user
	@PostMapping("/saveUser")
	public User_info saveUser(@RequestBody User_info u) {
		// System.out.println(u);
		return userInfoService.saveUser(u);
	}

	// get All User
	@GetMapping("/getAll")
	public List<User_info> getAll() {
		return userInfoService.getAll();
	}

	@PostMapping("/login")
	public LoginDetails checkLogin(@RequestBody User_info u) {
		return userInfoService.checkLogin(u.getEmail_id(), u.getPassword());
	}
	
//	@PostMapping("/login")
//	public LoginDetails validateEmployee(@RequestBody LoginRequestDto dto)
//	{
//		System.out.println("in emp signin "+dto);
//		return userInfoService.authenticateEmp(dto);
//	}
}
