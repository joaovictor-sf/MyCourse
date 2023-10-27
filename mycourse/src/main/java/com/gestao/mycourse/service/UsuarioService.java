package com.gestao.mycourse.service;

import com.gestao.mycourse.domain.Usuario;

public interface UsuarioService {

    Usuario getUsuarioByMatricula(Long matricula);

}
