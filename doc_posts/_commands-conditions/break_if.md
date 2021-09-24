---
title: "Statement: Break if"
path_vid: /assets/videos/commands/conditions/
path_img: /assets/images/commands/conditions/
num: 7
---

If the condition is true, this command will break out of a repeat or re-enable statement, cancelling every command inside of the block if it hasn't been executed yet.\
 Re-enable statement will be disabled as well.\
You can use this command in junction with Statement: And and Statement: Or commands.

{% include alert.html text="If you place Statement: Break if command inside multiple repeat or re-enable statements, it will only break out of its parent statement." type="warning" %}  


| Box Name | Type | Description | 
|-------|--------|--------|
| Var./real/"string" {% include asterisk.html%}| Variable, real or string	 | Left side of the comparison you want to evaluate. |
|Compare Type |	Dropdown menu |	Operator you wish to use to compare left and right side.
|Var./real/"string" {% include asterisk.html%} |	Variable, real or string|	Whatever you want to compare the left side with.
{:class='table table-primary' }










