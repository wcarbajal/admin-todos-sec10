import { ItemCard } from "@/shopping-cart/components/ItemCard";
import { cookies } from "next/headers";
import { Product, products } from '@/products/data/products';
import { WidgetItem } from "@/components";


export const metadata = {
 title: 'Carrito de compras',
 description: 'compras',
};

interface ProductInCard {
    product: Product;
    quantify: number;
}

const getProductsInCart = ( cart:  {[id: string]: number}): ProductInCard[] => {

     const productsInCart: ProductInCard[] = [];

     for (const id of Object.keys(cart)) {
     
        const product = products.find(prod => prod.id === id);

        if (product){
            productsInCart.push({ product, quantify: cart[id] });
        }
     }
     return productsInCart;
 }

export default function CartPage() {

    const cookiesStore = cookies();
    const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}') as { [id: string]: number};
    const productsInCart = getProductsInCart(cart);

    const totalPrecio = productsInCart.reduce( 
      (acumulador, productActual) => ( productActual.product.price * productActual.quantify) + acumulador, 0 );
    

  return (
    <div>

      <h1 className="text-5xl">Productos en el carrito</h1>
      <hr className="mb-2"/>

      <div className="flex flex-col sm:flex-row gap-2 ">
        
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
            {
                productsInCart.map( ({product, quantify}) => (
                   
                   <ItemCard key={product.id} product={product} quantity={quantify}/>
                ))

            }
         </div>
         <div className="flex flex-col w-full sm:w-4/12 bg-slave-600 border">

          <WidgetItem title= 'Total a pagar'>
            <div className="mt-2 flex justify-center gap-4">
                <h3 className="text-3xl font-bold text-gray-700"> S/. {(totalPrecio*1.18).toFixed(2)}</h3>
            </div>
            <span className="font-bold text-center "> Impuestos 18%: S/. {(totalPrecio*0.18).toFixed(2)} </span>


          </WidgetItem>
          
          

          </div>
        
        

      </div>

    </div>
  );
}