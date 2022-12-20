import ACTION_STRING from '../actions/actionString';

const initialState = {
    profile: {
        username: '',
        first_name: '',
        last_name: '',
        display_name: '',
        gender: '',
        birthday: '',
        address: '',
        image: '',
        phone: '',
        email: '',
    },
    isLoading: false,
    isError: false,
    isFulfilled: false,
    error: null,
};

const userReducer = (prevState = initialState, { type, payload }) => {
    const { getUser, editProfile, userReset, pending, rejected, fulfilled } = ACTION_STRING;
    switch (type) {
        case getUser + pending:
            return {
                ...prevState,
                isLoading: true,
                isError: false,
                isFulfilled: false,
            };
        case getUser + rejected:
            return {
                ...prevState,
                isError: true,
                isLoading: false,
                isFulfilled: false,
                error: payload.error,
                profile: {
                    username: '',
                    first_name: '',
                    last_name: '',
                    display_name: '',
                    gender: '',
                    birthday: '',
                    address: '',
                    image: '',
                    phone: '',
                    email: '',
                },
            };
        case getUser + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isError: false,
                isFulfilled: true,
                profile: {
                    username: payload.data.data[0].username,
                    first_name: payload.data.data[0].first_name,
                    last_name: payload.data.data[0].last_name,
                    display_name: payload.data.data[0].display_name,
                    gender: payload.data.data[0].gender,
                    birthday: payload.data.data[0].birthday,
                    address: payload.data.data[0].address,
                    image: payload.data.data[0].image,
                    phone: payload.data.data[0].phone,
                    email: payload.data.data[0].email,
                }
            };

        case editProfile + pending:
            return {
                ...prevState,
                isLoading: true,
                isError: false,
                isFulfilled: false,
            };
        case editProfile + rejected:
            return {
                ...prevState,
                isError: true,
                isLoading: false,
                error: payload.error,
            };
        case editProfile + fulfilled:
            return {
                ...prevState,
                isLoading: false,
                isError: false,
                isFulfilled: true,
                isLoggedIn: true,
                profile: { ...prevState.profile, ...payload.data.data },
            };

        case userReset:
            return initialState;

        default:
            return prevState;
    }
}

export default userReducer