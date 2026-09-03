---
sidebar_position: 2
sidebar_label: 'Circular Sankey'
title: 'Circular Sankey'
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# <img src='/arpe.vision-documentation/img/circular_sankey.svg' style={{height:'1.2em', verticalAlign:'middle', marginRight:'0.4em'}} /> Circular Sankey

Visualize cyclic flows and feedback loops with the Circular Sankey Chart extension, providing a circular layout for enhanced readability.

### First Steps

Select the sheet or parameter you want to use for the Sankey diagram. The list shows all sheets added to the dashboard. Click the desired sheet name. Optionally, select a second sheet for node customizations from the dropdown. Click Save to confirm your selection.

### Data Format

Data must include three columns: source, target, and value for each link. You can add extra fields to further customize the Sankey.
A second sheet can be used for node customizations, which should have a column with node names and other columns for customizations. Node names must match those in the first sheet.

### Customization

Sankey customization is performed via the settings button. Three customization methods are available:

- **Direct**: Enter a value directly in the window.
- **Parameter**: Select a parameter; its value defines the characteristic.
- **Field**: Select a field in the sheet; its values define the element aspects. To appear in the list, the field must be on the worksheet's **Rows**, **Columns**, or **Detail** shelf.

Customizations may be applied to both links and nodes.

#### Link Customization Options

| Name                | Default   | Accepted Values | Additional Informations |
|---------------------|-----------|----------------|--------------------------|
| background color    | white     | HTML names, hexadecimal, rgb. [See color names and codes](https://htmlcolorcodes.com/color-names/) | Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |▓
| link color          | color     | HTML names, hexadecimal, rgb. [See color names and codes](https://htmlcolorcodes.com/color-names/) | Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |
| palette             | none      | tableau 10, tableau 20, colorblind, seattle grays, traffic light, miller stone, superfishel stone, nuriel stone, jewel bright, summer, winter, green-orange-teal, red-blue-brown, purple-pink-gray, hue circle, custom hue circle | 
| speed               | speed     | Numbers |  Defines speed of animated dash |
| alert               | alert     | true, false | If true, link blinks in red |
| alignment           | justify   | justify, left, right, center |
| link type           | arrows    | none, arrows, animated dash, full arrows |
| degraded color      | false     | true, false  | Requires node color to be defined |
| percentage          | none      | true, false  | Display percentages at source, target, or both |
| display values      | false     | true, false |
| adaptive labels     | false     | true, false | If true, labels adapt to the link size, otherwise size is fixed. |
| font size           | 10        | Numbers     | The font size of percentages are always 2px thinner than the font size. |

#### Node Customization Options

| Name                  | Default   | Accepted Values | Additional Informations |
|-----------------------|-----------|----------------|--------------------------|
| node positioning      | automatic | automatic, manual | If manual, node positions must be defined. |
| node color propagation| none      | source, target, none | Defines how node colors are propagated from link's colors. |
| node shape            | rectangle | rectangle, arrow | 
| add images            | none      | none, from file explorer, from file catalog, from field values | See [Image Catalog](#image-catalog) section below for available images. |
| node color            | color     | HTML names, hexadecimal, rgb | Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |
| node palette          | none      | tableau 10, tableau 20, colorblind, seattle grays, traffic light, miller stone, superfishel stone, nuriel stone, jewel bright, summer, winter, green-orange-teal, red-blue-brown, purple-pink-gray, hue circle |
| node alert            | alert     | true, false |  If true, node blinks in red |
| horizontal sort       | false     | true, false | Sort numbers for horizontal grid |
| vertical sort         | false     | true, false | Sort numbers for vertical grid |


### Filtering

Two types of filters are supported: link filters and node filters.

#### Filter Configuration Procedure

1. Click the filter button.
2. **Select Target Sheet**: Choose the sheet where you want to apply the filter.
3. **Choose Source and Target Field**: Set the source and target fields. The value from the source field will be passed to the target field.
4. **Save**: Click Save to confirm the filter.

#### Filter Application

Click a node to apply the filter to the target sheet. Hold Ctrl and click to select multiple elements.

#### Freeing Filters

To remove the filter:
- Click the selected element
- Click an empty part of the graph
- Click the free filter button

#### Filter Removal

To delete a filter, check its row in the table and click Remove.

### Add Images

If you set the add images field to anything other than "none," a new button appears in the extension. Click it to open a window where you can map images to a field. Choose images from the file explorer, the file catalog, or field values. For field value mode, field values must match image names (see [Image Catalog](#image-catalog) section below). Images must be under 20KB. Enable Dark mode to switch image color from black to white. You can set a default image in the first row; any undefined value uses the default.

### Node Sizing

Adjust node width with the horizontal + and - buttons. Change node height with the vertical + and - buttons.

### Step by step tutorial

Create a sheet with source, target, and value columns. Optionally, create a second sheet for node customizations. The second sheet must have a column with node names and other columns for customizations. Node names must match those in the first sheet. Add both sheets to the dashboard (they can be hidden).

<video src={useBaseUrl('/media/sankeyC-display.mp4')} controls width="600">
  Your browser does not support the video tag.
</video>

To customize nodes, use the settings as shown:

<video src={useBaseUrl('/media/sankeyC-custom-nodes.mp4')} controls width="600">
  Your browser does not support the video tag.
</video>

 In this example, to color the links, the option degraded color is set to true and the node colors are used to create the link colors.

<video src={useBaseUrl('/media/sankeyC-custom-links.mp4')} controls width="600">
  Your browser does not support the video tag.
</video>

To add icons to nodes, set the add images field to a value other than "none" (for example, "from file catalog"). After saving, an image icon appears in the extension's top right corner. Click it to open the image selection and mapping window.

<video src={useBaseUrl('/media/sankeyC-add-images.mp4')} controls width="600">
  Your browser does not support the video tag.
</video>

To set up a filter, click the filter icon. You can create both link and node filters. Select the target sheet, source field, and target field, then save. The filter is now active. Click a node or link to apply the filter. Hold Ctrl and click to select multiple elements.

<video src={useBaseUrl('/media/sankeyC-filter.mp4')} controls width="600">
  Your browser does not support the video tag.
</video>

To manually position nodes, set node positioning to "manual". Then, click and drag nodes to the desired location.

<video src={useBaseUrl('/media/sankeyC-manual-positioning.mp4')} controls width="600">
  Your browser does not support the video tag.  
</video>

Adjust node width and height using the horizontal and vertical + and - buttons.

<video src={useBaseUrl('/media/sankeyC-change-size.mp4')} controls width="600">
  Your browser does not support the video tag.
</video>

---

## Image Catalog

To have an image added automatically to a node of the Sankey, a field must contain the name corresponding to the icon you want to use. Then, the **add images** setting must be set to **From field values**. Finally, in the image window, the **Image field** must be set to the field containing the name of the icon.

### Industry Collection

In the Industry collection, the following images exist in our catalog:

| Icon | Name |
|------|------|
| ![factory](/media/Sankey-catalog/factory.svg) | factory |
| ![manuf](/media/Sankey-catalog/manuf.svg) | manuf |
| ![warehouse](/media/Sankey-catalog/warehouse.svg) | warehouse |
| ![sales](/media/Sankey-catalog/sales.svg) | sales |
| ![valve](/media/Sankey-catalog/valve.svg) | valve |
| ![settings](/media/Sankey-catalog/settings.svg) | settings |
| ![construction](/media/Sankey-catalog/construction.svg) | construction |
| ![water_pump](/media/Sankey-catalog/water_pump.svg) | water_pump |

### Health Collection

In the Health collection, the following images exist in our catalog:

| Icon | Name |
|------|------|
| ![science](/media/Sankey-catalog/science.svg) | science |
| ![coronavirus](/media/Sankey-catalog/coronavirus.svg) | coronavirus |
| ![brain](/media/Sankey-catalog/brain.svg) | brain |
| ![genetics](/media/Sankey-catalog/genetics.svg) | genetics |
| ![household_supplies](/media/Sankey-catalog/household_supplies.svg) | household_supplies |
| ![pill](/media/Sankey-catalog/pill.svg) | pill |
| ![radiology](/media/Sankey-catalog/radiology.svg) | radiology |
| ![home_health](/media/Sankey-catalog/home_health.svg) | home_health |

### IT Collection

In the IT collection, the following images exist in our catalog:

| Icon | Name |
|------|------|
| ![database](/media/Sankey-catalog/database.svg) | database |
| ![finance](/media/Sankey-catalog/finance.svg) | finance |
| ![WIFI](/media/Sankey-catalog/WIFI.svg) | WIFI |
| ![cloud](/media/Sankey-catalog/cloud.svg) | cloud |
| ![hard_drive](/media/Sankey-catalog/hard_drive.svg) | hard_drive |
| ![join](/media/Sankey-catalog/join.svg) | join |
| ![calcul](/media/Sankey-catalog/calcul.svg) | calcul |
| ![save](/media/Sankey-catalog/save.svg) | save |

### Energy Collection

In the Energy collection, the following images exist in our catalog:

| Icon | Name |
|------|------|
| ![elec](/media/Sankey-catalog/elec.svg) | elec |
| ![battery](/media/Sankey-catalog/battery.svg) | battery |
| ![heat](/media/Sankey-catalog/heat.svg) | heat |
| ![gaz](/media/Sankey-catalog/gaz.svg) | gaz |
| ![co2](/media/Sankey-catalog/co2.svg) | co2 |
| ![plant](/media/Sankey-catalog/plant.svg) | plant |
| ![sunny](/media/Sankey-catalog/sunny.svg) | sunny |
| ![thermometer](/media/Sankey-catalog/thermometer.svg) | thermometer |
| ![wind_power](/media/Sankey-catalog/wind_power.svg) | wind_power |
| ![water_voc](/media/Sankey-catalog/water_voc.svg) | water_voc |

### Others Collection

In the Others collection, the following images exist in our catalog:

| Icon | Name |
|------|------|
| ![trending_up](/media/Sankey-catalog/trending_up.svg) | trending_up |
| ![trending_down](/media/Sankey-catalog/trending_down.svg) | trending_down |
| ![recycling](/media/Sankey-catalog/recycling.svg) | recycling |
| ![power](/media/Sankey-catalog/power.svg) | power |
| ![account_balance](/media/Sankey-catalog/account_balance.svg) | account_balance |
| ![biotech](/media/Sankey-catalog/biotech.svg) | biotech |
| ![broom](/media/Sankey-catalog/broom.svg) | broom |
| ![home_repair](/media/Sankey-catalog/home_repair.svg) | home_repair |
| ![radar](/media/Sankey-catalog/radar.svg) | radar |
| ![rocket](/media/Sankey-catalog/rocket.svg) | rocket |
| ![route](/media/Sankey-catalog/route.svg) | route |
| ![school](/media/Sankey-catalog/school.svg) | school |
| ![suitcase](/media/Sankey-catalog/suitcase.svg) | suitcase |
| ![computer](/media/Sankey-catalog/computer.svg) | computer |
| ![smartphone](/media/Sankey-catalog/smartphone.svg) | smartphone |
| ![storage](/media/Sankey-catalog/storage.svg) | storage |
| ![sd_card](/media/Sankey-catalog/sd_card.svg) | sd_card |
| ![traffic](/media/Sankey-catalog/traffic.svg) | traffic |
| ![apartment](/media/Sankey-catalog/apartment.svg) | apartment |
