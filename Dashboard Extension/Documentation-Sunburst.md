
# Dashboard Extension Documentation - Sunburst

> **Last updated:** July, 2025

## Quick Links

- [Dashboard Extension Documentation - Home](Documentation.md)

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

| Name            | Default | Accepted Values | Additional Information |
|-----------------|---------|----------------| -------------------------|
| background color| white   | HTML names, hexadecimal, rgb. [See color names and codes](https://htmlcolorcodes.com/color-names/)  |  Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |
| data color      | none    | HTML names, hexadecimal, rgb.  [See color names and codes](https://htmlcolorcodes.com/color-names/) | Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |
| palette         | none    | palette names: tableau 10, tableau 20, colorblind, seattle grays, traffic light, miller stone, superfishel stone, nuriel stone, jewel bright, summer, winter, green-orange-teal, red-blue-brown, purple-pink-gray, hue circle  |
| number layers   | 2       | Number |
| layers padding  | 1       | Number | Padding between layers |
| layers size     | none    | none, asc, desc | If "none" is selected, the layer size will not change. If "asc" is selected, the layer size will increase with each layer. If "desc" is selected, the layer size will decrease with each layer. |
| percentage      | false   | true, false | Display percentages below the labels |
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

### Step by step tutorial

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
