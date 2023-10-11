import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAIvC4PHyEtv3enyMiSW_Rym1AOzZCjbDI",
  authDomain: "db-reactjs-3a5f5.firebaseapp.com",
  projectId: "db-reactjs-3a5f5",
  storageBucket: "db-reactjs-3a5f5.appspot.com",
  messagingSenderId: "709085456080",
  appId: "1:709085456080:web:f9870955a30d9ba332e0d5",
  measurementId: "G-0GE3F9614X"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems(){
    const miColeccion = collection(firestore, 'productos')
    let snapShotDB = await getDocs(miColeccion) // captura del estado de la base de datos
    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function getBestItems(){
    const collectionRef = collection(firestore, 'productos')
    const queryCategory = query(collectionRef, where('outstanding', '==', true))
    const snapShotDB = await getDocs(queryCategory)

    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function getSingleItem(idParams){
    const docRef = doc(firestore, 'productos', idParams)
    const docSnapshot = await getDoc(docRef)
    return {...docSnapshot.data(), id:docSnapshot.id}
}

export async function getItemsByCategory(catParams) {
    const collectionRef = collection(firestore, 'productos')
    const queryCategory = query(collectionRef, where('description', '==', catParams))
    const snapShotDB = await getDocs(queryCategory)

    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function getItemsByType(typeParams) {
    const collectionRef = collection(firestore, 'productos')
    const queryCategory = query(collectionRef, where('type', '==', typeParams))
    const snapShotDB = await getDocs(queryCategory)

    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function createBuyOrder(orderData){
    const collectionRef = collection(firestore, "orders")
    let respuesta = await addDoc(collectionRef, orderData)
    return respuesta.id
}

export async function exportDataToFirestore(){
    const data = [

        {
            id: 1,
            title: "Resident Evil 2 Remake",
            description: "Juego de terror",
            stock: 15,
            outstanding: false,
            type: "Juegos",
            imageProduct: "https://cdn.clarosports.com/clarosports/2023/08/re2-141655.jpg",
            price: 50000,
        },
    
        {
            id: 2,
            title: "Resident Evil 3 Remake",
            description: "juego de terror",
            stock: 7,
            outstanding: false,
            type: "Juegos",
            imageProduct: "https://cdn.akamai.steamstatic.com/steam/apps/952060/capsule_616x353.jpg?t=1682298733",
            price: 65000,
        },
    
        {
            id: 3,
            title: "Dying Light",
            description: "Juego de mundo abierto post-apocaliptico",
            stock: 20,
            outstanding: false,
            type: "Juegos",
            imageProduct: "https://cdn1.epicgames.com/offer/2c42520d342a46d7a6e0cfa77b4715de/StoreHorizontal2560x14401_2560x1440-31926a8652d0c3b888809a778e138a3c",
            price: 30000,
        },
    
    
        {
            id: 4,
            title: "Control Xbox Series X/S",
            description: "Mando para las consolas microsoft, compatible con pc",
            stock: 6,
            outstanding: false,
            type: "Perifericos",
            imageProduct: "https://exitocol.vtexassets.com/arquivos/ids/16727450-800-auto?v=638128793988500000&width=800&height=auto&aspect=true",
            price: 300000,      
        },
    
        {
            id: 5,
            title: "Mouse Logi gamer",
            description: "Mouse gamaer RGB perfecto para juegos en linea",
            stock: 6,
            outstanding: false,
            type: "Perifericos",
            imageProduct: "https://d28hi93gr697ol.cloudfront.net/6905390e-d02c-a818/img/Producto/452/6e1257262f1196ac85e6eaa76e405120-62be0b24bae2a.jpg",
            price: 123000,      
        },
    
      
        {
            id: 6,
            title: "Control Dual-Sense PS5",
            description: "Mando color negro para la Sony Playstation 5",
            stock: 3,
            outstanding: false,
            type: "Perifericos",
            imageProduct: "https://cosonyb2c.vtexassets.com/arquivos/ids/352002/PS5-DualSense-MidnightBlack.jpg?v=637607198773500000",
            price: 380000,      
        },
    
        {
            id: 7,
            title: "Consola Microsoft Xbox Series X",
            description: "Vive tus juegos con la mejor consola de microsoft, la series X te permitira vivir una experiencia increible con toda su potencia",
            stock: 3,
            outstanding: true,
            type: "Consolas",
            imageProduct: "https://falabella.scene7.com/is/image/FalabellaCO/gsc_119629958_2052296_1?wid=800&hei=800&qlt=70",
            price: 3000000,      
        },
    
        //fuentes
        {
            id: 8,
            title: "Consola Miscrosoft Series S",
            description: "La alternativa de bajo costo a la serie S, vive todos los juegos de ultima generacion con esta consola.",
            stock: 5,
            outstanding: true,
            type: "Consolas",
            imageProduct: "https://tiendatecnologicadecolombia.com/wp-content/uploads/2021/05/xbox-series-s.jpg",
            price: 1600000,      
        },
    
        {
            id: 9,
            title: "Consola Sony Playstation 5",
            description: "La ultima de la legendaria consola de sony, vive tus a maximo nivel con la playstation 5",
            stock: 7,
            outstanding: true,
            type: "Consolas",
            imageProduct: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/08/acabo-escasez-ps5-stock-consola-volvera-normalidad-ano-2429173.jpg?tf=3840x",
            price: 3500000,      
        }
    ];
    const collectionRef = collection(firestore, 'productos')
    for (let item of data){
        const newDoc = await addDoc(collectionRef, item)
        console.log('Doc created', newDoc.id)
    }
}

export default firestore;