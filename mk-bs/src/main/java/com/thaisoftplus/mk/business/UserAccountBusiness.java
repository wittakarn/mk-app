package com.thaisoftplus.mk.business;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.thaisoftplus.mk.jpa.entity.UserAccount;
import com.thaisoftplus.mk.repository.UserAccountRepository;

@Component
public class UserAccountBusiness {
    @PersistenceContext
    private EntityManager em;
    @Autowired
    private UserAccountRepository repository;

    public UserAccount getUserAccountByUsername(String userName) {
        return repository.getUserAccountByUsername(em, userName);
    }
}
