# summernote
> bye spring~ summer is coming

## summernote ?
> summernote is a javascript program that helps you to create WYSIWYG Editor on web. summernote uses opensouce libraries(bootstrap, jQuery, fontAwesome)

## installation
#### 01. include js/css
```
<!-- include libries(jQuery, bootstrap, fontawesome) -->
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script> 
<link href="libs/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
<link rel="stylesheet" href="libs/FortAwesome-Font-Awesome/css/font-awesome.min.css">

<!-- include summernote css/js-->
<link rel="stylesheet" href="summernote.css" />
<script type="text/javascript" src="build/summernote_min.js"></script>
```
#### 02. target elements
```
<div id="summernote">Hello Summernote</div>
```
#### 03. run script
```
$('#summernote').summernote();
```

## build
```
./build.sh
```

## browser support
> Modern Browser (Webkit, Firefox, IE 9+)