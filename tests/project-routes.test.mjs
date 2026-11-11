import { test } from 'node:test'
import assert from 'node:assert/strict'
import { getProjectPaths } from '../app/data/project-routes.js'

test('lists only projects with detail pages', () => {
  assert.deepEqual(getProjectPaths([
    { slug: 'jeg-kit', overview: 'Details' },
    { title: 'No page' },
    { slug: 'draft', overview: '' },
  ]), ['/projects/jeg-kit/'])
})

test('rejects duplicate and unsafe slugs', () => {
  assert.throws(() => getProjectPaths([{ slug: 'jnews', overview: 'a' }, { slug: 'jnews', overview: 'b' }]))
  assert.throws(() => getProjectPaths([{ slug: '../private', overview: 'a' }]))
})
