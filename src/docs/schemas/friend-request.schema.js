const friendRequestSchema = {
    friendRequest: {
        type: "object",
        required: ["from", "to", "status"],
        properties: {
            from: {
                type: "string",
            },
            to: {
                type: "string",
            },
            status: {
                type: "string",
            },
        }
    },
    createfriendRequest: {
        type: "object",
        required: ["from", "to"],
        properties: {
            from: {
                type: "string",
            },
            to: {
                type: "string",
            },
        }
    },
    updateFriendRequest: {
        type: "object",
        required: ["status"],
        properties: {
            status: {
                type: "string",
            }
        }
    }
}

module.exports = friendRequestSchema;