import { Component } from '@angular/core';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.css']
})
export class SocialNetworkComponent {


  playSound() {
    let audio = new Audio();    
    audio.src = "../../assets/Sound/beep.mp3";
    audio.load();
    audio.play();
  }   

}
