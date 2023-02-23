package com.app.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Mess_Owner;
import com.app.pojos.Registered_Mess;
import com.app.pojos.SaveMessBody;
import com.app.service.MessOwnerService;
import com.app.service.RegisteredMessService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class Registered_MessController {
	
	@Autowired
	RegisteredMessService registeredMessService;
	
	@Autowired
	MessOwnerService messOwnerService;
	
	@PostMapping("/getMess")
	public Registered_Mess getMess(@RequestParam("id") int id)
	{
		//return "hello";
		//System.out.println(id+"<----------->");
		return registeredMessService.getMess(id);
	}
	
	/*
	 @PostMapping("/saveMess")
	public Registered_Mess saveMess(@RequestBody Registered_Mess rm)
	{
		return registeredMessService.saveMess(rm);
	}
	*/
	
	@GetMapping("/getAllMess")
	public List<Registered_Mess> getAll()
	{
		return registeredMessService.getAllMess();
	}
	
	@PostMapping("/saveMess")
	public Registered_Mess saveM(@RequestBody SaveMessBody smb)
	{//Response entity,Encryption utilities
		//System.out.println(smb.getMess_name());
		//System.out.println(smb.getUser_id());
		boolean flag=false;
		Registered_Mess r=new Registered_Mess();
		
		r.setMess_name(smb.getMess_name());
		r.setLocation(smb.getLocation());
		r.setMess_type_id(smb.getMess_type_id());
		r.setMess_status_id(smb.getMess_status_id());
		
		Registered_Mess n=registeredMessService.saveMess(r);
		//System.out.println(n.getMess_id());
		
		if(n.getMess_id()!=0)
		{
			Mess_Owner mo=new Mess_Owner();
			mo.setMess_id(n.getMess_id());
			mo.setUser_id(smb.getUser_id());
			messOwnerService.saveMessOwner(mo);
			flag=true;
		}
		else
		{
			System.out.println("Fail");
			flag=false;
		}
		if(flag)
			return r;
		else
			return null;
	}
	
	@GetMapping("/pendingApprovals")
	public List<Registered_Mess> pendingApprovals()
	{
		return registeredMessService.pendingApprovals();
	}
	
	@GetMapping("/approveMess")
	public boolean approveMess(@RequestParam("id") int mess_id)
	{
		return registeredMessService.approveMess(mess_id);
	}
	
	@GetMapping("/rejectMess")
	public boolean rejectMess(@RequestParam("id") int mess_id)
	{
		return registeredMessService.rejectMess(mess_id);
	}

}
