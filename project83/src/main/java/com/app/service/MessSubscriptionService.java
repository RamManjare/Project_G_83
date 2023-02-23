package com.app.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Mess_Subscription;
import com.app.repository.MessSubscriptionRepository;
@Service
public class MessSubscriptionService {
	@Autowired
	MessSubscriptionRepository messSubsRepo;
	
	public Mess_Subscription saveMessSubscription(Mess_Subscription ms)
	{
		return messSubsRepo.save(ms);
	}
	
	public Mess_Subscription getMessSubscription(int id)
	{
		return messSubsRepo.findById(id).get();
	}
	
	public List<Mess_Subscription> getAll()
	{
		return messSubsRepo.findAll();
	}
	
	public List<Mess_Subscription> getSubscriptionOfMess(int mess_id)
	{
		List<Mess_Subscription> messSubs=new ArrayList();
		List<Object[]> list=messSubsRepo.getSubscriptionOfMess(mess_id);
		Mess_Subscription subscriber;
		for(Object[] l: list)
		{
			System.out.println(l[0]);
			subscriber=getMessSubscription((int)l[0]);
			messSubs.add(subscriber);
		}
		return messSubs;
	}
	
	public List<Mess_Subscription> getMySubscriptionList(int user_id)
	{
		List<Mess_Subscription> messSubs=new ArrayList();
		List<Object[]> list=messSubsRepo.getMySubscriptionList(user_id);
		Mess_Subscription subscriber;
		for(Object[] l: list)
		{
			System.out.println(l[0]);
			subscriber=getMessSubscription((int)l[0]);
			messSubs.add(subscriber);
		}
		return messSubs;
	}
	

}
