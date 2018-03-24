<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';


$config = [
  'settings' => [
    'displayErrorDetails' => true,
  ],
];
$app = new \Slim\App($config);

// Get container
$container = $app->getContainer();

// Register component on container
$container['view'] = function ($container) {
  $view = new \Slim\Views\Twig('theme/templates', [
    'cache' => 'cache',
    'debug' => true,
    'auto_reload' => true,
  ]);

  // Instantiate and add Slim specific extension
  $basePath = rtrim(str_ireplace('index.php', '', $container['request']->getUri()->getBasePath()), '/');
  $view->addExtension(new Slim\Views\TwigExtension($container['router'], $basePath));

  return $view;
};

// Render Twig template in route
$app->get('/', function ($request, $response, $args) {
  return $this->view->render($response, 'home_page.html', [
    'name' => $args['name']
  ]);
})->setName('profile');

// Run app
$app->run();