import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  let delay = +e.target.elements.delay.value;
  let step = +e.target.elements.step.value;
  let amount = +e.target.elements.amount.value;

  e.target.reset();

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      delay += step;
  }
})


function createPromise(position, delay) {
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve ({position, delay});// Fulfill
  } else {
    reject ({position, delay});// Reject
  }
  }, delay); 
});
}


