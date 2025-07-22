

# Help Documentation

> **Last updated:** July, 2025

## Quick Links

- [Circular Sankey](#circular-sankey)
- [Radar](#radar)
- [Tree](#tree)
- [Sunburst](#sunburst)
- [Sankey](#sankey)

## General Information

Each extension is available in two versions:

- **Sheet**: Select data from the list of sheet names present in the dashboard.
- **Parameter**: Select data from the list of available parameters. Parameters must include a sheet name, allowing you to easily switch between sheets.

The TREX file name ends with either Sheet or Param to indicate the version.

### Installation

To install an extension, drag and drop the Extension object into your dashboard. Select "Access Local Extensions" and choose the extension file (.trex). The extension will appear in your dashboard, displaying a window with a list of sheets or parameters to select from.

### Interactivity

Four icons are rendered at the top right of each extension:

<img src="./Media/icons.png" alt="screenshot of the extensions icons" />

- **Window icon**: Opens the window for sheet or parameter selection.
- **Reload icon**: Reloads the extension.
- **Settings icon**: Opens the settings window for customizing the extension.
- **Filter icon**: Opens the filter configuration window, allowing you to create filters on other sheets in the dashboard when you click within the extension.


**Interactions:**

- In the Sankey, click a node to highlight it. Double-click a node to filter the data by that node.
- In the Tree, double-click a node to expand or collapse it. Single-click highlights the path from the root to the selected node.
- In the Sunburst, double-click a node to filter by that segment. Double-click the center to move up one level. Single-click highlights the path and shows its value in the center.
- In the Radar, click a dimension to highlight it.
- Hover over elements to display simple tooltips.
- Select data in the source sheet to filter the extension's data.

---

## Circular Sankey

### First Steps

Select the sheet or parameter you want to use for the Sankey diagram. The list shows all sheets added to the dashboard. Click the desired sheet name. Optionally, select a second sheet for node customizations from the dropdown. Click Save to confirm your selection.

### Data Format

Your data must include three columns: source, target, and value for each link. You can add extra fields to further customize the Sankey.

### Customization

Sankey customization is performed via the settings button. Three customization methods are available:

- **Direct**: Enter a value directly in the window.
- **Parameter**: Select a parameter; its value defines the characteristic.
- **Field**: Select a field in the sheet; its values define the element aspects.

Customizations may be applied to both links and nodes.

#### Link Customization Options

| Name                | Default   | Accepted Values |
|---------------------|-----------|----------------|
| background color    | white     | HTML names, hexadecimal, rgb. [See color names and codes](https://htmlcolorcodes.com/color-names/) |
| link color          | color     | HTML names, hexadecimal, rgb, classic values (palette) |
| palette             | none      | tableau 10, tableau 20, colorblind, seattle grays, traffic light, miller stone, superfishel stone, nuriel stone, jewel bright, summer, winter, green-orange-teal, red-blue-brown, purple-pink-gray, hue circle, custom hue circle |
| speed               | speed     | Defines speed of animated dash |
| alert               | alert     | If true, link blinks in red |
| alignment           | justify   | justify, left, right, center |
| link type           | arrows    | none, arrows, animated dash, full arrows |
| degraded color      | false     | true, false (requires node color) |
| percentage          | none      | Display percentages at source, target, or both |
| display values      | false     | true, false |
| adaptive labels     | false     | true, false |

#### Node Customization Options

| Name                  | Default   | Accepted Values |
|-----------------------|-----------|----------------|
| node positioning      | automatic | automatic, manual |
| node color propagation| none      | source, target, none |
| node shape            | rectangle | rectangle, arrow |
| add images            | none      | none, from file explorer, from file catalog, from field values |
| node color            | color     | HTML names, hexadecimal, rgb, palette |
| node palette          | none      | (see palette list above) |
| node alert            | alert     | If true, node blinks in red |
| horizontal sort       | false     | Sort numbers for horizontal grid |
| vertical sort         | false     | Sort numbers for vertical grid |


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

If you set the add images field to anything other than "none," a new button appears in the extension. Click it to open a window where you can map images to a field. Choose images from the file explorer, the file catalog, or field values. For field value mode, field values must match image names. Images must be under 20KB. Enable Dark mode to switch image color from black to white. You can set a default image in the first row; any undefined value uses the default. See the [Image Catalog](./Image-Catalog.md) for available images.

### Node Sizing

Adjust node width with the horizontal + and - buttons. Change node height with the vertical + and - buttons.


### Example

Create a sheet with source, target, and value columns. Optionally, create a second sheet for node customizations. The second sheet must have a column with node names and other columns for customizations. Node names must match those in the first sheet. Add both sheets to the dashboard (they can be hidden).

<video src="./Media/sankeyC-display.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

To customize nodes, use the settings as shown:

<video src="./Media/sankeyC-custom-nodes.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

 In this example, to color the links, the option degraded color is set to true and the node colors are used to create the link colors.
<video src="./Media/sankeyC-custom-links.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

To add icons to nodes, set the add images field to a value other than "none" (for example, "from file catalog"). After saving, an image icon appears in the extension's top right corner. Click it to open the image selection and mapping window.
<video src="./Media/sankeyC-add-images.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

To set up a filter, click the filter icon. You can create both link and node filters. Select the target sheet, source field, and target field, then save. The filter is now active. Click a node or link to apply the filter. Hold Ctrl and click to select multiple elements.
<video src="./Media/sankeyC-filter.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

To manually position nodes, set node positioning to "manual". Then, click and drag nodes to the desired location.
<video src="./Media/sankeyC-manual-positioning.mp4" controls width="800">
  Your browser does not support the video tag.  
</video>

Adjust node width and height using the horizontal and vertical + and - buttons.
<video src="./Media/sankeyC-change-size.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

---


## Radar

### First Steps

Select the sheet or parameter you want to use for the Radar diagram. The list shows all sheets added to the dashboard or parameters available in the workbook. Click the desired name.

### Data Format

The column field is used as the dimension, and the row is used as the axis. Make sure your dataset is complete, with no null values.

### Customization

Click the settings button to customize the Radar. Three methods are available:

- **Direct**: Enter a value directly in the window.
- **Parameter**: Select a parameter; its value defines the characteristic.
- **Field**: Select a field in the sheet; its values define the element aspects.

#### Radar Customization Options

| Name            | Default | Accepted Values |
|-----------------|---------|----------------|
| background color| white   | HTML names, hexadecimal, rgb. [See color names and codes](https://htmlcolorcodes.com/color-names/) |
| data color      | none    | HTML names, hexadecimal, rgb, palette |
| scale min       | auto    | Minimum value of the scale |
| scale max       | auto    | Maximum value of the scale |
| highlight color | red     | HTML names, hexadecimal, rgb |

### Filtering

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


#### Example

Create a sheet with your data and add it to the dashboard. The sheet must have a column for dimensions and a row for the axis. Make sure the dataset is complete (no null values).

<video src="./Media/radar-display.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

You can further customize the Radar. In this example, the background color and the minimum of the scale are set directly by typing a value in the window. The data color is taken in the sheet.


<video src="./Media/radar-custom.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

To create a filter, click the filter icon. Select the target sheet, source field, and target field, then click Save. The filter is now active. Click a dot to apply the filter. Hold Ctrl and click to select multiple elements.

<video src="./Media/radar-filter.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

---


## Tree

### First Steps

Select the sheet or parameter you want to use for the Tree diagram. The list shows all sheets added to the dashboard. Click the desired sheet name.

### Data Format

The data may be provided in either hierarchical or source/target format.

### Customization

Click the settings button to customize the Tree. Three methods are available:

- **Direct**: Enter a value directly in the window.
- **Parameter**: Select a parameter; its value defines the characteristic.
- **Field**: Select a field in the sheet; its values define the element aspects.

#### Tree Customization Options

| Name                  | Default   | Accepted Values |
|-----------------------|-----------|----------------|
| background color      | white     | HTML names, hexadecimal, rgb |
| highlight color       | red       | HTML names, hexadecimal, rgb |
| width                 | none      | Field value |
| data color            | none      | HTML names, hexadecimal, rgb, classic values, palette |
| palette               | none      | (see palette list above) |
| depth                 | 3         | Number |
| save state            | false     | true, false |
| radial                | 0         | 0, 180, 360 |
| orientation           | east      | east, north, south, west |
| font size             | 14        | Number |
| node padding          | 20        | Number |
| node size             | 3         | Number |
| node stroke width     | 1.5       | Number |
| link color            | parent    | parent, child, none |
| link width            | 1.5       | Number |
| proportional labels   | false     | true, false |
| hide intermediate labels | false  | true, false |
| display values        | false     | true, false |

### Filtering

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

#### Example

Create a sheet with your data and add it to the dashboard.

<video src="./Media/tree-display.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

You can further customize the Tree by clicking on the customisation button. In this example, the background color is controlled with a parameter. The width and data color are taken from the sheet. The link color and proportional labels are set directly in the window.

<video src="./Media/tree-custom.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

Double-click a node to open or close it. Single-click highlights the node's path.

<video src="./Media/tree-action.mp4" controls width="800">
  Your browser does not support the video tag.
</video>


To create a filter, click the filter icon. Select the target sheet, source field, and target field, then click Save. The filter is now active. Click a node to apply the filter. Hold Ctrl and click to select multiple elements.

<video src="./Media/tree-filter.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

---


## Sunburst

### First Steps

Select the sheet or parameter you want to use for the Sunburst diagram. The list shows all sheets added to the dashboard. Click the desired sheet name.

### Data Format

Your data must be in hierarchical format and contain only values greater than zero.

### Customization

Click the settings button to customize the Sunburst. Three methods are available:

- **Direct**: Enter a value directly in the window.
- **Parameter**: Select a parameter; its value defines the characteristic.
- **Field**: Select a field in the sheet; its values define the element aspects.

#### Sunburst Customization Options

| Name            | Default | Accepted Values |
|-----------------|---------|----------------|
| background color| white   | HTML names, hexadecimal, rgb |
| data color      | none    | HTML names, hexadecimal, rgb, palette |
| palette         | none    | (see palette list above) |
| number layers   | 2       | Number |
| layers padding  | 1       | Number |
| layers size     | none    | none, asc, desc |
| percentage      | false   | true, false |
| rotate labels   | false   | false, all, first |

### Filtering

#### Filter Configuration Procedure

1. Click on the filter button.
2. **Select Target Sheet**: Choose the target sheet where the filtering will be applied.
3. **Choose Source and Target Field**: Define the source and target fields for filtering the target sheet. The value of the source field will be given to the target field.
4. **Save**: Click on the save button to save the filter.

#### Filter Application

Filters are applied to the target sheet by clicking on a node (segment of the donut). Multiple elements may be selected using Ctrl + click.

#### Freeing Filters

To release the filter:
- The selected element is clicked
- An empty part of the graph is clicked
- The free filter button is clicked

#### Filter Removal

To remove a filter created, select the corresponding line in the table by checking the box and click on "Remove" button.

#### Example

A sheet containing the required data must be created and added to the dashboard.

<video src="./Media/sunburst-display.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

You can further customize the Sunburst. In this example, the background color, color palette, number of layers, and layer size are set by directly selecting values in the configuration window.

<video src="./Media/sunburst-custom.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

Single-clicking an element highlights the path and displays the corresponding percentage in the center. Double-clicking an element applies a filter. Double-clicking the center navigates to the upper level.

<video src="./Media/sunburst-action.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

To create a filter, click the filter icon. Select the target sheet, source field, and target field, then click Save. The filter is now active. Click a node (segment of the donut) to apply the filter to the target sheet. Hold Ctrl and click to select multiple elements.

<video src="./Media/sunburst-filter.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

---


## Sankey

### First Steps

Choose the sheet (or parameter) you want to use to create the Sankey diagram. The displayed list shows sheets added to the dashboard. Click on the desired sheet name. Optionally, you can select a second sheet containing node customizations from the dropdown list. Then, click on save.

### Data Format

The data structure is required to contain three columns: source, target, and values for each link. Additional fields present in the sheet may be utilized to further customize the Sankey diagram.

### Customization

Sankey customization is performed via the settings button. Three customization methods are available:

- **Direct**: A value is entered directly into the configuration window.
- **Parameter**: A parameter is selected, and its value is used to define the characteristic.
- **Field**: A field in the sheet is selected, and its values are used to define element aspects.

#### Sankey Customization Options

| Name            | Default | Accepted Values |
|-----------------|---------|----------------|
| background color| white   | HTML names, hexadecimal, rgb |
| highlight color | red     | HTML names, hexadecimal, rgb |
| link color      | none    | source, target, source-target, HTML names, hexadecimal, rgb, classic values, palette |
| palette         | none    | (see palette list above) |
| link percentage | none    | none, source, target, both |
| column palette  | none    | (see palette list above) |
| column percentage | false | true, false |
| column titles   | top     | none, top, bottom |
| alignment       | justify | justify, left, right, center |

### Filtering

#### Filter Configuration Procedure

1. Click on the filter button.
2. **Select Target Sheet**: Choose the target sheet where the filtering will be applied.
3. **Choose Source and Target Field**: Define the source and target fields for filtering the target sheet. The value of the source field will be given to the target field.
4. **Save**: Click on the save button to save the filter.

#### Filter Application

Filters are applied to the target sheet by clicking on a node. Multiple elements may be selected using Ctrl + click.

#### Freeing Filters

To release the filter:
- The selected element is clicked
- An empty part of the graph is clicked
- The free filter button is clicked

#### Filter Removal

To remove a filter created, select the corresponding line in the table by checking the box and click on "Remove" button.

#### Example

A sheet containing the required data must be created and added to the dashboard.

<video src="./Media/sankey-display.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

You can further customize the Sankey. In this example, the background color is controlled with a parameter. The link color and column palette are set directly in the configuration window.

<video src="./Media/sankey-custom.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

Clicking a node highlights the node's path. To remove the highlight, the selected node or an empty part of the graph is clicked. Double-clicking a node applies a filter to the node. To remove the filter, double-click the selected node or click the free filter button.

<video src="./Media/sankey-action.mp4" controls width="800">
  Your browser does not support the video tag.
</video>


To create a filter, click the filter icon. Select the target sheet, source field, and target field, then click Save. The filter is now active. Click a node to apply the filter to the target sheet. Hold Ctrl and click to select multiple elements.

<video src="./Media/sankey-filter.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

---