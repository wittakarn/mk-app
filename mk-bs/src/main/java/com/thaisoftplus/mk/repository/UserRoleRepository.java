package com.thaisoftplus.mk.repository;

import java.io.Serializable;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.thaisoftplus.mk.jpa.entity.UserRole;

@Repository
public class UserRoleRepository implements Serializable {
    private static final long serialVersionUID = 1L;

    public List<UserRole> getRoles(EntityManager em) {
        StringBuilder sb = new StringBuilder();
        sb.append("SELECT u FROM UserRole u ");

        Query query = em.createQuery(sb.toString());

        return query.getResultList();
    }
}
