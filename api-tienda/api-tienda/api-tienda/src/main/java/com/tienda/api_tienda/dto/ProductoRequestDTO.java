package com.tienda.api_tienda.dto;

import java.math.BigDecimal;

public class ProductoRequestDTO {
    public String nombre;
    public BigDecimal precio; // Coincide con DECIMAL(10,2) de tu SQL
    public Integer stock;
    public Integer idCategoria; // El ID de la FK para buscarlo en la BD
	public int getPrecio() {
		// TODO Auto-generated method stub
		return 0;
	}
}
