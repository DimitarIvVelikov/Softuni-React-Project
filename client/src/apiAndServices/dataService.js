import { api } from "./api";

const dataEndpoints = {
  getAllProducts: "data/products?sortBy=_createdOn%20desc",
  createProduct: "data/products",
  editProduct: (id) => {
    return `data/products/${id}`;
  },
};

async function getAllProducts() {
  const data = await api.get(dataEndpoints.getAllProducts);
  return data;
}

async function createProduct(body) {
  const data = await api.post(dataEndpoints.createProduct, body);
  return data;
}

async function editProduct(id, body) {
  const data = await api.put(dataEndpoints.editProduct(id), body);
  return data;
}

async function deleteProduct(id) {
  const data = await api.del(dataEndpoints.editProduct(id));
  return data;
}
export const dataService = {
  getAllProducts,
  createProduct,
  editProduct,
  deleteProduct,
};
