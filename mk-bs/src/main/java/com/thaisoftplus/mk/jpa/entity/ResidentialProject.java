package com.thaisoftplus.mk.jpa.entity;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Version;

/**
 * The persistent class for the "residential_project" database table.
 */
@Entity
@Table(name = "residential_project")
@NamedQuery(name = "ResidentialProject.findAll", query = "SELECT r FROM ResidentialProject r")
public class ResidentialProject implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "project_id")
    private int projectId;

    @Column(name = "contractor_id")
    private int contractorId;

    @Column(name = "create_datetime")
    private Timestamp createDatetime;

    @Column(name = "create_user")
    private String createUser;

    @Column(name = "designer_id")
    private int designerId;

    @Column(name = "developer_id")
    private int developerId;

    @Column(name = "project_name")
    private String projectName;

    @Column(name = "residential_id")
    private int residentialId;

    @Column(name = "update_datetime")
    private Timestamp updateDatetime;

    @Column(name = "update_user")
    private String updateUser;

    @Version
    private int version;

    public ResidentialProject() {
    }

    public int getProjectId() {
        return this.projectId;
    }

    public void setProjectId(int projectId) {
        this.projectId = projectId;
    }

    public int getContractorId() {
        return this.contractorId;
    }

    public void setContractorId(int contractorId) {
        this.contractorId = contractorId;
    }

    public Timestamp getCreateDatetime() {
        return this.createDatetime;
    }

    public void setCreateDatetime(Timestamp createDatetime) {
        this.createDatetime = createDatetime;
    }

    public String getCreateUser() {
        return this.createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser;
    }

    public int getDesignerId() {
        return this.designerId;
    }

    public void setDesignerId(int designerId) {
        this.designerId = designerId;
    }

    public int getDeveloperId() {
        return this.developerId;
    }

    public void setDeveloperId(int developerId) {
        this.developerId = developerId;
    }

    public String getProjectName() {
        return this.projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public int getResidentialId() {
        return this.residentialId;
    }

    public void setResidentialId(int residentialId) {
        this.residentialId = residentialId;
    }

    public Timestamp getUpdateDatetime() {
        return this.updateDatetime;
    }

    public void setUpdateDatetime(Timestamp updateDatetime) {
        this.updateDatetime = updateDatetime;
    }

    public String getUpdateUser() {
        return this.updateUser;
    }

    public void setUpdateUser(String updateUser) {
        this.updateUser = updateUser;
    }

    public int getVersion() {
        return this.version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

}
