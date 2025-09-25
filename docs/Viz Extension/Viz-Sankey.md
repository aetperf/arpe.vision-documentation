
# Viz - Sankey

> **Last updated:** July, 2025

### First Steps


Add dimensions to the Nodes mark card and a measure to the Value mark card to display a Sankey.

![Marks card](/media/sankey_mark_card.png)

### Data Format

Data is expected to have three columns: source, target, and values for each link. Additional fields in the sheet can be used to further customize the Sankey.

### Customization


Click the format extension button to customize the Sankey. Three methods are available:

- **Direct**: Enter a value directly in the window.
- **Parameter**: Select a parameter; its value defines the characteristic.
- **Field**: Select a field in the sheet; its values define the element aspects.

| Name            | Default | Accepted Values | Additional Information |
|-----------------|---------|----------------|-------------------------|
| background color| white   | HTML names, hexadecimal, rgb. [See color names and codes](https://htmlcolorcodes.com/color-names/) | Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |
| highlight color | red     | HTML names, hexadecimal, rgb | Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |
| link color      | none    | source, target, source-target, HTML names, hexadecimal, rgb| Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |
| palette         | none    | tableau 10, tableau 20, colorblind, seattle grays, traffic light, miller stone, superfishel stone, nuriel stone, jewel bright, summer, winter, green-orange-teal, red-blue-brown, purple-pink-gray, hue circle |
| link percentage | none    | none, source, target, both |
| column palette  | none    | tableau 10, tableau 20, colorblind, seattle grays, traffic light, miller stone, superfishel stone, nuriel stone, jewel bright, summer, winter, green-orange-teal, red-blue-brown, purple-pink-gray, hue circle |
| column percentage | false | true, false |
| column titles   | top     | none, top, bottom |
| alignment       | justify | justify, left, right, center |
| font size       | 10      | Numbers | The font size of column titles are always 4px larger than the selected font size. |

#### Example


Watch this tutorial video to learn how to create a Sankey chart with the Sample - Superstore datasource:

<video src="/media/sankey-viz-add-extension.mp4" controls width="800">
  Your browser does not support the video tag.
</video>


After adding the extension, add data to the Nodes and Value mark cards.
<video src="/media/sankey-viz-display-graph.mp4" controls width="800">
  Your browser does not support the video tag.
</video>


You can further customize the Sankey. In this example, the background color is set by entering a value directly. The link color is set to source-target. The column palette is set to the Tableau palette Miller Stone. The link percentage is set to both, and the column percentage is set to true, by selecting values in the dropdown menu.

<video src="/media/sankey-viz-custom.mp4" controls width="800">
  Your browser does not support the video tag.
</video>


Highlight part of the Sankey by clicking a node. Double-click a node to filter the Sankey and display only its links. Double-click the same node again to remove the filter.

<video src="/media/sankey-viz-actions.mp4" controls width="800">
  Your browser does not support the video tag.
</video>
