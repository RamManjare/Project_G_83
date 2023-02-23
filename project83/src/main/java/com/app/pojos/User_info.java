package com.app.pojos;

import java.util.LinkedList;
import java.util.List;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

<<<<<<< HEAD
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
=======

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

>>>>>>> 1051392facd3a4857d24142e02292ae7a1627e55

@Entity
@Table(name="user_info")
public class User_info
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int user_id;
	
	@Column
	private String name;
	
	@Column
	private String contact_number;
	
	@Column
	private String email_id;
	
	@Column
	private String address;
	
	@Column
	private String aadhar_no;
	
	@Column
	private String password;
	
	@Column
	private int type_id;
	
	@JsonIgnoreProperties("userInfo")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="type_id",  insertable = false, updatable = false)
	private User_Type userType;
	
	//One To One
	@JsonIgnoreProperties("userInfo")
	@OneToMany(cascade=CascadeType.ALL, mappedBy = "userInfo")
	private List<Mess_Subscription> messSubscription=new LinkedList();
	
	public User_info() 
	{
		super();
	}
	
	public User_info(int user_id, String name, String contact_number, String email_id, String address, String aadhar_no,
			String password, int type_id, User_Type userType, List<Mess_Subscription> messSubscription) {
		super();
		this.user_id = user_id;
		this.name = name;
		this.contact_number = contact_number;
		this.email_id = email_id;
		this.address = address;
		this.aadhar_no = aadhar_no;
		this.password = password;
		this.type_id = type_id;
		this.userType = userType;
		this.messSubscription = messSubscription;
	}

	public User_info(int user_id, String name, String contact_number, String email_id, String address, String aadhar_no,
			String password, User_Type userType, List<Mess_Subscription> messSubscription) {
		super();
		this.user_id = user_id;
		this.name = name;
		this.contact_number = contact_number;
		this.email_id = email_id;
		this.address = address;
		this.aadhar_no = aadhar_no;
		this.password = password;
		this.userType = userType;
		this.messSubscription = messSubscription;
	}

	public User_info(int user_id, String name, String contact_number, String email_id, String address, String aadhar_no,
			String password, User_Type userType) {
		super();
		this.user_id = user_id;
		this.name = name;
		this.contact_number = contact_number;
		this.email_id = email_id;
		this.address = address;
		this.aadhar_no = aadhar_no;
		this.password = password;
		this.userType = userType;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContact_number() {
		return contact_number;
	}

	public void setContact_number(String contact_number) {
		this.contact_number = contact_number;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getAadhar_no() {
		return aadhar_no;
	}

	public void setAadhar_no(String aadhar_no) {
		this.aadhar_no = aadhar_no;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public User_Type getUserType() {
		return userType;
	}

	public void setUserType(User_Type userType) {
		this.userType = userType;
	}

	public List<Mess_Subscription> getMessSubscription() {
		return messSubscription;
	}

	public void setMessSubscription(List<Mess_Subscription> messSubscription) {
		for(Mess_Subscription m:messSubscription)
			m.setUserInfo(this);
		this.messSubscription = messSubscription;
	}

	
	public int getType_id() {
		return type_id;
	}

	public void setType_id(int type_id) {
		this.type_id = type_id;
	}
	
	@Override
	public String toString() {
		return "User_info [user_id=" + user_id + ", name=" + name + ", contact_number=" + contact_number + ", email_id="
				+ email_id + ", address=" + address + ", aadhar_no=" + aadhar_no + ", password=" + password
				+ ", userType=" + userType + ", messSubscription=" + messSubscription + "]";
	}
	
}
