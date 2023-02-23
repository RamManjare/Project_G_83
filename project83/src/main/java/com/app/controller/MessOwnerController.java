package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Menu_Table;
import com.app.pojos.Mess_Owner;
import com.app.pojos.Mess_Subscription;
import com.app.pojos.Registered_Mess;
import com.app.service.MessOwnerService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class MessOwnerController {
	@Autowired
	MessOwnerService messOwnerService;
	
	@PostMapping("/getMessOwner")
	public Mess_Owner getMess(@RequestParam("id") int id)
	{
		//return "hello";
		//System.out.println(id+"<----------->");
		return messOwnerService.getMessOwner(id);
	}
	
	@GetMapping("/getAllMessOwner")
	public List<Mess_Owner> getAll()
	{
		return messOwnerService.getAllMessOwner();
	}
	 
	@GetMapping("/getAllMessById")
	public List<Registered_Mess> getAllMessById(@RequestParam("id") int user_id)
	{
		return messOwnerService.getAllMessById(user_id);
	}
	
	@GetMapping("/getMenuById")
	public List<Menu_Table> getMenuListById(@RequestParam("id") int user_id)
	{
		return messOwnerService.getMenuListById(user_id);
	}
	
	//For Mess Owner
	@GetMapping("/getCustomerListById")
	public List<Mess_Subscription> getCustomerListById(@RequestParam("id") int user_id)
	{
		return messOwnerService.getCustomerListById(user_id);
	}
}
