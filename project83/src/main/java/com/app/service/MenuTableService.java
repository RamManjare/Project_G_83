package com.app.service;

import com.app.Repository.MenuTableRepository;
import com.app.pojos.Menu_Table;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MenuTableService {
	
	@Autowired
	MenuTableRepository menuTableRepo;

	public Menu_Table saveMenu(Menu_Table ms)
	{
		return menuTableRepo.save(ms);
	}

	public Menu_Table getMenu(int id)
	{
		return menuTableRepo.findById(id).get();
	}
	
	public boolean deleteMenu(int menu_id)
	{
		try {
			//Menu_Table menuTable=getMenu(menu_id);
			menuTableRepo.deleteMenu(menu_id);
			return true;
		}
		catch(Exception e)
		{
			return false;
		}
	}
	
	public List<Menu_Table> getMenuById(int mess_id)
	{
		
		List<Object []> menuId=menuTableRepo.getMenuById(mess_id);
		List<Menu_Table> list=new ArrayList();
		Menu_Table menuTable;
		for(Object [] i: menuId)
		{
			//System.out.println(i[0]);
			menuTable=getMenu((int)i[0]);
			list.add(menuTable);
		}
		return list;
	}
	
}
