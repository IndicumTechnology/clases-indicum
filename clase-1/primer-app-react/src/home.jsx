import { useEffect, useState } from "react";
import { NavTop } from "./components/nav-top";
import { Card } from "./components/card";
import { Button as ButtonWallet } from "./components/button";
import { UilImport, UilMessage } from "@iconscout/react-unicons";
import { DataView } from "primereact/dataview";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { ProductService } from "./service/ProductService";
import { Link } from "react-router-dom";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 5))
    );
  }, []);

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const itemTemplate = (product) => {
    return (
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{product.name}</div>
              <Rating value={product.rating} readOnly cancel={false}></Rating>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{product.category}</span>
                </span>
                <Tag
                  value={product.inventoryStatus}
                  severity={getSeverity(product)}
                ></Tag>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${product.price}</span>
              <Button
                icon="pi pi-shopping-cart"
                className="p-button-rounded"
                disabled={product.inventoryStatus === "OUTOFSTOCK"}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main style={{ display: "grid", gap: "26px" }}>
      <NavTop />
      <div style={{ padding: "0 16px" }}>
        <Card />
      </div>
      <div style={{ display: "flex", gap: "24px", paddingLeft: "16px" }}>
        <ButtonWallet text="Receive" icon={<UilImport />} />
        <Link to="/Send">
          <ButtonWallet text="Send" icon={<UilMessage />} />
        </Link>
        <ButtonWallet text="Swap" icon={<UilImport />} />
        <ButtonWallet text="Buy" icon={<UilImport />} />
      </div>
      <DataView value={products} itemTemplate={itemTemplate} />
    </main>
  );
};
