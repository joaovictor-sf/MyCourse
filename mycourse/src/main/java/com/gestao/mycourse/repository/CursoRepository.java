package com.gestao.mycourse.repository;

import com.gestao.mycourse.domain.Curso;
import com.gestao.mycourse.domain.Usuario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CursoRepository extends CrudRepository<Curso, Long> {

}
