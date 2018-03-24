<?php

/* head.html */
class __TwigTemplate_7919ea0a5bcb2dfb9666591c2f5702c8157f84395a7562636d466881412feb1a extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"en\">
<head>

  <link href=\"https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300\" rel=\"stylesheet\">
  <script src=\"/theme/js/app.min.js\"></script>
  <link rel=\"stylesheet\" href=\"/theme/css/style.css\">
  <meta charset=\"UTF-8\">
  <title>Górski Paweł | Drupal Certified Developer</title>

</head>";
    }

    public function getTemplateName()
    {
        return "head.html";
    }

    public function getDebugInfo()
    {
        return array (  23 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("<!DOCTYPE html>
<html lang=\"en\">
<head>

  <link href=\"https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300\" rel=\"stylesheet\">
  <script src=\"/theme/js/app.min.js\"></script>
  <link rel=\"stylesheet\" href=\"/theme/css/style.css\">
  <meta charset=\"UTF-8\">
  <title>Górski Paweł | Drupal Certified Developer</title>

</head>", "head.html", "/var/www/html/web/theme/templates/head.html");
    }
}
