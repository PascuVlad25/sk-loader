# [sk-loader](https://vladpascu.com/sk-loader)
Highly customizable skeleton loader web components for any application.

## What is this?
- web components library
- a collection of different skeleton-loaders components
- exactly what you need if your app loads a lot of data 


## Installation
```shell
npm install sk-loader
```

## Setup
The setup depends on what type of app you have:

## Website/App using Javascript (plain/vanilla)
index.html
```html 
<head>
    ...
    <link rel="stylesheet" href="https://unpkg.com/sk-loader@2.1.2/dist/sk-loader/sk-loader.css">
    <script type="module">
        import { defineCustomElements } from 'https://unpkg.com/sk-loader@2.1.2/loader/index.es2017.js';
        defineCustomElements();
    </script>
</head>
<body>
    ...
    <sk-loader-image></sk-loader-image>
    <sk-loader-text rows="5" indent></sk-loader-text>
    ...
</body>
```
## Angular app

app.module.ts
```typescript
@NgModule({
  ...
  // Add CUSTOM_ELEMENTS_SCHEMA to schemas
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```

main.ts
```typescript
// other imports
...
import { defineCustomElements } from 'sk-loader/loader';

// other logic
...
defineCustomElements(window);
```
angular.json
```json
{
    "build": {
        "styles": [
            "src/styles.scss",
            "./node_modules/sk-loader/dist/sk-loader/sk-loader.css"
        ],
    }
}
```

new-component.component.html
```html
<div class="container">
    <!-- Use it before the content loads -->
    <sk-loader-text *ngIf="isLoading" rows="2" indent><sk-loader-text>
    <p *ngIf="!isLoading"
        class="text-indent">
        {{ 'This dynamic text comes from the server' }}
    </p>
</div>
```

## React app

index.js
```javascript
// other imports
...
import 'sk-loader/dist/sk-loader/sk-loader.css';
import { defineCustomElements } from 'sk-loader/loader';

// other logic
...
defineCustomElements();
```
new-component.tsx
```tsx
function NewComponent() {
  return (
    <div className="container">
        { isLoading ? 
            <sk-loader-text rows="2" indent /> :
            <p className="text-indent">
                { 'This dynamic text comes from the server' }
            </p>
        }        
    </div>
  );
}
```
## Docs

More details about the components on [sk-loader docs](https://vladpascu.com/sk-loader/docs) page!

## Main page

Check out the main page of the package [here](https://vladpascu.com/sk-loader/)!
