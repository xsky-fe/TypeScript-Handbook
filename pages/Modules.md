> **A note about terminology:**
# Introduction
# Export
## Exporting a declaration
## Export statements
## Re-exports
# Import
## Import a single export from a module
## Import the entire module into a single variable, and use it to access the module exports
## Import a module for side-effects only
# Default exports
# `export =` and `import = require()`
# Code Generation for Modules
# Simple Example
# Optional Module Loading and Other Advanced Loading Scenarios
# Working with Other JavaScript Libraries
## Ambient Modules
### Shorthand ambient modules
### Wildcard module declarations
### UMD modules
# Guidance for structuring modules
## Export as close to top-level as possible
### If you're only exporting a single `class` or `function`, use `export default`
#### MyClass.ts
#### MyFunc.ts
#### Consumer.ts
### If you're exporting multiple objects, put them all at top-level
#### MyThings.ts
### Explicitly list imported names
#### Consumer.ts
### Use the namespace import pattern if you're importing a large number of things
#### MyLargeModule.ts
#### Consumer.ts
## Re-export to extend
#### Calculator.ts
#### TestCalculator.ts
#### ProgrammerCalculator.ts
#### TestProgrammerCalculator.ts
## Do not use namespaces in modules
## Red Flags