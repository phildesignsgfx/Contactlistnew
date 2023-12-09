export const userstore = {
    UserList: [],
    user: {
        msg: "I'm an object"
    }

}

export function userActions(getStore, getActions, setStore) {
    return {
        login: async () => {
            const store = getStore()
            console.log("It is responsible for logging in the user")

            setStore({
                ...store, user: {
                    msg: "user logged in"
                }
            })

            return store.user;
        },
    }
}