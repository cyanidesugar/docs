---
layout: default
title: "Math: Change Variable"
num: 1
---

Creates a new variable or modifies an existing one. 

{% include alert.html text="Variable names can contain numbers, letters and _, but cannot start with a number itself." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
| Variable | String | Name of the variable. |
| Operator | Dropdown | Operator you wish to use on the value.|
| Value <i class="fas fa-asterisk" style="color:FireBrick;" title="Parameter can be a variable, real value or a string"></i>| Any | Whatever you want to set the variable value to. Can contain complex math.
{:class='table table-primary'}
    
{% include image.html w="100" src="default_variables.png" alt="" type="image" %}

Examples below assume we have the variables and stack in the picture above. **Green** marks a good example and **red** marks a bad example. \
Bad examples can result in LB crashing. Hover over the {% include tooltip.html content="Hover over me!" %} for explanation.\
*`var`* = variable, *`str`* = string

| Input Variable *`type`*|operator| Input Value{% include asterisk.html %} *`type`* |  Output Variable | Output Value *`type`*| 
|-------|--------|--------|--------|--------|
|_variable *`var`*| = |"Hello World" *`str`*|_variable|"Hello World" *`str`* {% include tooltip.html content="Variable names can start with a letter or _." %}|
|1variable *`var`*| = |"Hello World" *`str`*|1variable|"Hello World" *`str`* {% include tooltip.html content="You should never use a number as the first letter in your variable. LB still creates it, but you will get into trouble when performing other operations on the variable." %} |
|user *`str`*| = |"Melonax" *`str`*| user | "Melonax" *`str`*|
|user *`str`*| = |Melonax *`real`*| user | 0 {% include tooltip.html content="The string is not wrapped in double quotes. LB assumes it's a real value and converts it to real, which results in 0." %}|
|points *`str`*| = |50 *`real`*|points|50 *`real`* |
|points *`str`*| = |"50" *`str`*|points|"50" *`str`* {% include tooltip.html content="Real values (numbers) should <b>not</b> be wrapped in double quotes. It prevents you from doing any sort of math operations on them as LB thinks they're strings." %}|
|points *`var`*| += |100 *`real`*|points|150 *`real`* |
|points *`var`*| += |"100" *`str`*|Execution Error|{% include tooltip.html content="Doing any math operation on a string results in LB crashing with an error message <b>DoAdd:Execution Error</b>. We cannot perform addition on 50 (real) and &#34;100&#34; (string)." %} |
|name *`str`* | = | user *`var`*|name|"Melonax" *`str`*|
|name *`str`* | = | /$user$/ *`var`*|name|"Melonax" *`str`* {% include tooltip.html content="This is technically still correct, however we can straight up use a variable without any wrappers in any parameter box marked with *." %}|
|/$user$/ *`var`*| = | points *`var`*| Melonax | 50 *`real`*|
|user *`var??`*| = | points *`var`*| user | 50 *`real`* {% include tooltip.html content="If the parameter box is <b>not</b> marked with a *, we must include the /$$/ wrappers for variables. Otherwise it will be interpreted as a string, even if a variable with the same name <b>user</b> already exists." %}|
|Sebas_points *`str`*| = | (/$points$/+30 + /$points$/\*3) *`var+real`*| Sebas_points | 230 *`real`*|
|Sebas_points *`str`*| = |/$points$/+30 + /$points$/\*3 *`var+real`*| Sebas_points | 50 *`real`* {% include tooltip.html content="Math operations in a parameter box must be wrapped in parentheses (). Otherwise LB ignores everything after <b>/$points$/</b>. " %}|
|winner *`str`*| = | [0]users *`stack value`* |winner | "Lioran" *`str`* {% include tooltip.html content="[POSITION]STACKNAME can be used as a value in a parameter box." %}|
|winner *`str`*| = | users[0] *`stack value`* |winner | 0 *`real`* {% include tooltip.html content="Unlike with arrays in other programming languages, the stack position [0] must come <b>before</b> the stack name and not after." %}|
|/$[1]users$/_color *`var+str`*| = | "red" *`str`*| Melonax_color | "red" *`str`* {% include tooltip.html content="Stack value and another string can be used as your variable name." %}| 
|[1]users_color *`var??+str`*| = | "red" *`str`*| [1]users_color | "red" *`str`* {% include tooltip.html content="Any stack value inside a parameter box <b>NOT</b> marked with a * must be wrapped in /$$/." %}| 
|/$[3-position]users$/ <br/>*`var+real as stack position`*| = | "cool streamer"*`str`* | Melonax | "cool streamer" *`str`* {% include tooltip.html content="We can use another variable as our stack position and perform math operations on it. Parentheses not required." %}|
|/$[3-/$position$/]users$/ <br/>*`var+real as stack position`*| = | "cool streamer"*`str`* | 0]users$/ | "cool streamer" *`str`* {% include tooltip.html content="Do not wrap a variable in /$$/ inside a stack position even if the parameter box is <b>NOT</b> marked with a *. " %}|
|user| = | [round(/$[3]users$/\*0.6)]users <br/>*`real+stack value as stack position`* | user | "Melonax" *`str`* {% include tooltip.html content="We can use another stack value as our stack position and perform math operations on it. In our case [3]users = 2 and round(2*0.6) = 1." %}|
|user| = | [round /$[3]users$/\*0.6]users <br/>*`real+stack value as stack position`* | user | "Lioran" *`str`* {% include tooltip.html content="Parentheses and no space must follow after round." %}|
|winner *`str`*| = | [position]/$stack_name$/ <br/>*`var as stack value+var as stack name`* |winner | "Lioran" *`str`* {% include tooltip.html content="A variable can be both used for a stack position and stack name." %}|
|winner *`str`*| = | [position]stack_name <br/>*`var as stack value+var as stack name??`* |winner | 0 *`real`* {% include tooltip.html content="If you want to use a variable as a stack name, it must be wrapped in /$$/." %}|
|all_users| = |"/$[0]users$/,/$[1]users$/,/$[2]users$/" <br/>*`var as stack value + str`*| all_users | "Lioran, Melonax, Sebas" *`str`*| 
|all_users| = |/$[0]users$/,/$[1]users$/,/$[2]users$/ <br/>*`var as stack value + str`*| all_users | 0 *`real`* {% include tooltip.html content="If your value contains both variables and strings (<b>comma</b> in our case), you must wrap it in <b>&#34; &#34;</b> and use <b>/$$/</b> wrappers for any variables/stacks." %}| 
|chat_message | = |"User /$[0]users$/ has /$points$/ points." <br/>*`str+stack value+var`*|chat_message|"User Lioran has 50 points." *`str`*|
|chat_message | = |"User [0]users has /$points$/ points." <br/>*`str+stack value+var`*|chat_message|"User [0]users has 50 points." *`str`* {% include tooltip.html content="If your value contains both strings and variables, you must wrap it in <b>&#34; &#34;</b> and use <b>/$$/</b> wrappers for any variables and stack values." %}|
{:class='table table-success w-auto table-hover good-bad' data-toggle='table' data-sticky-header='true' text-break }







