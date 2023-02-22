package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="mess_owner")
public class Mess_Owner {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int mapping_id;
	
	@Column
	private int mess_id;

	@Column
	private int user_id;
	
	@JsonIgnoreProperties("messOwner")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="mess_id" , insertable = false, updatable = false)
	private Registered_Mess registeredMess;
	
	public Mess_Owner() {
		super();
	}

	public int getMapping_id() {
		return mapping_id;
	}

	public void setMapping_id(int mapping_id) {
		this.mapping_id = mapping_id;
	}

	public int getMess_id() {
		return mess_id;
	}

	public void setMess_id(int mess_id) {
		this.mess_id = mess_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public Registered_Mess getRegisteredMess() {
		return registeredMess;
	}

	public void setRegisteredMess(Registered_Mess registeredMess) {
		this.registeredMess = registeredMess;
	}
	
}

