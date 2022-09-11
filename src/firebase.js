

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { ref, onUnmounted } from 'vue'


const config = {
    apiKey: "AIzaSyCWgq7IaR1WKw0ghQSy1znVnjuk-SMU2ZU",
    authDomain: "beta-hni-app.firebaseapp.com",
    projectId: "beta-hni-app",
    storageBucket: "beta-hni-app.appspot.com",
    messagingSenderId: "69378585620",
    appId: "1:69378585620:web:c2f3ae3d48b59bd084e301",
    measurementId: "G-86XDZ1FML9"
};

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore()
const productCollection = db.collection('wealthProducts')

export const createWealthProduct = wealthProduct => {
    return productCollection.add(wealthProduct)
}

export const getWealthProduct = async id => {
    const wealthProduct = await productCollection.doc(id).get()
    return wealthProduct.exists ? wealthProduct.data() : null
}

export const updateWealthProduct = (id, wealthProduct) => {
    return productCollection.doc(id).update(wealthProduct)
}

export const deleteWealthProduct = id => {
    return productCollection.doc(id).delete()
}


export const useLoadWealthProducts= () => {
    const wealthProducts = ref([])
    productCollection.onSnapshot(snapshot => {
        wealthProducts.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    })
    onUnmounted(close)
    return wealthProducts
}


export default firebase;
