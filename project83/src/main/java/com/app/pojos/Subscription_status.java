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
@Table(name="subscription_status")
public class Subscription_status {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int subscription_status_id;
	
	@Column
	private String status;
	
	@JsonIgnoreProperties("subscriptionStatus")
	@OneToMany(cascade=CascadeType.ALL, mappedBy="subscriptionStatus")
	private Set<Mess_Subscription>  messSubscription=new HashSet();
	
	public Subscription_status()
	{
		super();
	}

	public Subscription_status(int subscription_status_id, String status, Set<Mess_Subscription> messSubscription) {
		super();
		this.subscription_status_id = subscription_status_id;
		this.status = status;
		this.messSubscription = messSubscription;
	}

	public int getSubscription_status_id() {
		return subscription_status_id;
	}

	public void setSubscription_status_id(int subscription_status_id) {
		this.subscription_status_id = subscription_status_id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Set<Mess_Subscription> getMessSubscription() {
		return messSubscription;
	}

	public void setMessSubscription(Set<Mess_Subscription> messSubscription) {
		for(Mess_Subscription m: messSubscription)
			m.setSubscriptionStatus(this);
		this.messSubscription = messSubscription;
	}
	
	

	@Override
	public String toString() {
		return "Subscription_status [subscription_status_id=" + subscription_status_id + ", status=" + status
				+ ", messSubscription=" + messSubscription + "]";
	}
	
}
