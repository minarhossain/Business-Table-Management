import { SetAllProduct, SetTotal } from "../redux/state-slice/product-slice";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";
import store from '../redux/store/store'
import axios from "axios";
const baseUrl = 'http://localhost:5000/api/v1';

export async function GetProductList(pageNumber, perPage, searchKeyword) {
    const url = baseUrl + '/productList/' + pageNumber + '/' + perPage + '/' + searchKeyword;

    store.dispatch(ShowLoader());
    try {
        const result = await axios.get(url);
        console.log(result);
        store.dispatch(HideLoader());
        if (result.status === 200 && result.data['status'] === 'success') {
            if (result.data['data'][0]['rows'].length > 0) {
                store.dispatch(SetAllProduct(result.data['data'][0]['rows']));
                store.dispatch(SetTotal(result.data['data'][0]['total'][0]['count']));

            } else {
                store.dispatch(SetAllProduct([]));
                store.dispatch(SetTotal(0));
                console.log('No Data Found');
            }
        } else {
            console.log('Something went wrong')
        }
    } catch (error) {
        store.dispatch(HideLoader());
        // alert('Something went wrong from catch block');
    }

}