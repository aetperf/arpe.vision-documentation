---
sidebar_label: 'FAQ'
sidebar_position: 10
---

# Frequently Asked Questions

## General Questions

<details open>
<summary><strong>What are Arpe.Vision extensions?</strong></summary>

Arpe.Vision extensions are custom visualizations for Tableau that provide advanced chart types including Sankey diagrams, Radar charts, Sunburst charts, Tree diagrams, and Circular Sankey diagrams.

</details>

<details open>
<summary><strong>What's the difference between Dashboard Extensions and Viz Extensions?</strong></summary>

- **Dashboard Extensions**: Added as objects to Tableau dashboards. They allow you to select data from sheets or parameters and provide more interactivity options.
- **Viz Extensions**: Added directly to worksheets through the Marks card. They integrate more closely with Tableau's native features.

</details>

<details open>
<summary><strong>Do I need a license?</strong></summary>

Extensions are **free to use on Tableau Desktop**. A license is required for:
- Tableau Server
- Tableau Online

Visit our website for pricing and licensing information.

</details>

## Installation & Setup

<details>
<summary><strong>Where do I download the extension files?</strong></summary>

Extension files (.trex) are available from our website. Visit [Arpe.Vision](https://aetperf.github.io/arpe.vision-documentation/) for downloads. Or test the extension on Tableau Marketplace.

</details>

<details>
<summary><strong>What does "Sheet" vs "Parameter" version mean for dashboard extension?</strong></summary>

- **Sheet version**: Select data directly from dashboard sheets using a dropdown menu
- **Parameter version**: Use Tableau parameters to control which sheet is displayed, allowing dynamic switching between data sources

</details>

<details>
<summary><strong>How do I choose between Sheet and Parameter versions?</strong></summary>

- Use **Sheet version** for simple, static visualizations
- Use **Parameter version** when you need to:
  - Switch between multiple data sources dynamically
  - Give users control over what data to display
  - Create more interactive dashboards

</details>

<details>
<summary><strong>Can I use multiple extensions on the same dashboard?</strong></summary>

Yes! You can add multiple extensions to a single dashboard, each with different data sources and configurations.

</details>

## Data & Configuration

<details>
<summary><strong>What data format is required?</strong></summary>

Each extension has specific data requirements:
- **Circular Sankey**: Source, Target, Value columns
- **Sankey**: Hierarchical data or Source, Target, Value columns
- **Tree/Sunburst**: Hierarchical data with parent-child relationships
- **Radar**: Multiple dimensions with numeric measures without null values

See individual extension documentation for detailed requirements.

</details>

<details>
<summary><strong>How do I customize the appearance?</strong></summary>

Click the **settings icon** (gear) in the extension to access customization options. You can configure:
- Colors (background, highlights, palettes)
- Font sizes
- Layout options
- Display preferences

Customization can be done via:
- **Direct input**: Enter values directly
- **Parameters**: Link to Tableau parameters for dynamic control
- **Fields**: Use data fields to drive visual properties. To make a field available in the list, add it to the worksheet's Marks card:
  - **Dashboard Extensions**: Add the field to the **Rows**, **Columns**, or **Detail** shelf.
  - **Viz Extensions**: Add the field to the **Detail** shelf.

</details>

<details>
<summary><strong>Can I filter other sheets from the extension?</strong></summary>

Yes! 
For Dashboard Extensions, Click the **filter icon** in Dashboard Extensions to configure filtering:
1. Select the target sheet to filter
2. Choose source and target fields
3. Click elements in the extension to apply filters

For viz extensions, use Tableau's native filter actions to link the extension to other sheets.

</details>

## Compatibility

<details>
<summary><strong>Which Tableau versions are supported?</strong></summary>

Extensions are compatible with:
- Tableau Desktop 2018.2 and later
- Tableau Server 2018.2 and later
- Tableau Online

</details>

<details>
<summary><strong>Do extensions work on mobile?</strong></summary>

Dashboard Extensions have limited mobile support. For best experience, use on desktop browsers. Viz Extensions follow Tableau's native mobile compatibility.

</details>

<details>
<summary><strong>Which browsers are supported?</strong></summary>

Extensions work in all modern browsers supported by Tableau:
- Chrome (recommended)
- Firefox
- Safari
- Edge

</details>

## Features

<details>
<summary><strong>Can I use extension data in Tableau actions?</strong></summary>

Yes! Dashboard Extensions support Tableau's filter actions. Configure them through the filter icon in each extension.

</details>




---

Still have questions? Visit our website or check the detailed documentation for each extension type.
