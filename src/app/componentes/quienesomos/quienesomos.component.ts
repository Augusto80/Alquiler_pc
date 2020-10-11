import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quienesomos',
  templateUrl: './quienesomos.component.html',
  styleUrls: ['./quienesomos.component.css']
})
export class QuienesomosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

}
