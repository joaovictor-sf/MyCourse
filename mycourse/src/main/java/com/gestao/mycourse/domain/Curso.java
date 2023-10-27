package com.gestao.mycourse.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Curso {
    @Id
    private Long id;
    private String nome;
    private String descricao;

    @ManyToOne
    private Usuario usuario;
}
