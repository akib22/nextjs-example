import { users } from "../../data/user.json";

export default (req, res) => {
  res.statusCode = 200
  res.json({ users })
};