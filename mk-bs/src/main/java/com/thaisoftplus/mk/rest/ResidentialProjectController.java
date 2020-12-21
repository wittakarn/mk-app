package com.thaisoftplus.mk.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.thaisoftplus.mk.business.ResidentialProjectBusiness;
import com.thaisoftplus.mk.domain.CreateResidentialProjectRequest;
import com.thaisoftplus.mk.domain.ResponseMessage;
import com.thaisoftplus.mk.util.ErrorMessageUtil;

@RestController
public class ResidentialProjectController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private ResidentialProjectBusiness business;

    @PostMapping(value = "api/project/create", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseMessage create(@RequestBody CreateResidentialProjectRequest createResidentialProjectRequest) {
        try {
            return business.create(createResidentialProjectRequest);
        } catch (Exception ex) {
            logger.error("update failed", ex);
            return new ResponseMessage(ErrorMessageUtil.getExceptionMessages(ex), null);
        }
    }
}
