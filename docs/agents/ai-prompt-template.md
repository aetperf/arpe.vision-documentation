---
sidebar_position: 3
sidebar_label: 'AI Prompt Template'
title: 'AI Prompt Template for Extension Analysis'
---

# AI Prompt Template for Extension Analysis

Use this template when prompting AI systems to analyze or work with Arpe Vision extensions.

## Template: Extension Capability Analysis

```
Analyze the [EXTENSION_NAME] extension with the following constraints:

DATA FORMAT:
- Accepted input: [FORMAT_TYPE]
- Example structure: [STRUCTURE]
- Required fields: [FIELDS]

CONFIGURATION METHODS:
- Direct input: [DIRECT_OPTIONS]
- Parameter-based: [PARAMETER_OPTIONS]
- Field-based: [FIELD_OPTIONS]

CUSTOMIZATION PARAMETERS:
[INCLUDE TABLE WITH: Name | Default | Accepted Values]

INTERACTION PATTERNS:
- Single-click behavior: [BEHAVIOR]
- Double-click behavior: [BEHAVIOR]
- Filtering capability: [YES/NO]

CONSTRAINTS AND LIMITATIONS:
- Maximum depth: [VALUE]
- Performance impact: [DESCRIPTION]
- Data size limits: [LIMITS]

TASK:
[SPECIFIC REQUEST]

EXPECTED OUTPUT FORMAT:
[FORMAT_SPECIFICATION]
```

## Template: Data Processing Request

```
Process data for [EXTENSION_NAME] with specifications:

INPUT DATA:
- Format: [HIERARCHICAL/SOURCE-TARGET]
- Fields: [FIELD_LIST]
- Data sample: [SAMPLE_ROWS]

TRANSFORMATION REQUIREMENTS:
- Required: [REQUIREMENTS]
- Optional: [OPTIONAL_TRANSFORMATIONS]
- Validation rules: [RULES]

OUTPUT SPECIFICATION:
- Format: [OUTPUT_FORMAT]
- Fields needed: [FIELDS]
- Validation: [VALIDATION_CRITERIA]

DELIVER:
- Transformed data
- Validation report
- Error handling strategy
```

## Template: Configuration Generation

```
Generate configuration for [EXTENSION_NAME]:

REQUIREMENTS:
- Visualization goal: [GOAL]
- Available data: [DATA_DESCRIPTION]
- Constraints: [CONSTRAINTS]

CONFIGURATION PARAMETERS TO SET:
- [PARAMETER]: [DESIRED_VALUE]
- [PARAMETER]: [DESIRED_VALUE]

COLOR SCHEME:
- Background: [REQUIREMENT]
- Highlight: [REQUIREMENT]
- Data: [REQUIREMENT]
- Link: [REQUIREMENT]

LAYOUT PREFERENCES:
- Orientation: [PREFERENCE]
- Depth: [PREFERENCE]
- Label display: [PREFERENCE]

INTERACTION SETUP:
- Filtering: [REQUIRED/NOT_REQUIRED]
- State persistence: [REQUIRED/NOT_REQUIRED]
- Multi-select: [REQUIRED/NOT_REQUIRED]

DELIVERABLE:
- Complete configuration object
- Rationale for each setting
- Implementation steps
```

## Template: Filtering Logic

```
Design filtering logic for [EXTENSION_NAME]:

SOURCE CONFIGURATION:
- Source sheet: [SHEET_NAME]
- Source field: [FIELD_NAME]
- Data type: [TYPE]
- Sample values: [EXAMPLES]

TARGET CONFIGURATION:
- Target sheet: [SHEET_NAME]
- Target field: [FIELD_NAME]
- Data type: [TYPE]

FILTER BEHAVIORS:
- Single select: [BEHAVIOR]
- Multi-select (Ctrl+Click): [BEHAVIOR]
- Clear filters: [METHOD]
- Error handling: [STRATEGY]

EDGE CASES:
- Null/empty values: [HANDLING]
- Type mismatch: [HANDLING]
- No matching values: [HANDLING]
- Concurrent filters: [HANDLING]

IMPLEMENTATION:
- Filtering algorithm
- State management
- Validation logic
- User feedback mechanism
```

## Template: Documentation Extraction

```
Extract machine-readable documentation from [EXTENSION_NAME]:

SECTIONS TO EXTRACT:
- All configuration parameters
- All accepted values (enumerations)
- All default values
- All constraints and limitations
- All interaction patterns
- All data format specifications

OUTPUT FORMAT:
- JSON schema (for structured data)
- CSV table (for parameters)
- YAML (for configuration examples)
- Markdown (for narrative documentation)

COMPLETENESS CHECK:
- Verify all parameters documented
- Verify all options enumerated
- Verify all defaults specified
- Verify all constraints listed
```

## Template: Troubleshooting Analysis

```
Analyze troubleshooting for [EXTENSION_NAME]:

PROBLEM STATEMENT:
- User observation: [OBSERVATION]
- Expected behavior: [EXPECTATION]
- Actual behavior: [ACTUALITY]
- Conditions: [CONDITIONS]

DIAGNOSTIC INFORMATION:
- Extension version: [VERSION]
- Tableau version: [VERSION]
- Data format: [FORMAT]
- Configuration: [CONFIG]

ROOT CAUSE ANALYSIS:
- Possible causes (ranked by probability)
- Supporting evidence for each
- Verification steps

RESOLUTION OPTIONS:
- Configuration adjustment
- Data format change
- Parameter modification
- Workaround suggestion
- Escalation path

DELIVERABLE:
- Root cause identification
- Recommended fix
- Preventive measures
- Documentation of resolution
```

## Key Concepts for AI Prompts

### Extension State
- **Transient**: Lost on dashboard close
- **Persistent**: Saved and restored
- **Togglable**: User can enable/disable per visualization

### Configuration Scope
- **Global**: Applied to all instances
- **Per-visualization**: Applied to single element
- **Per-sheet**: Applied to sheet level
- **Per-dashboard**: Applied to dashboard scope

### Data Relationships
- **Hierarchical**: One-to-many, tree structure
- **Network**: Many-to-many, graph structure
- **Tabular**: Flat, non-hierarchical

### Value Precedence
When configuration methods available, precedence:
1. Field-based (dynamic, per-row)
2. Parameter-based (dashboard-level dynamic)
3. Direct (static, fixed)

### Performance Tiers
- **Tier 1** (Fast): Small data, shallow depth (< 3 levels)
- **Tier 2** (Normal): Medium data, medium depth (3-5 levels)
- **Tier 3** (Slow): Large data, deep hierarchies (> 5 levels)

---

**Usage Note:** Customize these templates with specific extension data before prompting AI systems. Include relevant parameter tables, data samples, and configuration examples from the extension documentation.
