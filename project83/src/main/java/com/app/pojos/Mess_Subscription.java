package com.app.pojos;

import java.sql.Date;
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
@Table(name="mess_subscription")
public class Mess_Subscription {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int subscription_id;
	
	@Column
	private int mess_id;
	
	@Column
	private int user_id;
	
	@Column
	private int subscription_status_id;
	
	@Column
	private Date start_date;
	
	@Column
	private Date end_date;
	
	@JsonIgnoreProperties("messSubscription")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id",  insertable = false, updatable = false)
	private User_info userInfo;
	
	@JsonIgnoreProperties("messSubscription")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="subscription_status_id",insertable = false, updatable = false)
	private Subscription_status subscriptionStatus;
	
	@JsonIgnoreProperties("messSubscription")
	@OneToMany(cascade=CascadeType.ALL, mappedBy = "messSubscription")
	private Set<Payments> payments=new HashSet();
	
	@JsonIgnoreProperties("messSubscription")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="mess_id",  insertable = false, updatable = false)
	private Registered_Mess registeredMess;

	public Mess_Subscription() {
		super();
	}

	public Mess_Subscription(int subscription_id, int mess_id, int user_id, int subscription_status_id, Date start_date,
			Date end_date) {
		super();
		this.subscription_id = subscription_id;
		this.mess_id = mess_id;
		this.user_id = user_id;
		this.subscription_status_id = subscription_status_id;
		this.start_date = start_date;
		this.end_date = end_date;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getSubscription_id() {
		return subscription_id;
	}

	public void setSubscription_id(int subscription_id) {
		this.subscription_id = subscription_id;
	}

	public User_info getUserInfo() {
		return userInfo;
	}

	public void setUserInfo(User_info userInfo) {
		this.userInfo = userInfo;
	}

	public int getMess_id() {
		return mess_id;
	}

	public void setMess_id(int mess_id) {
		this.mess_id = mess_id;
	}

	public int getSubscription_status_id() {
		return subscription_status_id;
	}

	public void setSubscription_status_id(int subscription_status_id) {
		this.subscription_status_id = subscription_status_id;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public Subscription_status getSubscriptionStatus() {
		return subscriptionStatus;
	}
	
	public void setSubscriptionStatus(Subscription_status subscriptionStatus) {
		this.subscriptionStatus = subscriptionStatus;
	}

	public Set<Payments> getPayments() {
		return payments;
	}

	public void setPayments(Set<Payments> payments) {
		for(Payments p: payments )
			p.setMessSubscription(this);
		this.payments = payments;
	}

	public Registered_Mess getRegisteredMess() {
		return registeredMess;
	}

	public void setRegisteredMess(Registered_Mess registeredMess) {
		this.registeredMess = registeredMess;
	}

	@Override
	public String toString() {
		return "Mess_Subscription [subscription_id=" + subscription_id + ", userInfo=" + userInfo
				+ ", subscriptionStatus=" + subscriptionStatus + ", mess_id=" + mess_id + ", subscription_status_id="
				+ subscription_status_id + ", start_date=" + start_date + ", end_date=" + end_date + "]";
	}

	
}
