import { firestore as db } from "../../../firebase/config";

export default async function getDoctors() {
    try {
        const getDoctors = await db.collection('').onSnapshot(snapshot => {
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data().doctor
            }));
        })
        return 
    } catch (error) {
        console.log(error); 
    }
}