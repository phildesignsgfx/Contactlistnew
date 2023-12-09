export const contactStore = {
    ContactList: [{
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
            let arrTemp = store.ContactList.slice();
            arrTemp.push(obj);
            setStore({
                ...store,
                ContactList: arrTemp,
            });
            return store.ContactList;
        },
        editContact: (index, nombre) => {
            let store = getStore();
            let arrTemp = store.ContactList.slice();
            arrTemp[index]["full_name"] = nombre;
            setStore({
                ...store,
                ContactList: arrTemp,
            });
        },
        deleteContact: (indice) => {
            let store = getStore();
            let arrTemp = store.ContactList.filter((item, index) => {
                return index != indice;
            });
            setStore({
                ...store,
                ContactList: arrTemp,
            });
        },
    };
}