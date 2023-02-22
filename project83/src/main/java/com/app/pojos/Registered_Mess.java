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
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="registered_mess")
public class Registered_Mess {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int mess_id;
	
	@Column
	private String mess_name;
	
	@Column
	private int mess_type_id;
	
	@Column
	private String location;
	
	@Column
	private int mess_status_id;
	
	@JsonIgnoreProperties("registeredMess")
	@OneToMany(cascade=CascadeType.ALL, mappedBy = "registeredMess")
	private Set<Mess_Subscription> messSubscription =new HashSet();
	
	@JsonIgnoreProperties("registeredMess")
	@OneToMany(cascade=CascadeType.ALL, mappedBy = "registeredMess")
	private Set<Menu_Table> menuTable=new HashSet();
	
	@JsonIgnoreProperties("registeredMess")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="mess_type_id" , insertable = false, updatable = false)
	private Mess_Type messType;
	
	@JsonIgnoreProperties("registeredMess")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="mess_status_id" , insertable = false, updatable = false)
	private Mess_Membership_Status messMembershipStatus;
	
	@JsonIgnoreProperties("registeredMess")
	@OneToMany(cascade=CascadeType.ALL, mappedBy = "registeredMess" )
	private Set<Ratings> ratings=new HashSet();
	
	
	@JsonIgnoreProperties("registeredMess")
	@OneToMany(cascade=CascadeType.ALL, mappedBy = "registeredMess")
	private Set<Mess_Owner> messOwner=new HashSet();
	
	
	public Registered_Mess() {
		super();
	}

	public Registered_Mess(int mess_id, String mess_name, int mess_type_id, String location, int mess_status_id) {
		super();
		this.mess_id = mess_id;
		this.mess_name = mess_name;
		this.mess_type_id = mess_type_id;
		this.location = location;
		this.mess_status_id = mess_status_id;
	}

	public int getMess_id() {
		return mess_id;
	}

	public void setMess_id(int mess_id) {
		this.mess_id = mess_id;
	}

	public String getMess_name() {
		return mess_name;
	}

	public void setMess_name(String mess_name) {
		this.mess_name = mess_name;
	}

	public int getMess_type_id() {
		return mess_type_id;
	}

	public void setMess_type_id(int mess_type_id) {
		this.mess_type_id = mess_type_id;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public int getMess_status_id() {
		return mess_status_id;
	}

	public void setMess_status_id(int mess_status_id) {
		this.mess_status_id = mess_status_id;
	}

	
	public Set<Mess_Subscription> getMessSubscription() {
		return messSubscription;
	}

	public void setMessSubscription(Set<Mess_Subscription> messSubscription) {
		for(Mess_Subscription m: messSubscription)
			m.setRegisteredMess(this);
		this.messSubscription = messSubscription;
	}
	
	public Set<Menu_Table> getMenuTable() {
		return menuTable;
	}

	public void setMenuTable(Set<Menu_Table> menuTable) {
		for(Menu_Table m: menuTable)
			m.setRegisteredMess(this);
		this.menuTable = menuTable;
	}

	
	public Mess_Type getMessType() {
		return messType;
	}

	public void setMessType(Mess_Type messType) {
		this.messType = messType;
	}

	public Mess_Membership_Status getMessMembershipStatus() {
		return messMembershipStatus;
	}

	public void setMessMembershipStatus(Mess_Membership_Status messMembershipStatus) {
		this.messMembershipStatus = messMembershipStatus;
	}

	public Set<Ratings> getRatings() {
		return ratings;
	}

	public void setRatings(Set<Ratings> ratings) {
		this.ratings = ratings;
	}
	
	public Set<Mess_Owner> getMessOwner() {
		return messOwner;
	}

	public void setMessOwner(Set<Mess_Owner> messOwner) {
		this.messOwner = messOwner;
	}

	@Override
	public String toString() {
		return "Registered_Mess [mess_id=" + mess_id + ", mess_name=" + mess_name + ", mess_type_id=" + mess_type_id
				+ ", location=" + location + ", mess_status_id=" + mess_status_id + "]";
	}
}
