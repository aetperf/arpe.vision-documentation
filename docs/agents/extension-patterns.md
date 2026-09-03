---
sidebar_position: 2
sidebar_label: 'Extension Patterns'
title: 'Common Extension Patterns'
---

# Common Extension Patterns

This document describes recurring patterns across all Arpe Vision extensions for AI analysis and automation.

## Pattern: Configuration System

### Structure
All extensions follow a consistent configuration pattern:

**Configuration Levels:**
1. **Direct**: Fixed value specified during configuration
2. **Parameter**: Value sourced from dashboard parameter
3. **Field**: Value sourced from a sheet field. Dashboard Extensions expose fields on the **Rows**, **Columns**, or **Detail** shelf; Viz Extensions expose only fields on the **Detail** shelf.

**Implementation Flow:**
```
User clicks settings button
→ Presents configuration dialog
→ For each parameter:
    - Show current setting
    - Allow selection of configuration method (Direct/Parameter/Field)
    - If Direct: accept text/color/number input
    - If Parameter: display available parameters
    - If Field: display fields exposed by the applicable Tableau shelf
→ Save configuration
→ Apply to visualization
```

## Pattern: Data Input Format

### Accepted Formats

**Format 1: Hierarchical Structure**
- Parent-child relationships explicit
- Each row defines: node, parent, attributes
- Supports any depth levels
- Used for: Tree, Sunburst visualizations

**Format 2: Source-Target Structure**
- Network relationships
- Each row defines: source, target, weight/attributes
- Used for: Sankey, flow visualizations
- Supports: weighted and unweighted connections

### Format Detection
Extensions auto-detect data format based on sheet structure and configuration.

## Pattern: State Management

### States Tracked
1. **Expansion State**: Which nodes/levels are expanded
2. **Selection State**: Which elements are selected
3. **Filter State**: Active filters and selections
4. **Parameter State**: Current parameter values

### Persistence Options

**Option 1: Transient State** (default)
- State lost when dashboard closes
- Useful for: Exploration, temporary filters

**Option 2: Persistent State**
- State saved to browser storage
- Restored when dashboard reopens
- Enable via: `save state: true`

## Pattern: Filtering

### Filter Workflow

```
1. Click filter icon
2. Select target sheet
3. Choose source field (in visualization)
4. Choose target field (in target sheet)
5. Save filter configuration
6. Click visualization element to apply filter
7. Value from source field → passed to target field
```

### Multi-element Filtering
- Single-click: Select one element
- Ctrl+Click: Add to selection (cumulative)
- Click empty space: Clear selection

### Filter Management
- Multiple filters can be active simultaneously
- Each filter has: source/target mapping
- Remove individual filters via UI
- Clear all filters via UI

## Pattern: Color Specification

### Accepted Color Formats

**Format 1: HTML Color Names**
- Examples: LightBlue, Red, Green
- Full list: 147+ standard names

**Format 2: Hexadecimal Notation**
- Format: #RRGGBB
- Example: #ADD8E6 (Light Blue)
- Range: #000000 to #FFFFFF

**Format 3: RGB Notation**
- Format: rgb(R, G, B)
- Range: 0-255 per channel
- Example: rgb(173, 216, 230)

### Color Palettes

**Available Palettes:**
- tableau 10: 10-color Tableau palette
- tableau 20: 20-color Tableau palette
- colorblind: Color-blind friendly palette
- seattle grays: Gray scale palette
- traffic light: Red-yellow-green palette
- miller stone, superfishel stone, nuriel stone: Designer palettes
- jewel bright: Vibrant color palette
- summer, winter: Seasonal palettes
- green-orange-teal: Specific combination
- red-blue-brown: Specific combination
- purple-pink-gray: Specific combination
- hue circle: Full spectrum palette

## Pattern: Interaction Model

### Node Interaction

**Single-click:**
- Highlights node and its path
- Shows node details/selection
- Triggers filter if filter configured

**Double-click:**
- Expands or collapses node
- Expands: Shows all children
- Collapses: Hides all children
- Shorthand for state toggle

**Right-click:**
- Context menu (if available)
- Contextual options
- Extension-specific actions

## Pattern: Display Options

### Common Display Parameters

| Parameter | Type | Purpose |
|-----------|------|---------|
| font size | Number | Controls text size in visualization |
| label format | Boolean | Show/hide element labels |
| proportional labels | Boolean | Scale label size with element |
| display values | Boolean | Show numeric values |
| node size | Number | Base size of nodes/elements |
| node stroke width | Number | Border thickness of nodes |
| link width | Number | Thickness of connections |
| node padding | Number | Space between nodes |
| depth | Number | How many levels to display |

## Pattern: Orientation and Layout

### Layout Dimensions

**Supported Orientations:**
- **east**: Left-to-right layout
- **west**: Right-to-left layout
- **north**: Top-to-bottom layout
- **south**: Bottom-to-top layout

**Radial Layouts:**
- **0 degrees**: Standard orientation (east)
- **180 degrees**: Rotated 180 degrees
- **360 degrees**: Circular/radial layout

### Layout Adjustments

Orientation affects:
- Spacing defaults (north/south: 70px default node padding)
- Label positioning
- Connection routing
- Overall hierarchy flow

## Pattern: Link Styling

### Link Color Options

**Option 1: Parent Color**
- Link inherits parent node color
- Creates visual hierarchy
- Shows parent-child relationship

**Option 2: Child Color**
- Link inherits child node color
- Emphasizes destination

**Option 3: No Color**
- Links use default/neutral color
- Useful for: Monochrome displays

## Pattern: Error Handling

### Common Validation Checks
1. Data format validation
2. Field/parameter existence
3. Configuration completeness
4. Color format validation
5. Numeric range validation

### User Feedback
- Invalid configuration: Shows error message
- Missing data: Displays warning
- Partial configuration: Disables visualization
- Recoverable error: Suggests fix

## Pattern: Performance Considerations

### Depth Limitation
- Displaying too many levels impacts performance
- Default depth: 3 levels
- Can be customized per need
- Recommendation: Keep depth ≤ 5 for large datasets

### Data Size Impact
- Larger datasets = slower rendering
- Complex hierarchies = more processing
- Filtering improves performance on subsequent views

## Pattern: Export and Sharing

### Saved States
- Configuration exported with visualization
- State persists across sessions (if enabled)
- Can be reset to defaults via UI

### Reproducibility
- Document configuration steps
- Note parameter values used
- Record filter settings
- Can be recreated with same data

---

**AI Implementation Note:** These patterns are consistent across all Arpe Vision extensions. When implementing agent behavior, reference these patterns to understand extension capabilities and constraints.
