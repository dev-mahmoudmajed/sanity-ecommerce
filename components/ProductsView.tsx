import React from 'react'
import { Product, Category } from '@/sanity.types';
import ProductGrid from './ProductGrid';


interface ProductViewProps {
  products:Product[];
  categories:Category[];
}

export default function ProductsView({products,categories}:ProductViewProps) {
  return (
    <div className='flex flex-col'>
      {/* CATEGORIES */}
      <div className='w-full sm:w-[200px]'>
        {/* <CategorySelectorComponents categories={categories} /> */}
      </div>
      {/* PRODUCTS */}
    <div className='flex-1'>
      <div>
        <ProductGrid products={products}/>

        <hr className='w-1/2 sm:w-3/4'/>
      </div>
    </div>
    </div>
  )
}
