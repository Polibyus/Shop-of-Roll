// import ziggs from "../img/items/ziggs.jpg";
// import subzero from "../img/items/subzero.jpg";
// import pyramid from "../img/items/pyramid.jpg";
// import npc from "../img/items/npc.jpg";
// import guerrero from "../img/items/guerrero.jpg";
// import orcos from "../img/items/orcos.jpg";
// import barbaro from "../img/items/barbaro.jpg";
// import bardo from "../img/items/bardo.jpg";
// import bruja from "../img/items/bruja.jpg";
// import golems from "../img/items/golems.jpg";
// import manual1 from "../img/items/manual1.jpg";
// import manual2 from "../img/items/manual2.png";

const USD = 200;
function calcPrecio (precio) {
    return (precio * USD);
}

export const data = [
    {
    id: 1,
    nombre: "Figura Ziggs xl (LoL)",
    desc: "Pequeña pero explosiva figura del famoso campeon ziggs de League of Legends",
    precioUSD: 20,
    precioARS: calcPrecio(20),
    cat: "Recomendadas",
    picURL: "ziggs.jpg",
    stock: 2,
    },
    {
    id: 2,
    nombre: "Figura Sub-Zero (MK)",
    desc: "Congelado",
    precioUSD: 30,
    precioARS: calcPrecio(30),
    cat: "Recomendadas",
    picURL: "subzero.jpg",
    stock: 0,
    },
    {
    id: 3,
    nombre: "Figura Pyramid Head (SH)",
    desc: "De Silent Hill a tu casa",
    precioUSD: 25,
    precioARS: calcPrecio(25),
    cat: "Recomendadas",
    picURL: 'pyramid.jpg',
    stock: 2,
    },
    {
    id: 4,
    nombre: "Pack 6 NPC's (D&D)",
    desc: "Esa ciudad necesita ser llenada y no solo por valientes heroes",
    precioUSD: 5,
    precioARS: calcPrecio(5),
    cat: "NPC",
    picURL: 'npc.jpg',
    stock: 9,
    },
    {
    id: 5,
    nombre: "Guerrero sagrado (D&D)",
    desc: "PLA Printalot // 30mm de ancho ideal para jugar D&D",
    precioUSD: 3,
    precioARS: calcPrecio(3),
    cat: "Heroes",
    picURL: 'guerrero.jpg',
    stock: 9,
    },
    {
    id: 6,
    nombre: "Pack 6 Orcos (D&D)",
    desc: "PLA Printalot // 30mm de ancho ideal para jugar D&D",
    precioUSD: 3,
    precioARS: calcPrecio(3),
    cat: "Enemigos",
    picURL: 'orcos.jpg',
    stock: 9,
    },
    {
    id: 7,
    nombre: "Barbaro Humano (D&D)",
    desc: "PLA Printalot // 30mm de ancho ideal para jugar D&D",
    precioUSD: 3,
    precioARS: calcPrecio(3),
    cat: "Heroes",
    picURL: 'barbaro.jpg',
    stock: 9,
    },
    {
    id: 8,
    nombre: "Bardo Elfo (D&D)",
    desc: "PLA Printalot // 30mm de ancho ideal para jugar D&D",
    precioUSD: 3,
    precioARS: calcPrecio(3),
    cat: "Heroes",
    picURL: 'bardo.jpg',
    stock: 9,
    },
    {
    id: 9,
    nombre: "Bruja Tieflin (D&D)",
    desc: "PLA Printalot // 30mm de ancho ideal para jugar D&D",
    precioUSD: 3,
    precioARS: calcPrecio(3),
    cat: "Heroes",
    picURL: 'bruja.jpg',
    stock: 9,
    },
    {
    id: 10,
    nombre: "Pack 3 Golems (D&D)",
    desc: "PLA Printalot // 30mm de ancho ideal para jugar D&D",
    precioUSD: 3,
    precioARS: calcPrecio(3),
    cat: "Enemigos",
    picURL: 'golems.jpg',
    stock: 9,
    },
    {
    id: 11,
    nombre: "Manual inicio en D&D",
    desc: "Impreso a color, 32 paginas, todo lo necesario para comenzar a jugar Dungeons and Dragons",
    precioUSD: 5,
    precioARS: calcPrecio(5),
    cat: "Manuales",
    picURL: 'manual1.jpg',
    stock: 9,
    },
    {
    id: 12,
    nombre: "Pack 4 Aventuras (D&D)",
    desc: "PLA Printalot // 30mm de ancho ideal para jugar D&D",
    precioUSD: 15,
    precioARS: calcPrecio(15),
    cat: "Manuales",
    picURL: 'manual2.jpg',
    stock: 5,
    },
];
  