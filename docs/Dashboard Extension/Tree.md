

# Tree

> **Last updated:** July, 2025

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

| Name                  | Default   | Accepted Values | Additional Information |
|-----------------------|-----------|----------------|-------------------------|
| background color      | white     | HTML names, hexadecimal, rgb. [See color names and codes](https://htmlcolorcodes.com/color-names/)  | Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |
| highlight color       | red       | HTML names, hexadecimal, rgb.  [See color names and codes](https://htmlcolorcodes.com/color-names/) | Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |
| width                 | none      | Field value | The width of the tree diagram. |
| data color            | none      | HTML names, hexadecimal, rgb.  [See color names and codes](https://htmlcolorcodes.com/color-names/) | Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |
| palette               | none      | Palette names: tableau 10, tableau 20, colorblind, seattle grays, traffic light, miller stone, superfishel stone, nuriel stone, jewel bright, summer, winter, green-orange-teal, red-blue-brown, purple-pink-gray, hue circle  |
| depth                 | 3         | Number | The number of layers displayed in the tree diagram. |
| save state            | false     | true, false | If true, the tree state (if the nodes are open or closed) is saved when the dashboard is closed and restored when reopened. 
| radial                | 0         | 0, 180, 360 |
| orientation           | east      | east, north, south, west |
| font size             | 14        | Number | The font size of the value are always 2px thinner than the selected font size. |
| node padding          | 30/70     | Number | If the orientation is south or north, the pading is set to 70 by default.|
| node size             | 3         | Number |
| node stroke width     | 1.5       | Number | Width of the circle if no field is selected for Width customization. |
| link color            | parent    | parent, child, none |
| link width            | 1.5       | Number | | Width of the link if no field is selected for Width customization. |
| proportional labels   | false     | true, false |
| hide inter/Mediate labels | false  | true, false |
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

### Step by step tutorial

Create a sheet with your data and add it to the dashboard.

<video src="/media/tree-display.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

You can further customize the Tree by clicking on the customisation button. In this example, the background color is controlled with a parameter. The width and data color are taken from the sheet. The link color and proportional labels are set directly in the window.

<video src="/media/tree-custom.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

Double-click a node to open or close it. Single-click highlights the node's path.

<video src="/media/tree-action.mp4" controls width="800">
  Your browser does not support the video tag.
</video>


To create a filter, click the filter icon. Select the target sheet, source field, and target field, then click Save. The filter is now active. Click a node to apply the filter. Hold Ctrl and click to select multiple elements.

<video src="/media/tree-filter.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

---

