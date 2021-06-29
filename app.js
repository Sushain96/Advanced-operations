const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

const userId = 'AB123';

storeBtn.addEventListener('click', () => {
    localStorage.setItem("UID",userId);
});
 retrieveBtn.addEventListener('click',() =>{
     
    const retrievedData = localStorage.getItem("UID");
    if(retrievedData){
        console.log( 'The adsked data is ' + retrievedData);    
    } else
    console.log("oops!!");
 })