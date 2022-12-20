import ACTION_STRING from '../actions/actionString';

const initialState = {
    product: [],
    data: [],
    detail: [],
    promo: [],
    pagination: {},
    isLoading: false,
    isError: false,
    isFulfilled: false,
    error: null,
};

const productReducer = (prevState = initialState, { type, payload }) => {
    const { getProduct, getDetail, getAll, getPromo, pending, rejected, fulfilled } = ACTION_STRING;
    switch (type) {
        case getProduct + pending:
            return {
                ...prevState,
                isLoading: true,
                isError: false,
                isFulfilled: false,
            };
        case getProduct + rejected:
            return {
                ...prevState,
                isError: true,
                isLoading: false,
                isFulfilled: false,
                error: payload.error.response.data.msg,
                product: []
            };
        case getProduct + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isError: false,
                isFulfilled: true,
                product: payload.data.data
            };

        case getAll + pending:
            return {
                ...prevState,
                isLoading: true,
                isError: false,
                isFulfilled: false,
            };
        case getAll + rejected:
            return {
                ...prevState,
                isError: true,
                isLoading: false,
                isFulfilled: false,
                error: payload.error.response.data.msg,
                data: []
            };
        case getAll + fulfilled:
            const newProduct = payload.data.data;
            const page = payload.data.meta.page;
            return {
                ...prevState,
                isLoading: false,
                isError: false,
                isFulfilled: true,
                data:
                    page > 1 ? [...prevState.product, ...newProduct] : newProduct,
                pagination: payload.data.meta,
            };

        case getDetail + pending:
            return {
                ...prevState,
                isLoading: true,
                isError: false,
                isFulfilled: false,
            };
        case getDetail + rejected:
            return {
                ...prevState,
                isError: true,
                isLoading: false,
                isFulfilled: false,
                error: payload.error.response.data.msg,
                detail: []
            };
        case getDetail + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isError: false,
                isFulfilled: true,
                detail: payload.data.data
            };
        
            case getPromo + pending:
                return {
                    ...prevState,
                    isLoading: true,
                    isError: false,
                    isFulfilled: false,
                };
            case getPromo + rejected:
                return {
                    ...prevState,
                    isError: true,
                    isLoading: false,
                    isFulfilled: false,
                    error: payload.error.response.data.msg,
                };
        case getPromo + fulfilled:
            const newPromo = payload.data.data;
            const pagePromo = payload.data.meta.page;
                return {
                    ...prevState,
                    isLoading: false,
                    isError: false,
                    isFulfilled: true,
                    promo: pagePromo > 1 ? [...prevState.promo, ...newPromo] : newPromo
                };

        default:
            return prevState;
    }
}

export default productReducer