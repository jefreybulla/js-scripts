//####DOM Manipulation####
//The code on this document will not run via the terminal.
//the document object is the owner (or root) of all objects in a webpage.

//modifying the HTML content of body
document.body.innnerHTML = "Some text"

//finds element by id
document.getElementById(id)

//finds elements by class name. Returns a collection of all elements that match the class as an array.
document.getElementsByClassName(name)

//finds elements by tag name. Returns an array.
document.getElementsByTagName(name)


<p>hi</p>
<p>hello</p>
<p>hi</p>
<script>
var arr = document.getElementsByTagName("p");
for (var x = 0; x < arr.length; x++) {
  arr[x].innerHTML = "Hi there";
}
</script>


//Moving through the DOM

element.childNodes        //returns an array of an element's child nodes.
element.firstChild        //returns the first child node of an element.
element.lastChild         //returns the last child node of an element.
element.hasChildNodes     //returns true if an element has any child nodes, otherwise false.
element.nextSibling       //returns the next node at the same tree level.
element.previousSibling   //returns the previous node at the same tree level.
element.parentNode        //returns the parent node of an element.

<html>
  <body>
    <div id ="demo">
      <p>some text</p>
      <p>some other text</p>
    </div>

    <script>
     var a = document.getElementById("demo");
     var arr = a.childNodes;
     for(var x=0;x<arr.length;x++) {
       arr[x].innerHTML = "new text";
     }
    </script>

  </body>
</html>

//Changing attributes
<img id="myimg" src="orange.png" alt="" />
<script>
var el = document.getElementById("myimg");
el.src = "apple.png";
</script>`

<a href="http://www.example.com">Some link</a>
<script>
var el = document.getElementsByTagName("a");
el[0].href = "http://www.sololearn.com";
</script>

//Changing style
<div id="demo" style="width:200px">some text</div>
<script>
  var x = document.getElementById("demo");
  x.style.color = "6600FF";
  x.style.width = "100px";
</script>
//You cannot use dashes (-) in the property names: these are replaced with camelCase versions, where the compound words begin with a capital letter.
//For example: the background-color property should be referred to as backgroundColor.

`
