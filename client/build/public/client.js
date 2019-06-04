const publicKey = 'BJq1o9fZXpsyZkEDS54m0-UTYEp0Ab4leKHfo0LmODAAitL_YBIaxLykQypltOmEc6OxJIvQwv3VNdy98yjyr6M';

//is service worker available to the browser
if('serviceWorker' in navigator){
    // setTimeout(() => {
    //     send().catch(err => console.log(err));
    // }, (5000));
   send2();
}

function send2(){
    navigator.serviceWorker.register('/service-worker.js', {scope: "/"})
    .then(
    function (reg) {
        var serviceWorker;
        if (reg.installing) {
            serviceWorker = reg.installing;
            // console.log('Service worker installing');
        } else if (reg.waiting) {
            serviceWorker = reg.waiting;
            // console.log('Service worker installed & waiting');
        } else if (reg.active) {
            serviceWorker = reg.active;
            // console.log('Service worker active');
        }

        if (serviceWorker) {
            console.log("sw current state", serviceWorker.state);
            if (serviceWorker.state == "activated") {
                //If push subscription wasnt done yet have to do here
                console.log("sw already activated - Do watever needed here");
                reg.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUint8Array(publicKey)
                }).then(function(subscription){
                    console.log("Subscribed!");
                    document.addEventListener("pushbaby", function(e) {
                        fetch('/push', {
                            method: 'POST',
                            body: JSON.stringify(
                                {
                                    subscription:subscription,
                                    title: e.detail.title,
                                    message: e.detail.message
                                }),
                            headers: {
                                'content-type': 'application/json'
                            }
                        });
                      });


                }).catch(function(error){
                    console.log(error);
                });

            }
            serviceWorker.addEventListener("statechange", function(e) {
                console.log("sw statechange : ", e.target.state);
                if (e.target.state === "activated") {
                    // use pushManger for subscribing here.
                    console.log("Just now activated. now we can subscribe for push notification")
                    //subscribeForPushNotification(reg);
                }
            });
        }
    },
    function (err) {
        console.error('unsuccessful registration with ', workerFileName, err);
    }
);
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }