---
title: "Stack: Add "
num: 1
---

Adds a value to a given stack. Will create the stack if it doesn't exist yet.

The **position** you're adding the value to can be: 

- top - adds a value to the end of the stack (same as Array Push in Javascript)

{% include image.html w="75" src="push.png" alt="Add a value to the end of the stack" %}

- bottom - adds a value to the beginning of the stack (same as Array Unshift in Javascript), the positions of all elements will shifted by one

{% include image.html w="75" src="unshift.png" alt="Add a value to the beginning of the stack" %}

- index of the position to push the value to. The original values will be shifted by one from this position. 

{% include alert.html text="Any position index higher than the stack size will be regarded as the top." type="info" %} 

{% include alert.html text="In the TAB window you will see at the top of your screen the position 0, and at the bottom the last position. However, the TOP position of the stack is still the last one, and the BOTTOM position is 0. Be careful as this can be confusing at first." type="warning" %}

{% include image.html w="75" src="https://i.imgur.com/qBeMTGK.jpg" alt="Top and bottom of a stack shows different in screen" %}

| Box Name | Type | Description | 
|-------|--------|--------
|Stack Name	|String	| Name of the stack
|Position|index/top/bottom {% include asterisk.html%}|Position to add the value to. Can be **top** {% include popover.html content="end of the stack" %}, **bottom** {% include popover.html content="beginning of the stack" %} or **index** of the position. 
|Var./real/"string" {% include asterisk.html%}| Variable, real or string | Value you want to add to the stack
{:class='table table-primary'}









