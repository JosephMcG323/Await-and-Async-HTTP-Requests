const http = new EasyHTTP;

// Get Users



// we do it the a-sybchronous way


/*  why do we do it this way, well when making a get
 and post req   if you do both at the same time you dont get the 
return yet, so make a .then, to excute aftwwards

*/

http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));




/*  THIS IS THE SYNCHRONOUS WAY

const users = http.get('https://jsonplaceholder.typicode.com/users');


console.log(users); 

*/

//POST USER DATA

const data = 

{
  name: 'Bert',
  username: 'Bertowe',
  email: 'bert@gmail'
};

const http2 = new EasyHTTP;



http2.post('https://jsonplaceholder.typicode.com/users', data )
.then(data => console.log(data))
.catch(err => console.log(err));




//PUT REQUEST

const data2 = 

{
  name: 'Bert',
  username: 'Bertowe',
  email: 'bert@gmail'
};

const http3 = new EasyHTTP;



http3.post('https://jsonplaceholder.typicode.com/users', data2 )
.then(data => console.log(data))
.catch(err => console.log(err));

//
//DELETE request
//




const http4 = new EasyHTTP;


http4.delete('https://jsonplaceholder.typicode.com/users/1')
.then(data => console.log(data))
.catch(err => console.log(err));