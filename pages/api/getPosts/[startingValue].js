import axios from "axios";
export default function getPosts(request, res) {
  const { startingValue } = request.query;
  axios
    .get(
      `https://jsonplaceholder.typicode.com/posts?_start=${startingValue}&_limit=10`
    )
    .then((answer) => res.status(200).json(answer.data))
    .catch((err) => res.status(500).json(err));
}
