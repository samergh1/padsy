export const LandingPageUrl = "/";
export const RegisterPageUrl = "/register";
export const LoginPageUrl = "/login";
export const SearchPageurl = "/search"
export const SchedulePageUrl = "/schedule";
export const RegisterDoctorUrl = "/register/doctor";
export const RegisterPatientUrl = "/register/patient";
export const ChatPageUrl = "/chat";
export const AppointmentsUrl = "/myAppointments";
export const DoctorProfileUrl = (userId = ":userId") => `/profile/doctor/${userId}`;
export const PatientProfileUrl = (userId = ":userId") => `/profile/patient/${userId}`;
export const FeedbackUrl = "/feedback";
