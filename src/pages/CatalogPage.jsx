import Filter from "../components/Filter/Filter";
import Layout from "../layout/Layout";
import "./CatalogPage.scss";

const CatalogPage = () => {
  return (
    <Layout>
      <div className="container">
        <Filter name="Catalog" />
      </div>
    </Layout>
  );
};

export default CatalogPage;
