async function user() {
    const userData = {
        id: 274,
        name: "rishabh",
        email: "rishabh@example.com",
        role: "student"
    };
    const user = await new Promise((resolve) => {
        setTimeout(() => resolve(userData), 500);
    });

    console.log("User Data:");
    console.log("ID:", user.id);
    console.log("Name:", user.name);
    console.log("Email:", user.email);
    console.log("Role:", user.role);
}
user().catch(error => console.error("Error loading user data:", error));