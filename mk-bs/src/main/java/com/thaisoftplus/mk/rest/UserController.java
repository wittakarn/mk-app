package com.thaisoftplus.mk.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.thaisoftplus.mk.business.UserAccountBusiness;
import com.thaisoftplus.mk.business.UserRoleBusiness;
import com.thaisoftplus.mk.domain.ResponseMessage;
import com.thaisoftplus.mk.domain.UserAccountRequest;
import com.thaisoftplus.mk.jpa.entity.UserRole;
import com.thaisoftplus.mk.util.ErrorMessageUtil;

@RestController
public class UserController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private UserRoleBusiness userRoleBusiness;
    @Autowired
    private UserAccountBusiness userAccountBusiness;

    @GetMapping("api/user/roles")
    public List<UserRole> getRoles() {
        logger.info("Begin getRoles");
        return userRoleBusiness.getRoles();
    }

    @PostMapping(value = "api/user/create", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseMessage create(@RequestBody UserAccountRequest request) {
        logger.info("Begin create");
        try {
            return new ResponseMessage("Create residential project success", //
                    userAccountBusiness.create(request));
        } catch (Exception ex) {
            logger.error("update failed", ex);
            return new ResponseMessage(ErrorMessageUtil.getExceptionMessages(ex), null);
        }
    }
}
