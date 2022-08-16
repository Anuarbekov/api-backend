import axios from "axios";
export default function getPosts(req, res) {
  const { startingValue } = req.query;
  axios
    .get(
      `https://jsonplaceholder.typicode.com/posts?_start=${startingValue}&_limit=10`
    )
    .then((response) => res.status(200).json(response.data))
    .catch((err) => res.status(500).json(err));
}
