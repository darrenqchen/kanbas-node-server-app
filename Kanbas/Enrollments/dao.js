import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    const newEnrollment = { _id: Date.now(), user: userId, course: courseId }
    enrollments.push(newEnrollment);
    return newEnrollment
}
export function findEnrollmentsForUser(userId) {
    const { enrollments } = Database;
    const userEnrollments = enrollments.filter((enrollment) => enrollment.user === userId);
    return userEnrollments
}
export function deleteEnrollment(enrollmentId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter((enrollment) => enrollment._id !== enrollmentId);
}
