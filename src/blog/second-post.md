---
title: 'test post'
tags:
  - 'typescript'
  - 'python'
  - 'autoencoder'
description: 'just for testing'
picture: '/quantum-autoencoder/reconstructed-images.png'
slug: 'test-post'
---

<script context="module">
    import {dev} from '$app/environment';
    
    metadata.published = dev;
    metadata.date = new Date();
</script>

## Table of Contents

## Test Heading 2

This is a test post.

```python
print('Hello World')
```

```typescript
console.log('Hello World')
```

Testing inline code `console.log('Hello World')`

### Test Heading 3

Testing image

![reconstructed-images](/quantum-autoencoder/reconstructed-images.png)

Testing long code block

```python
import numpy as np
import matplotlib.pyplot as plt

# Create a list of evenly-spaced numbers over the range
x = np.linspace(0, 20, 100)

# Testing a long line of code
plt.figure(figsize=(10, 5), dpi=100, facecolor='w', edgecolor='k', linewidth=2, frameon=True, tight_layout=True, constrained_layout=False, subplotpars=None, gridspec=None, figsize_inches=None, dpi_scale=None, clear=True, num=None)

# Plot the sine of each x point
plt.plot(x, np.sin(x))

# Add a title and a label to the x-axis and y-axis
plt.title("Sine Curve")

# Display the plot
plt.show()
```

#### Test Heading 4

Testing blockquote

> This is a blockquote
> Some inspirational quote

Testing list

- Item 1
- Item 2
- Item 3
- Item 4

Testing table

| Name    | Age | 
|---------|-----|
| Alice   | 20  |
| Bob     | 21  |
| Charlie | 22  |

Testing link [Google](https://www.google.com)

Testing **bold text** and *italic text*.

