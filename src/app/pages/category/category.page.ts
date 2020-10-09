import { Component, OnInit } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastController, ModalController } from '@ionic/angular';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../interfaces/blog';
import { BloglistPage } from '../bloglist/bloglist.page';
import { blogSubjects } from '../../../assets/data/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categories = [
    { name: 'Blog', thumb: '../../../assets/img/blogimgp.jpg' },
    { name: 'Jobs', thumb: '../../../assets/img/jobimgp.jpg' },
    { name: 'Remote Jobs', thumb: '../../../assets/img/remoteimgp.jpg' },
    { name: 'Nigeria Jobs', thumb: '../../../assets/img/najajobimgp.jpg' },
    { name: 'Scholarships', thumb: '../../../assets/img/scholaimgp.jpg' },
    { name: 'Internships', thumb: '../../../assets/img/internimgp.jpg' },
    { name: 'Covid-19', thumb: '../../../assets/img/covidimgp.jpg' },
    { name: 'Npower', thumb: '../../../assets/img/npowerimgp.png' },
    { name: 'Technology', thumb: '../../../assets/img/techimgp.jpg' },
    { name: 'Relationships', thumb: '../../../assets/img/relimgp.jpg' },
    { name: 'Forex', thumb: '../../../assets/img/foreximgp.jpg' },
    { name: 'Programming', thumb: '../../../assets/img/progimgp.jpg' }
    
  ];

  blogSubjects = blogSubjects;

  constructor(
    private sanitizer: DomSanitizer,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  

  getBlockColor(source) {
     console.log(this.hashCode(source['name']));
    return this.sanitizer.bypassSecurityTrustStyle(`--myvar: #${this.intToRGB(this.hashCode(source['name']))}`);
  }

  

  // https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
  hashCode(str) {
    // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  intToRGB(i) {
    var c = (i & 0x00ffffff).toString(16).toUpperCase();

    return "00000".substring(0, 6 - c.length) + c + "80";
  }

}
