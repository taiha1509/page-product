
import { Fetch_Product, FETCH_PRODUCT_CANCELLED, Fetch_Product_Success, FETCH_PRODUCT_REJECTED } from '../constants/TypeAction';
import { getProduct, getProductSuccess } from '../actions/product';
import '../service/product';
import { fetchProduct } from '../service/product';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { getUrlImage } from '../utils/product'; 

const fetchUserFulfilled = products => of(getProductSuccess(products));

// const productEpic = action$ =>
//     action$.pipe(
//         ofType(Fetch_Product),
//         switchMap((action) => {
//             console.log('action: ', action);
//             return from(fetchProduct()).pipe(
//                 map((response) => {
//                     console.log('response: ', response);
//                     if (response.success) {
//                         debugger
//                         return getProductSuccess({});
//                     } else {
//                         return getProductSuccess({});
//                     }
//                 })
//             )
//         })
//     )



const fetchProductEpic = (action$, state$) => action$.pipe(
    ofType(Fetch_Product),
    mergeMap(({ payload }) => ajax.getJSON(`http://127.0.0.1/magento235/rest/V1/magestore/product/getList20Pro`).pipe(
        map(response => {
            let rs = response.map(product => ({
                id: product.id,
                sku: product.sku,
                name: product.name,
                price: product.price,
                image: getUrlImage(product.media_gallery_entries[0].file)
                }));
            return getProductSuccess(rs);
        })
    )
    )
);

export default combineEpics(fetchProductEpic);
