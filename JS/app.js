//Get Data
//---------------------------------------------------------------
const api = 'https://forest-resonant-radium.glitch.me/api',
      token = '?accessToken=5b1064585f4ab8706d275f90',
      page = document.querySelector('body');

fetch(api + '/lists' + token) // [1. Request]
  .then(response => response.json()) // [2. Response]
  .then(data => {
    // [3. Process response]
    console.log(data);

        // Insert news based on data
        // !!!News data will exist here!!!
        // =========================================================
        data.forEach(post => {
            data.forEach(item => {
                let newArticle = document.createElement('article');
                newArticle.classList.add('news');
                page.append(newArticle);
    
                newArticle.innerHTML = `
                <img class="news_img" src="#" alt="#">
                <h2 class="news_title">${post.items[1].title}</h2>
                <p class="news_desc">${post.items[1].description}</p>`;

            });
            // utilize template strings
        }); 
        // Add EventListeners here (or call method that adds eventlisteners)
  })
  .catch(error => {
    // [4. Capture errors]
    console.log("An Error Occurred:", error);
  });



// !!!News data may not exist here!!! (See Above)
// =========================================================



// When clicking on add Button, insert form
// !!! Add Button may not exist here !!!
// ---------------------------------------------------------


// METHOD>>>> (if going that route)