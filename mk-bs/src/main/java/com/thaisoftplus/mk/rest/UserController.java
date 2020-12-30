package com.thaisoftplus.mk.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thaisoftplus.mk.business.UserRoleBusiness;
import com.thaisoftplus.mk.jpa.entity.UserRole;

@RestController
public class UserController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private UserRoleBusiness business;

    @GetMapping("api/user/roles")
    public List<UserRole> getRoles() {
        logger.info("Begin getRoles");
        return business.getRoles();
    }
}
