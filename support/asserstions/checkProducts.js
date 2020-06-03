
import catalog from "../../pages/CatalogPage"

/**
 * @param {boolean} toBeFound if true, products should be present
 *
 */

  export default  toBeFound =>{
   const products = catalog.products;

   if(toBeFound){
       assert(products.length > 0,"No products were found");
   }else {
       assert(products.length === 0,"Products were found");
   }

  };