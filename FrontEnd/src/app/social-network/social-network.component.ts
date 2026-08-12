import { Component } from '@angular/core';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.css']
})
export class SocialNetworkComponent {


  GeneralEvent(event: number) {
    switch (event) {
      case 1:
        window.open("https://api.whatsapp.com/send/?phone=5493517416569&text=Hola+Sergio%2C+te+escribo+por+propuesta+laboral+...", "_newtab");
        break
      case 2:
        window.open("https://t.me/username", "_newtab");
        break
      case 3:
        window.open("https://www.linkedin.com/in/sergio-gabriel-garzon/", "_newtab");
        break
      case 4:
        window.open("https://github.com/SergioGarzon/", "_newtab");
        break
    }

    this.PlaySound()    
  }

  PlaySound() {
    let audio = new Audio();    
    audio.src = "../../assets/Sound/beep.mp3";
    audio.load();
    audio.play();
  }   

}
