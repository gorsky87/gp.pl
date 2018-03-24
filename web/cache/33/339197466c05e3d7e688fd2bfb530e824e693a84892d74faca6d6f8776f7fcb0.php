<?php

/* profile.html */
class __TwigTemplate_2c45f64b6be75139750cde83718fa1c70987e46899d119a8e1d23a8d901ceeb2 extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = array(
            'body' => array($this, 'block_body'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        $this->loadTemplate("head.html", "profile.html", 1)->display($context);
        // line 2
        echo "
";
        // line 3
        $this->displayBlock('body', $context, $blocks);
    }

    public function block_body($context, array $blocks = array())
    {
        // line 4
        echo "<div id=\"main-background\">
</div>
<h1>User Lista</h1>
<ul>
    <li><a href=\"";
        // line 8
        echo twig_escape_filter($this->env, $this->extensions['Slim\Views\TwigExtension']->pathFor("profile", array("name" => "josh")), "html", null, true);
        echo "\">Josh</a></li>
</ul>
";
    }

    public function getTemplateName()
    {
        return "profile.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  41 => 8,  35 => 4,  29 => 3,  26 => 2,  24 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% include \"head.html\" %}

{% block body %}
<div id=\"main-background\">
</div>
<h1>User Lista</h1>
<ul>
    <li><a href=\"{{ path_for('profile', { 'name': 'josh' }) }}\">Josh</a></li>
</ul>
{% endblock %}", "profile.html", "/var/www/html/web/theme/templates/profile.html");
    }
}
