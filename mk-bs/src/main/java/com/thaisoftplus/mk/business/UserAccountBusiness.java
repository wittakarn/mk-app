package com.thaisoftplus.mk.business;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import com.thaisoftplus.mk.domain.UserAccountRequest;
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

    @Transactional
    public UserAccount create(UserAccountRequest request) {
        UserAccount ua = new UserAccount();
        ua.setAdditionRole(request.getAdditionRoles() == null //
                ? null //
                : request.getAdditionRoles() //
                        .parallelStream() //
                        .reduce("", //
                                (concatination, a) -> concatination + "," + a) //
        );
        ua.setName(request.getName());
        ua.setRole(request.getRole());
        ua.setSurname(request.getSurname());
        ua.setUserName(request.getUserName());
        ua.setUserPassword(new BCryptPasswordEncoder().encode(request.getUserPassword()));
        ua.setStatus("inactive");

        em.persist(ua);

        return ua;
    }
}
