const arr= [
    {"name":"Susan Smith",
    "rank":"WEB DEVELOPER",
    "img":"images/user1.jpeg",
    "p":"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"},
    {
    "name":"Peter Jones",
    "rank":"INTERN",
    "img":"images/user2.jpeg",
    "p":"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
    "name":"Bill Anderson",
    "rank":"THE BOSS",
    "img":"images/user3.jpeg",
    "p":"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
    {
    "name":"Anna Johnson",
    "rank":"WEB DESIGNER",
    "img":"images/user4.jpeg",
    "p":"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    }
    
]



let name= document.getElementById('name')
let rank= document.getElementById('rank')

let phara= document.getElementById('phara')

let img = document.getElementById('image')

const boxes = document.getElementById('next');
name.innerHTML= arr[0].name
rank.innerHTML= arr[0].rank
phara.innerHTML= arr[0].p
img.src=arr[0].img

let btnleftar = document.getElementById('leftar')

let btnrightar = document.getElementById('rightar')





let count= -1;


btnrightar.addEventListener('click',()=>{
  count++;
if(count> arr.length-1){
  count=0;
}
name.innerHTML= arr[count].name
rank.innerHTML= arr[count].rank
phara.innerHTML= arr[count].p
img.src=arr[count].img
    
})

btnleftar.addEventListener('click',()=>{
  count++;
if(count> arr.length-1){
  count=0;
}
name.innerHTML= arr[count].name
rank.innerHTML= arr[count].rank
phara.innerHTML= arr[count].p
img.src=arr[count].img
    
})


boxes.addEventListener('click', function onClick() {
let random = Math.floor(Math.random()*4)
name.innerHTML= arr[random].name
rank.innerHTML= arr[random].rank
phara.innerHTML= arr[random].p
img.src=arr[random].img
  });

