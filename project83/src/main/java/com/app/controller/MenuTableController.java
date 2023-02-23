package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Menu_Table;
import com.app.service.MenuTableService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MenuTableController {
@Autowired
MenuTableService menuTableService;

@GetMapping("/getMenu")
public Menu_Table getMessSubscription(@RequestParam("id") int id)
{
	//System.out.println(id+"<----------->");
	return menuTableService.getMenu(id);
}
@PostMapping("/saveMenu")
public Menu_Table saveMessSubscription(@RequestBody Menu_Table ms)
{
	return menuTableService.saveMenu(ms);
}

@GetMapping("/getMenuOfMess")
public List<Menu_Table> getSubscriptionOfMess(@RequestParam("id") int mess_id)
{
	return menuTableService.getMenuById(mess_id);
}

@GetMapping("/deleteMenu")
public boolean deleteMenu(@RequestParam("id") int menu_id)
{
	return menuTableService.deleteMenu(menu_id);
}

}
