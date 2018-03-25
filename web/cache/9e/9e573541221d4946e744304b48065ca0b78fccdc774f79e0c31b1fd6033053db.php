<?php

/* home_page.html */
class __TwigTemplate_aa03994db6e36b030a5ef4a9d522b070a35bf9ef8493569deddc0d8eb12186ea extends Twig_Template
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
        $this->loadTemplate("head.html", "home_page.html", 1)->display($context);
        // line 2
        echo "
  <section class=\"full-screen section-1\">
      <div class=\"container\">
        <button type=\"button\" class=\"js-trigger\" data-target=\"#section-3\" data-mt-duration=\"2000\">Trigger</button>
        <div id=\"root\"></div>
        <div id=\"main-menu\"></div>
      </div>
    <div class=\"render\"></div>
  </section>



  <section id=\"section-2\" class=\"full-screen section-2\">
    adsa
  </section>

  <section id=\"section-3\" class=\"full-screen section-2\">
    adsa
  </section>

  <section id=\"section-4\" class=\"full-screen section-2\">
    adsa
  </section>

  <section id=\"section-5\" class=\"full-screen section-2\">
    adsa
  </section>
</div>
";
    }

    public function getTemplateName()
    {
        return "home_page.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  25 => 2,  23 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% include \"head.html\" %}

  <section class=\"full-screen section-1\">
      <div class=\"container\">
        <button type=\"button\" class=\"js-trigger\" data-target=\"#section-3\" data-mt-duration=\"2000\">Trigger</button>
        <div id=\"root\"></div>
        <div id=\"main-menu\"></div>
      </div>
    <div class=\"render\"></div>
  </section>



  <section id=\"section-2\" class=\"full-screen section-2\">
    adsa
  </section>

  <section id=\"section-3\" class=\"full-screen section-2\">
    adsa
  </section>

  <section id=\"section-4\" class=\"full-screen section-2\">
    adsa
  </section>

  <section id=\"section-5\" class=\"full-screen section-2\">
    adsa
  </section>
</div>
", "home_page.html", "/var/www/html/web/theme/templates/home_page.html");
    }
}
