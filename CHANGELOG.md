# Changelog

All notable changes to Arpe.Vision extensions will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Enhanced mobile support
- Additional color palette options
- Performance improvements for large datasets

---

## [2.1.0] - 2024-09-15

### Added
- New Circular Sankey extension for Dashboard Extensions
- Parameter-based customization for all visualizations
- Field-based color mapping
- Video tutorials in documentation

### Improved
- Performance optimization for datasets >5,000 rows
- Better tooltip formatting
- Enhanced filter interaction responsiveness
- Updated documentation with more examples

### Fixed
- Color palette application in Sunburst charts
- Filter clearing in Tree visualizations
- Parameter selection refresh issues
- Mobile display issues on Safari

---

## [2.0.0] - 2024-03-20

### Added
- Viz Extension versions of all visualizations
- Support for Tableau 2023.x
- Advanced filtering capabilities
- Cross-sheet filtering with multi-select
- Customizable font sizes
- Column titles for Sankey diagrams

### Changed
- **BREAKING**: Renamed extension files for clarity (Sheet vs Parameter versions)
- Improved data validation and error messages
- Updated UI for settings panel
- Redesigned filter configuration interface

### Deprecated
- Support for Tableau versions older than 2018.2

### Fixed
- Memory leaks with large hierarchical data
- Interaction conflicts with native Tableau filters
- Color consistency across dashboard refreshes

---

## [1.5.2] - 2023-11-10

### Fixed
- Critical bug with Sunburst double-click navigation
- Parameter loading issues on Tableau Server
- License validation errors on Tableau Online

### Security
- Updated dependencies to address security vulnerabilities

---

## [1.5.0] - 2023-09-05

### Added
- Tree visualization extension
- Expand/collapse functionality for hierarchical data
- Highlight path on selection
- New color palettes: jewel bright, summer, winter

### Improved
- Radar chart rendering performance
- Sankey node positioning algorithm
- Documentation with step-by-step tutorials

### Fixed
- Edge case with null values in hierarchies
- Tooltip positioning on small dashboards
- Parameter refresh on dashboard load

---

## [1.4.0] - 2023-05-15

### Added
- Sunburst visualization extension
- Drill-down/drill-up navigation
- Percentage display options
- Support for deep hierarchies (up to 6 levels)

### Improved
- Sankey link color options (source, target, source-target)
- Better handling of circular references in data
- Enhanced error messages for data format issues

### Fixed
- Color palette not applying correctly
- Filter button state persistence
- Dashboard refresh clearing customizations

---

## [1.3.0] - 2023-02-01

### Added
- Radar chart extension
- Multi-dimensional data visualization
- Dimension highlighting on click
- Customizable axis labels

### Improved
- Sankey performance with >1,000 nodes
- Settings panel UX
- Parameter version documentation

### Fixed
- Extension not loading on Tableau 2022.4
- Highlight color not resetting
- Filter configuration window scrolling

---

## [1.2.0] - 2022-11-10

### Added
- Parameter version of extensions
- Dynamic sheet switching
- Link percentage display options
- Column palette customization for Sankey

### Improved
- Loading speed by 40%
- Memory usage optimization
- Better responsive design for different screen sizes

### Fixed
- Extension icons not displaying on Tableau Server
- Background color not applying on first load
- Filter removal not clearing selections

---

## [1.1.0] - 2022-07-20

### Added
- Settings customization panel
- Background color configuration
- Highlight color configuration
- Link color options
- Font size adjustment
- Tableau Server support with licensing

### Improved
- Documentation website with better examples
- Error handling and user feedback
- Data validation messages

### Fixed
- Extension crashing with empty datasets
- Tooltip display issues on Firefox
- Reload button not working consistently

---

## [1.0.0] - 2022-04-15

### Added
- Initial release
- Sankey diagram extension (Dashboard version)
- Sheet selection functionality
- Basic interactivity (hover, click, double-click)
- Filter configuration
- Free for Tableau Desktop

### Known Limitations
- Limited customization options
- No parameter support
- Basic styling only
- Performance issues with >2,000 rows

---

## Version Support Matrix

| Extension Version | Tableau Desktop | Tableau Server | Tableau Online | Notes |
|-------------------|----------------|----------------|----------------|-------|
| 2.1.x | 2018.2+ | 2018.2+ | ✓ | Current version |
| 2.0.x | 2018.2+ | 2018.2+ | ✓ | Supported |
| 1.5.x | 2018.2+ | 2018.2+ | ✓ | Supported |
| 1.4.x | 2018.2 - 2022.x | 2018.2+ | ✓ | Limited support |
| 1.3.x and older | 2018.2 - 2021.x | 2018.2 - 2021.x | Limited | Not recommended |

---

## Upgrade Instructions

### From 1.x to 2.x

**Breaking Changes**:
- Extension file names have changed (Sheet vs Parameter suffix)
- Settings parameter format updated
- Some configuration options renamed

**Steps**:
1. Backup your workbooks
2. Download new .trex files
3. Remove old extensions from dashboards
4. Add new extensions
5. Reconfigure settings (most will transfer automatically)
6. Update any parameter names if using Parameter version

### From 2.0 to 2.1

No breaking changes. Simply:
1. Download new .trex files
2. Replace extensions in your dashboards
3. Existing configurations will be preserved

---

## Support Policy

- **Current version**: Full support with regular updates
- **Previous major version**: Bug fixes and security updates only
- **Older versions**: Community support only

## Reporting Issues

Found a bug? Have a feature request?

1. Check the [FAQ](faq.md) and [Troubleshooting](troubleshooting.md) guides
2. Search existing issues on our website
3. Contact support with detailed information:
   - Extension version
   - Tableau version
   - Steps to reproduce
   - Sample data (if possible)

---

Last updated: September 2024
