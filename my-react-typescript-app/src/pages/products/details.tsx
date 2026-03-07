import { useParams } from "react-router";

const ProductDetails = () => {
  const params = useParams();
  const id = params.itemId;
  return (
    <section>
      <div className="px-6 py-2 bg-white rounded-lg shadow-sm">
        <h3 className="text-lg text-gray-800 font-semibold">Halaman Details Product {id}</h3>
      </div>
    </section>
  );
};

export default ProductDetails;
