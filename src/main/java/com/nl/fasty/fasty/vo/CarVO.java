package com.nl.fasty.fasty.vo;

import java.io.Serializable;

public class CarVO implements Serializable{

    private static final long serialVersionUID = 5516803953542248602L;
    private String id;
    private String modelo;
    private String imageUrl;

    public String getId() {
        return id;
    }

    public void setId(final String id) {
        this.id = id;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(final String modelo) {
        this.modelo = modelo;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(final String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
