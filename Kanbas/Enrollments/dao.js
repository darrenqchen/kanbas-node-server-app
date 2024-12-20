import Database from "../Database/index.js";
import model from "./model.js";
// export function enrollUserInCourse(userId, courseId) {
//     const { enrollments } = Database;
//     const newEnrollment = { _id: Date.now(), user: userId, course: courseId }
//     enrollments.push(newEnrollment);
//     return newEnrollment
// }
// export function findEnrollmentsForUser(userId) {
//     const { enrollments } = Database;
//     const userEnrollments = enrollments.filter((enrollment) => enrollment.user === userId);
//     return userEnrollments
// }
// export function deleteEnrollment(enrollmentId) {
//     const { enrollments } = Database;
//     Database.enrollments = enrollments.filter((enrollment) => enrollment._id !== enrollmentId);
// }

export async function findCoursesForUser(userId) {
    const enrollments = await model.find({ user: userId }).populate("course");
    return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
    const enrollments = await model.find({ course: courseId }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
    return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
    return model.deleteOne({ user, course });
}
