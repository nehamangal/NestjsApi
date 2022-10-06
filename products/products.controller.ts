import { Controller,Post,Body,Get,Param,Patch ,Delete} from "@nestjs/common";
import { productService } from "./products.service";
@Controller('products')
export class ProductsController{
  constructor(private readonly productService:productService){}
    @Post()
    addProdcut(@Body('title') prodTitle:string,@Body('description') proddesc:string,@Body('price') prodprice:number){
   const generatedId =  this.productService.insertProduct(prodTitle,proddesc,prodprice);
   return {id:generatedId};
    }

    @Get()
    getAllProducts(){
        return this.productService.getProduct();
    }

    @Get(':id')
    getProduct(@Param('id') proId:string){
     return this.productService.getSingleProduct(proId);
    }

    @Patch(':id')
    updateProduct(@Param('id') proId:string,@Body('title') prodTitle:string,@Body('description') proddesc:string,@Body('price') prodprice:number){
        this.productService.updateProduct(proId,prodTitle,proddesc,prodprice);
        return null;
    }

    @Delete(':id')
    deleteProduct(@Param('id') prodId:string){
    this.productService.deleteProdcut(prodId);
    return null;
    }
}