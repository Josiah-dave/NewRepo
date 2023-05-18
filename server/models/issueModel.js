import mongoose from 'mongoose'

const issueSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true
        },
        order: {
            type: String,
        },
        subject: {
            type: String,
            required: true
        },
        details: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
)

const Issue = mongoose.model('Issue', issueSchema)

export default Issue
