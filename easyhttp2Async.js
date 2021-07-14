/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Brad Traversy
 * @license MIT
 *
 **/

 class EasyHTTP {
   
  // Make an HTTP GET Request 
  async get(url) {



    // await gets rid of all the .then()



     const response = await fetch(url)

     const resData = await response.json();
     return resData;
     
     /* 
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err)); */
    
  }

//
// Make an HTTP POST Request 
//

async post(url, data) {


 const response = await fetch(url, {

      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)

    })
    const resData = await response.json();
    return resData;


    
  }



//
// Make an HTTP PUT Request 
//

async put(url, data) {


const response = await fetch(url, {

      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)

    })

    const resData = await resposne.json();
    return resData
    
  }


  async delete(url) {

    const response = await fetch(url, {

      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'

      },
    })
    const resData = await 'resource Deleted'
    return resData;




  }

 }

 