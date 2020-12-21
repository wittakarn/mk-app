package com.thaisoftplus.mk.domain;

import java.io.Serializable;

public class ResponseMessage implements Serializable {
    private static final long serialVersionUID = 1L;

    private String message;
    private Object value;

    public ResponseMessage(String message, Object value) {
        this.message = message;
        this.value = value;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getValue() {
        return value;
    }

    public void setValue(Object value) {
        this.value = value;
    }
}
