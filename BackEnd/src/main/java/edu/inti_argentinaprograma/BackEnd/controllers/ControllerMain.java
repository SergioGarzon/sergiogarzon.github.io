package edu.inti_argentinaprograma.BackEnd.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class ControllerMain {
	
	
	@GetMapping("/saludo")
	public String getSaludo() {
		return "Hola mundo";
	}

}
