const messageSchema = {
    message: {
        type: "object",
        required: ["user", "chat", "content", "seen"],
        properties: {
            user: {
                type: "string"
            },
            chat: {
                type: "string"
            },
            content: {
                type: "string"
            },
            seen: {
                type: "boolean"
            },
        }
    },
    createMessage: {
        type: "object",
        required: ["user", "chat", "content"],
        properties: {
            user: {
                type: "string"
            },
            chat: {
                type: "string"
            },
            content: {
                type: "string"
            }
        }
    },
    updateMessage: {
        type: "object",
        required: ["content"],
        properties: {
            content: {
                type: "string"
            }
        }
    }
}

module.exports = messageSchema;