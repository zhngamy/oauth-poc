export default function handler(req, res) {
    // req: an instance of http.IncomingMessage
    // res: an instance of http.ServerResponse

    res.status(200).json({ text: 'Hello'})
}