import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from "../../services/auth.service";
import { AngularFirestore } from '@angular/fire/firestore';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../interfaces/blog';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { NavigationExtras, Router } from '@angular/router';
import { FiltercategoryPage } from '../filtercategory/filtercategory.page';
import { ModalController, Platform, IonList, PopoverController } from '@ionic/angular';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  currentUser: any;
  user: any;

  blogs: Blog[];
  blogs2: Blog[];
  allBlogs: Blog[];
  sentTimestamp: Date;
  blogAuthor: any;
  
  

  constructor(
    private db: AngularFirestore, 
    private auth: AuthService,
    private router: Router,
    private popoverCtrl: PopoverController,
    public afAuth: AngularFireAuth,
    private socialSharing: SocialSharing,
    private admobFree: AdMobFree,
    private blogService: BlogService) { 
      this.afAuth.authState.subscribe(user => {
        if (user) {
          
          this.currentUser = this.afAuth.auth.currentUser; 
        
        }
      });
    }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(res => {
      this.blogs = res;
      this.allBlogs = res;
      this.blogs2 = this.blogs;
    }); 

    const bannerConfig: AdMobFreeBannerConfig = {
    
      isTesting: true,
      autoShow: true
     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare()
  }

  open(blog) {
    let navigationExtras: NavigationExtras = {
      state: {
        blogs: blog
      }
    };
    this.router.navigate(['/blog/details'], navigationExtras);
  }

  sShare() {
    var options = {
      message: 'Ionic Share', // not supported on some apps (Facebook, Instagram)
      //subject: 'the subject', // fi. for email
      //files: ['', ''], // an array of filenames either locally or remotely
      url: 'https://ionicframework.com/docs/native/social-sharing',
      //chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title
      //appPackageName: 'com.apple.social.facebook', // Android only, you can provide id of the App you want to share with
      };
      this.socialSharing.shareWithOptions(options);
  }
  
  async openFilter(e) {
    const popover = await this.popoverCtrl.create({
      component: FiltercategoryPage,
      event: e
    });
    await popover.present();

    popover.onDidDismiss().then(res => {
      if (res && res.data) {
        let selectedName = res.data.selected.name;

        if (selectedName == 'All') {
          this.blogs = this.allBlogs;
        } else {
          this.blogs = this.allBlogs.filter(blog => {
            return blog.category == selectedName;
          });
        }
      }
    })
  }
      
   
    signOut() {
      this.afAuth.auth.signOut();
    }
  

   
  }

    


