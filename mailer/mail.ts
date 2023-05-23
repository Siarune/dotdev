// import postmark from "postmark"
const postmark = require("postmark")

const serverToken = process.env.POSTMARK_TOKEN as string
export const client = new postmark.ServerClient(serverToken);

