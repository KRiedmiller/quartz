---
title: Suppress stdout in Python
tags:
  - seedling
  - snippets
  - python
date: 2024-02-06
---
```python
import contextlib
import os

def suppress_stdout(func):
    """Mutes functions by redirecting stdout to /dev/null.
    Can be used as a decorator.

    Parameters
    ----------
    func : callable
        To be muted
    """

    def wrapper(*a, **ka):
        with open(os.devnull, "w") as devnull:
            with contextlib.redirect_stdout(devnull):
                func(*a, **ka)

    return wrapper
```