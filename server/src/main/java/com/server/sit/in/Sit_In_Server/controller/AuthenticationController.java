package com.server.sit.in.Sit_In_Server.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import com.server.sit.in.Sit_In_Server.models.AdminClass;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthenticationController {

    private AdminClass adminClass;

    
    public AuthenticationController() {
        // Default constructor
    }

    @Autowired
    public  AuthenticationController(AdminClass adminClass) {
        this.adminClass = adminClass;
    }
  


@GetMapping("/hello")
    public String hello() {
        return "Connected to Springboot server! Congratulations!";
    }

    @GetMapping("/users")
    public List<String> getUsers() {
        return List.of("User1", "User2", "User3");
    }

    @GetMapping("/login")
    public boolean Login() {
        return adminClass.getUserName().equals("admin") && adminClass.getPassword().equals("admin123");
    }
}

