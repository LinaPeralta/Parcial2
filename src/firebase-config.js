const firebaseConfig = {
    apiKey: "AIzaSyAsd6RvbUapsricODZYmXkBJqYqazxdF0w",
    authDomain: "parcial-ii-a000c.firebaseapp.com",
    projectId: "parcial-ii-a000c",
    storageBucket: "parcial-ii-a000c.appspot.com",
    messagingSenderId: "614643293981",
    appId: "1:614643293981:web:139f36793107c718ad4bf4"
};

export function getFirebaseConfig(){
    if (!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}
