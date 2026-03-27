package com.empresa.backend_tareas.controller; // Asegúrate de que esto coincida con tu paquete

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // Le dice a Spring "Oye, esta clase va a recibir peticiones de internet"
@RequestMapping("/api/tareas") // La URL base para entrar aquí
public class TareaController {

    @GetMapping("/ping") // Si entran a /api/tareas/ping, se ejecuta este método
    public String verificarConexion() {
        return "¡El Backend corporativo está vivo y respondiendo!";
    }
}