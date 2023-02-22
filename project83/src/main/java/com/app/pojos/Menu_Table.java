package com.app.pojos;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="menu_table")
public class Menu_Table {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int menu_id;
	
	@Column
	private int mess_id;
	
	@Column
	private String menu;
	
	@Column
	private Date date;
	
	@Column
	private int price;
	
	@JsonIgnoreProperties("menuTable")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="mess_id" , insertable = false, updatable = false)
	private Registered_Mess registeredMess;
	
	public Menu_Table() {
		super();
	}

	public Menu_Table(int menu_id, int mess_id, String menu, Date date,int price) {
		super();
		this.menu_id = menu_id;
		this.mess_id = mess_id;
		this.menu = menu;
		this.date = date;
		this.price=price;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getMenu_id() {
		return menu_id;
	}

	public void setMenu_id(int menu_id) {
		this.menu_id = menu_id;
	}

	public int getMess_id() {
		return mess_id;
	}

	public void setMess_id(int mess_id) {
		this.mess_id = mess_id;
	}

	public String getMenu() {
		return menu;
	}

	public void setMenu(String menu) {
		this.menu = menu;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Registered_Mess getRegisteredMess() {
		return registeredMess;
	}

	public void setRegisteredMess(Registered_Mess registeredMess) {
		this.registeredMess = registeredMess;
	}
	
	
	
}
