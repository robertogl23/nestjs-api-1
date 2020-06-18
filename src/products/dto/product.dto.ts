import { IsString,IsDecimal,Min,Max, IsInt, IsNumber} from 'class-validator';
export class CreateProductDto {
    @IsString()
    nameProduct: string;

    @IsDecimal()
    price: Float32Array;

    @IsInt()
    quantity: Float32Array;

    @IsString()
    description: string;

    @IsString()
    providers: string;

    @IsDecimal()
    height: Float32Array;

    @IsDecimal()
    width: Float32Array;

    @IsDecimal()
    background: Float32Array;

    @IsDecimal()
    weight: Float32Array;
  }