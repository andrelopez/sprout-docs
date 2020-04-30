---
date: 2018-06-25
description: Sprout Reports installation and update instructions for Craft 3.
---

# Craft 3

Sprout Reports installation and update instructions for Craft 3.

## Requirements

* Craft CMS 3.0.0-RC1 or a more recent version of Craft

## Installation via Plugin Store

1. Find the plugin in the Plugin Store in your Craft Control Panel 
2. Go to _Settings → Plugins_ and select “Install”

## Installation via Composer 

1. Open your terminal and go to your Craft project:<br>`cd /path/to/project`
2. Then tell Composer to load the plugin:<br>`composer require barrelstrength/sprout-reports`
3. In the Control Panel, go to _Settings → Plugins_ and select “Install”

## Upgrading to v1.1.8

Custom Data Sources will need to make a minor update when upgrading to Sprout Base Reports 1.2.0 (Sprout Reports v1.1.8). Data Sources will still display in the interface but may not have an ideal name until they are updated to use the `displayName()` method.

``` php
OLD:
public function getName(): string
{
    return Craft::t('sprout-reports', 'Twig Template');
}

NEW:
public static function displayName(): string
{
    return Craft::t('sprout-reports', 'Twig Template');
}
```

## Upgrading to Craft 3

::: warning BEFORE YOU UPDATE
Make sure you have updated to the latest version of Sprout Reports 0.x before updating to Sprout Reports 1.x for Craft 3
:::

There are a few changes to be aware of when upgrading to Sprout Reports for Craft 3. We have simplified the Sprout Reports plugin to only include two Data Sources out of the box. Additional Data Sources can be added as desired.

Here's an overview of the Data Sources we have supported and which plugins they can be found in between Craft 2 and Craft 3:

Data Sources    | Craft 2 Plugin        | Craft 3 Plugin
----------------|----------------|----------------------------------
Custom Query    | Sprout Reports   | Sprout Reports      
Twig Template   | Sprout Reports   | Sprout Reports
Categories      | Sprout Reports   | Sprout Reports - Categories
Users           | Sprout Reports   | Sprout Reports - Users
Commerce        | Sprout Reports for Craft Commerce | Sprout Reports - Craft Commerce
Sprout Forms Entries | Sprout Forms | Sprout Forms
Custom - Other  | Custom           |  Custom

## Upgrading Categories and Users

If you have any Categories or Users reports in Craft 2, you'll want to download and install the `Sprout Reports - Categories` and `Sprout Reports - Users` plugins in Craft 3 after you get upgraded. Your existing Categories and Users reports will not display until you add those plugins.

## Upgrading Sprout Forms

If you use Reports for Sprout Forms, they will get migrated over when you upgrade Sprout Forms. If you only need Reports for Sprout Forms, you don't have to upgrade Sprout Reports. Sprout Forms for Craft 3 will give you full functionality for Sprout Forms Reports without ever having to install Sprout Reports.

## Upgrading Commerce Reports

Until Craft Commerce 2 is released and we get around to updating the `Sprout Reports for Craft Commerce` any Commerce Reports will be disabled. Your data will remain in the database and once we have the Commerce Reports plugin available your reports will become available again when that plugin is installed.

## Custom Reports

If you have any custom reports, you'll need to write a migration to get them updated to Craft 3. Please refer to the `Sprout Reports - Categories` and `Sprout Reports - Users` plugins Install migrations for examples.

## Upgrading to Reports v1.3.0

If you have the Users Data Source for Sprout Reports installed, when you update to Sprout Reports v1.3.0 your existing Users Reports will be migrated and you can safely uninstall and remove the Users Data Source plugin after the upgrade is complete.

