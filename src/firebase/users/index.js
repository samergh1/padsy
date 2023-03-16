export async function getUsersDoctors() {
    const userDoctorQuery = query(
      collection(db, USERS_COLLECTION),
      where("isDoctor", "==", true)
    );
    const results = await getDocs(userDoctorQuery);

    if (results.size > 0) {
      const doctors = results.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));
     
      return doctors;
    }

    return null;
  }