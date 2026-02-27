package com.tienda.api_tienda.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tienda.api_tienda.model.Producto;
import com.tienda.api_tienda.repository.ProductoRepository;

import java.util.List;

@Service
public class ProductoService {
	@Autowired // Inyección de dependencia de la Capa de Datos (Repository)
	private ProductoRepository productoRepository;

	/**
	 * Lógica de negocio para listar todos los productos.
	 */
	public List<Producto> listarTodos() {
		return productoRepository.findAll();
	}

	/**
	 * Lógica de negocio para guardar un nuevo producto.
	 */
	public Producto guardar(Producto producto) {
// Validación de lógica de negocio: El precio debe ser positivo. (LÓGICA EN CAPA SERVICE) 
		if (producto.getPrecio() <= 0) {
			throw new IllegalArgumentException("El precio del producto debe ser un valor positivo.");
		}
		return productoRepository.save(producto);
	}
}