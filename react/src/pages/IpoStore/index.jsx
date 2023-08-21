import { useEffect, useState } from "react";
import { Grid, Skeleton } from "@mui/material";
import { toast } from "react-toastify";

// Service import
import { api } from "../../services/api";

// Assets import
import Coin from "../../assets/coin-white.svg";

// Components import
import { Header, SubHeader, GoBack } from "../../components";

// Styles import
import { Container, ProductItem } from "./styles";

export function IpoStore() {
  const [loading, setLoading] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);

        const { data } = await api.get("/produto");

        if (!Array.isArray(data)) throw new Error("Dados inválidos");

        setProducts(data);
      } catch (error) {
        toast.error(error.message || "Não foi possível buscar os produtos.", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <main>
          <GoBack to="/dashboard" size="sm" />
          <SubHeader title="Descubra o que você pode comprar com suas moedas" />

          <Grid container spacing={1}>
            {loading && (
              <>
                {[0, 1, 2, 3, 4, 5].map((item) => (
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={4}
                    lg={4}
                    tabindex="0"
                    aria-label="Ação de um IPO"
                    key={item}
                  >
                    <Skeleton
                      sx={{
                        borderRadius: "1rem",
                        margin: "0.2rem 0",
                        maxWidth: "15.2rem",
                      }}
                      variant="rounded"
                      width="100%"
                      height="18rem"
                    />
                  </Grid>
                ))}
              </>
            )}

            {!loading &&
              products.map((product) => (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={4}
                  lg={4}
                  tabindex="0"
                  aria-label="Ação de um IPO"
                  key={product.id_produto}
                >
                  <ProductItem>
                    <header>
                      <img
                        src={product.imagem_produto}
                        alt={`Imagem que representa a marca ${product.nome_produto}`}
                      />

                      <div>
                        <img
                          src={Coin}
                          alt="Diamantes representando o valor do produto"
                        />
                        <p>{product.valor_produto}</p>
                      </div>
                    </header>

                    <footer>
                      <p>{product.nome_produto}</p>
                    </footer>
                  </ProductItem>
                </Grid>
              ))}
          </Grid>
        </main>
      </Container>
    </>
  );
}
