// /api/new-meetup
// POST /api/new-meetup

// node.js, express.js
const handler = (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;
  }
};

export default handler;
