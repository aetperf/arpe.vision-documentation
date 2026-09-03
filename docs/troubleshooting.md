---
sidebar_label: 'Troubleshooting'
sidebar_position: 11
---

# Troubleshooting Guide

Common issues and solutions for Arpe.Vision extensions.

## Installation Issues

<details>
<summary><strong>Extension not appearing in the list</strong></summary>


1. Ensure you selected "Access Local Extensions" (not Tableau Extensions Gallery)
2. Check you're looking in the correct directory 
3. Verify the file has a .trex extension

</details>

## Data Display Issues

<details>
<summary><strong>No data showing or "No data available" message</strong></summary>


1. **Verify sheet selection**: Ensure a sheet with data is selected in the extension configuration
2. **Check data structure**: Verify your data matches the required format for the extension type
3. **Review filters**: Check if filters are hiding all data

**For Sankey/Circular Sankey**:
- Ensure you have exactly 3 required columns: Source (dimension), Target (dimension), Value (measure)
- Values must be numeric and positive
- Check for circular references in your data

**For Tree/Sunburst**:
- Verify hierarchical structure is correct (parent-child relationships)
- Ensure no orphaned nodes (children without parents)
- Check that the hierarchy is properly ordered

**For Radar**:
- Confirm you have multiple dimensions
- Verify measures are numeric
- Ensure you have at least 3 data points for a meaningful visualization

</details>

<details>
<summary><strong>Colors not displaying correctly</strong></summary>


1. Verify color values are in valid format (HTML names, hex, or rgb)
2. Ensure palette names are spelled correctly (case-sensitive)
3. Review field-based coloring to ensure field names match exactly

</details>

## Performance Issues

<details>
<summary><strong>Extension is slow or unresponsive</strong></summary>


1. **Reduce data volume**: Use filters to limit rows (aim for under 10,000 rows)
2. **Optimize hierarchies**: Simplify deep hierarchies in Tree/Sunburst (max 5-6 levels)
3. **Use extracts**: Convert live connections to extracts for better performance

</details>

## Configuration Issues

<details>
<summary><strong>Field not appearing in a configuration list</strong></summary>

Add the field to the worksheet's Marks card, then refresh the extension window. Only fields included in the worksheet data are available when you select the **Field** option.

- **Dashboard Extensions**: Add the field to the **Rows**, **Columns**, or **Detail** shelf.
- **Viz Extensions**: Add the field to the **Detail** shelf.

</details>

<details>
<summary><strong>Parameters not appearing in dropdown</strong></summary>


1. Verify parameter names follow the correct format: `ext_viz_*extension_type*_sheetname`
2. Ensure parameters are added to the dashboard
3. Check parameter spelling and case sensitivity
4. Refresh the extension window

</details>

## Tableau Server/Online Specific

<details>
<summary><strong>Extension works on Desktop but not Server/Online</strong></summary>


1. **Check license**: Verify you have a valid license for Server/Online
2. **Server settings**: Contact your Tableau Server administrator to add the extension to the safe list on the server
3. **Permissions**: Verify you have appropriate permissions

</details>

## Still Having Issues?

If you continue to experience problems after trying the solutions above, please contact support via our website with the following information:

**Required Information:**
- Tableau version and edition (Desktop/Server/Online)
- Operating system and browser version
- Extension type and version
- Description of the issue
- Steps to reproduce the problem

**Diagnostic Information:**
- **Browser console errors**: Press F12, go to Console tab, copy any error messages
- **Tableau logs**: Check Tableau Desktop logs for additional error information
- Screenshots showing the issue
- Sample data structure (if applicable)

This information will help us diagnose and resolve your issue quickly.
