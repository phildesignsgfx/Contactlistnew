export const userNewStore = {
    userList: [],
    userNew: {
        msg: "I'm an object"
    }

}

export function userNewActions(getStore, getActions, setStore) {
    return {
        login: async () => {
            const store = getStore()
            console.log("It is responsible for logging in the userNew")

            setStore({
                ...store, userNew: {
                    msg: "userNew logged in"
                }
            })

            return store.userNew;
        },
    }
}