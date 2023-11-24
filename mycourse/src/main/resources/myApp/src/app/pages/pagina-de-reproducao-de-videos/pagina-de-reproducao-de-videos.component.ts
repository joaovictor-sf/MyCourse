import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pagina-de-reproducao-de-videos',
  templateUrl: './pagina-de-reproducao-de-videos.component.html',
  styleUrls: ['./pagina-de-reproducao-de-videos.component.scss']
})
export class PaginaDeReproducaoDeVideosComponent implements OnInit {

  videoId: any


  constructor(
    private route: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.videoId = params['videoId'];
      console.log('Video ID recebido:', this.videoId);
    });
    this.loadVideo(this.videoId)
  }

  loadVideo(videoId: any) {
    // Verificar se o elemento existe antes de manipulá-lo
    const videoContainer = document.getElementById('video-container');
    if (videoContainer) {
      var iframeCode = '<iframe width="1280" height="720px" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
      videoContainer.innerHTML = iframeCode;
    } else {
      console.error("Elemento 'video-container' não encontrado no DOM.");
    }
  }

}
