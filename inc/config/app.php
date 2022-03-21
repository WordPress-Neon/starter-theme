<?php

use WPN\Support\Plugins\CustomTaxonomyListWidget;
use WPN\Support\Plugins\DisableComments;
use WPN\Support\Plugins\Mailhog;
use WPN\Support\Plugins\OptionsPage;
use WPN\Support\Plugins\SVGSupport;
use WPN\Support\Theme\FooterMenu;
use WPN\Support\Theme\HeaderMenu;

return [
    'plugins'       => [
        OptionsPage::class,
        SVGSupport::class,
        Mailhog::class,
        DisableComments::class,
        CustomTaxonomyListWidget::class
    ],
    'features'      => [
        FooterMenu::class,
        HeaderMenu::class
    ],
    'template_path' => 'template-parts',
    'asset_path'    => 'assets'
];