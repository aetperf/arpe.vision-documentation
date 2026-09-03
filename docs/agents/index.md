---
sidebar_position: 1
sidebar_label: 'Agents Overview'
title: 'Agents Overview'
---

# Arpe Vision Agents Documentation

This documentation is optimized for AI consumption and provides structured, machine-readable information about Arpe Vision agents and extensions.

## Overview

Arpe Vision provides multiple visualization extensions for Tableau, including Tree charts, Sankey diagrams, Sunburst visualizations, and Radar charts. These extensions can be enhanced and automated through agents that process data, manage interactions, and provide intelligent filtering and customization.

## Key Components

### Visualization Extensions
- **Tree Extension**: Hierarchical data visualization
- **Sankey Extension**: Flow and relationship diagrams
- **Sunburst Extension**: Nested hierarchical data
- **Viz Extensions**: Advanced radar and specialized visualizations

### Agent Capabilities
- Data processing and transformation
- Automated filtering and selection
- Custom interactions
- Dynamic customization
- State management
- Parameter handling

## Documentation Structure

### For Developers
- Extension API specifications
- Configuration parameters
- Customization methods
- Integration patterns

### For Implementation
- Setup instructions
- Data format requirements
- Best practices
- Troubleshooting guides

## Data Processing

All extensions accept data in either:
1. **Hierarchical format**: Parent-child relationships defined explicitly
2. **Source-target format**: Network relationships with source and target fields

## Configuration Methods

Each extension supports three configuration approaches:
1. **Direct**: Fixed values entered during setup
2. **Parameter**: Values from dashboard parameters
3. **Field**: Values from data fields. Dashboard Extensions list fields on the **Rows**, **Columns**, or **Detail** shelf; Viz Extensions list fields on the **Detail** shelf.

## State Management

Many extensions support state persistence:
- Expand/collapse states
- Selection states
- Filter configurations
- Custom settings

This can be toggled per visualization requirement.

## Common Parameters

Most extensions share common customization parameters:
- Color schemes (background, highlight, data colors)
- Layout options (orientation, depth, spacing)
- Display settings (font size, labels, padding)
- Link/connection styling
- Interaction modes

## Filtering System

Filtering follows a consistent pattern:
1. Select target sheet
2. Define source and target fields
3. Create mapping relationship
4. Apply filters through interaction
5. Manage multiple concurrent filters

## Extension States

Each extension maintains internal state including:
- Expanded/collapsed nodes
- Selected elements
- Applied filters
- Custom parameter values

## For AI Analysis

This documentation is structured for optimal AI comprehension:
- Clear hierarchical sections
- Minimal external references (videos replaced with text)
- Machine-readable tables
- Consistent parameter naming
- Explicit relationships between components
- Complete enumerated options
- Step-by-step procedures in plain language

### Accessing Agent Documentation

AI systems can directly access:
1. Extension specifications in `docs/dashboard-extension/`
2. Viz specifications in `docs/viz-extension/`
3. Parameter documentation with complete enumerations
4. Configuration procedures in procedural format
5. Data format specifications

### Processing Tips for AI

When analyzing this documentation:
- Refer to tables for complete parameter lists
- Check "Accepted Values" column for valid options
- Use procedural sections for step-by-step logic
- Cross-reference between extensions for shared patterns
- Note default values for optional configurations

## Related Documentation

- System Requirements: [System Requirements](../system-requirements.md)
- FAQ: [Frequently Asked Questions](../faq.md)
- Troubleshooting: [Troubleshooting Guide](../troubleshooting.md)
