import { Component, OnInit, Input, OnDestroy, AfterViewInit  } from '@angular/core';
import { Blog } from '../../interfaces/blog';
import { ModalController } from '@ionic/angular';
import { BlogService } from '../../services/blog.service';
import { BlogdetailPage } from '../blogdetail/blogdetail.page';
import { DomSanitizer } from '@angular/platform-browser';
import { CoursesPage } from '../courses/courses.page';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.page.html',
  styleUrls: ['./bloglist.page.scss'],
})
export class BloglistPage implements OnInit {
  @Input() blogSubject: any;
  blogList: any;
  blogs: Blog[];

  categories = [
    { name: 'All', thumb: '../../../assets/img/all.png' },
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

  constructor(
    private modalController: ModalController,
    private blogService: BlogService) { }

  ngOnInit() {
  }

  select(cat) {
    ({selected: cat});
  }


  

}
