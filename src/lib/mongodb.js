import { MongoClient } from "mongodb";

if (!process.env.MONGO_URI) {
    throw new Error('Variabel lingkungan "MONGO_URI" harus diatur');
}

const uri = process.env.MONGO_URI;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
    // Di lingkungan pengembangan, gunakan variabel global untuk menyimpan koneksi
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // Di lingkungan produksi, buat koneksi baru
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise; 