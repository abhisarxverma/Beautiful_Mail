

const templates = {
    template1: `
<html>
<body style=" padding: 20px;">
<div style="background-color:#0096FF; color:#ffffff; display:inline-block; width:auto; padding:12px 16px; border-radius:16px; max-width:60%; font-size:17px; line-height:1.4; margin-bottom:10px; border-top-left-radius:0; text-align:left;">
    <p>Hey! This is a message from your friend.</p>
</div>
</body>
</html>
    `,
    template2: `
    <html>
    <meta charset="UTF-8">
    <body>
<div style="max-width:600px;margin:20px auto;padding:25px;border-radius:18px;background:#fff0f5;box-shadow:0 4px 16px rgba(0,0,0,0.1);font-family:'Segoe UI',sans-serif;text-align:center;">
  <h2 style="margin:0 0 15px;font-size:24px;color:#d63384;">&#x1F388 You're Invited! &#127881</h2>
  <p style="font-size:16px;color:#333;margin:0 0 10px;">Hey [Friend's Name],</p>
  <p style="font-size:16px;color:#333;margin:0 0 10px;">We're throwing a little bash this <strong>Saturday night</strong> at my place &#128131</p>
  <p style="font-size:16px;color:#333;margin:0 0 15px;">Change any text you want &#x1F440</p>

  <a href="mailto:someone@example.com?subject=I%27m%20Coming%20to%20the%20Party!&body=Yesss!%20Can%27t%20wait%20for%20the%20party!%20Count%20me%20in!" 
     style="display:inline-block;padding:12px 20px;margin:5px;background:#ff4081;color:#fff;text-decoration:none;border-radius:8px;font-weight:bold;">
     I will Come &#127882
  </a>
  <a href="mailto:someone@example.com?subject=Can%27t%20Make%20It%20&#128532&body=Ahh%2C%20sadly%20I%20won%27t%20be%20able%20to%20join%20this%20time.%20Hope%20it%20rocks!" 
     style="display:inline-block;padding:12px 20px;margin:5px;background:#ffc107;color:#000;text-decoration:none;border-radius:8px;font-weight:bold;">
     Can not Come &#128532
  </a>
</div>

</body>
</html>
    `,
    template3: `
    <html>
    <body>
<div style="max-width:600px;margin:20px auto;padding:25px;border-radius:18px;background:#e8f5e9;box-shadow:0 4px 16px rgba(0,0,0,0.1);font-family:'Segoe UI',sans-serif;text-align:center;">
  <h2 style="margin:0 0 15px;font-size:24px;color:#43a047;">&#128154; Thank You!</h2>
  <p style="font-size:16px;color:#333;margin:0 0 10px;">Hey [Name],</p>
  <p style="font-size:16px;color:#333;margin:0 0 10px;">That thing you did? It meant the world &#129402</p>
  <p style="font-size:16px;color:#333;margin:0 0 15px;">Just wanted to say &#8210 you rock. Thank you &#128588</p>
  <p style="font-size:16px;color:#333;margin:0 0 15px;">Change any text you want.</p>

  <a href="mailto:someone@example.com?subject=You%27re%20Welcome!&body=Awww%2C%20you%27re%20so%20kind%21%20Glad%20I%20could%20help%20&#128155" 
     style="display:inline-block;padding:12px 20px;margin:5px;background:#66bb6a;color:#fff;text-decoration:none;border-radius:8px;font-weight:bold;">
     You are Welcome &#128526
  </a>
</div>
</body>
</html>
`,
    template4: `
    <html>
    <body>
<div style="max-width:600px;margin:20px auto;padding:25px;border-radius:18px;background:#fffde7;box-shadow:0 4px 16px rgba(0,0,0,0.1);font-family:'Segoe UI',sans-serif;text-align:center;">
  <h2 style="margin:0 0 15px;font-size:24px;color:#fbc02d;">&#128337 Just a Nudge</h2>
  <p style="font-size:16px;color:#333;margin:0 0 10px;">Hey [Name],</p>
  <p style="font-size:16px;color:#333;margin:0 0 10px;">Remember that thing we talked about? &#128516</p>
  <p style="font-size:16px;color:#333;margin:0 0 15px;">Just dropping a soft reminder &#128064</p>
  <p style="font-size:16px;color:#333;margin:0 0 15px;">Change any text you want.</p>

  <a href="mailto:someone@example.com?subject=Got%20it!&body=Thanks%20for%20the%20reminder!%20I%27ll%20get%20to%20it%20today." 
     style="display:inline-block;padding:12px 20px;margin:5px;background:#fdd835;color:#000;text-decoration:none;border-radius:8px;font-weight:bold;">
     Got it! &#10003
  </a>
</div>

</body>
</html>
`,
template5: `
<html>
<body>
<div style="max-width:600px;margin:20px auto;padding:25px;border-radius:18px;background:#e0f7fa;box-shadow:0 4px 16px rgba(0,0,0,0.1);font-family:'Segoe UI',sans-serif;text-align:center;">
  <h2 style="margin:0 0 15px;font-size:24px;color:#00695c;">&#128075 Just Checking In!</h2>
  <p style="font-size:16px;color:#333;margin:0 0 10px;">Hey [Friend's Name],</p>
  <p style="font-size:16px;color:#333;margin:0 0 10px;">It is been a while! Hope life is treating you well &#x2609</p>
  <p style="font-size:16px;color:#333;margin:0 0 15px;">Wanna catch up soon? Lemme know how you have been! &#128173</p>
  <p style="font-size:16px;color:#333;margin:0 0 15px;">Change any text you want.</p>

  <a href="mailto:someone@example.com?subject=Hey%20There%20&#128075&body=I%27m%20doing%20great!%20Let%27s%20catch%20up%20soon." 
     style="display:inline-block;padding:12px 20px;margin:5px;background:#00bcd4;color:#fff;text-decoration:none;border-radius:8px;font-weight:bold;">
     Reply Now &#128173
  </a>
</div>

</html>
<body>
`,
template6: `
<html>
<body>
<div style="max-width:600px;margin:20px auto;padding:25px;border-radius:18px;background:#f3e5f5;box-shadow:0 4px 16px rgba(0,0,0,0.1);font-family:'Segoe UI',sans-serif;text-align:center;">
  <h2 style="margin:0 0 15px;font-size:24px;color:#8e24aa;">&#128517 Need a Quick Favor</h2>
  <p style="font-size:16px;color:#333;margin:0 0 10px;">Yo [Name],</p>
  <p style="font-size:16px;color:#333;margin:0 0 10px;">Small ask &#8210 could you help me with <strong>[this one thing]</strong>? &#x1F648</p>
  <p style="font-size:16px;color:#333;margin:0 0 15px;">It will take like... 2 mins, tops. Pinky promise &#129310</p>
  <p style="font-size:16px;color:#333;margin:0 0 15px;">Change any text you want.</p>

  <a href="mailto:someone@example.com?subject=I%20Got%20You%20&#128170&body=Sure%2C%20I%27ll%20do%20it%20ASAP.%20No%20worries%20at%20all!" 
     style="display:inline-block;padding:12px 20px;margin:5px;background:#ba68c8;color:#fff;text-decoration:none;border-radius:8px;font-weight:bold;">
     I Got You &#128170
  </a>
</div>

</body>
</html>
`,
template7: `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 400px; margin: auto; background: white; border-radius: 10px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); padding: 20px;">
        <h2 style="color: #007bff; margin-bottom: 10px;">&#x2661 A Special Message for You!</h2>
        <div style="border: 2px solid #007bff; padding: 15px; border-radius: 8px; background-color: #e3f2fd;">
            <p style="font-size: 18px; font-weight: bold; color: #333;">
                Change any text you want.
            </p>
        </div>
        <p style="font-size: 14px; color: #777; margin-top: 15px;">
            Sent with love &#x1F499 | Stay positive & keep moving forward &#128640
        </p>
    </div>
</body>
</html>

`,
template8 : `
<html>
  <body style="font-family: Helvetica, Arial, sans-serif; background:#f0f0f0; padding: 40px;">
    <div style="
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      overflow: hidden;
      border: 3px solid black;
    ">
      <!-- Header -->
      <div style="
        display: flex;
        align-items: center;
        padding: 20px;
        background:rgb(140, 140, 140);
      ">
        <img src="https://cdn.pixabay.com/photo/2016/08/20/05/51/avatar-1606939_1280.png" alt="Profile" style="
          border-radius: 50%;
          width: 48px;
          height: 48px;
          margin-right: 15px;
        "/>
        <div>
          <p style="margin: 0; font-weight: bold; font-size: 18px; color: white;">Your Name</p>
          <p style="margin: 0; font-size: 14px; color: lightgray;">Your College Friend &#x2661</p>
        </div>
      </div>

      <!-- Message Body -->
      <div style="padding: 24px 20px; font-size: 16px; color: #333; line-height: 1.6;">
        <p>Hey friend &#128075,</p>
        <p>Hope you're doing well! I just wanted to send you a little note and say how awesome you are. &#9829</p>
        <p>Let's kick off a new creative journey together, maybe a fun note-taking app, or just something cool we've always dreamed of building.</p>
        <p>Let me know what you think &#128101</p>
      </div>
    </div>
  </body>
</html>

`
};

fetch("./templates.json")
    .then(response => response.json())
    .then(more_templates => {
        Object.assign(templates, more_templates);
    })
    .catch(error => console.error("Error loading templates:", error));

document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
        const html = templates[img.id];
        chrome.runtime.sendMessage({ action: "openGmailWithTemplate", templateHTML: html });
    });
});

document.querySelectorAll(".component").forEach(comp => {
    comp.addEventListener("click", () => {
        const html = templates[comp.id];
        chrome.runtime.sendMessage({ action: "openGmailWithTemplate", templateHTML: html });
    });
});