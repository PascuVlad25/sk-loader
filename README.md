# sk-loader
Highly customizable skeleton loader component for Angular applications.

## What is this?
- npm components library for Angular apps
- a set of different skeleton-loaders components
- exactly what you need if you have an app that loads a lot of data 


## Installation
```shell
npm install sk-loader
```

## Setup
In order to use `<sk-loader>` component inside `YourNewComponent`, you'll have to import `SkLoaderModule` in your application module where you've declared `YourNewComponent`. See an example below:  
```typescript
...
import { SkLoaderModule } from 'sk-loader';
...

@NgModule({
    declarations: [
        YourNewComponent
    ],
    imports: [
        ...,
        SkLoaderModule,
        ...
    ],
    ...
})
```
After that, you can place `<sk-loader>` component inside your templates, using your custom configuration.

```html
<div class="container">
    <sk-loader 
        *ngIf="isLoading" 
        [rowsNumber]="2" 
        [indent]="true"
    ><sk-loader>
    <p *ngIf="!isLoading"
        class="text-indent">
        {{ 'This dynamic text comes from the server' }}
    </p>
</div>
```

## Demo

Check out the demo page [here](https://vladpascu.com/sk-loader/)!
