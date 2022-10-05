import { checkAnswer } from "./checkAnswer";

export const signIn = async () => {
  const res = await fetch(`http://localhost:3001/users`);
  const data = await checkAnswer(res);
  return data;
}
