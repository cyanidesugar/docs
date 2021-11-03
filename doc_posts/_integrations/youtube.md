---
layout: default
title: YouTube Live
menu: Integrations
num: 3
type: fullpage
permalink: /integrations/youtube
---



{% include alert.html text="YouTube Live is a <strong>completely new free integration</strong> that we have been working on hard to bring to you! <br> Please note it's still in <strong>alpha phase</strong> and there might be bugs. <br> Feel free to report any issues in <i>#bug-report</i> channel in our official <a href='https://discord.gg/dXez8Zh'><strong>LioranBoard Discord server.</strong></a>" type="info" %} 

#### Introduction
YouTube Live is LioranBoard integration made by [Christina K](https://github.com/christinna9031?tab=repositories).\
Unlike Twitch, YouTube API is very limited and cannot be freely used without going through a long approval process. It has taken several months for YouTube to approve the integration and provide me with additional quota to be able to release it for everyone.  

Please consider [donating](https://lioranboard.ca/donate) or supporting me on [Patreon](https://www.patreon.com/Christinna?fan_landing=true), so I can keep further developing and maintaining the integration. Thank you!  

#### Download and install <span class="badge bg-warning text-dark">Only available to select beta testers now</span>

Proceed to the link below to download the integration.

<iframe frameborder="0" src="https://itch.io/embed/1206259?border_width=2&bg_color=0b1a2d&fg_color=ffffff&link_color=790158&border_color=284c7b" width="554" height="169"><a href="#">LioranBoard YouTube Live</a></iframe><br>

Once you have downloaded the zip file, extract it. You will see the following files: 
- `tsl_youtube.html` - this is your new Transmitter to use with YouTube Live.\
  Read [How to Run Transmitter]({{ "/transmitter#howtoruntransmitter" | relative_url }}) if this is your first time using LioranBoard
  - if you wish to use YouTube Live with your original Transmitter (i.e. you stream both on Twitch and YouTube), you can simply install the integration without replacing the Transmitter at all
- `youtube_live.lbe` - this is your YouTube Live integration file. Please follow our guide on [How to install an integration](https://lioranboard.ca/extensions/install). Make sure you select `transmitter_youtube.html` (or your original Transmitter file) to install it in. **Don't forget to completely restart (close and reopen) LioranBoard** as the integration installs some OBS triggers that only update after you relaunch LioranBoard.

{% include alert.html text="<code>tsl_youtube.html</code> does not contain any Twitch related integrations. If you wish to regularly switch between streaming on YouTube Live and Twitch, feel free to use the original Transmitter that comes with LioranBoard." type="info" %} 

#### Link your account
You must [Authorize the integration]({{ "integrations/youtube/auth" | relative_url }}) to allow LioranBoard access to your YouTube Live account and to retrieve your refresh token. Please follow all the instructions in the link provided.

{% include alert.html text="Keep your refresh token safe! If you accidentally share it with someone, you can <a href='https://myaccount.google.com/permissions?continue=https%3A%2F%2Fmyaccount.google.com%2Fsecurity'>revoke LioranBoard's access</a> in your Google account and <a href='{{ 'integrations/youtube/auth' | relative_url }}'>authorize it</a> again." type="warning" %} 

#### Test your connection

After linking your account and editing the INIT button to provide your refresh token, reload your Transmitter. The status (both in your Transmitter and your Stream Deck) should change from `Disconnected` to blue `Ready`. This means your refresh token is correct and LioranBoard is ready to start listening to events once your stream goes live.\
Once the status is Ready, the following commands become available: **List Categories, Get My Channel Stats, Get Member Info, Get Subscriber Status**. 

#### Going Live on YouTube

**LIVE INIT button**

This button should be automatically triggered when LioranBoard detects your stream is live.\
**Make sure your OBS is running and connected to LioranBoard, as well as your Transmitter.**\
Once the button is triggered, a few things should happen:
- YouTube Live Status should change to `Listening` (both in your Transmitter and Stream Deck).
- LioranBoard should start listening to all the events listed under triggers in your Stream Deck: **Subscribers, Members, Milestones, Super chat, Super Stickers, Chat Messages, Live Chat Ended**.
- The following commands should now be available to you: **Send Chat Message, Ban/Unban user, Update Broadcast, Get My Broadcast Stats**

{% include alert.html text="If the LIVE INIT button does not automatically trigger and your status does not change from Ready to Listening, you can manually press the button yourself (after you went live)" type="info" %} 

#### YouTube Live Commands
All YouTube Live commands are accessible from **Send to Extension command** by selecting the desired YouTube Live command from the Extension dropdown menu.

{% include alert.html text="Please try to be reasonable with how much you use the following commands. There's a global quota applied to all users as well as an individual quota. Avoid making buttons that would spam a command every few seconds, as it might temporarily block you from using the integration (and listening for events) if you run out of your own user quota." type="warning" %} 

| Extension command name| Description | 
|-------|--------|
| [Chat Message](#sendchatmessage) | Sends a message to your current broadcast's chat under your linked account's name.|
| [Ban or Unban User](#banorunbanauser) | Bans or timeouts a user. Can unban them as well.|
| [Update Broadcast](#updatebroadcast) | Updates your current broadcast's title, description or category via chat trigger or by manual input. |
| [Get Categories](#listcategories) | Gets all available categories for Update Broadcast command.|
| [Get My Channel Stats](#getmychannelstats) | Retrieves your channel stats, such as title, ID, viewcount, sub count, video count.|
|[Get My Broadcast Stats](#getmybroadcaststats)| Retrieves your current broadcast's stats, such as title, duration, views, likes, dislikes and current amount of viewers.|
|[Get Member Info](#getmemberinfo) | Retrieves information about a member (same as Twitch subscriber) of your channel.|
|[Get Subscriber Status](#getsubscriberstatus) | Checks whether your viewer is subscribed (same as Twitch follower) to your channel.|
{:class='table table-primary w-auto table-hover text-break' }
  

##### Send Chat Message
`Command: Send to Extension - YouTube Live Chat Message`\
Sends a message to your current broadcast's chat under your linked account's name. Broadcast must be live and connection status must be `listening`. Currently does not support custom emoji.\
Please try to be reasonable with the amount of messages you send, as there's a quota limit (both for each streamer and a global quota that you share with everyone) and especially chat messages are not 'cheap' to send. If you exceed your own quota by spamming too many messages in a short period of time, you will be temporarily blocked from using the integration (as well as listening to events) until your quota is replenished again.


| Box Name | Type | Description | 
|-------|--------|--------
|message|String|Message to send|
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break' }

##### Ban or Unban a User 
`Command: Send to Extension - YouTube Live Ban or Unban User`\
Ban or unban a viewer. Broadcast must be live and connection status must be `listening`.\
Provide either their [channel ID](https://commentpicker.com/youtube-channel-id.php) or chat display name.\
You can only unban a permanently banned user. If you want to remove a timeout, select `temporary ban` with `0 duration` (which will override the original timeout).

{% include alert.html text="If the viewer does not talk during your stream, there is no way for LioranBoard to associate their display name with their channel ID. In that case you must provide their channel ID." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|displayName|String|Viewer's chat display name. Do not provide channel id if you already provided a display name.|
|channelid | string | Viewer's [channel ID](https://commentpicker.com/youtube-channel-id.php). Do not provide a display name if you already provided a channel ID.
|type|Dropdown|Whether you want to ban or unban the user. You can only unban a permanently banned user. 
|permanent|Boolean| Whether you want your ban to be permanent or temporary (=timeout).
|duration|Int|Duration (if you selected temporary ban) in minutes. Use 0 if you want to un-timeout a user. 
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break' }

##### Update Broadcast
`Command: Send to Extension - YouTube Live Update Broadcast`\
Update your broadcast's title, description or category. Broadcast must be live and connection status must be `listening`.
1. **Use a chat command**\
You or your moderators can use the following command to update your broadcast: `!update title XXX category CATEGORYID description XXX`. The order of the keywords (title, category, description) must stay the same, however you can only include relevant keywords. I.e. to update only title and category, use `!update title Playing Elden Ring category 5`, or to just update the category, use `!update category 5`.\
If you're using a chat command, do not edit anything in the button.
2. **Manually filled out the boxes**\
You can manually fill out the Send to integration boxes (title, description, category) if you wish to do so.  

List of all available categories can be found in your Transmitter in YouTube Live tab or by pressing the **List Categories** button. No global list is provided, as it might be different for each country. 

| Box Name | Type | Description | 
|-------|--------|--------
|title|String|new title of your broadcast
|description|String|new description of your broadcast|
|categoryid|Int|new category id for your broadcast|
|streamid|String|Automatically filled out, do not touch
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break' }

##### List Categories
`Command: Send to Extension - YouTube Live Get Categories`\
Retrieve a list of all available categories. Also accessible from your Transmitter in your YouTube Live tab. Connection status must be `ready`.\
This is needed if you wish to change the category when using Update Broadcast button.\
The integration will return a stack with the name you specify containing all categories in this format: `Category Name:Category ID`. 

| Box Name | Type | Description | 
|-------|--------|--------
|stackName|String|Name of the stack to save the categories into|
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break' }

##### Get My Channel Stats
`Command: Send to Extension - YouTube Live Get My Channel Stats`\
Retrieves your channel stats. Also accessible from your Transmitter in your YouTube Live tab. Connection status must be `ready`.\
Stats are refreshed once per Transmitter reload. This button can be spammed as it does not make any API calls.\
All stats will be saved in the stack name you specified (if successfully retrieved, else the stack will be empty).  

**Stats retrieved:**
- title: `[0]stackName`
- channel ID: `[1]stackName`
- view count: `[2]stackName`
- subscriber count: `[3]stackName`
- video count: `[4]stackName`

##### Get My Broadcast Stats
`Command: Send to Extension - YouTube Live Get My Broadcast Stats`\
Retrieves stats for your current broadcast. Refreshed once per minute. Broadcast must be live and connection status must be `listening`.
Stats are refreshed once every minute. This button can be spammed as it does not make any API calls.\
All stats will be saved in the stack name you specified (if successfully retrieved, else the stack will be empty).  

**Stats retrieved:**
- title: `[0]stackName`
- duration (hours): `[1]stackName`
- view count: `[2]stackName`
- like count: `[3]stackName`
- dislike count: `[4]stackName`
- concurrent viewers: `[5]stackName`

| Box Name | Type | Description | 
|-------|--------|--------
|stackName|String|Name of the stack to save the stats into|
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break' }

##### Get Member Info
`Command: Send to Extension - YouTube Live Get Member Info`\
Retrieves information about a member (same as Twitch subscriber) of your channel. Connection status must be `ready`.\
Provide either their [channel ID](https://commentpicker.com/youtube-channel-id.php) or chat display name.

{% include alert.html text="If the member does not talk during your stream, there is no way for LioranBoard to associate their display name with their channel ID. In that case you must provide their channel ID." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|displayName|String|Viewer's chat display name. Do not provide channel id if you already provided a display name.|
|channelid | string | Viewer's [channel ID](https://commentpicker.com/youtube-channel-id.php). Do not provide a display name if you already provided a channel ID.
|stackName|String|Name of the stack to save the member info into|
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break' }

**Member info retrieved:**
- display name: `[0]stackName`
- channel ID: `[1]stackName`
- channel URL: `[2]stackName`
- profile image URL: `[3]stackName`
- highest member level: `[4]stackName`
- highest member level display name: `[5]stackName`
- membership duration in months: `[6]stackName`

##### Get Subscriber Status
`Command: Send to Extension - YouTube Live Check Sub Status`\
Checks whether your viewer is subscribed to (follows) your channel. Connection status must be `ready`.\
Provide either their [channel ID](https://commentpicker.com/youtube-channel-id.php) or chat display name.\

{% include alert.html text="If the member does not talk during your stream, there is no way for LioranBoard to associate their display name with their channel ID. In that case you must provide their channel ID." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|displayName|String|Viewer's chat display name. Do not provide channel id if you already provided a display name.|
|channelid | string | Viewer's [channel ID](https://commentpicker.com/youtube-channel-id.php). Do not provide a display name if you already provided a channel ID.
|variable|String|Variable name to save the result into. Will be 'true' if the user is a subscriber and 'false' if they're not.|
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break' }

#### YouTube Live Triggers
Once your status changes to `Listening`, LioranBoard will automatically start listening to all the following events.

{% include alert.html text="The frequency at which the events are polled for depends on how many current viewers your stream has: 10 seconds for less than 3 viewers, 5 seconds for less than 10 viewers and 2 seconds (or whatever YouTube API dictates) for 10+ viewers" type="info" %} 

| Event Name | Description| Extension Trigger |
|-------|--------|--------|
| New Subscriber | Triggers for all new subscribers (same as followers on Twitch) to your channel. | `YT Live Subscriber`|
| New Member | Triggers whenever you get a [new member](https://support.google.com/youtube/answer/7636690?hl=en) (same as subscribers on Twitch). |`YT Live Member`|
| New Milestone|Triggers whenever your member reaches a new milestone.| `YT Live Member Milestone`|
|New Super Chat|Triggers for all new [super chat](https://support.google.com/youtube/answer/9277801?hl=en) events.| `YT Live Super Chat` |
|New Super Sticker|Triggers for all new [super sticker ](https://support.google.com/youtube/answer/9277801?hl=en) events.|`YT Live Super Sticker`|
|New Chat Message |Triggers for all chat messages. You can also use [wild cards](faq/receiver#wildcards) to filter messages. | `Regular Twitch Chat Message trigger`|
|Live Chat Ended |Triggers a few minutes after your broadcast goes offline. | `YT Live Chat Ended`|
{:class='table table-primary w-auto table-hover data-toggle='table' text-break' }

 



#### Terms of Service 
By using the LioranBoard Youtube Live (“Service) integration created by Christina K. ( “We”, “Us”, “Our" ), you are agreeing to be bound by the following terms and conditions ("Terms of Service").<br/>

If the owner makes material changes to these Terms, we will post a notice in the official LioranBoard Discord server and on our site before the changes are effective. Any new features that augment or enhance the current Service shall be subject to the Terms of Service. Continued use of the Service after any such changes shall constitute your consent to such changes.<br/>

Violation of any of the terms below will result in the termination of your Account. You agree to use the Service at your own risk.

1. You must be 13 years or older to use this Service.
2. You are responsible for maintaining the security of your account and specifically your refresh token. We cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.<br/>

Users may access the integration via LioranBoard. Any use of the integration is bound by these Terms of Service, [Youtube’s Terms of service](https://www.youtube.com/t/terms), plus the following specific terms:

1. You expressly understand and agree that we shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses, resulting from your use of the integration.
2. Abuse or excessively frequent requests to Youtube Live API by modifying the integration code for your own use may result in the temporary or permanent suspension of your account's access to the integration.
3. We reserve the right at any time to modify or discontinue, temporarily or permanently, your access to the integration (or any part thereof) with or without notice.
4. You may not duplicate, copy, or reuse any portion of the integration code or concepts without express written permission from us.
Your use of the Service is at your sole risk. The service is provided on an "as is" and "as available" basis.
5. If your quota usage significantly exceeds the average quota usage (as determined solely by us) of other LioranBoard users, we reserve the right to throttle your API requests until you can reduce your quota consumption.
6. We do not warrant that (i) the service will meet your specific requirements, (ii) the service will be uninterrupted, timely, secure, or error-free, (iii) the results that may be obtained from the use of the service will be accurate or reliable, (iv) the quality of any products, services, information, or other material purchased or obtained by you through the service will meet your expectations, and (v) any errors in the Service will be corrected.
7. You expressly understand and agree that we shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses.
The failure to exercise or enforce any right or provision of the Terms of Service shall not constitute a waiver of such right or provision.
8. Questions about the Terms of Service should be sent to <a href='mailto&#58;ch&#114;is%74&#105;%6En%61&#37;2E&#107;r&#64;gma%6&#57;l&#46;co&#109;'>chri&#115;t&#105;n&#110;&#97;&#46;&#107;r&#64;g&#109;ail&#46;com</a>.

#### Privacy Policy
LioranBoard and its developer take your privacy very seriously. Any information you provide to us during the [Authorization process](https://lioranboard.ca/docs/integrations/youtube/auth) will be only used to generate your YouTube Live credentials via our secure AWS API acting as a middleman to access the integration.\
LioranBoard does not store or share your YouTube Live credentials. Your credentials are only ever stored locally on your computer in LioranBoard in order to use the integration.\
Any other information regarding your YouTube account is only ever accesssed and stored locally on your computer. Accessing any data via YouTube API is done via Transmitter, which is a local HTML file that relays the data via a local websocket connection to LioranBoard, which also only ever runs locally.\
Please see [Google Privacy Policy](https://policies.google.com/privacy), which services LioranBoard uses.