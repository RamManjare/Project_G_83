//package com.app.dto;
//
//import javax.validation.constraints.Email;
//import javax.validation.constraints.NotBlank;
//import javax.validation.constraints.Pattern;
//
//import org.hibernate.validator.constraints.Length;
//
//public class LoginRequestDto {
//	// data members MUST MATCH with JSON prop names
//	@NotBlank(message = "Email can't be blank!")
//	@Email(message = "Invalid Email Format")
//	@Length(min = 2,max=20,message = "Invalid Email length!!!!!!!")
//	public String email;
//	@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Blank or Invalid Password!!!!")
//	
//	public String password;
//	
//	public String getEmail() {
//		return email;
//	}
//	public void setEmail(String email) {
//		this.email = email;
//	}
//	public String getPassword() {
//		return password;
//	}
//	public void setPassword(String password) {
//		this.password = password;
//	}
//	public LoginRequestDto(
//			@NotBlank(message = "Email can't be blank!") @Email(message = "Invalid Email Format") @Length(min = 2, max = 20, message = "Invalid Email length!!!!!!!") String email,
//			@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Blank or Invalid Password!!!!") String password) {
//		super();
//		this.email = email;
//		this.password = password;
//	}
//	public LoginRequestDto() {
//		super();
//	}
//	@Override
//	public String toString() {
//		return "LoginRequestDto [email=" + email + ", password=" + password + "]";
//	}
//	
//}
