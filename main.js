const form = document.querySelector("form");
const stProvinceContent = document.querySelector("#stProvinceContent");
const ndProvinceContent = document.querySelector("#ndProvinceContent");
const headers = document.querySelectorAll("h3");

//Headers handling
for(const header of headers){
    const contentToToggle = header.nextElementSibling;
    header.addEventListener("click", ()=>{
      contentToToggle.classList.toggle("display");
    });
}

//Form handling
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const stProvince = document.querySelector("#stProvince").value;             
  const provinces = document.querySelectorAll("section");
  for(const header of headers){
    const contentToToggle = header.nextElementSibling;
    contentToToggle.classList.remove("display"); 
  }
  
  for(const province of provinces){
    province.style.display = "none";
    
    if(province.className === stProvince){
      province.style.display = "block";
    }
  }
});