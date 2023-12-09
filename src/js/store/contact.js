export const contactStore = {
    contactList: [{
        full_name: "Dave Bradley",
        email: "dave@gmail.com",
        address: "47568 NW 34ST, 33434 FL, USA",
        phone: "7864445566",
        agenda_slug: "agenda_de_antonio",
    }, ],
};

export function contactActions(getStore, getActions, setStore) {
    return {
        addContact: async (obj) => {
            let store = getStore();
            let arrTemp = store.contactList.slice();
            arrTemp.push(obj);
            setStore({
                ...store,
                contactList: arrTemp,
            });
            return store.contactList;
        },
        editContact: (index, name) => {
            let store = getStore();
            let arrTemp = store.contactList.slice();
            arrTemp[index]["full_name"] = name;
            setStore({
                ...store,
                contactList: arrTemp,
            });
        },
        deleteContact: (indice) => {
            let store = getStore();
            let arrTemp = store.contactList.filter((item, index) => {
                return index != indice;
            });
            setStore({
                ...store,
                contactList: arrTemp,
            });
        },
    };
}