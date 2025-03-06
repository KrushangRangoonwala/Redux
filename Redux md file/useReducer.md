# prac 00
![alt text](image-7.png)
![alt text](image-6.png)
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)
![alt text](image-8.png)
![alt text](image-9.png)

![alt text](image-13.png)
![alt text](image-12.png)
![alt text](image-11.png)
![alt text](image-10.png)

# prac 01
![alt text](image-18.png)
![alt text](image-17.png)
![alt text](image-16.png)
![alt text](image-15.png)
![alt text](image-20.png)
![alt text](image-14.png)
 # prac02
----
![alt text](image-22.png)

![alt text](image-23.png)
![alt text](image-24.png)

# prac03 : Add redux devTools in chrome
1. Add redux devTools extension 

2. Add following package
```
npm i @redux-devtools/extension
```

3. Add in store.jsx
```javascript
import { composeWithDevTools } from '@redux-devtools/extension';
```

4. Create store like this
```javascript
let store = createStore(taskReducer, composeWithDevTools());
```

5. Now in your website, open `inspact`  >> select `Redux`
![alt text](image-25.png)
<br/>
<br/>
<br/>

## Redux Thunk
Used when , we want to do an API request in `Redux`.

![alt text](image-26.png)

**Steps 1  :**

```v 
npm install redux-thunk
```

**Steps 2 :**

```javascript
// store.jsx
import { createStore, applyMiddleware } from 'redux'  
import thunk from 'redux-thunk'
```

**step 3 :**
```javascript
// update below line in store.jsx
let store = createStore( 
    taskReducer, 
    composeWithDevTools( applyMiddleware(thunk) )
    );
```

**step 4 :**
### In store.jsx file
![alt text](image-27.png)
<!-- ![alt text](image-28.png) -->
![alt text](image-31.png)
### In App.jsx file
![alt text](image-30.png)
![alt text](image-29.png)

`handleFetchTasks` runs on `fetch` button's `onClick` event ex., `onClick={handleFetchTasks}`
<hr>
<br>
<br>

> ### Piyu Garg 
![alt text](image-32.png)
![alt text](image-33.png)
![alt text](image-34.png)
![alt text](image-35.png)
![alt text](image-37.png) npm package need to install