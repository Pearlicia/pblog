import { Component, OnInit, RendererFactory2, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from "../services/auth.service";
import { AngularFirestore } from '@angular/fire/firestore';
import { BlogService } from '../services/blog.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  renderer: Renderer2;
  
  currentUser: any;
  user: any;
  
  

  constructor( 
    private db: AngularFirestore,
    private rendererFactory: RendererFactory2, 
    @Inject(DOCUMENT) private document: Document,
    private auth: AuthService,
    public afAuth: AngularFireAuth,
    private blogService: BlogService) { 
      this.renderer = rendererFactory.createRenderer(null, null);
      this.afAuth.authState.subscribe(user => {
        if (user) {
          
          this.currentUser = this.afAuth.auth.currentUser; 
          console.log(this.currentUser);

          
        }
      });
    }

  ngOnInit() {
  }

  enableLight() {
    this.renderer.removeClass(this.document.body, 'dark-theme');
  }

  enableDark() {
    this.renderer.addClass(this.document.body, 'dark-theme');
  } 
    
  async signOut() {
    this.afAuth.auth.signOut().then(() => {
      console.log('successful logout');
      this.currentUser = null;
    });
  }

  
 



}
