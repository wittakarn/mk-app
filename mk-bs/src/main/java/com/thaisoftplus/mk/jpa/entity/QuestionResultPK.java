package com.thaisoftplus.mk.jpa.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * The primary key class for the "question_result" database table.
 */
@Embeddable
public class QuestionResultPK implements Serializable {
    // default serial version id, required for serializable classes.
    private static final long serialVersionUID = 1L;

    @Column(name = "project_id")
    private int projectId;

    @Column(name = "product_id")
    private int productId;

    public QuestionResultPK() {
    }

    public int getProjectId() {
        return projectId;
    }

    public void setProjectId(int projectId) {
        this.projectId = projectId;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    @Override
    public boolean equals(Object other) {
        if (this == other) {
            return true;
        }
        if (!(other instanceof QuestionResultPK)) {
            return false;
        }
        QuestionResultPK castOther = (QuestionResultPK) other;
        return this.projectId == castOther.projectId && this.productId == castOther.productId;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int hash = 17;
        hash = hash * prime + this.projectId;
        hash = hash * prime + this.productId;

        return hash;
    }
}
