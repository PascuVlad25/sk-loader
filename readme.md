# sk-loader
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
    <script type="module">
        import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/sk-loader/loader/index.es2017.js';
        defineCustomElements();
    </script>
</head>
<body>
    ...
    <sk-loader-image></sk-loader-image>
    <sk-loader-paragraph rows="5" indent></sk-loader-paragraph>
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
"build": {
    "styles": [
        "src/styles.scss",
        "./node_modules/sk-loader/dist/sk-loader/sk-loader.css"
    ],
}
```

new-component.component.html
```html
<div class="container">
    <!-- Use it before the content loads -->
    <sk-loader-paragraph *ngIf="isLoading" rows="2" indent><sk-loader-paragraph>
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
            <sk-loader-paragraph rows="2" indent><sk-loader-paragraph>:
            <p className="text-indent">
                { 'This dynamic text comes from the server' }
            </p>
        }        
    </div>
  );
}
```

## Demo

Check out the demo page [here](https://vladpascu.com/sk-loader/)!
