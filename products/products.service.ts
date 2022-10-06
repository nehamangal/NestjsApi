import { Injectable ,NotFoundException} from "@nestjs/common";
import { Product } from "./products.model";
@Injectable()
export class productService{
   private products:Product[]=[];

   insertProduct(title:string,description:string,price:number){
      const prodId = Math.random().toString()
        const newProduct=new Product(prodId,title,description,price)
        this.products.push(newProduct);
        return prodId;
   }

   getProduct(){
   return [...this.products];
   }

   getSingleProduct(prodId:string){
      const product = this.findProduct(prodId)[0];
      return {...product}

   }

   updateProduct(prodId:string,title:string,description:string,price:number){
      const [product,index] = this.findProduct(prodId);
      const updateProduct={...product};

      if(title){
         updateProduct.title =title
      }
      if(description){
         updateProduct.description=description
         }

         if(price){
            updateProduct.price = price
         }

         this.products[index]=updateProduct;

   }

   deleteProdcut(prodId:string){
      const index = this.findProduct(prodId)[1];
      this.products.splice(index,1);
   }

   private findProduct(id:string):[Product,number]{
      const productIndex = this.products.findIndex((prod)=>prod.id === id);
      const product = this.products[productIndex];
      if(!product){
         throw new NotFoundException('Not find your product');
      }
      return [product,productIndex];
   }
}