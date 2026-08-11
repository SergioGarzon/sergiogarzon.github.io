import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoPortfolioComponent } from './logo-portfolio/logo-portfolio.component';
import { SocialNetworkComponent } from './social-network/social-network.component';
import { BannerComponent } from './banner/banner.component';
import { InformacionSobreMIComponent } from './informacion-sobre-mi/informacion-sobre-mi.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { StudiesCoursesComponent } from './studies-courses/studies-courses.component';
import { SkillComponent } from './skill/skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoPortfolioComponent,
    SocialNetworkComponent,
    BannerComponent,
    InformacionSobreMIComponent,
    WorkexperienceComponent,
    StudiesCoursesComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
