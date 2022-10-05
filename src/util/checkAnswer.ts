export const checkAnswer = (res:any) => {
  if(res.ok) {
    return res.json();
  }else {
    return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
  }
}