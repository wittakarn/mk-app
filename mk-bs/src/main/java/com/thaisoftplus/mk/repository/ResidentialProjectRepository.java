package com.thaisoftplus.mk.repository;

import java.io.Serializable;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.thaisoftplus.mk.jpa.entity.QuestionResult;

@Repository
public class ResidentialProjectRepository implements Serializable {
    private static final long serialVersionUID = 1L;

    public List<QuestionResult> getQuestionResults(EntityManager em, Integer developerId, Integer residentialId, Integer contractorId, Integer designerId) {
        StringBuilder sb = new StringBuilder();
        sb.append("SELECT q FROM ResidentialProject r, QuestionResult q ");
        sb.append("WHERE r.projectId = q.id.projectId ");
        
        if(developerId != null) {
        	sb.append("AND r.developerId = :developerId ");
        }
        if(residentialId != null) {
        	sb.append("AND r.residentialId = :residentialId ");
        }
        if(contractorId != null) {
        	sb.append("AND r.contractorId = :contractorId ");
        }
        if(designerId != null) {
        	sb.append("AND r.designerId = :designerId ");
        }
        
        Query query = em.createQuery(sb.toString());
        
        if(developerId != null) {
            query.setParameter("developerId", developerId);
        }
        if(residentialId != null) {
            query.setParameter("residentialId", residentialId);
        }
        if(contractorId != null) {
            query.setParameter("contractorId", contractorId);
        }
        if(designerId != null) {
            query.setParameter("designerId", designerId);
        }

        return query.getResultList();
    }
}
