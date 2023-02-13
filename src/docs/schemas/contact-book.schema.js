const contactBookSchema = {
    contactBook: {
        type: "object",
        required: ["user"],
        properties: {
            user: {
                type: "string"
            },
            contacts: {
                type: "array",
                items: {
                    type: "string"
                },
                default: []
            }
        }
    },
    createContactBook: {
        type: "object",
        required: ["user"],
        properties: {
            user: {
                type: "string"
            }
        }
    },
    updateContactBook: {
        type: "object",
        required: ["contacts"],
        properties: {
            contacts: {
                type: "array",
                items: {
                    type: "string"
                },
                default: []
            }
        }
    },
    addContact: {
        type: "object",
        required: ["userOwner", "userAdded"],
        properties: {
            userOwner: {
                type: "string"
            },
            userAdded: {
                type: "string"
            }
        }
    }
        
}

module.exports = contactBookSchema;
