package com.app.pojos;

public class LoginDetails {
	
	private int user_id;
	
	private String name;
	
	private String address;
	
	private String email_id;
	
	private User_Type userType;

	public LoginDetails() {
		super();
	}

	public LoginDetails(int user_id, String name, String address, String email_id, User_Type userType) {
		super();
		this.user_id = user_id;
		this.name = name;
		this.address = address;
		this.email_id = email_id;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public User_Type getUserType() {
		return userType;
	}

	public void setUserType(User_Type userType) {
		this.userType = userType;
	}

	@Override
	public String toString() {
		return "LoginDetails [user_id=" + user_id + ", name=" + name + ", address=" + address + ", email_id=" + email_id
				+ ", userType=" + userType + "]";
	}
	

}
