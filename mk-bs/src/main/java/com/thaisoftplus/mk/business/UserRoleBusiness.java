package com.thaisoftplus.mk.business;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.thaisoftplus.mk.jpa.entity.UserRole;
import com.thaisoftplus.mk.repository.UserRoleRepository;

@Component
public class UserRoleBusiness {
    @PersistenceContext
    private EntityManager em;
    @Autowired
    private UserRoleRepository repository;

    public List<UserRole> getRoles() {
        return repository.getRoles(em);
    }
}
