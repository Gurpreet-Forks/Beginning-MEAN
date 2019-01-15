import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleService } from './service/article.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ViewPostComponent } from './view-post/view-post.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component';
import { FormsModule }   from '@angular/forms';
import { AuthService } from './service/auth.service';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleHeaderComponent } from './title-header/title-header.component';


const appRoutes: Routes = [
  { path: 'blog', component: BlogHomeComponent, data: {animation: 'HomePage'}},
  { path: 'blog/post/:id',  component: ViewPostComponent,data: {animation: 'PostPage'}},
  { path: 'login',  component: LoginComponent,data: {animation: 'LoginPage'}},
  { path: 'register',  component: RegisterComponent,data: {animation: 'RegisterPage'}},
  { path: 'create',  component: CreateComponent,data: {animation: 'CreatePage'}},
  { path: '',
    redirectTo: '/blog',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogHomeComponent,
    HeaderComponent,
    FooterComponent,
    ViewPostComponent,
    LoginComponent,
    RegisterComponent,
    CreateComponent,
    TitleHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ArticleService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }