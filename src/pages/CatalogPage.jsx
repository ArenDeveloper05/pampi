import Filter from "../components/Filter/Filter";
import Layout from "../layout/Layout";

const CatalogPage = () => {
  return (
    <Layout>
      <div
        className="container"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Filter name="Catalog" />
      </div>
    </Layout>
  );
};

export default CatalogPage;
