import { ItemCard } from "@/shopping-cart/components/ItemCard";
import { cookies } from "next/headers";
import { Product, products } from '../../../products/data/products';

export const metadata = {
 title: 'Carrito de compras',
 description: 'SEO Title',
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


  return (
    <div>

      <h1 className="text-5xl">Productos en el carrito</h1>
      <hr className="mb-2"/>

      <div className="flex flex-col sm:flex-row gap-2 w-full">
        
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
            {
                productsInCart.map( ({product, quantify}) => (
                   
                   <ItemCard key={product.id} product={product} quantity={quantify}/>
                ))

            }
         </div>
        
        

      </div>

    </div>
  );
}