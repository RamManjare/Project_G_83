package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Repository.RegisteredMessRepository;
import com.app.pojos.Registered_Mess;

@Service
public class RegisteredMessService {
	
	@Autowired
	RegisteredMessRepository registeredMessRepo;
	
	public Registered_Mess getMess(int id)
	{
		return registeredMessRepo.findById(id).get();
	}
	
	public Registered_Mess saveMess(Registered_Mess rm)
	{
		return registeredMessRepo.save(rm);
	}
	
	public List<Registered_Mess> getAllMess() 
	{
		List<Registered_Mess> m=registeredMessRepo.findAll();
		System.out.println(m.get(0).getMess_name());
		return m;
	}
	
	public List<Registered_Mess> pendingApprovals()
	{
		List<Object []> messId=registeredMessRepo.pendingApprovals();
		List<Registered_Mess> listPenMess=new ArrayList();
		Registered_Mess regMess;
		for(Object []  i: messId)
		{
			int id=(int)i[0];
			regMess=getMess(id);
			listPenMess.add(regMess);
		}
		return listPenMess;
	}
	
	public boolean approveMess(int mess_id)
	{
		boolean flag=false;
		try {
			registeredMessRepo.approveMess(mess_id);
			flag=true;
		}
		catch(Exception e)
		{
			flag=false;
		}
		return flag;
	}
	
	public boolean rejectMess(int mess_id)
	{
		boolean flag=false;
		try {
			registeredMessRepo.rejectMess(mess_id);
			flag=true;
		}
		catch(Exception e)
		{
			flag=false;
		}
		return flag;
	}
}
