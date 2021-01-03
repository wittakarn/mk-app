package com.thaisoftplus.mk.jpa.entity;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the "user_role" database table.
 * 
 */
@Entity
@Table(name="\"user_role\"")
@NamedQuery(name="UserRole.findAll", query="SELECT u FROM UserRole u")
public class UserRole implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="\"role_id\"")
	private int roleId;

	@Column(name="\"description\"")
	private String description;

	@Column(name="\"role\"")
	private String role;

	@Column(name="\"role_supervise\"")
	private String roleSupervise;

	@Column(name="\"role_under_care\"")
	private String roleUnderCare;

	public UserRole() {
	}

	public int getRoleId() {
		return this.roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getRole() {
		return this.role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getRoleSupervise() {
		return this.roleSupervise;
	}

	public void setRoleSupervise(String roleSupervise) {
		this.roleSupervise = roleSupervise;
	}

	public String getRoleUnderCare() {
		return this.roleUnderCare;
	}

	public void setRoleUnderCare(String roleUnderCare) {
		this.roleUnderCare = roleUnderCare;
	}

}