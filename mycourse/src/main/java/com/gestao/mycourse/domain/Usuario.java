package com.gestao.mycourse.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.*;

import java.util.HashMap;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Usuario {

    @Id
    private Long matricula;
    private String nome;
    private String email;
    private String senha;
    private Boolean isProfessor;

    @OneToMany(mappedBy = "usuarios")
    private HashMap<Long, Curso> cursos;

}
