
// chrome.action.onClicked.addListener((tab) => {
//   chrome.tabs.create({
//     url: chrome.runtime.getURL("popup.html")
//   });
// });


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openGmailWithTemplate") {
    chrome.tabs.create({ url: "https://mail.google.com/mail/u/0/#inbox?compose=new" }, function (tab) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: fillGmailCompose,
        args: [request.templateHTML]
      }).catch(error => console.log(error));
    });
  }
});

function fillGmailCompose(html) {
  const interval = setInterval(() => {
    const composeBox = document.querySelector("div[aria-label='Message Body']");
    if (composeBox) {
      composeBox.innerHTML = html;
      clearInterval(interval);
    }
  }, 500);
}
