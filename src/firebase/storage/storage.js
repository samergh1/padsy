import { storage } from "../config";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

export const uploadProfileImage = async (file, email) => {
    const storageRef = ref(storage, `profile-images/${email}`);
    await uploadBytes(storageRef, file);
};

export const uploadDegree = async (file, uid) => {
    const storageRef = ref(storage, `degrees/${uid}`);
    return await uploadBytes(storageRef, file);
};

export const uploadCertficate = async (file, uid) => {
    const storageRef = ref(storage, `certificates/${uid}`);
    return await uploadBytes(storageRef, file);
};

export const getProfileImgUrl = async (email) => {
    const storageRef = ref(storage, `profile-images/${email}`);
    const url = await getDownloadURL(storageRef);
    return url;
}