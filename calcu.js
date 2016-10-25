<script language="javascript">
var inputstring=" "
function updatestring(value)
{
inputstring += value;
document.calculator.input.value=inputstring;
}
</script>
 
<center>
<table border=5 bordercolor=gray  cellspacing=8>
<form name="calculator">
<th>
THE CALCULATOR
</th>
<tr align="center">
<td>
<input type="text" name="input" maxlength=10 size=24>
</td></tr>
<tr align="center"><td>
<input type="button" value="  +  " onclick="updatestring('+')">
<input type="button" value="  -  " onclick="updatestring('-')">
<input type="button" value="  /  " onclick="updatestring('/')">
<input type="button" value="  *  " onclick="updatestring('*')">
</td></tr><tr align=center><td>
<input type="button" value="  mod  " onclick="updatestring('%')">
<input type="button" value="  0  " onclick="updatestring('0')">
<input type="button" value="  1  " onclick="updatestring('1')">
<input type="button" value="  2  " onclick="updatestring('2')">
</td</tr><tr align=center><td>
<input type="button" value="  3  " onclick="updatestring('3')">
<input type="button" value="  4  " onclick="updatestring('4')">
<input type="button" value="  5  " onclick="updatestring('5')">
<input type="button" value="  6  " onclick="updatestring('6')">
</td></tr><tr align="center"><td>
<input type="button" value="  7  " onclick="updatestring('7')">
<input type="button" value="  8  " onclick="updatestring('8')">
<input type="button" value="  9  " onclick="updatestring('9')">
</td></tr>
<tr align="center"><td>
<input type="button" value="  clear  " onclick="input.value=' ';inputstring=' ' ">
<input type="button" value="  =  " onclick="input.value=eval(inputstring);">
</td>
</tr>
</form>
</table>
</center>