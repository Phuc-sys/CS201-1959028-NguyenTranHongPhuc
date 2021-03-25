document.addEventListener("DOMContentLoaded", () => {
  var img = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8fqDBfPgmFKU7bdBSC8YmZ3e7yfVGLGyfg_cYpjzRl7sTbku38e-_kAFHfCZM_16pDKMBonw&usqp=CAc",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qz38SniehGVmiou_UnpJZSxogkdTWEmp3g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfPrXi-W4O0cDAGvGEn7HyE8BNzwS0ZaOlA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDsS5v0NWOvkcGRqerLjcaxNtAzqem7eqwqQ&usqp=CAU"
  ];

  getProducts();
//<!-- FakeStoreAPI end point: https://fakestoreapi.com/products -->
function getProducts(){
  let list = document.querySelector(".list");
  console.log(list);
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://fakestoreapi.com/products", true);
  xhttp.send();
  xhttp.onload = function(){
    if(this.status == 200){
      let response = JSON.parse(this.responseText);
      console.log(response);
      let output = "";
      for (let i = 0; i < 4; i++) {
        output += `
        <div class="col-md-3">
        <div class="card avaiable" style="width: 18rem;" href="#">
          <img class="card-img-top" src="${img[i]}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${response[i].title}</h5>
            <p class="card-text">${response[i].price}</p>
          </div>
        </div>
        </div>
        `;
      }
      console.log(output);
      console.log(response[0].title);
      list.innerHTML = output;
    }
  }
}
});
