---
title: "String: Clamp"
num: 3
---

Extracts a part of a string and returns the extracted part.\
You need to specify the index of the first character and the amount of characters to extract.

{% include alert.html text='Do not use String:Clamp on real values and Math:Clamp on strings, as this will result in an error and LB crashing.' type="warning" %} 


| Box Name | Type | Description | 
|-------|--------|--------|
|Variable|	String|	Variable name containing the string to clamp
|Start|	Real|	Where to start the clamp
|Count|	Real|	Amount of characters to include in the clamp
{:class='table table-primary ' }








