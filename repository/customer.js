import useSWR from "swr";

const fetcher = (url) => fetch(url).then(res => res.json());

const url = {
    getList: (page) => `https://gorest.co.in/public/v1/users?page=${page}` ,
    getListDetail: (id) => `https://gorest.co.in/public/v1/users/${id}`,
    profileDetailCards: (id) => `/profile/${id}/cards`,
    updatePhoneNumber: () => `/users/update-phone-number`
};

const hooks = {
    useGetLists(pages) {
        return useSWR(url.getList(pages), fetcher);
    },
    useGetProfileDetail(id) {
        return useSWR(url.getListDetail(id), fetcher);
    },
    useGetProfileDetailCards(id) {
        return useSWR(url.profileDetailCards(id), http.fetcher);
    }
}

const api = {
    updatePhoneNumber({ phoneNumber }) {
        return http.post(url.updatePhoneNumber(), {apiUrl: appConfig.gameApiUrl}).send({
            phoneNumber: phoneNumber
        });
    }
}

export const customerRepository = {
    url,
    hooks,
    api
}
