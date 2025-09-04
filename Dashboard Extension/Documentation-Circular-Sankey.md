

# Dashboard Extension Documentation - Circular Sankey

> **Last updated:** July, 2025

### Quick Links

- [Dashboard Extension Documentation - Home](Documentation.md)

### First Steps

Select the sheet or parameter you want to use for the Sankey diagram. The list shows all sheets added to the dashboard. Click the desired sheet name. Optionally, select a second sheet for node customizations from the dropdown. Click Save to confirm your selection.

### Data Format

Data must include three columns: source, target, and value for each link. You can add extra fields to further customize the Sankey.
A second sheet can be used for node customizations, which should have a column with node names and other columns for customizations. Node names must match those in the first sheet.

### Customization

Sankey customization is performed via the settings button. Three customization methods are available:

- **Direct**: Enter a value directly in the window.
- **Parameter**: Select a parameter; its value defines the characteristic.
- **Field**: Select a field in the sheet; its values define the element aspects.

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

| Name                  | Default   | Accepted Values |
|-----------------------|-----------|----------------|
| node positioning      | automatic | automatic, manual | If manual, node positions must be defined. |
| node color propagation| none      | source, target, none | Defines how node colors are propagated from link's colors. |
| node shape            | rectangle | rectangle, arrow | 
| add images            | none      | none, from file explorer, from file catalog, from field values | See [Image Catalog](./Image-Catalog.md) for available images. |
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

If you set the add images field to anything other than "none," a new button appears in the extension. Click it to open a window where you can map images to a field. Choose images from the file explorer, the file catalog, or field values. For field value mode, field values must match image names. Images must be under 20KB. Enable Dark mode to switch image color from black to white. You can set a default image in the first row; any undefined value uses the default. See the [Image Catalog](./Image-Catalog.md) for available images.

### Node Sizing

Adjust node width with the horizontal + and - buttons. Change node height with the vertical + and - buttons.

### Step by step tutorial

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

