# Basic HTML Code Notes
---

The following tag is used to tell the browser what document type to expect.  

- It is also considered a declaration and is NOT case-sensitive:

```html
<!DOCTYPE html>
```

```html

<html>
  <head>
    <!-- Metadata and links -->
  </head>
  <body>
    <!-- Page content -->
  </body>
</html>

```

---

## Head
---

The following code is an HTML tag that contains information or metadata that helps the browser to display or render the webpage correctly.

```html
<head>
```

The following tag contains the metadata for the webpage.  

```html
<meta>
```

The previously mentioned tag may contain the following attributes:

```html
   charset
   content
   http-equiv
   name
```

The following meta tag attribute sets the character encoding for the document:

- This is just an example. There are more than just one type of character encoding.

```html
charset="UTF-8"
```

The following tag is used to embed executable code or data into the document:

- This tag is typically used for JavaScript files.

```html
<script>
```

To link your HTML page to an external CSS stylesheet you would use the following tag:

```html
<link>
```

- It is linked in the head tag above the title tag and below the meta tag.

---

## Body
---

The following element represents the container for the visible content shown to the end-user"

```html
<body>
```

## HTML Elements
---

There are multiple types of elements including:

```html
<p>
<textarea>
<h1>
<h2>
<h3>
<h4>
<h5>
<h6>
<input>
<label>
<header>
<img>
<ul>
<ol>
<li>
<a>
<hr>
```

- With that list in order from how they are listed. This is what each tag's purpose is:

- p: Used to write a block of text. Think of it like writing a paragraph in a document.

- textarea: Creates a box where users can type multiple lines of text, like leaving a comment or writing a message.

- h1: The biggest and most important title on a page, like the main title of a blog post.

- h2: A slightly smaller title, used for sections within the main title.

- h3: A sub-section of h2; smaller and less important than h2.

- h4: A sub-section of h3, and so on for h5 and h6.

- h5: Even smaller and used for less important headings.

- h6: The smallest and least important heading on the page.

- input: Is used to create a box for user input, like typing your name or selecting a checkbox.

- label: Describes or names an input field so users know what to enter, like “Name:” next to a text box.

- header: Represents the top section of a page, usually containing the title, logo, or navigation menu.

- img: Displays a picture or graphic on the page.

- ul: Creates a list of items with bullet points, like a grocery list.

- ol: Creates a list of items with numbers, like steps in a recipe.

- li: Represents each individual item in a ul or ol list.

- a: Creates a clickable link that can take you to another page, file, or section.

- hr: Is used to insert a thematic break or divider between sections of content. It is a self-closing tag and does not require an ending tag.

---


Common types of elements that are used to divide content into sections are:

```html
<div>
<section>
```
## Special Characters
---
The following are used to create special characters in HTML:

```html
&rsquo;

&lsquo;

&rdquo;

&ldquo;

&amp;

&gt;

&lt;

&copy;

&reg;

&trade;
```

In order they create the following special characters:

&rsquo; = Right Single Quote

&lsquo; = Left Single Quote

&rdquo; = Right Double Quote

&ldquo; = Left Double Quote

&amp; = Ampersand

&gt; = Greater Than

&lt; = Less Than

&copy; = Copyright Symbol

&reg; = Registered Symbol

&trade; = Trademark Symbol

---

The following HTML tag is used to represent a self-contained, independent piece of content that could be distributed or reused on it's own.

```html
<article>
```

The following HTML tag is used to represent content that is tangentially related to the main content. It's often used for supplementary information or sidebars.

```html
<aside>
```



