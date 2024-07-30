const accessKey = "https://api.unsplash.com/search/collections?page=1&query=office=&clied_id=WE749ZfQpNy8SLgsS8Wnt4F-2o8t6-2-zvmNtdbZfY0";
const  searchForm = document.getElementById("search-form");
const searchBox   = document.getElementById("search-box");
const searchResult  = document.getElementById("search-result");
  const showMorebtn = document.getElementById("show-more-btn ");             
  let keyword="";
  let page = 1;
  async function searchImage(){
    keyword = searchBox.Value;
    const url = 'https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}';
  
  const response = await fetch(url);
  const data = await response.json();
  const results = data.result;
  results.map((result)=>{
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  })
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImage();
});