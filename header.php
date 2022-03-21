<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <?php wp_head(); ?>
    <title><?php wp_title(); ?></title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>"/>
</head>

<body <?php body_class( 'bg-[#f6f6f6]' ); ?>>
<header class="border-b border-b-gray-300 fixed top-0 left-0 right-0 max-w-screen z-10 bg-white py-2">
    <img src="<?= asset_path('img/Logo.svg'); ?>" alt="WPN Framework" class="w-32">
    <?php render_component( 'header/navigation' ); ?>
</header>