import axios from "axios";
// import http from 'http';
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {token}=req.body
      const {data} = req.body; 

      console.log(data,"fgfgfgfggfg");
      // const agent = new http.Agent({
      //   rejectUnauthorized: false,
      // });
      var config = {
        method: "post",

        url: "http://44.200.180.0:7777/api/v1/admin/gettotal",
        headers:{
          'Authorization': `Bearer ${token}`,
      },data, 

      };
      await axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).json({ data: response.data});
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}