import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { Router, NavigationExtras  } from '@angular/router';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent implements OnInit {
  arrayCursos:any = [];
  listaCursosJava: any = [];
  listaCursosPython: any = [];
  listaCursosExcel: any = [];


  constructor(
    private cursoService: CourseServiceService,
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.getCursosPaginaInicial();
    console.log("pagina inicial")
    //this.extrairInfo();
  }

  getCursosPaginaInicial(){
    this.cursoService.getCursos().subscribe((dados:any)=>{
      this.arrayCursos = dados
      console.log("arraycursos", dados)
      this.listaCursosJava = this.arrayCursos.filter(function(objeto:any) {
        return objeto.name.toLowerCase().includes('java');
      });
      this.listaCursosPython = this.arrayCursos.filter(function(objeto:any) {
        return objeto.name.toLowerCase().includes('python');
      });
      this.listaCursosExcel = this.arrayCursos.filter(function(objeto:any) {
        return objeto.name.toLowerCase().includes('excel');
      });
      console.log("tentando mostrar a lista de cursos de java", this.listaCursosJava)
    })

  }

  extrairInfoDoVideo(linkDoYoutube: any) {
    // Verificar se o link é válido
    const padraoDoLink = /^(https?:\/\/)?(www\.)?(youtube\.com\/(.*\/)?|youtu\.be\/)(watch\?v=|embed\/|v\/|.+\?v=)?([^&=%\?]{11})/;
    const correspondencia = linkDoYoutube.match(padraoDoLink);

    if (correspondencia) {
      const idDoVideo = correspondencia[6];

      // Construir a URL da imagem de capa
      const urlDaImagem = `https://img.youtube.com/vi/${idDoVideo}/maxresdefault.jpg`;

      return {
        idDoVideo: idDoVideo,
        urlDaImagem: urlDaImagem
      };
    } else {
      console.error('Link do YouTube inválido.');
      return null;
    }
  }
  linkDoYoutube: string = 'https://www.youtube.com/watch?v=sTX0UEplF54&list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR';
  infoDoVideo: any = null;
  extrairInfo(lnik:String) {
    this.infoDoVideo = this.extrairInfoDoVideo(lnik);
    return this.infoDoVideo
  }

  redirecionarParaReproducao(video: any){
    console.log("imprimindo video", video)
    let videoId = this.extrairInfoDoVideo(video.videoUrl)?.idDoVideo
    console.log("imprimindo retorno do extrarir info video", videoId)
    let videoIdString = videoId?.toString();
    let navigationExtras: NavigationExtras = {
      queryParams: { 'videoId': videoIdString  }
    };
    console.log("chegou na funcao de redirecionamento")
    this.router.navigate(['/video'], navigationExtras);

  }






}
