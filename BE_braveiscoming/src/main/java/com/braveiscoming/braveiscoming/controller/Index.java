package com.braveiscoming.braveiscoming.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Index {
	@Operation(summary = "index")
	@GetMapping("/index")
	public ResponseEntity<Object> index() {
		return new ResponseEntity<>("{\"name\": \"braveiscoming!\"}", HttpStatus.OK);
	}
}
