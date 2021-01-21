package com.thaisoftplus.mk.domain;

import java.io.Serializable;
import java.util.List;

public class UserAccountRequest implements Serializable {
    private static final long serialVersionUID = 1L;
    private Integer accountId;
    private String name;
    private String role;
    private String surname;
    private String userName;
    private String userPassword;
    private List<String> additionRoles;

    public Integer getAccountId() {
        return accountId;
    }

    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public List<String> getAdditionRoles() {
        return additionRoles;
    }

    public void setAdditionRoles(List<String> additionRoles) {
        this.additionRoles = additionRoles;
    }
}
