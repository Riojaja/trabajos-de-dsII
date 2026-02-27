package com.tienda.api_tienda.controller;

import com.tienda.api_tienda.model.Producto;
import com.tienda.api_tienda.service.ProductoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/productos")
@Tag(name = "Productos", description = "Endpoints para la gestión de Productos.")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    // Endpoint GET: Obtiene la lista completa de productos
    @Operation(summary = "Obtiene la lista completa de todos los productos.")
    @GetMapping
    public List<Producto> obtenerTodos() {
        return productoService.listarTodos();
    }

    // Endpoint POST: Crea un nuevo producto
    @Operation(
        summary = "Crea un nuevo producto.",
        description = "Delega la validación de negocio al Servicio. Requiere que 'precio' sea > 0.",
        responses = {
            @ApiResponse(
                responseCode = "201",
                description = "Producto creado y retornado exitosamente."
            ),
            @ApiResponse(
                responseCode = "400",
                description = "Solicitud inválida. El precio del producto debe ser un valor positivo."
            )
        }
    )
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Producto crearProducto(@RequestBody Producto producto) {
        try {
            return productoService.guardar(producto);
        } catch (IllegalArgumentException e) {
            // El Controller maneja la excepción del Service y devuelve un 400
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }
}