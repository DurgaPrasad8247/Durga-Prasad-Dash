const subscribeBtn = document.getElementById('subscribeBtn');
//const notification = document.getElementById('notification');
let isSubscribed = true;

subscribeBtn.addEventListener('click', () => {
  if (isSubscribed) {
  //  notification.style.display = 'none';
    subscribeBtn.innerText = 'Subscribe';
    isSubscribed =false;
  } else {
    //notification.style.display = 'block';
    subscribeBtn.innerText = 'Unsubscribe';
    isSubscribed = true;
  }
});
