package com.thaisoftplus.mk.jpa.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/**
 * The persistent class for the "question_result" database table.
 */
@Entity
@Table(name = "question_result")
@NamedQuery(name = "QuestionResult.findAll", query = "SELECT q FROM QuestionResult q")
public class QuestionResult implements Serializable {
    private static final long serialVersionUID = 1L;

    @EmbeddedId
    private QuestionResultPK id;

    @Column(name = "compare_result")
    private String compareResult;

    @Column(name = "final_decision_result")
    private String finalDecisionResult;

    public QuestionResult() {
    }

    public QuestionResultPK getId() {
        return this.id;
    }

    public void setId(QuestionResultPK id) {
        this.id = id;
    }

    public String getCompareResult() {
        return this.compareResult;
    }

    public void setCompareResult(String compareResult) {
        this.compareResult = compareResult;
    }

    public String getFinalDecisionResult() {
        return this.finalDecisionResult;
    }

    public void setFinalDecisionResult(String finalDecisionResult) {
        this.finalDecisionResult = finalDecisionResult;
    }

}
