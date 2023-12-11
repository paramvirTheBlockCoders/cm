import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      console.log(data);

      let response = await axios.post(
        "http://52.45.20.15:4000/api/v1/auth/register",
        data
      );
      const request = response.data;
      console.log(request);
      res.status(200).json({ data: request });
    } catch (err) {
      console.log(err);
      res.status(403).json({ error: err });
    }
  }
}


