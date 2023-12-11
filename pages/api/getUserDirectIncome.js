import axios from "axios";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (req.method === "POST") {
    try {
      console.log(session.user?.name)
      var config = {
        method: "post",
        url: "http://44.200.180.0:7777/api/v1/admin/getallusers",
        headers: {
          Authorization: `Bearer ${session.user?.name} `,
        },
      };
      await axios(config).then(function (response) {
        res.status(200).json({ data: response.data.data });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}
