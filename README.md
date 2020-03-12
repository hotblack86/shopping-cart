A shopping cart app using React.js as the front-end framework, and a backend server built using Node.js and Express.js.

##Install Dependencies:-##

```npm i -S express react-router-dom axios jsonwebtoken cors body-parser bootstrap```

##Usage:-##

* Run the backend server by using the following command in a terminal
```npm run api```

* Run the App by using the following command in a _seperate_ terminal
```npm start```

* Product and User data is in api/data.js. Feel free to change these.





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Source:- https://dzone.com/articles/create-a-simple-shopping-cart-using-react-and-node


##Issues##

* Current bug to fix - 'Warning: Can't perform a React state update on an unmounted component' in Checkout component

* Above bug fixed. Issue was a typo in e.preventDefault in Login.js that was preventing succesful login. Angry face.


