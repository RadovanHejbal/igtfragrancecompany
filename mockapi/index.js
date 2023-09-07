const http = require('http');
const app = require('express')();
const server = http.createServer(app);
const PORT = 8080;
const products = require('./data/products.json');
const reviews = require('./data/reviews.json');

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.get('/products', (req, res) => {
    const {product, type, page, itemsPerPage} = req.query;

    let filteredProducts = products;

    if(type !== "all") {
        filteredProducts = products.filter(el => el.product == product && el.type == type);
    }else if(product !== "all") {
        filteredProducts = products.filter(el => el.product == product);
    }

    const startIndex = (page - 1) * parseInt(itemsPerPage);

    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + parseInt(itemsPerPage));

    const isLast = paginatedProducts[paginatedProducts.length - 1]?.id == filteredProducts[filteredProducts.length - 1]?.id;

    res.send({products: paginatedProducts, isLast });
})

app.get('/product/detail', (req, res) => {
    const { id } = req.query;

    const filteredProduct = products.filter(el => el.id == id)[0];
    const filteredReviews = reviews.filter(el => el.productId == id);

    res.send({product: filteredProduct, reviews: filteredReviews});
})

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})