package edu.neu.csye6200;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Driver {
	public static void main(String[] args) {
         //Add your code in between these two print statements
		SpringApplication.run(Driver.class, args);
		System.out.println("http://localhost:9999/swagger-ui/index.html");
	}

}
