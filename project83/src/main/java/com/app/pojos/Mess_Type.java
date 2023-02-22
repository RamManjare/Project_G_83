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
@Table(name="mess_type")
public class Mess_Type {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int mess_type_id;
	
	@Column
	private String mess_type;
	
	@JsonIgnoreProperties("messType")
	@OneToMany(cascade=CascadeType.ALL, mappedBy = "messType")
	private Set<Registered_Mess> registeredMess=new HashSet();

	public Mess_Type() {
		super();
	}

	public Mess_Type(int mess_type_id, String mess_type) {
		super();
		this.mess_type_id = mess_type_id;
		this.mess_type = mess_type;
	}

	public int getMess_type_id() {
		return mess_type_id;
	}

	public void setMess_type_id(int mess_type_id) {
		this.mess_type_id = mess_type_id;
	}

	public String getMess_type() {
		return mess_type;
	}

	public void setMess_type(String mess_type) {
		this.mess_type = mess_type;
	}

	public Set<Registered_Mess> getRegisteredMess() {
		return registeredMess;
	}

	public void setRegisteredMess(Set<Registered_Mess> registeredMess) {
		for(Registered_Mess rm: registeredMess)
			rm.setMessType(this);
		this.registeredMess = registeredMess;
	}
	
	
	
}
