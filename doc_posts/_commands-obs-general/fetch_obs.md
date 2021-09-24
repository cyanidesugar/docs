---
title: "Fetch OBS Data"
num: 3
---
Allows you to request data from OBS websocket and save it in a variable.\
All the possible requests are documented in [OBS websocket protocol reference](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md).\
The requested value will not be saved immediately, you must give you other commands a delay of 100-500ms to process the request.\
If the requested value is inside another object already, you can access it with a simple dot-notation.\ 
For example, if you want to retrieve Brightness value from Color Correction Filter, you will notice that it is inside an object called settings. `{"settings": {"brightness": 0.78}, "status": "ok", "type": "color_filter"}`. In this case, the Fetch Value will be `settings.brightness`.\
Use [JSON string validator](https://jsonlint.com/) if you want to make sure your formatting is correct.

{% include alert.html text="If the name of the fetched value contains dots, it needs to be wrapped in parentheses like this: <code>(Filter.Transform.Rotation.X)</code>." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS command|	JSON String|	Works the same as the custom packet command. Do not include the `"message-id"` part.
|Fetch Value|	String or object|	Name of a value you wish to get. <br/> For values inside another object use [object dot notation](https://grasshopper.app/glossary/data-types/object-dot-notation/). For values inside an array use [index position](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
Variable|	String	|Name of a variable to save the data under.
Turn to real|	boolean|	Whether you expect a real value (=number) or a string.
{:class='table table-primary'}

**Fetch OBS Data Examples**



|Object Snippet (if present)|What to retrieve|OBS Command|Fetch Value|
|-------|--------|--------|--------|
|`"stats":{"cpu-usage":0.75013036185501325,...}`|current CPU usage| {"request-type":"GetStats"} | stats.cpu-usage|
|N/A|Time elapsed since streaming started |{"request-type":"GetStreamingStatus"}|stream-timecode|
|N/A|Current width of a source|{"scene-name":"YOURSCENENAME","item":"YOURSOURCENAME","request-type":"GetSceneItemProperties"}|width|
|`"crop":{"left":0,...}`|Current left crop of a source|{"scene-name":"YOURSCENENAME","item":"YOURSOURCENAME","request-type":"GetSceneItemProperties"}|crop.left|
|N/A|Current text in a GDI source|{"request-type":"GetTextGDIPlusProperties","source":"YOURSOURCENAME"}|text|
|`"settings":{"brightness":-0.5,...}` |Color Correction Brightness Value|{"request-type":"GetSourceFilterInfo","sourceName":"YOURSOURCENAME","filterName":"Color Correction"}|settings.brightness|
|`"sceneItems":["sourceName":"Browser",...},{"sourceName":"Text GDI",...}]`|First source name in a specified scene|{"request-type":"GetSceneItemList","sceneName":"YOURSCENENAME"}|sceneItems[0].sourceName|
{:class='table table-secondary w-auto table-responsive table-hover text-break' }









