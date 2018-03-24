<?php

/* profile.html */
class __TwigTemplate_eb33431d68d22bedc8c9980e1801620f3bc40e9872f490a89cff609dafffcf68 extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        // line 1
        $this->parent = $this->loadTemplate("layout.html", "profile.html", 1);
        $this->blocks = array(
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "layout.html";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_body($context, array $blocks = array())
    {
        // line 4
        echo "<h1>User List</h1>
<ul>
    <li><a href=\"";
        // line 6
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
        return array (  39 => 6,  35 => 4,  32 => 3,  15 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "profile.html", "/var/www/html/web/theme/templates/profile.html");
    }
}
