import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TofservicesService {

home=[
  {
    id:1,
    name:"Aesperia",
    img:"https://res.cloudinary.com/lmn/image/upload/c_limit,h_360,w_640/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/t/h/u/thumb-1920-1209823-copy-13c0a.jpg"
  },
  {
    id:2,
    name:"Plano de Vera",
    img:"https://i.ytimg.com/vi/pjwstiC7Pxs/maxresdefault.jpg"
  },
  {
    id:3,
    name:"Isla Artificial",
    img:"https://wallake.org/uploads/posts/2022-09/1663838281_1783-1.webp"
  },
  {
    id:4,
    name:"Espejia",
    img:"https://cdn01.vulcanpost.com/wp-uploads/2022/10/11.jpg"
  },
  {
    id:5,
    name:"Abismo Confuso",
    img:"https://i0.wp.com/gamingonphone.com/wp-content/uploads/2022/12/Tower-of-Fantasy-Version-2.1--1024x576.jpg"
  }
]

characters=[
  {
    id:1,
    name:"meryl",
    type:"ice",
    class:"tank",
    img:"https://www.pcgamesn.com/wp-content/uploads/2022/08/tower-of-fantasy-characters-meryl.jpg"
  },
  {
    id:2,
    name:"tsubasa",
    type:"ice",
    class:"dps",
    img:"https://www.pcgamesn.com/wp-content/uploads/2022/08/tower-of-fantasy-characters-tsubasa.jpg"
  },
  {
    id:3,
    name:"frigg",
    type:"ice",
    class:"support",
    img:"https://www.pcgamesn.com/wp-content/uploads/2022/08/tower-of-fantasy-characters-frigg.jpg"
  },
  {
    id:4,
    name:"lin",
    type:"abysal",
    class:"support",
    img:"https://cdn.donmai.us/original/c1/24/c12463b29d8e048dc16e626e7d3f9dc6.jpg"
  },
  {
    id:5,
    name:"lyra",
    type:"physical",
    class:"support",
    img:"https://i.redd.it/de7fe2qzr9j91.jpg"
  },
  
]

weapons=[
  {
    id:1,
    name:"ESPADA ROSA",
    type:"ICE",
    img:"https://toweroffantasy.info/images/Icon/weapon/Icon/item_Weapon_SSR_BigSword_Ice01.png"
  },
  {
    id:2,
    name:"FLECHA DE VIENTO HELADO",
    type:"ICE",
    img:"https://toweroffantasy.info/images/Icon/weapon/Icon/item_Weapon_SSR_Bow_Ice01.png"
  },
  {
    id:3,
    name:"BALMUNG",
    type:"ICE",
    img:"https://toweroffantasy.info/images/Icon/weapon/Icon/item_Weapon_SSR_frigg_Ice01.png"
  },
  {
    id:4,
    name:"TEJESOMBRAS",
    type:"ABYSAL",
    img:"https://toweroffantasy.info/images/Icon/weapon/Icon/item_Weapon_SSR_fan_superpower01.png"
  },
  {
    id:5,
    name:"VESPER",
    type:"PHYSICAL",
    img:"https://toweroffantasy.info/images/Icon/weapon/Icon/item_Weapon_SSR_Arm_Physic01.png"
  }

]

  mostrarhome(){
    return this.home
  }

  mostrarcharacters(){
    return this.characters
  }
  mostrarweapons(){
    return this.weapons
  }
  

  constructor() { }
}
