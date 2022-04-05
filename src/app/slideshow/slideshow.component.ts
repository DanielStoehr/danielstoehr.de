import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['light_bulb.jpg','machine.jpg','programming.jpg']
  headlines = ['Bring engineering to the next level','Machine learning activated','Born to code']
  currentElement = 0
  showElement = true

  constructor() { }

  ngOnInit(): void {
    this.updateImage()
  }

  updateImage() {
    setInterval(()=>{
      this.currentElement++
      this.currentElement = this.currentElement % this.images.length
      this.showElement = false

      setTimeout(()=>{
        this.showElement = true
      },100)
    },8000)
  }

}
