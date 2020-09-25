
      function productosBaratos (product){
//return product.map(e => e.nombre).filter(e => e.precio==5)

return product.filter(e => e.precio<=10 &&  e.precio>=5).map(e=> e.nombre)
      }
      