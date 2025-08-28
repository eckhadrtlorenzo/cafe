 //vetores de objeto


const Cafe = [

  { id:"Nenhum", nome:"Nenhum", preco: 0 },
  { id:"cafe_comum", nome: "Café comum", preco: 3.00 },
  { id:"descafeinado", nome: "Café descafeinado", preco: 6.50 },
  { id:"cafeina_adicionada", nome: "Café com cafeína adicionada", preco: 10.00 },
  { id:"Cafe_leite", nome: "Café com leite", preco: 4.50 },
  { id:"Cafe_expresso", nome: "Café expresso", preco: 5.50 },
  { id:"Cafe_instantaneo", nome: "Café instantaneo", preco: 4.00 },
  { id:"Cafe_gourmet", nome:"Café gourmet", preco: 10.00 },
  { id:"Capuccino", nome:"Capuccino", preco: 8.00 },
  { id:"Mocha", nome:"Mocha", preco: 10.00 }
  
];

const Chas = [
  { id:"Nenhum", nome:"Nenhum", preco: 0 },
  { id:"Cha_preto", nome:"Chá preto", preco: 7.50 },
  { id:"Cha_verde", nome:"Chá verde", preco: 8.00 },
  { id:"Cha_branco", nome:"Chá branco", preco: 10.00 },
  { id:"Cha_oolong", nome:"Chá oolong", preco: 12.99 },
  { id:"Cha_matcha", nome:"Chá matcha", preco: 12.00 }

];

const temperatura = [
  { id:"Quente", nome:"Quente", preco: 0 },
  { id:"Morno", nome:"Morno", preco: 0 },
  { id:"Gelado", nome:"Gelado", preco: 0 },
];

const temperatura1 = [
  { id:"Quente", nome:"Quente", preco: 0 },
  { id:"Morno", nome:"Morno", preco: 0 },
  { id:"Gelado", nome:"Gelado", preco: 0 },
];

const Copos = [
  { id:"Nenhum", nome:"Nenhum", preco: 0 },
  { id:"copo_50ml", nome: "Copo 50 ml", preco: 11.99 },
  {id:"copo_100ml", nome: "Copo 100ml ", preco: 15.90 },
  { id:"copo_200ml", nome: "Copo 200ml", preco: 20.00 },
  { id:"copo_300ml", nome: "Copo 300ml", preco: 25.00  },
  { id:"copo_440", nome: "Copo 440ml", preco: 30.00 },
  { id:"copo_500ml", nome: "Copo 500ml", preco: 35.00 }
  ];

  const Xicaras = [
    { id:"Nenhum", nome:"Nenhum", preco: 0 },
    { id:"xicara_100ml", nome: " Xícara 100ml", preco: 5.00 },
    { id:"xicara_180ml", nome: "Xícara 180ml", preco: 8.00 },
    { id:"xicara_200ml", nome: "Xícara 200ml", preco: 10.00 },
    { id:"xicara_250ml", nome: "Xícara 250ml", preco: 13.00 },
    { id:"xicara_325ml", nome: "Xícara 325ml", preco: 16.00 }
  ];

  const Chocolate = [
    { id:"Nenhum", nome:"Nenhum", preco: 0 },
    { id:"Chocolate_leite", nome:"Chocolate ao leite", preco: 4.50 },
    { id:"Chocolate_branco", nome:"Chocolate branco", preco: 5.25 },
    { id:"Chocolate_amargo", nome:"Chocolate amargo", preco: 5.25 },
    { id:"Chocolate_pistache", nome:"Chocolate de pistache", preco: 6.50 }
  
  ];

  const acucar= [
    { id:"Nenhum", nome:"Nenhum", preco: 0 },
    { id:"acucar_cristal", nome: "açúcar cristal", preco: 1.50 },
    { id:"acucar_demera", nome: "açúcar demera", preco: 2.00 },
    { id:"acucar_mascavo", nome: "açúcar mascavo", preco: 2.50 }
  ];  

  const caldas=[
    { id:"Nenhum", nome:"Nenhum", preco: 0 },
    { id:"calda_caramelo", nome: "calda de caramelo", preco: 4.00 },
    { id:"calda_chocolate", nome: "calda de chocolate", preco: 4.50 },
    { id:"calda_morango", nome: "calda de morango", preco: 4.00 },
    { id:"calda_pistache", nome: "calda de pistache", preco: 5.50 }

  ];
 
  const leites=[
    { id:"Nenhum", nome:"Nenhum", preco: 0 },
    { id:"leite_integral", nome: "leite integral", preco: 3.00 },
    { id:"leite_desnatado", nome: "leite desnatado", preco: 3.00 },
    { id:"leite__amendoas", nome: "leite de amendoas", preco: 5.00 }

  ];



function preencherOpcoes(){
//funções pra aparecer por trás 
 const selectCafe = document.getElementById("Cafe");
 for (let i = 0; i < Cafe.length; i++){
  const item = Cafe[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectCafe.appendChild(option);
 }


 const selecttemperatura = document.getElementById("temperatura");
 for (let i = 0; i < temperatura.length; i++){
  const item = temperatura[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selecttemperatura.appendChild(option);
 }
  
 const selectChas = document.getElementById("Chas");
 for (let i = 0; i < Chas.length; i++){
  const item = Chas[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectChas.appendChild(option);
 }
 
 const selectCopos = document.getElementById("Copos");
 for (let i = 0; i < Copos.length; i++){
  const item = Copos[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectCopos.appendChild(option);
 }

 const selectXicaras = document.getElementById("Xicaras");
 for (let i = 0; i < Xicaras.length; i++){
  const item = Xicaras[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectXicaras.appendChild(option);
 }
 
 const selectChocolate = document.getElementById("Chocolate");
 for (let i = 0; i < Chocolate.length; i++){
  const item = Chocolate[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectChocolate.appendChild(option);
 }

  const selectacucar = document.getElementById("acucar");
 for (let i = 0; i < acucar.length; i++){
  const item = acucar[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectacucar.appendChild(option);
 }
 
  const selectcaldas = document.getElementById("caldas");
 for (let i = 0; i < caldas.length; i++){
  const item = caldas[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectcaldas.appendChild(option);
 }
  
  const selectleites = document.getElementById("leites");
 for (let i = 0; i < leites.length; i++){
  const item = leites[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectleites.appendChild(option);
 }

  const selecttemperatura1 = document.getElementById("temperatura1");
 for (let i = 0; i < temperatura1.length; i++){
  const item = temperatura1[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selecttemperatura1.appendChild(option);
 }

}


preencherOpcoes();
