package com.server.sit.in.Sit_In_Server.models;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


@Component
public class AdminClass  {
    @Value("${admin.username}")
    private String userName;
    @Value("${admin.password}")
    private String password;

  
   
    public String getUserName() {
        return userName;
    }

 
    public String getPassword() {
        return password;
    }
 
    
}
