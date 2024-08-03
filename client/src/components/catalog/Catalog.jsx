import Card from "../card/Card";
import CatalogCard from "../catalogCard/CatalogCard";
export default function Catalog() {
  return (
    <>
      <h1 className="home-title">Catalog</h1>

      <div className="catalog-wrapper">
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
      </div>
    </>
  );
}
