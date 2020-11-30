import '../utils/product'
import { getUrlImage } from '../utils/product';

export const fetchProduct = async() => {
    let response = await fetch('http://127.0.0.1/magento235/rest/V1/magestore/product/getList20Pro');
    let products = await response.json();

    return products.map(product => ({
        id: product.id,
        sku: product.sku,
        name: product.name,
        price: product.price,
        image: getUrlImage(product.media_gallery_entries[0].file)
        })
    );
}