

# Radar

> **Last updated:** July, 2025


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

| Name            | Default | Accepted Values | Additional Information |
|-----------------|---------|----------------|-------------------------|
| background color| white   | HTML names, hexadecimal, rgb. [See color names and codes](https://htmlcolorcodes.com/color-names/) |  Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |
| data color      | none    | palette names : tableau 10, tableau 20, colorblind, seattle grays, traffic light, miller stone, superfishel stone, nuriel stone, jewel bright, summer, winter, green-orange-teal, red-blue-brown, purple-pink-gray, hue circle |
| scale min       | auto    | Numbers | Minimum value of the scale |
| scale max       | auto    | Numbers | Maximum value of the scale |
| font size       | auto      | Numbers | The font size of the labels automatically adjusts by default. |
| highlight color | red     | HTML names, hexadecimal, rgb. | Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |

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

Create a sheet with your data and add it to the dashboard. The sheet must have a column for dimensions and a row for the axis. Make sure the dataset is complete (no null values).

<video src="/media/radar-display.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

You can further customize the Radar. In this example, the background color and the minimum of the scale are set directly by typing a value in the window. The data color is taken in the sheet.


<video src="/media/radar-custom.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

To create a filter, click the filter icon. Select the target sheet, source field, and target field, then click Save. The filter is now active. Click a dot to apply the filter. Hold Ctrl and click to select multiple elements.

<video src="/media/radar-filter.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

---


