package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="user_Type")
public class User_Type {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int type_id;
	
	@Column
	private String type;
	
	@JsonIgnoreProperties("userType")
	@OneToMany(cascade=CascadeType.ALL, mappedBy="userType")
	private Set<User_info> userInfo=new HashSet();
//at most one null remove duplication
	public User_Type() {
		super();
	}

	public User_Type(int type_id, String type, Set<User_info> userInfo) {
		super();
		this.type_id = type_id;
		this.type = type;
		this.userInfo = userInfo;
	}

	public int getType_id() {
		return type_id;
	}

	public void setType_id(int type_id) {
		this.type_id = type_id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Set<User_info> getUserInfo() {
		return userInfo;
	}
//for iterate 
	public void setUserInfo(Set<User_info> userInfo) 
	{
		for(User_info u: userInfo)
			u.setUserType(this);
		this.userInfo = userInfo;
	}
	
}
