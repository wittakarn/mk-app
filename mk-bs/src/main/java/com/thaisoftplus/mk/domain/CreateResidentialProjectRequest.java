package com.thaisoftplus.mk.domain;

import java.io.Serializable;
import java.util.HashMap;

import com.thaisoftplus.mk.jpa.entity.QuestionResult;

public class CreateResidentialProjectRequest implements Serializable {
    private static final long serialVersionUID = 1L;

    private String projectName;
    private int developerId;
    private int residentialId;
    private int contractorId;
    private int designerId;
    private HashMap<Integer, QuestionResult> questionDictionary;

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public int getDeveloperId() {
        return developerId;
    }

    public void setDeveloperId(int developerId) {
        this.developerId = developerId;
    }

    public int getResidentialId() {
        return residentialId;
    }

    public void setResidentialId(int residentialId) {
        this.residentialId = residentialId;
    }

    public int getContractorId() {
        return contractorId;
    }

    public void setContractorId(int contractorId) {
        this.contractorId = contractorId;
    }

    public int getDesignerId() {
        return designerId;
    }

    public void setDesignerId(int designerId) {
        this.designerId = designerId;
    }

    public HashMap<Integer, QuestionResult> getQuestionDictionary() {
        return questionDictionary;
    }

    public void setQuestionDictionary(HashMap<Integer, QuestionResult> questionDictionary) {
        this.questionDictionary = questionDictionary;
    }
}
