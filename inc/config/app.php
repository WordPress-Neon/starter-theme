<?php

use WPN\Support\Plugins\DisableComments;
use WPN\Support\Plugins\Mailhog;
use WPN\Support\Plugins\SVGSupport;
use WPN\Support\Theme\FooterMenu;
use WPN\Support\Theme\HeaderMenu;

return [
    'plugins'       => [
        Mailhog::class,
        DisableComments::class,
        SVGSupport::class
    ],
    'features'      => [
        FooterMenu::class,
        HeaderMenu::class
    ],
    'template_path' => 'template-parts',
    'asset_path'    => 'assets'
];