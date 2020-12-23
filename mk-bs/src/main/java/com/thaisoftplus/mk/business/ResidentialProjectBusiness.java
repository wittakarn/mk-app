package com.thaisoftplus.mk.business;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestParam;

import com.thaisoftplus.mk.domain.CreateResidentialProjectRequest;
import com.thaisoftplus.mk.domain.ResponseMessage;
import com.thaisoftplus.mk.jpa.entity.QuestionResult;
import com.thaisoftplus.mk.jpa.entity.QuestionResultPK;
import com.thaisoftplus.mk.jpa.entity.ResidentialProject;
import com.thaisoftplus.mk.repository.ResidentialProjectRepository;

@Component
public class ResidentialProjectBusiness {
    @PersistenceContext
    private EntityManager em;
    @Autowired
    private ResidentialProjectRepository repository;

    @Transactional
    public ResponseMessage create(CreateResidentialProjectRequest createResidentialProjectRequest) {
        Timestamp timestamp = new Timestamp(Calendar.getInstance().getTimeInMillis());

        ResidentialProject r = new ResidentialProject();
        r.setProjectName(createResidentialProjectRequest.getProjectName());
        r.setDeveloperId(createResidentialProjectRequest.getDeveloperId());
        r.setResidentialId(createResidentialProjectRequest.getResidentialId());
        r.setContractorId(createResidentialProjectRequest.getContractorId());
        r.setDesignerId(createResidentialProjectRequest.getDesignerId());
        r.setCreateDatetime(timestamp);
        r.setCreateUser("Dummy");

        em.persist(r);

        createResidentialProjectRequest.getQuestionDictionary() //
                .entrySet() //
                .stream() //
                .forEach(q -> createQuestionResultList(r.getProjectId(), q.getKey(), q.getValue()));

        return new ResponseMessage("Create residential project success", r);
    }
    
    public List<QuestionResult> getQuestionResultList(Integer developerId, Integer residentialId, Integer contractorId, Integer designerId) {
    	return repository.getQuestionResults(em, developerId, residentialId, contractorId, designerId);
    }

    private void createQuestionResultList(int projectId, Integer productId, QuestionResult questionReqult) {
        QuestionResultPK pk = new QuestionResultPK();
        pk.setProjectId(projectId);
        pk.setProductId(productId);

        questionReqult.setId(pk);

        em.persist(questionReqult);
    }
}
