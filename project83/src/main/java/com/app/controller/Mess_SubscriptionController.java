package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.app.controller.*;
import com.app.pojos.Mess_Subscription;
import com.app.service.MessSubscriptionService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class Mess_SubscriptionController {
	
	@Autowired
	MessSubscriptionService messSubsService;
	
	@GetMapping("/getMessSubs")
	public Mess_Subscription getMessSubscription(@RequestParam("id") int id)
	{
		//System.out.println(id+"<----------->");
		return messSubsService.getMessSubscription(id);
	}
	
	@PostMapping("/saveMessSubs")
	public Mess_Subscription saveMessSubscription(@RequestBody Mess_Subscription ms)
	{
		System.out.println("Here -----------------"+ms.getEnd_date());
		System.out.println(ms);
		return messSubsService.saveMessSubscription(ms);
	}
	
	@GetMapping("/getAllMessSubs")
	public List<Mess_Subscription> getAll()
	{
		System.out.println(messSubsService.getAll());
		return messSubsService.getAll();
	}
	
	@GetMapping("/getSubscriptionOfMess")
	public List<Mess_Subscription> getSubscriptionOfMess(@RequestParam("id") int mess_id)
	{
		return messSubsService.getSubscriptionOfMess(mess_id);
	}
	
	@GetMapping("/getMySubscriptionList")
	public List<Mess_Subscription> getMySubscriptionList(@RequestParam("id") int user_id)
	{
		return messSubsService.getMySubscriptionList(user_id);
	}

}
