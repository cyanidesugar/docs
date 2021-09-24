---
title: "Clear button"
num: 2
---

Changes the appearance of a button (color, text, image and border).\
All changes are temporary, the button will return to its original state if you reset or close and reopen Receiver.\
If you wish to reset the button back to its default appearance, set the values to `buttond_id, -1, -1, -1, notext, leave empty, -1`.

| Box Name | Type | Description | 
|-------|--------|--------
|Button ID|	Int|	Button ID to clear
|Ongoing|	boolean	|Specify whether ongoing buttons should be cleared.
|Queue|	boolean	|Specify whether the queued buttons should be cleared.
|Self	|boolean|	If you selected `all` in your Button ID field, you can choose whether you want to clear this button as well. <br/>Does not work if the button ID is itself (in that case use False in Ongoing field).
{:class='table table-primary'}









