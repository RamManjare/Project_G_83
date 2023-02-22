package com.app.pojos;

public class SaveMessBody {
	
	private String mess_name;
	
	private String location;
	
	private int user_id;
	
	private int mess_id;
	
	private int mess_type_id;
	
	private int mess_status_id;

	public SaveMessBody() {
		super();
	}

	public SaveMessBody(String mess_name, String location, int user_id, int mess_id, int mess_type_id,
			int mess_status_id) {
		super();
		this.mess_name = mess_name;
		this.location = location;
		this.user_id = user_id;
		this.mess_id = mess_id;
		this.mess_type_id = mess_type_id;
		this.mess_status_id = mess_status_id;
	}

	public String getMess_name() {
		return mess_name;
	}

	public void setMess_name(String mess_name) {
		this.mess_name = mess_name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getMess_id() {
		return mess_id;
	}

	public void setMess_id(int mess_id) {
		this.mess_id = mess_id;
	}

	public int getMess_type_id() {
		return mess_type_id;
	}

	public void setMess_type_id(int mess_type_id) {
		this.mess_type_id = mess_type_id;
	}

	public int getMess_status_id() {
		return mess_status_id;
	}

	public void setMess_status_id(int mess_status_id) {
		this.mess_status_id = mess_status_id;
	}
	
}
