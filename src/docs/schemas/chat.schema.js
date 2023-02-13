const chatSchema = {
    chat: {
        type: "object",
        required: ["users"],
        properties: {
            users: {
                type: "array",
                items: {
                    type: "string"
                },
                default: []
            }
        }
    },
    getOneChat: {
        type: "object",
        required: ["userArray"],
        properties: {
            userArray: {
                type: "array",
                items: {
                    type: "string"
                },
                default: []
            }
        }
    }
}

module.exports = chatSchema;