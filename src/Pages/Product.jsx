import React,{ useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import {useParams} from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  console.log(`product id : ${productId}`);
  console.log(`all product are here : ${all_product}` )
  const product= all_product.find((e)=>e.id === parseInt(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product
