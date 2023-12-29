package com.nl.fasty.fasty.Resource;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nl.fasty.fasty.vo.CarVO;

@RestController
@RequestMapping("/api/v1/fasty")
public class FastyResource {

    @PostMapping("/saveCar")
    public ResponseEntity<Void> saveCar(@RequestBody final CarVO entity) {
        System.out.println("asdad");
        return null;
    }


}
