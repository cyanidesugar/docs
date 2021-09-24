---
title: "Custom Packet"
num: 4
---
Sends a custom packet to the OBS websocket in JSON format.\
All the possible requests are documented in [OBS websocket protocol reference](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md).\

1. Use `"message-id": "6666"` to get a pop up message on your screen every time you execute the command (useful for troubleshooting). 
2.  Use `"message-id": "1"` to hide the pop up message. 

Use [JSON string validator](https://jsonlint.com/) if you want to make sure your formatting is correct.

| Box Name | Type | Description | 
|-------|--------|--------
|String	|JSON String|	JSON string to send to OBS Websocket. 
{:class='table table-primary'}

**Custom packet examples**

| JSON String | Description | 
|-------|--------|
|{"request-type":"GetVersion","message-id":"6666"}|Current OBS websocket version, status and available requests|
|{"request-type":"GetStats","message-id":"6666"}|OBS stats (similar info as provided in OBS's stats window)|
|{"request-type":"SetCurrentProfile","profile-name":"YOURPROFILENAME","message-id":"1"} | changes active profile in OBS|
|{"request-type":"StartRecording","message-id":"1"}| Starts recording|
|{"request-type":"StartReplayBuffer","message-id":"1"} | Starts replay buffer |
|{"request-type":"GetSceneList","message-id":"6666"} | Retrieves a list of scenes in the current profile |
|{"request-type":"GetSceneItemProperties","scene-name":"YOURSCENENAME", "item":"YOURSOURCENAME", "message-id":"6666"} | Retrieves source item properties (position, rotation, scale etc.)|
|{"request-type":"GetSourceFilterInfo", "sourceName":"YOURSOURCENAME", "filterName":"YOURFILTERNAME", "message-id":"6666"} | Retrieves current source filter settings|
{:class='table table-secondary w-auto table-responsive table-hover text-break' }








