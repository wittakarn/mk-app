package com.thaisoftplus.mk.rest;

import java.text.ParseException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.thaisoftplus.mk.business.ResidentialProjectBusiness;
import com.thaisoftplus.mk.domain.CreateResidentialProjectRequest;
import com.thaisoftplus.mk.domain.ResponseMessage;
import com.thaisoftplus.mk.jpa.entity.QuestionResult;
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

	@GetMapping("api/project/questions")
    public List<QuestionResult> getQuestionResultList(@RequestParam(value = "developerId", required = false) Integer developerId, //
    		@RequestParam(value = "residentialId", required = false) Integer residentialId, //
    		@RequestParam(value = "contractorId", required = false) Integer contractorId, //
    		@RequestParam(value = "designerId", required = false) Integer designerId) {
        return business.getQuestionResultList(developerId, residentialId, contractorId, designerId);
    }
}
