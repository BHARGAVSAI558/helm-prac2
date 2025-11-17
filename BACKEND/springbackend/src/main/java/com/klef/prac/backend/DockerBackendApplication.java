package com.klef.prac.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DockerBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(DockerBackendApplication.class, args);
	  System.out.println("Docker..");
	}

}
