package com.tienda.api_tienda.dto;

import java.math.BigDecimal;

public class ProductoResponseDTO {
    public Integer idProducto; // Mapeado desde id_producto
    public String nombre;
    public BigDecimal precio;
    public Integer stock;
    
    // Información simplificada de la relación
    public Integer idCategoria;
    public String nombreCategoria; // Extraído de la entidad Categoria vinculada
}