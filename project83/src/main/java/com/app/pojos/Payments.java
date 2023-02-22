package com.app.pojos;
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
@Table(name="payments")
public class Payments {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int  payment_id;
	
	@Column
	private int subscription_id;
	
	@Column
	private int month;
	
	@Column
	private int year;
	
	@Column
	private int rupee;
	
	@JsonIgnoreProperties("payments")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="subscription_id" , insertable = false, updatable = false)
	private Mess_Subscription messSubscription;

	public Payments() {
		super();
	}

	public Payments(int payment_id, int subscription_id, int month, int year, int rupee,
			Mess_Subscription messSubscription) {
		super();
		this.payment_id = payment_id;
		this.subscription_id = subscription_id;
		this.month = month;
		this.year = year;
		this.rupee = rupee;
		this.messSubscription = messSubscription;
	}

	public int getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}

	public int getSubscription_id() {
		return subscription_id;
	}

	public void setSubscription_id(int subscription_id) {
		this.subscription_id = subscription_id;
	}

	public int getMonth() {
		return month;
	}

	public void setMonth(int month) {
		this.month = month;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public int getRupee() {
		return rupee;
	}

	public void setRupee(int rupee) {
		this.rupee = rupee;
	}

	public Mess_Subscription getMessSubscription() {
		return messSubscription;
	}

	public void setMessSubscription(Mess_Subscription messSubscription) {
		this.messSubscription = messSubscription;
	}
	
	

	@Override
	public String toString() {
		return "Payments [payment_id=" + payment_id + ", subscription_id=" + subscription_id + ", month=" + month
				+ ", year=" + year + ", rupee=" + rupee + ", messSubscription=" + messSubscription + "]";
	}

}
