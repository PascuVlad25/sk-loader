import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  features = [
    {
      title: 'Better UX',
      description: 'Skeleton loaders steal users\' attention and create the illusion of faster page load times. They also create anticipation so the user knows the placement of the loaded content.',
      icon: 'assets/icons/wand-magic-sparkles-solid.svg'
    },
    {
      title: 'Highly customizable',
      description: 'You can change the parameters of the component so that the loader fits perfectly with your final loaded content. There are endless variations to try out.',
      icon: 'assets/icons/sliders-solid.svg'
    },
    {
      title: 'Easy to use',
      description: 'Vast and explicit documentation with a lot of examples to understand how this component works and how you can use it at its best. Then just npm install and you are ready to go.',
      icon: 'assets/icons/face-smile-beam-solid.svg'
    },
    {
      title: 'Lightweight',
      description: 'Only 85 KB on top of your node_modules. This light and independent package also won\'t install any other new dependencies.',
      icon: 'assets/icons/feather-solid.svg'
    },
    {
      title: 'Open-source',
      description: 'You can download and use this library for free. Also the code base is available on GitHub and open to collaboration and feedback from any contributor.',
      icon: 'assets/icons/code-solid.svg'
    },
    {
      title: 'Made for Angular',
      description: 'The components were made with Angular and Typescript. So this library will fit like a glove with any Angular application.',
      icon: 'assets/icons/angular-brands.svg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
