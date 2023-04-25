






let jsondata = [];
let json = fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates.json');
json.then((response) => { 
  return response.json()
}).then((response) => {
   jsondata = response;
})
function getCountryByState(statename) {
  for (let i = 0; i<jsondata.length; i++) {
    const state = jsondata[i].states.find(s => s.name.toLowerCase().includes(statename.toLowerCase()));
    if (state) {
      return jsondata[i].name.toLowerCase();
    }
  }
  return null;
}

























const mobile_nav = document.querySelector(".mobile-navbar-btn");

const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
document.getElementsByClassName("navbar-link").onclick = function() {
  document.getElementsByClassName("header").style.display="none";
}


let homebutton = document.getElementById("homebutton");
let jobbutton = document.getElementById("jobbutton");
let partnerbutton = document.getElementById("partnerbutton");
let joinbutton = document.getElementById("joinbutton");


const homefunction= ()=>{
  location.href=("#")
  nav_header.classList.toggle("active");
}
const jobfunction= ()=>{
  location.href=("#third-div")
  nav_header.classList.toggle("active");
}

const jobfunction1=()=>{
  location.href=('#third-div');
}
const partnerfunction= ()=>{
  location.href=("#our-partners")
  nav_header.classList.toggle("active");
}
const joinfunction= ()=>{
  location.href=("#")
  nav_header.classList.toggle("active");
}
// const textValue = document.getElementById("google-div").innerHTML;

// var button1= getElementById('search-btn1')
// button1.addEventListener("click", jobfunction1());



search1.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {

    event.preventDefault();

    document.getElementById("search-btn1").click();
  }
});
// var selectedValue;






var array = [
  {
    name: 'google',
    select: 'website developer',
    country: 'india',
    title: 'frontend development',
    skills: 'html,css, javascript, react js',
    image: "/images/logo-google.svg",
    type:'fulltime, full-time'
  },
  {
    name: 'twitter',
    select: 'website developer',
    country: 'usa , united states of america' ,
    title: 'backend development',
    skills: 'dsa, php, sql, java',
    image: "/images/logo-twitter.svg",
    type:'fulltime, full-time'
  },
  {
    name: 'facebook',
    select: 'application developer',
    country: 'india',
    title: 'application development',
    skills: 'c++, backend ,computing, iot',
    image: "images/logo-facebook.svg",
    type:'fulltime, full-time'
  },
  {
    name: 'apple',
    
    country: 'india',
    title: 'frontend development',
    select: 'website developer',
    skills: 'html,css, javascript, react js',
    image: "images/logo-apple.svg",
    type:'fulltime, full-time'
  },
  {
    name: 'microsoft',
    select: 'designer',
    country: 'australia',
    title: 'ui/ux designer',
    skills: 'prototyping,development, information architecture',
    image: "images/logo-windows (1).svg",
    type:'halftime, half-time'
  },
  {
    name: 'amazon',
    select: 'website developer',
    country: 'india',
    title: 'backend development',
    skills: 'dsa , php , sql , java',
    image:"images/logo-amazon.svg",
    type:'fulltime, full-time'
  },
]

const productContainerEl = document.getElementById("fourth-div");
const givejobs = (jobData) => {
  productContainerEl.innerHTML="";
  jobData.forEach(jobData=>{
    productContainerEl.innerHTML += generatejobs(jobData);
  });
};
const generatejobs = (jobData) =>{
  return ` <div class="first-fourth-div" id="${jobData.name}-div">
  <div class="random2">
  <div class="first-fourth-div-logo">
  <img src="${jobData.image}" alt="Google Logo" width="100%">
  </div>
  <span class="first-fourth-div-title">${jobData.title}</span>
  </div>
  <div class="below-random-2">
  <p>
  <span class="skills">Skills</span>
  -${jobData.skills}<br>
  
  <span class="type">
  Type
  </span>
  -${jobData.type}<br>
  <span class="location">Location </span>
  -${jobData.country}
  </p>
  </div>
  </div>`;
};

let jobData = [...array];
givejobs(jobData);
var selectedValue;
var newArray;
function getSelectedValue(){
  selectedValue = document.getElementById('select').value;
  console.log(selectedValue.toLowerCase());
  
  newArray = array.filter((array)=>
    {
      return (array.select.includes(selectedValue.toLowerCase()))
    })
    givejobs(newArray);
  }


const searchInput1 = document.getElementById("search1");
// const value = searchInput1.value;
// const countryName1 = getCountryByState(searchInput1.value);
const searchInput2 = document.getElementById("search2");
// const countryName2 = getCountryByState(searchInput2.value);
searchInput1.addEventListener("input", e =>{
  const value = e.target.value.toLowerCase() 
  console.log(value);
  const countrynamefromstate = getCountryByState(value);
  newArray = array.filter((array)=>
  {
    return (array.name.includes(value)
    || array.country.includes(countrynamefromstate)||array.skills.includes(value)||array.title.includes(value)||array.type.includes(value)||array.country.includes(value))
  })
  givejobs(newArray);
  
} )
searchInput2.addEventListener("input", e =>{
  const value = e.target.value.toLowerCase() 
  console.log(value);
  // var noSearch = document.querySelector('.no-search').classList;
  // console.log(noSearch);
  const countrynamefromstate = getCountryByState(value);
  const newArray = array.filter((array)=>
  {
    return (array.name.includes(value)
    || array.country.includes(countrynamefromstate)||array.skills.includes(value)||array.title.includes(value)||array.type.includes(value)||array.country.includes(value))
  })

  givejobs(newArray);
} )







// const jobfunction= ()=>{
  //   location.href=("#third-div")
  //   nav_header.classList.toggle("active");
  // }
  
  
  // const filterHandler = (event) => {
    //   const searchText = event.target.value.toLowerCase();
    
    //   const filteredJobs = jobData.filter((jobData) => {
      //     const countryName = getCountryByState(searchText);
      //     return (
        
        //       jobData.name.toLowerCase().includes(searchText) ||
        //       jobData.title.toLowerCase().includes(searchText) ||
//       jobData.country.toLowerCase().includes(searchText) ||
//       jobData.type.toLowerCase().includes(searchText) ||
//       (countryName && jobData.country.toLowerCase().includes(countryName.toLowerCase())) ||
//       jobData.skills.toLowerCase().includes(searchText)
//       );
//     });
    

// };

// searchInput1.addEventListener('keyup', filterHandler);

// const searchInputEl2 = document.getElementById("search-space");
// const filterHandler2 = (event) => {
//   const searchText = event.target.value.toLowerCase();
  
//   const filteredJobs = jobData.filter((jobData) => {
//     const countryName = getCountryByState(searchText);
//     return (
//       jobData.title.toLowerCase().includes(searchText) ||
//       jobData.name.toLowerCase().includes(searchText) ||
//       // jobData.category.toLowerCase().includes(searchText) ||
//       jobData.country.toLowerCase().includes(searchText) ||
//       jobData.type.toLowerCase().includes(searchText) ||
//       (countryName && jobData.country.toLowerCase().includes(countryName.toLowerCase())) ||
//       jobData.skills.toLowerCase().includes(searchText)
//       );
//     });
    
//   givejobs(filteredJobs);};
//     searchInput2.addEventListener('keyup', filterHandler2);
  
//     givejobs(jobData);
    


// const googleHide = document.getElementById('google-div');
// if (array[0].name.includes(filter1)||array[0].country.includes(countryName1)||array[0].title.includes(filter1)||array[0].skills.includes(filter1)||array[0].type.includes(filter1)===false)



// document.getElementById("search1").addEventListener("keyup", function(){
//   var search = this.toLowerCase();
//   // for ( i =0; i<array.length; i++){
//     if (array[0].name.includes(search)||array[0].city.includes(search)||array[0].country.includes(search)||array[0].title.includes(search)||array[0].skills.includes(search)||array[0].type.includes(search)){
//       document.getElementById('google-div').style.display.none;
//     }
  
// })

// const searchFun = () =>{
//   let filter1 = document.getElementById('search1').value.toLowerCase();
//   const countryName = getCountryByState(filter1.toLowerCase());
//   let googleSearch= document.getElementById('google-div');
//   let twitterSearch = document.getElementById('twitter-div');
//   let facebookSearch = document.getElementById('facebook-div');
//   let appleSearch = document.getElementById('apple-div');
//   let microsoftSearch = document.getElementById('microsoft-div');
//   let amazonSearch = document.getElementById('amazon-div');
//   if (array[0].name.includes(filter1)||array[0].country.includes(countryName)||array[0].title.includes(filter1)||array[0].skills.includes(filter1)||array[0].type.includes(filter1)===false){
//   googleSearch.style.display='none';}
//   if (array[1].name.includes(filter1)||array[1].country.includes(countryName)||array[1].title.includes(filter1)||array[1].skills.includes(filter1)||array[1].type.includes(filter1)===false){
//   twitterSearch.style.display='none';}
//   if (array[2].name.includes(filter1)||array[2].country.includes(countryName)||array[2].title.includes(filter1)||array[2].skills.includes(filter1)||array[2].type.includes(filter1)===false){
//   facebookSearch.style.display='none';}
//   if (array[3].name.includes(filter1)||array[3].country.includes(countryName)||array[3].title.includes(filter1)||array[3].skills.includes(filter1)||array[3].type.includes(filter1)===false){
//   appleSearch.style.display='none';}
//   if (array[4].name.includes(filter1)||array[4].country.includes(countryName)||array[4].title.includes(filter1)||array[4].skills.includes(filter1)||array[4].type.includes(filter1)===false){
//   microsoftSearch.style.display='none';}
//   if (array[5].name.includes(filter1)||array[5].country.includes(countryName)||array[5].title.includes(filter1)||array[5].skills.includes(filter1)||array[5].type.includes(filter1)===false){
//   amazonSearch.style.display='none';}
  // window.location.reload();
//   let filter2 = document.getElementById('search-space').value.toLowerCase();
//   const countryName2 = getCountryByState(filter2).toLowerCase();
//   if (array[0].name.includes(filter2)||array[0].city.includes(filter2)||array[0].country.includes(countryName2)||array[0].title.includes(filter2)||array[0].skills.includes(filter2)||array[0].type.includes(filter2)===false){
//     googleSearch.style.display='none';}
//     if (array[1].name.includes(filter2)||array[1].country.includes(countryName2)||array[1].title.includes(filter2)||array[1].skills.includes(filter2)||array[1].type.includes(filter2)===false){
//     twitterSearch.style.display='none';}
//     if (array[2].name.includes(filter2)||array[2].country.includes(countryName2)||array[2].title.includes(filter2)||array[2].skills.includes(filter2)||array[2].type.includes(filter2)===false){
//     facebookSearch.style.display='none';}
//     if (array[3].name.includes(filter2)||array[3].country.includes(countryName2)||array[3].title.includes(filter2)||array[3].skills.includes(filter2)||array[3].type.includes(filter2)===false){
//     appleSearch.style.display='none';}
//     if (array[4].name.includes(filter2)||array[4].country.includes(countryName2)||array[4].title.includes(filter2)||array[4].skills.includes(filter2)||array[4].type.includes(filter2)===false){
//     microsoftSearch.style.display='none';}
//     if (array[5].name.includes(filter2)||array[5].country.includes(countryName2)||array[5].title.includes(filter2)||array[5].skills.includes(filter2)||array[5].type.includes(filter2)===false){
//     amazonSearch.style.display='none';}
// }




