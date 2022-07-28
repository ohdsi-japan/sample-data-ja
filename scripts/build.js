const fs = require('fs')
const path = require('path')

const DATA_DIR = path.join(__dirname, '..', 'data')
const OUT_DIR = path.join(__dirname, '..', 'out')

const dirs = fs.readdirSync(DATA_DIR)

dirs.forEach((item) => {
  const target = path.join(DATA_DIR, item)
  const data = fs.readFileSync(target, 'utf8').replace(/	/g, ',')
  fs.writeFileSync(path.join(OUT_DIR, item.replace('txt', 'csv')), data)
})