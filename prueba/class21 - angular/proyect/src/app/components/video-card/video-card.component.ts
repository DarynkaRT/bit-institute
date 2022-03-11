import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {

  videoData = {
    title:"El titulo del video",
    branName: "Nombre de la marca",
    view: 0,
    time: new Date()
  }

  constructor() { } 

  ngOnInit(): void {
  }

}
