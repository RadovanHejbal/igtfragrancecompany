type fetchProductsProps = {
    product: string;
    type: string;
    page: number;
    itemsPerPage: number;
}

type fetchProductDetailProps = {
    id: number
}

// fetching paginated products
export const fetchProducts = async ({product, type, page, itemsPerPage}: fetchProductsProps) => {
    try {
        const response = await fetch(`http://localhost:8080/products?product=${product}&type=${type}&page=${page}&itemsPerPage=${itemsPerPage}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const jsonData = await response.json();
        return {response: jsonData, err: null};
      } catch (err) {
        return { response: null, err };
      }
}

// fetching details about product
export const fetchProductDetail = async ({id}: fetchProductDetailProps) => {
    try {
        const response = await fetch(`http://localhost:8080/product/detail?id=${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const jsonData = await response.json();
        return {response: jsonData, err: null};
      } catch (err) {
        return { response: null, err };
      }
}