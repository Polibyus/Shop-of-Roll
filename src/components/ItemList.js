import Item from "./Item";

const ItemList = () => {
const promesaItem = new Promise((res, rej) => {
  setTimeout(() => {
    const listItems = [
        {
        id: 1,
        nombre: "Figura Ziggs (LoL)",
        desc: "Pequeña pero explosiva figura del famoso campeon ziggs de League of Legends",
        precio: 2000,
        picURL: "",
        stock: 3,
        },
        {
        id: 2,
        nombre: "Figura Scorpion (MK)",
        desc: "GET OVER HEREE!!!",
        precio: 3000,
        picURL: "",
        stock: 1,
        },
    ];
    if (listItems.length > 0) {
      res(listItems);
    } else {
      rej("No hay productos disponibles");
    }
  }, 2*1000);
});

promesaItem.then((res) => {
  console.log(res);
});

promesaItem.catch((rej) => {
  console.log(rej);
});}

// return (
//     <div>
//       {listItems.map(item => {
//         return <Item item={item} />
//       } 
//       )}
//     </div>
//   )
// }

export default ItemList;
// Fin de promesa stock