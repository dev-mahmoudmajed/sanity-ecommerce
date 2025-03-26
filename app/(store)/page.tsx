import ProductsView from '@/components/ProductsView';
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";

async function Home() {
  const products =await getAllProducts();
  const categories = await getAllCategories();

  return (
    <div>
        <h1>
          Store page
        </h1>
        <div className="flex flex-col items-center justify-top max-h-screen bg-gray-100 p-4">
          <ProductsView products={products} categories={categories}/>
        </div>
    </div>
  );
}

export default Home;
















