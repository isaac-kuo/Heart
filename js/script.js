 // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  $(document).ready(function(){
    const $likecount = $('#likecount');
    const $likebutten = $('#likebutten');

    

    firebase.initializeApp({
      apiKey: "AIzaSyAJdokdboduz4XoloLlrv-9969XajiJ8g8",
      authDomain: "testtt-65705.firebaseapp.com",
      projectId: "testtt-65705",
      storageBucket: "testtt-65705.appspot.com",
      messagingSenderId: "730807158341",
      appId: "1:730807158341:web:670b5b45ecfef0f74dc52c"
    });

  // Initialize Firebase
  let db=firebase.firestore();
  let usersRef=db.collection("user").doc("116");
  let like1=0;

  usersRef.get().then(function (doc) {

    like1 = doc.data().like;

    $likebutten.click(function () {
        like1++
        db.collection("user").doc("116").update({
            "like": like1,
          });
        $likecount.html(`你是第${like1}位愛我的人~`)
        $likebutten.addClass("none")

    })
  
  })

})