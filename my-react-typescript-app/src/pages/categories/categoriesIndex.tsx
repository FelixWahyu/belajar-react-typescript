import { Link } from "react-router";

const CategoryPage = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm">
      <div className="px-6 py-2 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Halaman Kategori</h3>
        <Link to={"/dashboard/create-category"} className="px-4 py-1.5 bg-blue-500 text-white font-semibold shadow-sm rounded-md hover:bg-blue-600">
          + Tambah
        </Link>
      </div>
    </section>
  );
};

export default CategoryPage;
