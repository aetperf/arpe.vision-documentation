

# Dashboard Extension Documentation - Sankey

> **Last updated:** July, 2025

## Quick Links

- [Dashboard Extension Documentation - Home](Documentation.md)


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

| Name            | Default | Accepted Values | Additional Information |
|-----------------|---------|----------------| -------------------------|
| background color| white   | HTML names, hexadecimal, rgb. [See color names and codes](https://htmlcolorcodes.com/color-names/) |  Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |
| highlight color | red     | HTML names, hexadecimal, rgb. [See color names and codes](https://htmlcolorcodes.com/color-names/) |  Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |
| link color      | none    | source, target, source-target, HTML names, hexadecimal, rgb |
| palette         | none    | Palette names : tableau 10, tableau 20, colorblind, seattle grays, traffic light, miller stone, superfishel stone, nuriel stone, jewel bright, summer, winter, green-orange-teal, red-blue-brown, purple-pink-gray, hue circle  |
| link percentage | none    | none, source, target, both |
| column palette  | none    | palette names : tableau 10, tableau 20, colorblind, seattle grays, traffic light, miller stone, superfishel stone, nuriel stone, jewel bright, summer, winter, green-orange-teal, red-blue-brown, purple-pink-gray, hue circle  |
| column percentage | false | true, false |
| column titles   | top     | none, top, bottom |
| alignment       | justify | justify, left, right, center |
| font size       | 10      | Numbers | The font size of column titles are always 4px larger than the selected font size. |

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

### Step by step tutorial

A sheet containing the required data must be created and added to the dashboard.

<video src="./Media/sankey-display.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

You can further customize the Sankey. In this example, the link color is controlled with a parameter. The background color, column palette and column percentage are set directly in the configuration window.

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