package com.app.pojos;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="ratings")
public class Ratings {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int rating_id;
	
	@Column
	private int mess_id;
	
	@Column
	private int user_id;
	
	@Column
	private int stars;
	
	@Column
	private String review;
	
	@Column
	private Date review_date;
	
	@JsonIgnoreProperties("ratings")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="mess_id" ,insertable = false, updatable = false)
	private Registered_Mess registeredMess;
	

	public Ratings() {
		super();
	}

	public Ratings(int rating_id, int mess_id, int user_id, int stars, String review, Date review_date) {
		super();
		this.rating_id = rating_id;
		this.mess_id = mess_id;
		this.user_id = user_id;
		this.stars = stars;
		this.review = review;
		this.review_date = review_date;
	}

	public int getRating_id() {
		return rating_id;
	}

	public void setRating_id(int rating_id) {
		this.rating_id = rating_id;
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

	public int getStars() {
		return stars;
	}

	public void setStars(int stars) {
		this.stars = stars;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public Date getReview_date() {
		return review_date;
	}

	public void setReview_date(Date review_date) {
		this.review_date = review_date;
	}

	public Registered_Mess getRegisteredMess() {
		return registeredMess;
	}

	public void setRegisteredMess(Registered_Mess registeredMess) {
		this.registeredMess = registeredMess;
	}

	@Override
	public String toString() {
		return "Ratings [rating_id=" + rating_id + ", mess_id=" + mess_id + ", user_id=" + user_id + ", stars=" + stars
				+ ", review=" + review + ", review_date=" + review_date + "]";
	}
	
}
