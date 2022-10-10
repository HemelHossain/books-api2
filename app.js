          // toggle spinner 
const toggleSpinner = displayStyle =>{
  document.getElementById('spinner').style.display = displayStyle;
}

          // toggle Search Result    
const toggleSearchResult = displayStyle =>{
  document.getElementById('result').style.display = displayStyle;
}
        //  Search Area         
const searchBook = () =>{
    const searchInput = document.getElementById('searchArea');
    const searchText = searchInput.value;
    searchInput.value='';
    
    // show spinner
    toggleSpinner('block'); 
    // Off result 
    toggleSearchResult('none')
            
    if(searchText===''){
      const result = document.getElementById('result');
      result.innerHTML=`<h3 class="text-center text-success pt-3">Please write something to display</h3>` 

    }
    else{
      const url =` https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => searchResult(data))
    }
    
}

              // Display Search Result 

const searchResult =books =>{
    console.log(books);
    const result = document.getElementById('result');
    result.textContent = '';
             
        //  Result Found 

    if(books.numFoundExact === true){
      result.innerHTML=`
      <h4>Result found: ${books.numFound}</h4>
      `;
       
            // Append Result

      books.docs.forEach(book => {
        const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
        <div class="card h-100">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top h-50" alt="...">
          <div class="card-body h-25">
            <h5 class="card-title">name: ${book.title}</h5>
            <h5 class="card-title">Writer: ${book.author_name}</h5>
            <h5 class="card-title">Pulished: ${book.first_publish_year}</h5>
            <p class="card-text">${book.first_sentence}</p>
          </div>
        </div>
        `
      result.appendChild(div);  
      });

      // off spinner 
      toggleSpinner('none');
        //  Show Result
      toggleSearchResult('block');
} 

      //  No result found

    else{
      result.innerHTML =`
        <h4>Result found: No result Found</h4> 
         `
    }
    

} 
    




    