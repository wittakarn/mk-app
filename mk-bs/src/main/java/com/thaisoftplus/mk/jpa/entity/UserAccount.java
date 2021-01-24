package com.thaisoftplus.mk.jpa.entity;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the "user_account" database table.
 * 
 */
@Entity
@Table(name="\"user_account\"")
@NamedQuery(name="UserAccount.findAll", query="SELECT u FROM UserAccount u")
public class UserAccount implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="\"account_id\"")
	private int accountId;

	@Column(name="\"addition_role\"")
	private String additionRole;

	@Column(name="\"name\"")
	private String name;

	@Column(name="\"role\"")
	private String role;

	@Column(name="\"surname\"")
	private String surname;

	@Column(name="\"user_name\"")
	private String userName;

	@Column(name="\"user_password\"")
	private String userPassword;
	
	@Column(name="\"status\"")
	private String status;

	public UserAccount() {
	}

	public int getAccountId() {
		return this.accountId;
	}

	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}

	public String getAdditionRole() {
		return this.additionRole;
	}

	public void setAdditionRole(String additionRole) {
		this.additionRole = additionRole;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRole() {
		return this.role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getSurname() {
		return this.surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getUserName() {
		return this.userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPassword() {
		return this.userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}