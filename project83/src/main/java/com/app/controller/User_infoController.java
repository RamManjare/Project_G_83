package com.app.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.validation.annotation.Validated;

//import com.app.dto.LoginRequestDto;
import com.app.pojos.LoginDetails;
import com.app.pojos.User_info;
import com.app.service.IUserInfoService;
import com.app.service.UserInfoService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class User_infoController {
	@Autowired
	IUserInfoService userInfoService;

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
//
//	@DeleteMapping("/{UserInfoId}")
//	public String deleteUserDetails(@PathVariable int UserInfoId)
//	{
//		System.out.println("in del emp "+UserInfoId);
//		return userInfoService.deleteUserDetails(UserInfoId);
//	}
	 
//	@PutMapping
//	public User_info updateUserDetails(@RequestBody User_info detachedUser)
//	{
//		System.out.println("in update user "+detachedUser.getUser_id());//not null
//		return userInfoService.updateUserDetails(detachedUser);
//	}
	
//	@PutMapping("/{UserInfoId}")
//	public User_info updateUserDetails(@PathVariable int UserInfoId ,@RequestBody User_info detachedUser)
//	{
//		System.out.println("in update user "+detachedUser.getUser_id());//not null
//		return userInfoService.updateUserDetails(detachedUser);
//	}
	@PostMapping("/login")
	public LoginDetails checkLogin(@RequestBody User_info u) {
		return userInfoService.checkLogin(u.getEmail_id(), u.getPassword());
	}
	
//	@PostMapping("/signin")
//	public Optional<User_info> validateUser(@RequestBody LoginRequestDto dto)
//	{
//		System.out.println("in user signin "+dto);
//		return userInfoService.authenticateEmp(dto);
//	}
}
