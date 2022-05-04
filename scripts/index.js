// link:-`https://api.unsplash.com/search/photos/?query={value}&per_page=20&client_id=ZRBLsSErwx3h34P4kVr1hCdMACZBCpBn2tCeYvYC2Rc`
import {navbar} from "../components/navbar.js";
import {searchImages,append} from "../scripts/fetch.js"
let navbar1=document.getElementById("navbar");
navbar1.innerHTML=navbar();
let search=(e)=>{
   if(e.key==="Enter"){
       let value=document.getElementById("query").value;
       searchImages(value).then((data)=>{
           console.log(data)
           let container=document.getElementById("container")
           container.innerHTML=null;
           append(data.results,container)
       })
   }
};
document.getElementById("query").addEventListener("keydown",search);
let categories=document.getElementById("categories").children;
function cSearch(){
    console.log(this.id);
    searchImages(this.id).then((data)=>{
        console.log(data);
        let container=document.getElementById("container");
        container.innerHTML=null;
        append(data.results,container);
    });
}
for(let el of categories){
    el.addEventListener("click",cSearch)
}
// let searchImages=async ()=>{
//  let value=document.getElementById("query").value;
//  try{
//    let res=await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=ZRBLsSErwx3h34P4kVr1hCdMACZBCpBn2tCeYvYC2Rc`);
//    let data=await res.json();
//    console.log(data)
//  }
//  catch(err){
//      console.log(err)
//  }
// }