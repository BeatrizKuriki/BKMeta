package com.devsuperior.dkmeta.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dkmeta.entities.Vendas;
import com.devsuperior.dkmeta.services.VendasService;

@RestController
@RequestMapping(value = "/sales")
public class VendasController {
	
	@Autowired
	private VendasService service;
	
	@GetMapping
	public List<Vendas> findVendas(){
		return service.findVendas();
		
		
	}
	

}
