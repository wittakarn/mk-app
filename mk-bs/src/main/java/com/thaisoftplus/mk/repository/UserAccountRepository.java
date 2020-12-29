package com.thaisoftplus.mk.repository;

import java.io.Serializable;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.thaisoftplus.mk.jpa.entity.UserAccount;

@Repository
public class UserAccountRepository implements Serializable {
    private static final long serialVersionUID = 1L;

    public UserAccount getUserAccountByUsername(EntityManager em, String userName) {
        StringBuilder sb = new StringBuilder();
        sb.append("SELECT u FROM UserAccount u ");
        sb.append("WHERE u.userName = :userName ");

        Query query = em.createQuery(sb.toString());
        query.setParameter("userName", userName);

        Object userAccountObject = query.getSingleResult();

        return userAccountObject == null ? null : (UserAccount) userAccountObject;
    }
}
