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
@Table(name="mess_membership_status")
public class Mess_Membership_Status {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int mess_status_id;
	
	@Column
	private String status;
	
	@JsonIgnoreProperties("messMembershipStatus")
	@OneToMany(cascade=CascadeType.ALL, mappedBy = "messMembershipStatus")
	private Set<Registered_Mess> registeredMess=new HashSet();

	public Mess_Membership_Status() {
		super();
	}

	public Mess_Membership_Status(int mess_status_id, String status, Set<Registered_Mess> registeredMess) {
		super();
		this.mess_status_id = mess_status_id;
		this.status = status;
		this.registeredMess = registeredMess;
	}

	public int getMess_status_id() {
		return mess_status_id;
	}

	public void setMess_status_id(int mess_status_id) {
		this.mess_status_id = mess_status_id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Set<Registered_Mess> getRegisteredMess() {
		return registeredMess;
	}

	public void setRegisteredMess(Set<Registered_Mess> registeredMess) {
		for(Registered_Mess rm: registeredMess)
			rm.setMessMembershipStatus(this);
		this.registeredMess = registeredMess;
	}
	
}
