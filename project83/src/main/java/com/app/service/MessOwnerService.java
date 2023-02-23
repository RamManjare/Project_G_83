package com.app.service;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Repository.MenuTableRepository;
import com.app.Repository.MessOwnerRepository;
import com.app.Repository.MessSubscriptionRepository;
import com.app.Repository.RegisteredMessRepository;
import com.app.pojos.Menu_Table;
import com.app.pojos.Mess_Owner;
import com.app.pojos.Mess_Subscription;
import com.app.pojos.Registered_Mess;

@Service
public class MessOwnerService {
	
	@Autowired
	MessOwnerRepository messOwnerRepo;
	
	@Autowired
	RegisteredMessRepository regMessRepo;
	
	@Autowired
	MenuTableRepository menuTableRepo;
	
	@Autowired
	MenuTableService menuTableService;
	
	@Autowired
	MessSubscriptionRepository messSubsRepo;
	
	@Autowired
	MessSubscriptionService messSubsService;
	
	public Mess_Owner saveMessOwner(Mess_Owner ms)
	{
		return messOwnerRepo.save(ms);
	}
	
	public Mess_Owner getMessOwner(int id)
	{
		return messOwnerRepo.findById(id).get();
	}
	
	public List<Mess_Owner> getAllMessOwner()
	{
		return messOwnerRepo.findAll();
	}

	public List<Registered_Mess> getAllMessById(int user_id)
	{
		//System.out.println("Here");
		//System.out.println(user_id+"-------------------------");
		List<Object []> mo=messOwnerRepo.getMessById(user_id);
		List<Registered_Mess> rm=new ArrayList();
		Registered_Mess r;
		for(Object[] i: mo)
		{
			int id=(int)i[0];
			r=regMessRepo.findById(id).get();
			rm.add(r);
		}
		System.out.println(rm.size()+"------------------");
		return rm;
	}
	
	public List<Menu_Table> getMenuListById(int user_id)
	{
		List<Object[]> messId=messOwnerRepo.getMessById(user_id);
		List<Menu_Table> menuList=new ArrayList();
		Menu_Table menuTable;
		for(Object[] mess_id: messId)
		{
			int id=(int)mess_id[0];
			List<Object []> menuId=menuTableRepo.getMenuById(id);
			for(Object [] ilist: menuId)
			{
				//System.out.println(i[0]);
				menuTable=menuTableService.getMenu((int)ilist[0]);
				menuList.add(menuTable);
			}
		}
		return menuList;
	}

	
	public List<Mess_Subscription> getCustomerListById(int user_id)
	{
		List<Object[]> messId=messOwnerRepo.getMessById(user_id);
		List<Mess_Subscription> subsList=new ArrayList();
		Mess_Subscription messSubs;
		for(Object[] mess_id: messId)
		{
			int id=(int)mess_id[0];
			List<Object []> menuId=messSubsRepo.getSubscriptionOfMess(id);
			for(Object [] ilist: menuId)
			{
				//System.out.println(i[0]);
				messSubs=messSubsService.getMessSubscription((int)ilist[0]);
				subsList.add(messSubs);
			}
		}
		return subsList;
	}
	
}
