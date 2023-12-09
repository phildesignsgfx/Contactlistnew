import {
    exampleStore,
    exampleActions
} from "./exampleStore.js";
import {
    userNewStore,
    userNewActions
} from "./userNew.js";
import {
    contactStore,
    contactActions
} from "./contact.js";

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
            ...exampleStore,
            ...userNewStore,
            ...contactStore,
        },
        actions: {
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({
                    ...store,
                    demo: demo
                });
            },
            removeContact: (indice) => {
                const store = getStore();
                setStore({
                    contactLists: store.contactLists.filter((item, index) => {
                        return index !== indice;
                    }),
                });
            },

            ...exampleActions(getStore, getActions, setStore),
            ...userNewActions(getStore, getActions, setStore),
            ...contactActions(getStore, getActions, setStore),

            editContact: (index, editedContact) => {
                const store = getStore();
                const updatedContacts = [...store.contactList];
                updatedContacts[index] = editedContact;
                setStore({
                    contactList : updatedContacts
                });
            },
        },
    };
};

export default getState;