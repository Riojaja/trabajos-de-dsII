package com.tienda.api_tienda.controller;
import com.tienda.api_tienda.dto.CategoriaRequestDTO;
import com.tienda.api_tienda.dto.CategoriaResponseDTO;
import com.tienda.api_tienda.service.CategoriaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/articulos") // Mantenemos tu mapeo actual
@CrossOrigin(origins = "http://localhost:4200")
@Tag(name = "Categorías", description = "Endpoints para la gestión de categorías (Artículos)")
public class CategoriaController {

    private final CategoriaService service;

    public CategoriaController(CategoriaService service) {
        this.service = service;
    }

    @Operation(summary = "Obtiene la lista completa de todas las categorías.")
    @GetMapping
    public List<CategoriaResponseDTO> listar() {
        return service.listar();
    }

    @Operation(
        summary = "Crea una nueva categoría.",
        description = "Delega la creación a la capa de servicio usando CategoriaRequestDTO.",
        responses = {
            @ApiResponse(responseCode = "201", description = "Categoría creada exitosamente."),
            @ApiResponse(responseCode = "400", description = "Solicitud inválida. El nombre es obligatorio.")
        }
    )
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CategoriaResponseDTO crear(@RequestBody CategoriaRequestDTO dto) {
        try {
            return service.crear(dto);
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }

    @Operation(
        summary = "Obtiene una categoría por su ID único.",
        responses = {
            @ApiResponse(responseCode = "200", description = "Categoría encontrada."),
            @ApiResponse(responseCode = "404", description = "Categoría no encontrada.")
        }
    )
    @GetMapping("/{id}")
    public CategoriaResponseDTO obtener(@PathVariable Integer id) {
        return service.obtenerPorId(id);
    }

    @Operation(summary = "Actualiza parcialmente una categoría (PATCH).")
    @PatchMapping("/{id}")
    public CategoriaResponseDTO patch(@PathVariable Integer id, @RequestBody CategoriaRequestDTO dto) {
        return service.actualizarParcial(id, dto);
    }

    @Operation(
        summary = "Elimina una categoría del sistema.",
        responses = {
            @ApiResponse(responseCode = "204", description = "Categoría eliminada exitosamente.")
        }
    )
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void eliminar(@PathVariable Integer id) {
        service.eliminar(id);
    }
}