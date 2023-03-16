const {Router} = require('express');
const router=Router();
//Lo de arriba es igual que lo siguiente
//const express = require(express);
//const router = express.Router();
const juegos = require('./data.json');
console.log(juegos); 


router.get('/',(req,res) => {
    res.json(juegos);
})
//manda a llamar. Postman debe estar en GET
router.get('/:id',(req,res) => {
    const {id}= req.params;
    juegos.forEach(juego => {
        if (juego.id==id){
            res.json(juego);
            console.log(juego.title); 
        }
    });
    console.log(juegos[id].title);
    console.log(id);
})
//ingresa nuevo elemento. Postman debe estar en POST
router.post('/',(req,res)=>{
    const {title,version,genre} =req.body;
    if(title && version && genre){
        const id=juegos.length +1;
        const nuevoJuego = {...req.body, id};
        juegos.push(nuevoJuego);
        //console.log(nuevoJuego);
        res.send(juegos);
    } else {
        res,status(500).json({error:"no data"});
        res.send("Error: NoData");
    }
    res.send("ok");
})
module.exports = router;