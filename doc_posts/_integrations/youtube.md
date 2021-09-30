---
layout: default
title: YouTube Live
menu: Integrations
num: 3
type: fullpage
permalink: /integrations/youtube
---

{% include alert.html text="YouTube Live is a <strong>completely new integration</strong> that we have been working on hard to bring to you! <br> Please note it's still in <strong>alpha phase</strong> and there might be bugs. <br> Feel free to report any issues in <i>#bug-report</i> channel in our official <a href='https://discord.gg/dXez8Zh'><strong>LioranBoard Discord server.</strong></a>" type="info" %} 

#### Download and install
LioranBoard YouTube Live is not a native integration in LioranBoard, but rather an extension made by [Christina K](https://github.com/christinna9031?tab=repositories).\
It can be downloaded from Itch.io, which is a platform for developers to share their indie games and tools.

<iframe frameborder="0" src="https://itch.io/embed/1206259?border_width=2&bg_color=0b1a2d&fg_color=ffffff&link_color=790158&border_color=284c7b" width="554" height="169"><a href="https://christinak.itch.io/lb-eventsub-webhook">LioranBoard YouTube Live</a></iframe><br>

Once you have downloaded the zip file, extract it. You will see the following files: 
- `transmitter_youtube.html` - this is your new Transmitter to use with YouTube Live.\
  Read [How to Run Transmitter]() if this is your first time using LioranBoard
- `youtube_live.lbe` - this is your YouTube Live extension file. Please follow our guide on [How to install an extension](). Make sure you select `transmitter_youtube.html` to install it in.

{% include alert.html text="<code>transmitter_youtube.html</code> does not contain any Twitch related integrations. If you wish to regularly switch between streaming on YouTube Live and Twitch, add both Transmitters to your OBS dock and swap between them." type="warning" %} 

#### Link your account
You must [Authorize the extension]({{ "integrations/youtube/auth" | relative_url }}) to get access to your YouTube Live account. 

#### Setup your INIT button
1. Go to your YouTube Live premade deck in LioranBoard Receiver.
2. Right click on the red INIT button - Edit Commands.
3. If you completed [Link your account](#linkyouraccount) step, you should have refresh token and Itch key boxes filled out. If they're empty, please make sure you [Link your account](#linkyouraccount) first.
4. Fill out Stream Element credentials (OPTIONAL)
 - by default the extension will retrieve your chat message every 10-20s. If you wish to poll for new chat messages every 1-2s instead, connect your YouTube account to Stream Elements. You can then find your credentials at your [Stream Elements Dashboard](https://streamelements.com/dashboard/account/channels).
 - `SE_accountID` - your Stream Elements account ID 
 - `SE_token` - your Stream Elements overlay token (toggle 'Show Secrets' to reveal the token) 

#### Get familiar with YouTube commands and triggers

{% include alert.html text="The following commands can be found under <strong>Send to extension</strong> command" type="info" %}

##### YouTube Live Listener
This button automatically triggers as soon as LioranBoard detects your stream is live.\
By default it starts listening to new subscribers, super chat events and chat messages.\
Chat polling mode: 
- YouTube - polls for new chat messages every 10-20 seconds
- Stream Elements - polls for new chat messages every 1-2 seconds\
  *This mode is available only if you have set up your SE credentials in the INIT button* 


#### Terms of Service 
By using the LioranBoard Youtube Live (“Service) extension created by Christina K. ( “We”, “Us”, “Our" ), you are agreeing to be bound by the following terms and conditions ("Terms of Service").<br/>

If the owner makes material changes to these Terms, we will post a notice in the official LioranBoard Discord server and on our site before the changes are effective. Any new features that augment or enhance the current Service shall be subject to the Terms of Service. Continued use of the Service after any such changes shall constitute your consent to such changes.<br/>

Violation of any of the terms below will result in the termination of your Account. You agree to use the Service at your own risk.

1. You must be 13 years or older to use this Service.
2. You are responsible for maintaining the security of your account and specifically your Itch key (received upon purchase) and refresh token. We cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.<br/>

Users may access the extension via LioranBoard. Any use of the extension is bound by these Terms of Service, [Youtube’s Terms of service](https://www.youtube.com/t/terms), plus the following specific terms:

1. You expressly understand and agree that we shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses, resulting from your use of the extension.
2. Abuse or excessively frequent requests to Youtube Live API by modifying the extension code for your own use may result in the temporary or permanent suspension of your account's access to the extension.
3. We reserve the right at any time to modify or discontinue, temporarily or permanently, your access to the extension (or any part thereof) with or without notice.
4. You may not duplicate, copy, or reuse any portion of the extension code or concepts without express written permission from us.
Your use of the Service is at your sole risk. The service is provided on an "as is" and "as available" basis.
5. If your bandwidth usage significantly exceeds the average bandwidth usage (as determined solely by us) of other LioranBoard users, we reserve the right to throttle your API requests until you can reduce your bandwidth consumption.
6. We do not warrant that (i) the service will meet your specific requirements, (ii) the service will be uninterrupted, timely, secure, or error-free, (iii) the results that may be obtained from the use of the service will be accurate or reliable, (iv) the quality of any products, services, information, or other material purchased or obtained by you through the service will meet your expectations, and (v) any errors in the Service will be corrected.
7. You expressly understand and agree that we shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses.
The failure to exercise or enforce any right or provision of the Terms of Service shall not constitute a waiver of such right or provision.
8. Questions about the Terms of Service should be sent to <a href='mailto&#58;ch&#114;is%74&#105;%6En%61&#37;2E&#107;r&#64;gma%6&#57;l&#46;co&#109;'>chri&#115;t&#105;n&#110;&#97;&#46;&#107;r&#64;g&#109;ail&#46;com</a>.

#### Privacy Policy
LioranBoard and its developer take your privacy very seriously. Any information you provide to us during the [Authorization process](https://lioranboard.ca/docs/integrations/youtube/auth) will be only used to generate your YouTube Live credentials via our Amazon REST API acting as a middleman to access the extension.\
LioranBoard does not store or share your YouTube Live credentials. Your credentials are only ever stored locally on your computer in LioranBoard in order to use the extension.\
Any other information regarding your YouTube account is only ever accesssed and stored locally on your computer. Accessing any data via YouTube API is done via Transmitter, which is a local HTML file that relays the data via a local websocket connection to LioranBoard, which also only ever runs locally.\ 
Please see [Google Privacy Policy](https://policies.google.com/privacy), which services LioranBoard uses.


<!---
**Why is YouTube Live not completely free like other integrations**\
YouTube Live has a very strict policy when it comes to allowing 3rd party applications to connect and control your stream.\
There are daily **quota limits** applied to all users using the extension that took a long time to negotiate with YouTube.\
We want for everyone to use the integration in a way that allows us to make sure there is enough daily quota for all our users.\
In the future the integration might become free if YouTube provides us with a higher quota.
-->
