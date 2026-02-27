package com.tienda.api_tienda.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tienda.api_tienda.model.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Long> {}