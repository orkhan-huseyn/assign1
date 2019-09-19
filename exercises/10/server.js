const { createServer } = require('../common/server')
const { getResults, htmlElementEscape } = require('../common/hackoogle')

const { router } = createServer(4100, __dirname)

router.get('/', async (req, res) => {
  res.render('hackoogle-home-page')
})

router.get('/search', async (req, res) => {
  let q = req.query.q
  if (q == null) q = ''

  const rawQ = q
  q = htmlElementEscape(q)

  const results = await getResults(q)
  res.render('hackoogle-search-page2', { q, rawQ, results })
})
