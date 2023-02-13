const notificationSchema = {
    notification: {
        type: "object",
        required: ["content", "type", "to", "redirectURL"],
        properties: {
            content: {
                type: "string"
            },
            type: {
                type: "string"
            },
            to: {
                type: "string"
            },
            seen: {
                type: "boolean"
            },
            redirectURL: {
                type: "string"
            },
        }
    },
    updateNotification: {
        type: "object",
        required: ["content", "type"],
        properties: {
            content: {
                type: "string"
            },
            type: {
                type: "string"
            },
        }
    }
}

module.exports = notificationSchema;