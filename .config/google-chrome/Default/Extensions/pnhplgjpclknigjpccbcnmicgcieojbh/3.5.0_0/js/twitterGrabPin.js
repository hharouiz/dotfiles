function getAuthPin(){var b=/^\d+$/;var a=$.trim($("#oauth_pin code").text());b.test(a)||(a=(a=$("#oauth_pin").text().match(/\d+/))&&a[0]);b.test(a)||(a=null);chrome.runtime.sendMessage({name:"twitterGrabPin",details:{pin:a}})}getAuthPin();