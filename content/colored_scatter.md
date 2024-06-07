---
title: Scatter plot colored by density
date: 2024-02-08
tags:
  - seedling
  - visualization
  - matplotlib
  - snippets
---
Useful, if you want to show all data points, but in some regions they are too dense to see any density differences.

![[colored_scatter.webp]]
```python
from scipy.stats import gaussian_kde
import matplotlib as mpl
from matplotlib import cm

def scatter_with_gaussian_kde(ax, x, y, cmap = cm.viridis, **kwargs):
    # https://stackoverflow.com/a/20107592/3015186
    from scipy.stats import gaussian_kde
    xy = np.vstack([x, y])
    z = gaussian_kde(xy)(xy)
    idx = z.argsort()
    x, y, z = x[idx], y[idx], z[idx]
    norm = mpl.colors.Normalize(vmin=z.min(), vmax=z.max())
    sm = cm.ScalarMappable(cmap=cmap)
    ax.scatter(x, y, c=cmap(norm(z)), **kwargs)
    return sm
```