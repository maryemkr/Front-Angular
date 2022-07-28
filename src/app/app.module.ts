
import { MessageComponent } from './views/message/message.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { ListAdherentComponent } from './views/adherents/list-adherent/list-adherent.component';
import { AjoutAdherentComponent } from './views/adherents/ajout-adherent/ajout-adherent.component';
import { AjoutPayementComponent } from './views/payements/ajout-payement/ajout-payement.component';
import { AjoutEntrepriseComponent } from './views/entreprises/ajout-entreprise/ajout-entreprise.component';
import { ListeEntrepriseComponent } from './views/entreprises/liste-entreprise/liste-entreprise.component';
import { AjoutPayCheckComponent } from './views/payements/ajout-pay-check/ajout-pay-check.component';
import { ListePayChequeComponent } from './views/payements/liste-pay-cheque/liste-pay-cheque.component';
import { ListePayCashComponent } from './views/payements/liste-pay-cash/liste-pay-cash.component';
import { FileComponent } from './views/file/file.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListBureauxComponent } from './views/Bureaux/list-bureaux/list-bureaux.component';
import { AjoutBureauComponent } from './views/Bureaux/ajout-bureau/ajout-bureau.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MembresComponent } from './views/membres/membres/membres.component';
import { AjoutMembresComponent } from './views/membres/ajout-membres/ajout-membres.component';
import { PostsComponent } from './views/posts/posts/posts.component';
import { AjoutPostsComponent } from './views/posts/ajout-posts/ajout-posts.component';
import { NavbarFrontComponent } from './front/navbar-front/navbar-front/navbar-front.component';
import { ActualiteComponent } from './front/navbar-front/actualite/actualite.component';
import { HeaderComponent } from './front/header/header.component';
import { FooterComponent } from './front/footer/footer.component';
import { AboutComponent } from './front/navbar-front/about/about.component';
import { PostSingleComponent } from './front/navbar-front/post-single/post-single.component';
import { ContactComponent } from './front/navbar-front/contact/contact.component';
import { ServicesComponent } from './front/navbar-front/services/services.component';
import { EventsComponent } from './views/events/events.component';
import { AjoutEventComponent } from './views/events/ajout-event/ajout-event.component';
import { OneEventComponent } from './front/navbar-front/one-event/one-event.component';
import { EvenementsComponent } from './front/navbar-front/evenements/evenements.component';
import { ChatComponent } from './views/chat/chat.component';
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component';
@NgModule({
  declarations: [
    AppComponent,
    ListAdherentComponent,
    AjoutAdherentComponent,
    AjoutPayementComponent,
    AjoutEntrepriseComponent,
    ListeEntrepriseComponent,
    AjoutPayCheckComponent,
    ListePayChequeComponent,
    ListePayCashComponent,
    FileComponent,
    ListBureauxComponent,
    AjoutBureauComponent,
    MembresComponent,
    AjoutMembresComponent,
    PostsComponent,
    AjoutPostsComponent,
    NavbarFrontComponent,
    ActualiteComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    PostSingleComponent,
    ContactComponent,
    ServicesComponent,
    EventsComponent,
    MessageComponent,
    AjoutEventComponent,
    OneEventComponent,
    EvenementsComponent,
    ChatComponent,
    PagenotfoundComponent,
 


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    

  ],
  providers: [

    // {provide: HTTP_INTERCEPTORS, useClass : JwtInterceptor , multi:true }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
