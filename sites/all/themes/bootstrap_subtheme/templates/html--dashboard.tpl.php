<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN"
  "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces;?>>
<head profile="<?php print $grddl_profile; ?>">
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  <script src="sites/all/themes/bootstrap_subtheme/node_modules/react/dist/react.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
  <script src="sites/all/themes/bootstrap_subtheme/node_modules/react-bootstrap/dist/react-bootstrap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.2/marked.min.js"></script>
  <script type="text/babel" src="sites/all/themes/bootstrap_subtheme/components/comment.js"></script>
  <script type="text/babel" src="sites/all/themes/bootstrap_subtheme/components/card.js"></script>
  <script type="text/babel" src="sites/all/themes/bootstrap_subtheme/components/listcard.js"></script>
  <title><?php print $head_title; ?></title>
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
<div class="container">
  <div id="comment"></div>
  <div id="listcard"></div>
  <div class="cardbox"></div>
  <div class="cardbox"></div>
  <div class="cardbox"></div>
  <div class="cardbox"></div>
  <div id="cardbox"></div>
</div>
</body>
</html>
