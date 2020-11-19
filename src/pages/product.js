import React from "react";
import { Layout } from "../components/common/layout";
import { api } from "../api";

class ProductPageView extends React.Component {
  state = {
    data: null,
    isFetching: false,
    error: null,
  };

  componentDidMount() {
    this.getProduct();
  }

  getProduct = () => {
    this.setState({ isFetching: true });

    const { match } = this.props;

    if (match && match.params.productID) {
      api
        .get(`products/${match.params.productID}`)
        .then((result) => {
          this.setState({ data: result, isFetching: false, error: null });
        })
        .catch((error) => {
          this.setState({ data: [], isFetching: false, error });
        });
    }
  };

  turnBack = () => {
    this.props.history.push("/catalog");
  };

  render() {
    const { isFetching, error, data } = this.state;

    return (
      <Layout title={data && data.title}>
        {isFetching && "loading"}
        {!isFetching && !error && data && (
          <>
            <div>
              <button onClick={this.turnBack}>Back</button>
            </div>
            <div>
              <picture>
                <img
                  width="100%"
                  alt={data.title}
                  src={data.image}
                  itemProp="image"
                  loading="lazy"
                />
              </picture>
              <div>
                <div>{data.description}</div>
              </div>
            </div>
          </>
        )}
      </Layout>
    );
  }
}

export const ProductPage = ProductPageView;
