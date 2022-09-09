package com.devsuperior.dkmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dkmeta.entities.Vendas;
import com.devsuperior.dkmeta.repositories.VendasRepository;

@Service
public class VendasService {
	
	@Autowired
	private VendasRepository repository;
	
	public List<Vendas> findVendas() {
		return repository.findAll();
		
		
	}

}
