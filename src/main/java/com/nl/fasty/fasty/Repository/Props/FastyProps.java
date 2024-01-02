package com.nl.fasty.fasty.Repository.Props;

import java.io.Serializable;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class FastyProps  implements Serializable  {
    
    private static final long serialVersionUID = -6579693513689216394L;

    @Value("/home/bruno.ascari@intranetnl.com.br/Documentos/Treinamento/Fasty/react-fasty/src/webapp")
    private String path;


    @Value("produtos-precos.json")
    private String file;


    public FastyProps() {
        super();
    }

    public String getPath() {
        return path;
    }

    public void setPath(final String path) {
        this.path = path;
    }

    public String getFile() {
        return file;
    }

    public void setFile(final String file) {
        this.file = file;
    }
}

