import { DashboardguardGuard } from './views/guard/dashboardguard.guard';
import { RegisterComponent } from './layouts/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FileComponent } from './views/file/file.component';
import { NavbarFrontComponent } from './front/navbar-front/navbar-front/navbar-front.component';
import { AboutComponent } from './front/navbar-front/about/about.component';
import { ActualiteComponent } from './front/navbar-front/actualite/actualite.component';
import { PostSingleComponent } from './front/navbar-front/post-single/post-single.component';
import { ContactComponent } from './front/navbar-front/contact/contact.component';
import { ServicesComponent } from './front/navbar-front/services/services.component';
import { OneEventComponent } from './front/navbar-front/one-event/one-event.component';
import { EvenementsComponent } from './front/navbar-front/evenements/evenements.component';
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: '', component: NavbarFrontComponent },
  { path: 'about', component: AboutComponent },
  { path: 'actualite', component: ActualiteComponent },
  { path: 'login', component: AuthComponent },
  { path: 'file', component: FileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'single/:id', component: PostSingleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'event/:id', component: OneEventComponent },
  { path: 'evenements', component: EvenementsComponent },

  {
    path: 'admin', component: NavbarComponent, canActivate: [DashboardguardGuard], children: [
      { path: '', loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'adherents', loadChildren: () => import('./views/adherents/list-adherent/list-adherent/list-adherent.module').then(m => m.ListAdherentModule) },
      { path: 'ajouter', loadChildren: () => import('./views/adherents/ajout-adherent/ajout-adherent/ajout-adherent.module').then(m => m.AjoutAdherentModule) },
      { path: 'paiement', loadChildren: () => import('./views/payements/liste payment/payment.module').then(m => m.PaymentModule) },
      { path: 'ajoutPayCash', loadChildren: () => import('./views/payements/ajout-payement/ajout-payement.module').then(m => m.AjoutPayementModule) },
      { path: 'ajoutPaycheck', loadChildren: () => import('./views/payements/ajout-pay-check/ajout-pay-check.module').then(m => m.AjoutPayCheckModule) },
      { path: 'ListPayCash', loadChildren: () => import('./views/payements/liste-pay-cash/liste-pay-cash.module').then(m => m.ListePayCashModule) },
      { path: 'ListPayCheck', loadChildren: () => import('./views/payements/liste-pay-cheque/liste-pay-cheque.module').then(m => m.ListePayChequeModule) },
      { path: 'ajoutEntreprise', loadChildren: () => import('./views/entreprises/ajout-entreprise/ajout-entreprise.module').then(m => m.AjoutEntrepriseModule) },
      { path: 'entreprises', loadChildren: () => import('./views/entreprises/liste-entreprise/liste-entreprise.module').then(m => m.ListeEntrepriseModule) },
      { path: 'bureaux', loadChildren: () => import('./views/Bureaux/list-bureaux/list-bureaux.module').then(m => m.ListBureauxModule) },
      { path: 'ajoutBureau', loadChildren: () => import('./views/Bureaux/ajout-bureau/ajout-bureau.module').then(m => m.AjoutBureauModule) },
      { path: 'membres', loadChildren: () => import('./views/membres/membres/membres.module').then(m => m.MembresModule) },
      { path: 'ajoutMembres', loadChildren: () => import('./views/membres/ajout-membres/ajout-membres.module').then(m => m.AjoutMembresModule) },
      { path: 'posts', loadChildren: () => import('./views/posts/posts/posts.module').then(m => m.PostsModule) },
      { path: 'ajoutPosts', loadChildren: () => import('./views/posts/ajout-posts/ajout-posts.module').then(m => m.AjoutPostsModule) },
      { path: 'message', loadChildren: () => import('./views/message/message.module').then(m => m.MessageModule) },
      { path: 'events', loadChildren: () => import('./views/events/events.module').then(m => m.EventsModule) },
      { path: 'ajoutEvent', loadChildren: () => import('./views/events/ajout-event/ajout-event.module').then(m => m.AjoutEventModule) },
      { path: 'chat', loadChildren: () => import('./views/chat/chat.module').then(m => m.ChatModule) },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
