const userSchema = {
    user: {
        type: "object",
        required: ["fullname", "email", "username", "password"],
        properties: {
            fullname: {
                type: "string"
            },
            email: {
                type: "string"
            },
            username: {
                type: "string"
            },
            password: {
                type: "string"
            }
        }
    },
    userUpdate: {
        type: "object",
        required: ["fullname", "email", "username"],
        properties: {
            fullname: {
                type: "string"
            },
            email: {
                type: "string"
            },
            username: {
                type: "string"
            }
        }
    }
        
}

module.exports = userSchema;
