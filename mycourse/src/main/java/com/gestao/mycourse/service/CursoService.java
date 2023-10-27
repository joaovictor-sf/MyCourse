package com.gestao.mycourse.service;

import com.gestao.mycourse.domain.Curso;

import java.util.Map;

public interface CursoService {

    //Metodos para criar curso, lista curso, deletar curso, atualizar curso, buscar curso por id, buscar curso por nome

    Curso createCurso(Curso curso);

    Map<Long, Curso> listCurso();

}
