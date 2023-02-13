const authSchema = {
    authSignUp: {
        type: "object",
        required: ["fullname", "email", ,"username", "password"],
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
            },
        }
    },
    authSignIn: {
        type: 'object',
        required: ['username', 'password'],
        properties: {
            username: {
                type: "string",
            },
            password: {
                type: "string",
            },
        }
    }
}

module.exports = authSchema;