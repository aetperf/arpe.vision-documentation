import useBaseUrl from '@docusaurus/useBaseUrl';

# Viz - Radar

### First Steps

Add a dimension to the Axis mark card, add a dimension to the Dimension mark card, and a measure to the Measure mark card.

![Marks card](/media/radar_mark_card.png)



### Data Format

The field in column will be used as the dimensions. The row will be the axis. The dataset must be complete (no null values).

### Customization


Click the format extension button in the mark card to customize the Radar. Three methods are available:

- **Direct**: Enter a value directly in the window.
- **Parameter**: Select a parameter; its value defines the characteristic.
- **Field**: Select a field in the sheet; its values define the element aspects.


You can change the following elements for the Radar:

| Name            | Default | Accepted Values | Additional Information |
|-----------------|---------|----------------|--------------------------|
| background color| white   | HTML names, hexadecimal, rgb. [See color names and codes](https://htmlcolorcodes.com/color-names/) | Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |
| data color      | none    | HTML names, hexadecimal, rgb | Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |
| scale min       | auto    | Minimum value of the scale | The minimum value of the scale. |
| scale max       | auto    | Maximum value of the scale | The maximum value of the scale. |
| font size       | auto    | Numbers | The font size of the Radar chart is automatically adjusted by default. |
| highlight color | red     | HTML names, hexadecimal, rgb | Ex: LightBlue, #ADD8E6, rgb(173, 216, 230). |


### Example


Watch this tutorial video to learn how to create a Radar chart with the Sample - Superstore datasource:

<video src={useBaseUrl('/media/radar-viz-add-extension.mp4')} controls width="600">
  Your browser does not support the video tag. 
</video>


After adding the extension, add data to the Axis, Dimension and Measure mark cards.

<video src={useBaseUrl('/media/radar-viz-display-graph.mp4')} controls width="600">
  Your browser does not support the video tag. 
</video>


You can further customize the Radar. In this example, a calculated field changes the minimum axis value. The background is set using the direct method, and the color is chosen from the Tableau palette.

<video src={useBaseUrl('/media/radar-viz-custom.mp4')} controls width="600">
  Your browser does not support the video tag. 
</video>


Highlight part of the Radar by clicking a point. Click outside the Radar or on the highlighted point to remove the highlight.
<video src={useBaseUrl('/media/radar-viz-actions.mp4')} controls width="600">
  Your browser does not support the video tag.
</video>

---